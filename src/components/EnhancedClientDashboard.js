import React, { useState } from 'react';
import { useClientData } from '../context/ClientDataContext';
import { getClientCoachingSessions, getLatestDiagnostic, getWeeklyTrends, getActionItems, getKeyInsights, getTranscriptThemes } from '../data/enhancedClientData';
import ClientChatbot from './ClientChatbot';

export default function EnhancedClientDashboard({ clientId, clientName }) {
  const [activeTab, setActiveTab] = useState('overview');
  const { allClientData } = useClientData();
  
  // Get enhanced data
  const coachingSessions = getClientCoachingSessions(clientId, 5);
  const latestDiagnostic = getLatestDiagnostic(clientId);
  const weeklyTrends = getWeeklyTrends(clientId, 8);
  const actionItems = getActionItems(clientId, 3);
  const keyInsights = getKeyInsights(clientId, 5);
  const transcriptThemes = getTranscriptThemes(clientId);

  // Shared Components
  const MetricScore = ({ score, label, trend }) => {
    let colorClass = 'text-red-400';
    if (score >= 75) colorClass = 'text-green-400';
    else if (score >= 50) colorClass = 'text-yellow-400';
    
    const trendIcon = trend === 'improving' ? '↗️' : trend === 'declining' ? '↘️' : '➡️';
    
    return (
      <div className="text-center">
        <div className={`text-3xl font-bold ${colorClass}`}>{score}</div>
        <div className="text-sm text-gray-400">{label}</div>
        <div className="text-xs text-gray-500 mt-1">{trendIcon} {trend}</div>
      </div>
    );
  };

  const TabButton = ({ tabId, label, isActive, onClick }) => (
    <button
      onClick={() => onClick(tabId)}
      className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
        isActive 
          ? 'bg-dark-700 text-primary-100 border-b-2 border-primary-500' 
          : 'text-gray-400 hover:text-gray-200 hover:bg-dark-800'
      }`}
    >
      {label}
    </button>
  );

  const CoachingSessionCard = ({ session }) => (
    <div className="bg-dark-700 p-4 rounded-lg mb-4 border border-dark-600">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h4 className="text-lg font-medium text-primary-100">
            {session.type.replace('_', ' ').toUpperCase()} - {new Date(session.date).toLocaleDateString()}
          </h4>
          <p className="text-sm text-gray-400">{session.duration} minutes</p>
        </div>
        <div className="text-xs text-gray-500">
          {session.transcript?.sentiment || 'No sentiment data'}
        </div>
      </div>
      
      <p className="text-gray-300 mb-3">{session.coachNotes}</p>
      
      {session.transcript?.keyQuotes && session.transcript.keyQuotes.length > 0 && (
        <div className="mb-3">
          <h5 className="text-sm font-medium text-primary-300 mb-2">Key Quotes:</h5>
          <div className="space-y-1">
            {session.transcript.keyQuotes.slice(0, 2).map((quote, idx) => (
              <blockquote key={idx} className="text-sm text-gray-400 italic border-l-2 border-primary-500 pl-3">
                "{quote}"
              </blockquote>
            ))}
          </div>
        </div>
      )}
      
      {session.actionItems && session.actionItems.length > 0 && (
        <div>
          <h5 className="text-sm font-medium text-primary-300 mb-2">Action Items:</h5>
          <ul className="text-sm text-gray-300 space-y-1">
            {session.actionItems.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  const DiagnosticCard = ({ diagnostic }) => {
    if (!diagnostic) return <div className="text-gray-400">No diagnostic data available</div>;
    
    return (
      <div className="bg-dark-700 p-6 rounded-lg border border-dark-600">
        <h4 className="text-lg font-medium text-primary-100 mb-4">
          Latest Assessment - {new Date(diagnostic.date).toLocaleDateString()}
        </h4>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {diagnostic.calculatedScores && Object.entries(diagnostic.calculatedScores).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className={`text-xl font-bold ${
                value >= 75 ? 'text-green-400' : 
                value >= 50 ? 'text-yellow-400' : 'text-red-400'
              }`}>
                {value}
              </div>
              <div className="text-xs text-gray-400 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
            </div>
          ))}
        </div>
        
        {diagnostic.responses && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h5 className="font-medium text-primary-300 mb-2">Sleep & Recovery</h5>
              <p className="text-gray-400">Sleep: {diagnostic.responses.sleepHours}h (Quality: {diagnostic.responses.sleepQuality}/10)</p>
              <p className="text-gray-400">Recovery: {diagnostic.responses.recoveryFrequency} days/week</p>
              <p className="text-gray-400">Stress Level: {diagnostic.responses.stressLevel}/10</p>
            </div>
            <div>
              <h5 className="font-medium text-primary-300 mb-2">Flow & Focus</h5>
              <p className="text-gray-400">Deep Work: {diagnostic.responses.deepWorkHours}h daily</p>
              <p className="text-gray-400">Focus Quality: {diagnostic.responses.focusQuality}/10</p>
              <p className="text-gray-400">Flow Frequency: {diagnostic.responses.flowFrequency} times/week</p>
            </div>
          </div>
        )}
      </div>
    );
  };

  const WeeklyTrendChart = ({ trends }) => {
    if (!trends || trends.length === 0) return <div className="text-gray-400">No trend data available</div>;
    
    return (
      <div className="bg-dark-700 p-6 rounded-lg border border-dark-600">
        <h4 className="text-lg font-medium text-primary-100 mb-4">8-Week Performance Trends</h4>
        
        <div className="space-y-4">
          {['missionAlignment', 'flowReadiness', 'flowLeadership'].map(metric => {
            const data = trends.map(week => week[metric]);
            const latest = data[data.length - 1];
            const previous = data[data.length - 2];
            const trend = latest > previous ? 'improving' : latest < previous ? 'declining' : 'steady';
            
            return (
              <div key={metric} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-primary-300 capitalize">
                    {metric.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  <span className={`font-medium ${
                    latest >= 75 ? 'text-green-400' : 
                    latest >= 50 ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {latest} {trend === 'improving' ? '↗️' : trend === 'declining' ? '↘️' : '➡️'}
                  </span>
                </div>
                <div className="flex items-end h-8 gap-1">
                  {data.map((value, idx) => (
                    <div
                      key={idx}
                      className="flex-1 bg-primary-500 rounded-t opacity-70 hover:opacity-100 transition-opacity"
                      style={{ height: `${Math.max(10, value)}%` }}
                      title={`Week ${idx + 1}: ${value}`}
                    ></div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const ThemesInsights = ({ themes, insights }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-dark-700 p-6 rounded-lg border border-dark-600">
        <h4 className="text-lg font-medium text-primary-100 mb-4">Recurring Themes</h4>
        {themes && themes.length > 0 ? (
          <div className="space-y-2">
            {themes.slice(0, 5).map(({ theme, frequency }) => (
              <div key={theme} className="flex justify-between items-center">
                <span className="text-gray-300 capitalize">
                  {theme.replace(/_/g, ' ')}
                </span>
                <span className="text-primary-400 text-sm">
                  {frequency} session{frequency > 1 ? 's' : ''}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No theme data available</p>
        )}
      </div>
      
      <div className="bg-dark-700 p-6 rounded-lg border border-dark-600">
        <h4 className="text-lg font-medium text-primary-100 mb-4">Key Insights</h4>
        {insights && insights.length > 0 ? (
          <div className="space-y-3">
            {insights.slice(0, 3).map(({ insight, sessionDate }, idx) => (
              <div key={idx} className="border-l-2 border-primary-500 pl-3">
                <p className="text-gray-300 text-sm">{insight}</p>
                <p className="text-gray-500 text-xs mt-1">
                  {new Date(sessionDate).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No insights available</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-primary-100">{clientName}'s Enhanced Dashboard</h1>
        <p className="text-gray-400 mt-2">Comprehensive performance tracking & insights</p>
      </div>

      {/* Quick Stats */}
      {latestDiagnostic && (
        <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 mb-6">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Current Performance</h2>
          <div className="grid grid-cols-3 gap-6">
            <MetricScore 
              score={latestDiagnostic.calculatedScores?.missionAlignment || 0} 
              label="Mission Alignment" 
              trend="improving" 
            />
            <MetricScore 
              score={latestDiagnostic.overallFlowReadiness || 0} 
              label="Flow Readiness" 
              trend="steady" 
            />
            <MetricScore 
              score={latestDiagnostic.overallLeadershipLeverage || 0} 
              label="Leadership Leverage" 
              trend="improving" 
            />
          </div>
        </div>
      )}

      {/* Tab Navigation */}
      <div className="mb-6">
        <div className="flex space-x-1 bg-dark-900 p-1 rounded-lg">
          <TabButton tabId="overview" label="Overview" isActive={activeTab === 'overview'} onClick={setActiveTab} />
          <TabButton tabId="sessions" label="Coaching Sessions" isActive={activeTab === 'sessions'} onClick={setActiveTab} />
          <TabButton tabId="diagnostics" label="Assessments" isActive={activeTab === 'diagnostics'} onClick={setActiveTab} />
          <TabButton tabId="trends" label="Trends & Analytics" isActive={activeTab === 'trends'} onClick={setActiveTab} />
          <TabButton tabId="insights" label="Insights" isActive={activeTab === 'insights'} onClick={setActiveTab} />
        </div>
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <DiagnosticCard diagnostic={latestDiagnostic} />
              <WeeklyTrendChart trends={weeklyTrends} />
            </div>
            
            {actionItems && actionItems.length > 0 && (
              <div className="bg-dark-800 p-6 rounded-lg border border-dark-600">
                <h3 className="text-lg font-semibold text-primary-100 mb-4">Recent Action Items</h3>
                <div className="space-y-2">
                  {actionItems.slice(0, 5).map(({ item, sessionDate }, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="text-primary-500 mr-3 mt-1">•</span>
                      <div>
                        <p className="text-gray-300">{item}</p>
                        <p className="text-xs text-gray-500">From {new Date(sessionDate).toLocaleDateString()} session</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'sessions' && (
          <div>
            <h3 className="text-xl font-semibold text-primary-100 mb-4">Recent Coaching Sessions</h3>
            {coachingSessions && coachingSessions.length > 0 ? (
              coachingSessions.map(session => (
                <CoachingSessionCard key={session.sessionId} session={session} />
              ))
            ) : (
              <div className="text-gray-400">No coaching session data available</div>
            )}
          </div>
        )}

        {activeTab === 'diagnostics' && (
          <div>
            <h3 className="text-xl font-semibold text-primary-100 mb-4">Assessment History</h3>
            <DiagnosticCard diagnostic={latestDiagnostic} />
          </div>
        )}

        {activeTab === 'trends' && (
          <div>
            <h3 className="text-xl font-semibold text-primary-100 mb-4">Performance Trends</h3>
            <WeeklyTrendChart trends={weeklyTrends} />
          </div>
        )}

        {activeTab === 'insights' && (
          <div>
            <h3 className="text-xl font-semibold text-primary-100 mb-4">Themes & Insights</h3>
            <ThemesInsights themes={transcriptThemes} insights={keyInsights} />
          </div>
        )}
      </div>

      {/* AI Chatbot */}
      <div className="mt-8">
        <ClientChatbot currentClientId={clientId} allClientData={allClientData} />
      </div>
    </div>
  );
}