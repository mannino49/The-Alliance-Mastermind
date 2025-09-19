import React from 'react';
import { useClientData } from '../../../shared/context/ClientDataContext';
import ClientChatbot from '../../features/chatbot/ClientChatbot';

export default function RickDashboard() {
  // Get client data from context
  const { allClientData } = useClientData();
  
  // Weekly data for trend charts
  const weeklyData = {
    missionAlignmentBiz: [75, 77, 79, 65],
    missionAlignmentPersonal: [15, 17, 18, 20],
    flowReadiness: [45, 45, 45, 60],
    flowLeadership: [55, 57, 58, 70]
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
              <MetricScore score={65} />
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
            <TrendIndicator trend="improving" note="anchored planning rituals" />
          </div>
        </div>

        <div className="bg-dark-700 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-primary-100 mb-2">Flow Readiness</h2>
          <div className="flex items-center">
            <MetricScore score={60} />
            <span className="ml-2 text-sm text-gray-400">(cognitive load awareness)</span>
          </div>
          <div className="mt-4">
            <Sparkline data={weeklyData.flowReadiness} />
          </div>
          <div className="mt-2 flex justify-between">
            <div className="text-sm text-gray-400">4-Week Trend</div>
            <TrendIndicator trend="improving" note="boundary enforcement" />
          </div>
        </div>

        <div className="bg-dark-700 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-primary-100 mb-2">Flow Leadership</h2>
          <div className="flex items-center">
            <MetricScore score={70} />
            <span className="ml-2 text-sm text-gray-400">(scaling with integrity)</span>
          </div>
          <div className="mt-4">
            <Sparkline data={weeklyData.flowLeadership} />
          </div>
          <div className="mt-2 flex justify-between">
            <div className="text-sm text-gray-400">4-Week Trend</div>
            <TrendIndicator trend="improving" note="brand positioning shift" />
          </div>
        </div>
      </div>

      {/* Key Insights Boxes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Insight 4: Mission Alignment + Execution Anchoring */}
        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/50 p-6 rounded-xl shadow-xl">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
            <h3 className="text-lg font-semibold text-blue-200">Mission Alignment + Execution Anchoring</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-blue-900/20 p-3 rounded-lg">
              <p className="text-sm text-blue-100 font-medium">✅ Clearer Anchoring</p>
              <p className="text-xs text-blue-200 mt-1">100-step reverse engineering exercise proved pivotal for studio buildout clarity</p>
            </div>
            <div className="bg-blue-900/20 p-3 rounded-lg">
              <p className="text-sm text-blue-100 font-medium">✅ Mission Clarity</p>
              <p className="text-xs text-blue-200 mt-1">Reframed scattered missions into clearer weekly/daily planning rituals with wife</p>
            </div>
            <div className="bg-red-900/20 p-3 rounded-lg">
              <p className="text-sm text-red-100 font-medium">❗ Urgency Bias Risk</p>
              <p className="text-xs text-red-200 mt-1">Overuse of urgency as driver can blur true importance and inflate cognitive load</p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-blue-700/30">
            <p className="text-xs text-blue-300">
              <strong>Metric:</strong> 65% of time spent advancing top 3 priorities (coaching, studio, book)
            </p>
          </div>
        </div>

        {/* Insight 5: Flow Readiness & Cognitive Load Management */}
        <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-700/50 p-6 rounded-xl shadow-xl">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
            <h3 className="text-lg font-semibold text-green-200">Flow Readiness & Cognitive Load Management</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-green-900/20 p-3 rounded-lg">
              <p className="text-sm text-green-100 font-medium">✅ Major Breakthrough</p>
              <p className="text-xs text-green-200 mt-1">Now distinguishes between physical energy (abundant) and cognitive load (real limiter)</p>
            </div>
            <div className="bg-green-900/20 p-3 rounded-lg">
              <p className="text-sm text-green-100 font-medium">✅ Structured Planning</p>
              <p className="text-xs text-green-200 mt-1">Shifted from struggle-phase blocks to structured Sunday planning and daily time-blocking</p>
            </div>
            <div className="bg-red-900/20 p-3 rounded-lg">
              <p className="text-sm text-red-100 font-medium">❗ Boundary Leakage</p>
              <p className="text-xs text-red-200 mt-1">Still vulnerable to "nice guy" default leading to drift and overcommitment</p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-green-700/30">
            <p className="text-xs text-green-300">
              <strong>Metric:</strong> 60% composite of flow block adherence, cognitive load management, boundary enforcement
            </p>
          </div>
        </div>

        {/* Insight 6: Leadership Leverage + Scaling with Integrity */}
        <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-700/50 p-6 rounded-xl shadow-xl">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
            <h3 className="text-lg font-semibold text-purple-200">Leadership Leverage + Scaling with Integrity</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-purple-900/20 p-3 rounded-lg">
              <p className="text-sm text-purple-100 font-medium">✅ Scaling Lessons</p>
              <p className="text-xs text-purple-200 mt-1">Learning from Kotler's FRC: hire alignment > star power, curriculum must adapt</p>
            </div>
            <div className="bg-purple-900/20 p-3 rounded-lg">
              <p className="text-sm text-purple-100 font-medium">✅ Brand Evolution</p>
              <p className="text-xs text-purple-200 mt-1">Working on "The Round of Your Life" book as bridge from golf expert → peak performance authority</p>
            </div>
            <div className="bg-red-900/20 p-3 rounded-lg">
              <p className="text-sm text-red-100 font-medium">❗ Boundary Clarity</p>
              <p className="text-xs text-red-200 mt-1">Still wrestling with "nice vs clear" - starting to adopt firmer if/then boundary language</p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-purple-700/30">
            <p className="text-xs text-purple-300">
              <strong>Metric:</strong> 70% readiness to scale coaching brand, facilities, and book platform while protecting integrity
            </p>
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
                <span className="text-sm font-medium text-gray-300">Cognitive Load Management (30%)</span>
                <span className="text-sm font-medium text-yellow-600">65/100</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <div className="text-xs text-gray-400 mt-1">Major breakthrough: distinguishing physical vs cognitive energy</div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Boundary Enforcement (25%)</span>
                <span className="text-sm font-medium text-red-600">40/100</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <div className="text-xs text-gray-400 mt-1">Still vulnerable to "nice guy" default and overcommitment</div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Structured Planning (25%)</span>
                <span className="text-sm font-medium text-green-600">75/100</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <div className="text-xs text-gray-400 mt-1">Sunday planning and daily time-blocking implemented</div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Flow Block Adherence (20%)</span>
                <span className="text-sm font-medium text-yellow-600">60/100</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <div className="text-xs text-gray-400 mt-1">Improved from struggle-phase blocks to more consistent practice</div>
            </div>
          </div>
        </div>

        <div className="bg-dark-800 border border-gray-200 rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Strengths & Risks</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium text-primary-300 mb-2">Top Strengths</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-300">Clarity on priorities with anchored planning rituals</li>
              <li className="text-gray-300">Brand authority and strong mission alignment</li>
              <li className="text-gray-300">Major breakthrough in cognitive load awareness</li>
              <li className="text-gray-300">Strong structural awareness of scalable leadership requirements</li>
              <li className="text-gray-300">Clear intent to shift brand positioning from golf expert to peak performance authority</li>
              <li className="text-gray-300">Learning from Kotler's FRC scaling lessons (hire alignment > star power)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-primary-300 mb-2">Key Risks</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-300">Urgency bias can blur true importance and inflate cognitive load</li>
              <li className="text-gray-300">Boundary drift and overcommitment from "nice guy" default</li>
              <li className="text-gray-300">Risk of culture dilution and overextension without operationalized boundaries</li>
              <li className="text-gray-300">Still wrestling with "nice vs clear" boundary language</li>
              <li className="text-gray-300">Cognitive overload impacts creativity, resilience, and decision quality</li>
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
                  <p className="text-gray-800 font-medium">Systematize boundary language</p>
                  <p className="text-sm text-gray-400">Adopt firmer if/then boundary language to replace "nice guy" default</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-600 rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-800 font-medium">Shift urgency filter to importance filter</p>
                  <p className="text-sm text-gray-400">Reduce overuse of urgency as driver to prevent cognitive load inflation</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-600 rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-800 font-medium">Pressure-test book + facility launch storylines</p>
                  <p className="text-sm text-gray-400">Validate "The Round of Your Life" positioning and studio buildout narrative</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-primary-300 mb-3">Coach Notes</h3>
            <div className="bg-dark-700 p-4 rounded border border-gray-600">
              <p className="text-gray-300 italic mb-2">
                "Rick has made a major breakthrough in recognizing cognitive load as his real limiter, distinguishing it from physical energy. 
                His 100-step reverse engineering exercise proved pivotal for mission clarity and execution anchoring."
              </p>
              <p className="text-gray-300 italic">
                "The key focus now is systematizing boundary language and shifting from urgency bias to importance filtering. 
                His brand evolution from golf expert to peak performance authority shows strong strategic thinking."
              </p>
              <div className="mt-3 text-sm text-gray-300 font-medium text-right bg-dark-800 rounded px-2 py-1 inline-block ml-auto">- Alliance Mastermind AI Coach, August 2025</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* AI Chatbot */}
      <ClientChatbot currentClientId="ricksessinghaus" allClientData={allClientData} />
    </div>
  );
}
