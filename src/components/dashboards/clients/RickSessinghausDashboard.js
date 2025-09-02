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
        <span className={`font-medium ${value >= 75 ? 'text-green-600' : value >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className={`${colorClass} h-2.5 rounded-full transition-all duration-300`} 
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

export default function RickSessinghausDashboard() {
  // Get client data from context
  const { allClientData } = useClientData();
  
  // Weekly data for sparklines
  const weeklyData = {
    missionAlignment: [45, 48, 50, 65],
    flowReadiness: [50, 52, 55, 60],
    flowLeadership: [55, 58, 60, 70]
  };
  
  // Detailed flow readiness components
  const flowReadinessComponents = [
    { label: "Cognitive Load Management (30%)", value: 65 },
    { label: "Boundary Enforcement (25%)", value: 40 },
    { label: "Structured Planning (25%)", value: 75 },
    { label: "Flow Block Adherence (20%)", value: 60 }
  ];
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Mission Alignment Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Mission Alignment</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={65} />
            <TrendIndicator trend="improving" note="anchored planning rituals" />
          </div>
          <Sparkline data={weeklyData.missionAlignment} />
          <p className="mt-4 text-gray-300">
            65% of time spent advancing top 3 priorities (coaching, studio, book). 100-step reverse engineering exercise proved pivotal for clarity and execution anchoring.
          </p>
        </div>
        
        {/* Flow Readiness Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Readiness</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={60} />
            <TrendIndicator trend="improving" note="cognitive load awareness" />
          </div>
          <Sparkline data={weeklyData.flowReadiness} />
          <p className="mt-4 text-gray-300">
            Major breakthrough: now distinguishes between physical energy (abundant) and cognitive load (real limiter). Structured Sunday planning and daily time-blocking implemented.
          </p>
        </div>
        
        {/* Flow Leadership Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Leadership</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={70} />
            <TrendIndicator trend="improving" note="brand positioning shift" />
          </div>
          <Sparkline data={weeklyData.flowLeadership} />
          <p className="mt-4 text-gray-300">
            Strong structural awareness of scalable leadership requirements. Clear intent to shift brand positioning from golf expert to peak performance authority.
          </p>
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
            <li>Clarity on priorities with anchored planning rituals</li>
            <li>Brand authority and strong mission alignment</li>
            <li>Major breakthrough in cognitive load awareness</li>
            <li>Strong structural awareness of scalable leadership requirements</li>
            <li>Clear intent to shift brand positioning from golf expert to peak performance authority</li>
            <li>Learning from Kotler's FRC scaling lessons (hire alignment > star power)</li>
          </ul>
        </div>
        
        {/* Key Risks */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Key Risks</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Urgency bias can blur true importance and inflate cognitive load</li>
            <li>Boundary drift and overcommitment from "nice guy" default</li>
            <li>Risk of culture dilution and overextension without operationalized boundaries</li>
            <li>Still wrestling with "nice vs clear" boundary language</li>
            <li>Cognitive overload impacts creativity, resilience, and decision quality</li>
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
              <li>Systematize boundary language - adopt firmer if/then boundary language to replace "nice guy" default</li>
              <li>Shift urgency filter to importance filter - reduce overuse of urgency as driver to prevent cognitive load inflation</li>
              <li>Pressure-test book + facility launch storylines - validate "The Round of Your Life" positioning and studio buildout narrative</li>
              <li>Continue structured Sunday planning and daily time-blocking implementation</li>
              <li>Build time-buffer into calendar to reduce fragility risk</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-medium text-primary-300">30-Day Goals:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Establish 20% time-buffer in weekly calendar for anti-fragility</li>
              <li>Implement if/then boundary language system for opportunity filtering</li>
              <li>Complete "The Round of Your Life" book positioning validation</li>
              <li>Maintain cognitive load awareness and structured planning practices</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Coach Notes */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Coach Notes</h2>
        <div className="prose max-w-none">
          <p>
            Rick has made a major breakthrough in recognizing cognitive load as his real limiter, distinguishing it from physical energy. His 100-step reverse engineering exercise proved pivotal for mission clarity and execution anchoring.
          </p>
          <p className="mt-4">
            The key focus now is systematizing boundary language and shifting from urgency bias to importance filtering. His brand evolution from golf expert to peak performance authority shows strong strategic thinking and clear intent to scale with integrity.
          </p>
          <p className="mt-4">
            His structural awareness of scalable leadership requirements and learning from Kotler's FRC scaling lessons position him well for growth. The main challenge remains operationalizing boundaries and reducing the "nice guy" default that leads to overcommitment and cognitive overload.
          </p>
        </div>
      </div>
      
      {/* AI Chatbot */}
      <ClientChatbot 
        currentClientId="ricksessinghaus"
        allClientData={allClientData}
      />
    </div>
  );
}
