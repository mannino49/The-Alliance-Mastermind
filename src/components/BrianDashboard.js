import React from 'react';
import { useClientData } from '../context/ClientDataContext';
import ClientChatbot from './ClientChatbot';

export default function BrianDashboard() {
  // Get client data from context
  const { allClientData } = useClientData();
  
  // Weekly data for trend charts
  const weeklyData = {
    missionAlignment: [65, 67, 68, 70],
    flowReadiness: [55, 55, 55, 55],
    flowLeadership: [60, 62, 64, 65]
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
        <h1 className="text-3xl font-bold text-primary-100">Brian Camastral's Flow Dashboard</h1>
        <div className="text-sm text-gray-400">Last updated: June 30, 2025</div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-dark-700 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-primary-100 mb-2">Mission Alignment</h2>
          <div className="flex items-center">
            <MetricScore score={70} />
            <span className="ml-2 text-sm text-gray-400">(Curiosity/Passion Vector)</span>
          </div>
          <div className="mt-4">
            <Sparkline data={weeklyData.missionAlignment} />
          </div>
          <div className="mt-2 flex justify-between">
            <div className="text-sm text-gray-400">4-Week Trend</div>
            <TrendIndicator trend="improving" note="recent crystallization of vector" />
          </div>
        </div>

        <div className="bg-dark-700 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-primary-100 mb-2">Flow Readiness</h2>
          <div className="flex items-center">
            <MetricScore score={55} />
            <span className="ml-2 text-sm text-gray-400">(good intent, needs practice)</span>
          </div>
          <div className="mt-4">
            <Sparkline data={weeklyData.flowReadiness} />
          </div>
          <div className="mt-2 flex justify-between">
            <div className="text-sm text-gray-400">4-Week Trend</div>
            <TrendIndicator trend="steady" note="good intent, needs practice integration" />
          </div>
        </div>

        <div className="bg-dark-700 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-primary-100 mb-2">Flow Leadership</h2>
          <div className="flex items-center">
            <MetricScore score={65} />
            <span className="ml-2 text-sm text-gray-400">(strong vision, execution starting)</span>
          </div>
          <div className="mt-4">
            <Sparkline data={weeklyData.flowLeadership} />
          </div>
          <div className="mt-2 flex justify-between">
            <div className="text-sm text-gray-400">4-Week Trend</div>
            <TrendIndicator trend="improving" note="strong vision, execution starting" />
          </div>
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-dark-800 border border-dark-700 rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Readiness Breakdown</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Primary Flow Activity Integration (30%)</span>
                <span className="text-sm font-medium text-red-600">40/100</span>
              </div>
              <div className="w-full bg-dark-600 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <div className="text-xs text-gray-400 mt-1">Identified activities but not consistently integrated</div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Process Goal Adherence (30%)</span>
                <span className="text-sm font-medium text-yellow-600">60/100</span>
              </div>
              <div className="w-full bg-dark-600 rounded-full h-2">
                <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <div className="text-xs text-gray-400 mt-1">Strong intent to build neuroscience literacy and process-oriented goals</div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Active Recovery Practices (20%)</span>
                <span className="text-sm font-medium text-yellow-600">55/100</span>
              </div>
              <div className="w-full bg-dark-600 rounded-full h-2">
                <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '55%' }}></div>
              </div>
              <div className="text-xs text-gray-400 mt-1">Committed to reflection but needs actionable metrics</div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Mental Preparation (20%)</span>
                <span className="text-sm font-medium text-green-600">80/100</span>
              </div>
              <div className="w-full bg-dark-600 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
              <div className="text-xs text-gray-400 mt-1">High intellectual preparation for flow work</div>
            </div>
          </div>
        </div>

        <div className="bg-dark-800 border border-dark-700 rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Strengths & Risks</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium text-primary-300 mb-2">Top Strengths</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-300">Visionary approach to goals and projects</li>
              <li className="text-gray-300">Exceptional group orchestration abilities</li>
              <li className="text-gray-300">Passion-driven motivation and direction</li>
              <li className="text-gray-300">Strong empathy and high-performance teamwork</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-primary-300 mb-2">Key Risks</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-300">Tendency to stay in planning mode</li>
              <li className="text-gray-300">Slow embodiment of flow practices</li>
              <li className="text-gray-300">Exploratory phase could delay concrete momentum</li>
              <li className="text-gray-300">Need for regular self-checks on vector alignment</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Action Plan */}
      <div className="bg-dark-800 border border-dark-700 rounded-xl shadow p-6">
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
                  <p className="text-gray-200 font-medium">Start primary flow activities</p>
                  <p className="text-sm text-gray-400">Reintegrate endurance challenges and other identified flow triggers</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-600 rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-200 font-medium">Pilot small group collaboration</p>
                  <p className="text-sm text-gray-400">Move from visioning to initial group experiments</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-600 rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-200 font-medium">Develop actionable process metrics</p>
                  <p className="text-sm text-gray-400">Create concrete measures for reflection on process over outcome</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-primary-300 mb-3">Coach Notes</h3>
            <div className="bg-dark-700 p-4 rounded border border-dark-600">
              <p className="text-gray-300 italic mb-2">
                "Brian has exceptional potential at the intersection of corporate leadership, soulcraft, and neuroscience. 
                His vision for orchestrating high-impact collaborative groups is compelling."
              </p>
              <p className="text-gray-300 italic">
                "The key now is transitioning from the exploratory phase to concrete action - particularly 
                with primary flow activities and initial group experiments."
              </p>
              <div className="mt-3 text-sm text-black font-medium text-right bg-white rounded px-2 py-1 inline-block ml-auto">- Alliance Mastermind AI Coach, June 29, 2025</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* AI Chatbot */}
      <ClientChatbot 
        currentClientId="briancamastral"
        allClientData={allClientData}
      />
    </div>
  );
}
