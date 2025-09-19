import React from 'react';
import { useClientData } from '../../../shared/context/ClientDataContext';
import ClientChatbot from '../../features/chatbot/ClientChatbot';

// Component for displaying a metric score with color coding
const MetricScore = ({ score }) => {
  let colorClass = 'text-red-600';
  if (score >= 75) colorClass = 'text-green-600';
  else if (score >= 50) colorClass = 'text-yellow-600';
  
  return <span className={`text-2xl font-bold ${colorClass}`}>{score}</span>;
};

// Component for displaying trend indicators
const TrendIndicator = ({ trend, note }) => {
  let indicator = '→';
  let colorClass = 'text-gray-400';
  
  if (trend === 'improving') {
    indicator = '↗︎';
    colorClass = 'text-green-500';
  } else if (trend === 'declining') {
    indicator = '↘︎';
    colorClass = 'text-red-500';
  }
  
  return (
    <div className="flex items-center">
      <span className={`text-xl ${colorClass} mr-2`}>{indicator}</span>
      {note && <span className="text-sm text-gray-400">{note}</span>}
    </div>
  );
};

// Simple sparkline component
const Sparkline = ({ data }) => {
  return (
    <div className="h-8 flex items-end space-x-1">
      {data.map((value, index) => (
        <div 
          key={index}
          style={{ height: `${value}%` }}
          className="w-1 bg-primary-500"
        ></div>
      ))}
    </div>
  );
};

