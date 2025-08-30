import React from 'react';
import { useClientData } from '../context/ClientDataContext';
import ClientChatbot from './ClientChatbot';

export default function RickDashboard() {
  // Get client data from context
  const { allClientData } = useClientData();
  
  // Weekly data for trend charts
  const weeklyData = {
    missionAlignmentBiz: [75, 77, 79, 80],
    missionAlignmentPersonal: [15, 17, 18, 20],
    flowReadiness: [45, 45, 45, 45],
    flowLeadership: [55, 57, 58, 60]
  };

  // Component for trend indicators
  const TrendIndicator = ({ trend, note }) => {
    let icon = "→";
    let color = "text-gray-400";
    
    if (trend === "improving") {
      icon = "↗︎";
      color = "text-green-500";
    } else if (trend === "declining") {
      icon = "↘︎";
      color = "text-red-500";
    }
    
    return (
      <div className="flex items-center">
        <span className={`text-xl font-bold ${color}`}>{icon}</span>
        <span className="ml-2 text-sm text-gray-400">({note})</span>
      </div>
    );
  };

  // Component for metric score with color coding
  const MetricScore = ({ score }) => {
    let color = "text-red-600";
    
    if (score >= 75) {
      color = "text-green-600";
    } else if (score >= 50) {
      color = "text-yellow-600";
    }
    
    return <span className={`text-xl font-bold ${color}`}>{score}</span>;
  };

  // Simple sparkline component
  const Sparkline = ({ data }) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;
    
    return (
      <div className="flex items-end h-8 gap-1">
        {data.map((value, index) => {
          const height = ((value - min) / range) * 100;
          return (
            <div 
              key={index}
              className="w-2 bg-primary-500 rounded-t"
              style={{ height: `${Math.max(10, height)}%` }}
            ></div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="p-6 max-w-6xl mx-auto bg-dark-800 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-primary-100">Rick Watkin's Flow Dashboard</h1>
        <div className="text-sm text-gray-400">Last updated: June 30, 2025</div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-dark-700 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-primary-100 mb-2">Mission Alignment</h2>
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm text-gray-400">Business</div>
              <MetricScore score={80} />
            </div>
            <div>
              <div className="text-sm text-gray-400">Personal</div>
              <MetricScore score={20} />
            </div>
          </div>
          <div className="mt-4">
            <Sparkline data={weeklyData.missionAlignmentBiz} />
          </div>
          <div className="mt-2 flex justify-between">
            <div className="text-sm text-gray-400">4-Week Trend</div>
            <TrendIndicator trend="improving" note="recent mission clarity gain" />
          </div>
        </div>

        <div className="bg-dark-700 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-primary-100 mb-2">Flow Readiness</h2>
          <div className="flex items-center">
            <MetricScore score={45} />
            <span className="ml-2 text-sm text-gray-400">(high motivation, low recovery)</span>
          </div>
          <div className="mt-4">
            <Sparkline data={weeklyData.flowReadiness} />
          </div>
          <div className="mt-2 flex justify-between">
            <div className="text-sm text-gray-400">4-Week Trend</div>
            <TrendIndicator trend="steady" note="needs recovery work" />
          </div>
        </div>

        <div className="bg-dark-700 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-primary-100 mb-2">Flow Leadership</h2>
          <div className="flex items-center">
            <MetricScore score={60} />
            <span className="ml-2 text-sm text-gray-400">(strong intent, not fully modeled)</span>
          </div>
          <div className="mt-4">
            <Sparkline data={weeklyData.flowLeadership} />
          </div>
          <div className="mt-2 flex justify-between">
            <div className="text-sm text-gray-400">4-Week Trend</div>
            <TrendIndicator trend="improving" note="expressed intent to coach team" />
          </div>
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-dark-800 border border-gray-200 rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Readiness Breakdown</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Sleep Hours (30%)</span>
                <span className="text-sm font-medium text-red-600">25/100</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{ width: '25%' }}></div>
              </div>
              <div className="text-xs text-gray-400 mt-1">Averaging 4 hours/night (Target: 7-8 hours)</div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Recovery Practices (30%)</span>
                <span className="text-sm font-medium text-red-600">30/100</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{ width: '30%' }}></div>
              </div>
              <div className="text-xs text-gray-400 mt-1">Minimal recovery activities, low play integration</div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Daily Deep Work (20%)</span>
                <span className="text-sm font-medium text-yellow-600">70/100</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
              <div className="text-xs text-gray-400 mt-1">Implementing 90-min deep work blocks</div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Trigger Integration (20%)</span>
                <span className="text-sm font-medium text-green-600">80/100</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
              <div className="text-xs text-gray-400 mt-1">Strong understanding and implementation of flow triggers</div>
            </div>
          </div>
        </div>

        <div className="bg-dark-800 border border-gray-200 rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Strengths & Risks</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium text-primary-300 mb-2">Top Strengths</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-300">Clear mission and purpose alignment</li>
              <li className="text-gray-300">High drive and motivation</li>
              <li className="text-gray-300">Team-oriented leadership style</li>
              <li className="text-gray-300">Strong understanding of flow concepts</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-primary-300 mb-2">Key Risks</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-300">Significant sleep deficit (4 hrs/night)</li>
              <li className="text-gray-300">Low recovery/play integration</li>
              <li className="text-gray-300">Potential cognitive performance impact</li>
              <li className="text-gray-300">Gap between business and personal alignment</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Action Plan */}
      <div className="bg-dark-800 border border-gray-200 rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Action Plan</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-primary-300 mb-3">Next Actions</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-primary-600 rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-800 font-medium">Add primary flow activities</p>
                  <p className="text-sm text-gray-400">Reintegrate 4+ hours weekly (golf, boarding, ideally with family)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-600 rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-800 font-medium">Run sleep-IQ test</p>
                  <p className="text-sm text-gray-400">Compare cognitive performance after 4 vs. 7-8 hours of sleep</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-600 rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-800 font-medium">Implement distraction management</p>
                  <p className="text-sm text-gray-400">One new tool weekly and personalize it</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-primary-300 mb-3">Coach Notes</h3>
            <div className="bg-gray-50 p-4 rounded border border-gray-200">
              <p className="text-gray-300 italic mb-2">
                "Rick has made significant progress in clarifying his mission and purpose. His business alignment is strong, 
                but we need to focus on personal recovery and flow activities."
              </p>
              <p className="text-gray-300 italic">
                "The sleep experiment will be crucial - I expect we'll see a dramatic difference in cognitive performance 
                that will motivate better sleep habits."
              </p>
              <div className="mt-3 text-sm text-black font-medium text-right bg-white rounded px-2 py-1 inline-block ml-auto">- Alliance Mastermind AI Coach, June 28, 2025</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* AI Chatbot */}
      <ClientChatbot currentClientId="rickwatkin" allClientData={allClientData} />
    </div>
  );
}