// Progress bar component for detailed metrics
const ProgressBar = ({ value, label }) => {
  let colorClass = 'bg-red-500';
  if (value >= 75) colorClass = 'bg-green-500';
  else if (value >= 50) colorClass = 'bg-yellow-500';
  
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{label}</span>
        <span className="text-gray-300">{value}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div 
          className={`${colorClass} h-2.5 rounded-full transition-all duration-300`} 
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

export default function GeofDashboard() {
  // Get client data from context
  const { allClientData } = useClientData();
  
  // Weekly data for sparklines
  const weeklyData = {
    missionProgress: [55, 58, 60, 65],
    flowStability: [55, 60, 65, 70],
    connectionLeverage: [60, 65, 70, 75]
  };
  
  // Detailed flow readiness components
  const flowReadinessComponents = [
    { label: "Workshop Flow Access", value: 85 },
    { label: "Fishing Flow States", value: 80 },
    { label: "Meditation Consistency", value: 60 },
    { label: "Travel Flow Protocol", value: 40 }
  ];
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Mission Progress Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Mission Progress</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={65} />
            <TrendIndicator trend="improving" note="+5% from previous" />
          </div>
          <Sparkline data={weeklyData.missionProgress} />
          <p className="mt-4 text-gray-300">
            65% of shop projects combine curiosity with values (environmental, creative, educational). Purpose emerging through hands-on experimentation rather than abstract planning. Strong satisfaction in restoring paddles, fly design, and cottage remodeling.
          </p>
        </div>
        
        {/* Flow Stability Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Stability</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={70} />
            <TrendIndicator trend="improving" note="+15% from previous" />
          </div>
          <Sparkline data={weeklyData.flowStability} />
          <p className="mt-4 text-gray-300">
            70% of days with consistent flow access via shop/fishing/meditation. Workshop and fishing are high-probability flow triggers. Meditation practice weakened by travel and new relationship rhythms - needs lightweight travel protocol.
          </p>
        </div>
        
        {/* Connection Leverage Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Connection Leverage</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={75} />
            <TrendIndicator trend="improving" note="+15% from previous" />
          </div>
          <Sparkline data={weeklyData.connectionLeverage} />
          <p className="mt-4 text-gray-300">
            75% participation in group continuations. Finds Alliance conversations most rewarding. Proposed low-friction continuity: book club, group calls, periodic gatherings. Strong social capital within group - others cite him as memorable and impactful.
          </p>
        </div>
      </div>
      
      {/* Metrics Change Summary */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl mb-8">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Metrics Change Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Mission Progress</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Previous: 60%</span>
              <span className="text-green-400 font-bold">→ 65% (+5%)</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Purpose emerging through hands-on experimentation</p>
          </div>
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Flow Stability</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Previous: 55%</span>
              <span className="text-green-400 font-bold">→ 70% (+15%)</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Workshop and fishing as reliable flow triggers</p>
          </div>
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Connection Leverage</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Previous: 60%</span>
              <span className="text-green-400 font-bold">→ 75% (+15%)</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Strong social capital and group engagement</p>
          </div>
        </div>
      </div>
      
      {/* New Metrics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Workshop Project Alignment */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Workshop Project Alignment</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={70} />
            <TrendIndicator trend="improving" note="purpose emerging" />
          </div>
          <p className="mt-4 text-gray-300">
            Strong satisfaction in restoring paddles, tinkering with new fly designs, and remodeling the cottage. These activities reliably bring flow and combine curiosity with values (environmental, creative, educational). Purpose emerging through hands-on experimentation.
          </p>
        </div>
        
        {/* Travel Flow Protocol */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Travel Flow Protocol</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={40} />
            <TrendIndicator trend="steady" note="needs development" />
          </div>
          <p className="mt-4 text-gray-300">
            Meditation practice (Vipassana, Sam Harris app) was strong but has weakened due to travel and new relationship rhythms. Needs lightweight travel protocol (mini Vipassana, fishing analogs, journaling) to stabilize creativity across contexts.
          </p>
        </div>
        
        {/* Group Continuity Engagement */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Group Continuity Engagement</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={80} />
            <TrendIndicator trend="improving" note="strong social capital" />
          </div>
          <p className="mt-4 text-gray-300">
            Proposed low-friction continuity: book club (via Audible), group calls, and periodic gatherings. Feels reassured that his presence has been meaningful for others. Strong social capital within group - others cite him as memorable and impactful.
          </p>
        </div>
      </div>
      
      {/* Metrics Change Summary */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl mb-8">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Metrics Change Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Mission Progress</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Previous: 60%</span>
              <span className="text-green-400 font-bold">→ 65% (+5%)</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Purpose emerging through hands-on experimentation</p>
          </div>
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Flow Stability</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Previous: 55%</span>
              <span className="text-green-400 font-bold">→ 70% (+15%)</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Workshop and fishing as reliable flow triggers</p>
          </div>
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Connection Leverage</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Previous: 60%</span>
              <span className="text-green-400 font-bold">→ 75% (+15%)</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Strong social capital and group engagement</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Workshop Project Alignment</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">New Metric</span>
              <span className="text-blue-400 font-bold">→ 70%</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Purpose emerging through shop projects</p>
          </div>
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Travel Flow Protocol</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">New Metric</span>
              <span className="text-blue-400 font-bold">→ 40%</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Needs lightweight travel practices</p>
          </div>
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Group Continuity Engagement</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">New Metric</span>
              <span className="text-blue-400 font-bold">→ 80%</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Strong social capital and continuity proposals</p>
          </div>
        </div>
      </div>
      
      {/* Flow Readiness Breakdown */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl mb-8">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Readiness Breakdown</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          {flowReadinessComponents.map((component, index) => (
            <ProgressBar 
              key={index}
              label={component.label}
              value={component.value}
            />
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Top Strengths */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Top Strengths</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Workshop tinkering and hands-on flow states</li>
            <li>Fishing flow and solitary creative activities</li>
            <li>Strong group presence and social capital</li>
            <li>Purpose emerging through experimentation</li>
            <li>Recognition of political obsessions as creativity drain</li>
          </ul>
        </div>
        
        {/* Key Risks */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Key Risks</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Overweighting need for one big "MTP" as failure</li>
            <li>Travel dysregulation affecting meditation consistency</li>
            <li>Risk of group dissolution losing engagement</li>
            <li>Meditation practice weakened by new relationship rhythms</li>
            <li>Need for lightweight travel protocol for flow stability</li>
          </ul>
        </div>
      </div>
      
      {/* Action Plan */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl mb-8">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Action Plan</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-primary-300">Next Steps:</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Set up 3-4 parallel shop projects as "curiosity experiments"</li>
              <li>Adopt light travel ritual (mini Vipassana, fishing analogs, journaling)</li>
              <li>Join post-Alliance book club for continuity</li>
              <li>Develop lightweight travel protocol for flow stability</li>
              <li>Track shop projects that combine curiosity + values</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-medium text-primary-300">30-Day Goals:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Establish consistent shop flow access even while traveling</li>
              <li>Participate in group continuations (book club, calls, gatherings)</li>
              <li>Create travel-friendly meditation and flow practices</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Coach Notes */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Coach Notes</h2>
        <div className="prose max-w-none">
          <p>
            Geoffrey has made significant progress in understanding that purpose may not be abstract—it emerges through hands-on experimentation in the shop. His satisfaction in restoring paddles, tinkering with fly designs, and remodeling the cottage shows purpose aligning with values through practical projects.
          </p>
          <p className="mt-4">
            His flow stability has improved dramatically with workshop and fishing as high-probability flow triggers. However, meditation practice has weakened due to travel and new relationship rhythms, creating a need for lightweight travel protocols to maintain flow access across contexts.
          </p>
          <p className="mt-4">
            Geoffrey's connection leverage is strong within the Alliance group, where he finds conversations most rewarding. He's proposed low-friction continuity mechanisms and feels reassured that his presence has been meaningful for others. This social capital is a key strength to maintain.
          </p>
          <p className="mt-4">
            The main risk is framing the lack of one big "MTP" as failure, which could undercut his satisfaction and momentum. Instead, he should embrace the sampling period approach where purpose emerges through curiosity experiments that combine values with skills.
          </p>
          <p className="mt-4">
            Recommend focusing on setting up 3-4 parallel shop projects as curiosity experiments, developing a lightweight travel ritual, and joining the post-Alliance book club for continuity. This approach honors his natural flow patterns while building sustainable practices.
          </p>
        </div>
      </div>
      
      {/* AI Chatbot */}
      <ClientChatbot 
        currentClientId="geoffreygarth"
        allClientData={allClientData}
      />
    </div>
  );
}
