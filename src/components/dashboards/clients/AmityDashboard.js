import React from 'react';
import { useClientData } from '../../../shared/context/ClientDataContext';
import ClientChatbot from '../../features/chatbot/ClientChatbot';

// Component for displaying a metric score with color coding
const MetricScore = ({ score }) => {
  let colorClass = 'text-red-400';
  if (score >= 75) colorClass = 'text-green-400';
  else if (score >= 50) colorClass = 'text-yellow-400';
  
  return <span className={`text-2xl font-bold ${colorClass}`}>{score}</span>;
};

// Component for displaying trend indicators
const TrendIndicator = ({ trend, note }) => {
  let indicator = '→';
  let colorClass = 'text-gray-400';
  
  if (trend === 'improving') {
    indicator = '↗︎';
    colorClass = 'text-green-400';
  } else if (trend === 'declining') {
    indicator = '↘︎';
    colorClass = 'text-red-400';
  }
  
  return (
    <div className="flex items-center">
      <span className={`text-xl ${colorClass} mr-2`}>{indicator}</span>
      {note && <span className="text-sm text-gray-400">{note}</span>}
    </div>
  );
};

// Simple sparkline component (placeholder for now)
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
      <div className="flex justify-between mb-1 text-gray-200">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-dark-600 rounded-full h-2.5">
        <div 
          className={`${colorClass} h-2.5 rounded-full`} 
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

export default function AmityDashboard() {
  // Get client data from context
  const { allClientData } = useClientData();
  
  // Weekly data for sparklines - showing progression to new insights
  const weeklyData = {
    missionAlignment: [55, 58, 62, 65], // Updated to reflect new prioritization breakthrough
    flowReadiness: [35, 38, 42, 50], // Updated to reflect flow sustainability improvements
    flowLeadership: [45, 48, 52, 55], // Updated to reflect capital readiness progress
    prioritization: [40, 45, 55, 65], // New metric showing focus breakthrough
    flowSustainability: [30, 35, 42, 50], // New metric showing energy management
    capitalReadiness: [25, 30, 35, 40] // New metric showing fundraising progress
  };
  
  // Detailed flow readiness components - updated to reflect new insights
  const flowReadinessComponents = [
    { label: "Clear Daily/Weekly Goals", value: 65 }, // Improved with 3-tier mission focus
    { label: "Primary Flow Activities", value: 50 }, // Improved with morning structure
    { label: "Recovery Practices", value: 50 }, // Improved with micro-flow practices
    { label: "Distraction Management", value: 60 } // Improved with prioritization breakthrough
  ];
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Mission Alignment Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl border border-dark-700">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Mission Alignment</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={65} />
            <TrendIndicator trend="improving" note="prioritization breakthrough" />
          </div>
          <Sparkline data={weeklyData.missionAlignment} />
          <p className="mt-4 text-gray-300">
            65% of weekly actions directly serve Amity's MTP. Major breakthrough: clear 3-tier mission focus (ranch revenue, book completion, deferred e-learning).
          </p>
        </div>
        
        {/* Flow Readiness Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl border border-dark-700">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Readiness</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={50} />
            <TrendIndicator trend="improving" note="morning structure + micro-flow" />
          </div>
          <Sparkline data={weeklyData.flowReadiness} />
          <p className="mt-4 text-gray-300">
            Improved with 5 a.m. wake-ups and golden hour creative focus. Flow triggered by meditation, reiki, solitude rather than task lists.
          </p>
        </div>
        
        {/* Flow Leadership Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl border border-dark-700">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Leadership</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={55} />
            <TrendIndicator trend="improving" note="capital readiness building" />
          </div>
          <Sparkline data={weeklyData.flowLeadership} />
          <p className="mt-4 text-gray-300">
            Building confidence in long-term vision. Actively exploring fundraising (~$750k–$1M) with family offices + Tiger21 networks.
          </p>
        </div>
      </div>
      
      {/* New Insights Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Prioritization Index Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl border border-dark-700">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Prioritization Index</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={65} />
            <TrendIndicator trend="improving" note="3-tier mission clarity" />
          </div>
          <Sparkline data={weeklyData.prioritization} />
          <p className="mt-4 text-gray-300">
            65% of weekly hours spent on top-2 priorities (ranch revenue + book). Major breakthrough in recognizing what to park vs. prioritize.
          </p>
        </div>
        
        {/* Flow Sustainability Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl border border-dark-700">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Sustainability</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={50} />
            <TrendIndicator trend="improving" note="micro-flow integration" />
          </div>
          <Sparkline data={weeklyData.flowSustainability} />
          <p className="mt-4 text-gray-300">
            Balance between high-demand tasks vs. restorative flow practices. Strong intrinsic access to altered states, using early mornings for micro-flow.
          </p>
        </div>
        
        {/* Capital Readiness Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl border border-dark-700">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Capital Readiness</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={40} />
            <TrendIndicator trend="improving" note="fundraising exploration" />
          </div>
          <Sparkline data={weeklyData.capitalReadiness} />
          <p className="mt-4 text-gray-300">
            Strength of fundraising deck, network outreach pace, and dual-track plan execution. Strong network access, but still pre-deck, pre-traction.
          </p>
        </div>
      </div>
      
      {/* Flow Readiness Breakdown */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl border border-dark-700 mb-8">
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
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl border border-dark-700">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Top Strengths</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-200">
            <li>Clear prioritization breakthrough with 3-tier mission focus</li>
            <li>Strong intrinsic access to altered states and intuition</li>
            <li>Visionary leadership with increasing structural authority</li>
            <li>Strong network access for fundraising (Tiger21, family offices)</li>
            <li>Morning structure implementation (5 a.m. wake-ups, golden hour)</li>
            <li>Partnership transition success (ex-partner → employee)</li>
          </ul>
        </div>
        
        {/* Key Risks */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl border border-dark-700">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Key Risks</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-200">
            <li>Daily grind draining energy from creative focus</li>
            <li>Fundraising delay undermining long-term dream</li>
            <li>Structural overwhelm from day-to-day operations</li>
            <li>Long-term burnout risk without consistent micro-flow buffering</li>
            <li>Inconsistent integration of flow practices with workload</li>
            <li>Still pre-deck, pre-traction in capital readiness</li>
          </ul>
        </div>
      </div>
      
      {/* Action Plan */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl border border-dark-700 mb-8">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Action Plan</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-primary-300">Immediate Priorities:</h3>
            <ol className="list-decimal pl-5 space-y-2 text-gray-200">
              <li>Build + test investor deck for fundraising</li>
              <li>Lock 30-min daily creative/book time in morning structure</li>
              <li>Develop dual-track strategy (bootstrap + funding plan)</li>
              <li>Maintain 3-tier mission focus (ranch revenue, book, deferred e-learning)</li>
              <li>Continue morning micro-flow practices for resilience</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-medium text-primary-300">30-Day Goals:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-200">
              <li>Increase prioritization index to 75%</li>
              <li>Complete first draft of investor deck</li>
              <li>Establish consistent micro-flow integration</li>
              <li>Reach out to 5 Tiger21 contacts for fundraising</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Coach Notes */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl border border-dark-700 mb-8">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Coach Notes</h2>
        <div className="prose max-w-none text-gray-200">
          <p>
            <strong>Major Breakthrough:</strong> Amity has achieved a significant prioritization breakthrough, shifting from scattered execution to a clear 3-tier mission focus. This represents a fundamental shift in her approach to managing competing priorities.
          </p>
          <p className="mt-4">
            <strong>Flow Integration:</strong> Her understanding of flow has evolved - she now recognizes that flow is triggered by meditation, reiki, and solitude rather than task lists. The implementation of morning structure (5 a.m. wake-ups, golden hour) shows strong execution discipline.
          </p>
          <p className="mt-4">
            <strong>Capital Readiness:</strong> The transition from failed partnership to clarified ownership demonstrates increasing structural authority. Her active exploration of fundraising with Tiger21 and family offices shows strategic thinking, though she needs to accelerate deck development and dual-track planning.
          </p>
          <p className="mt-4">
            <strong>Key Risk:</strong> The daily grind of ranch operations and people management risks draining energy from creative focus. She needs consistent micro-flow practices to buffer against long-term burnout while maintaining her fundraising momentum.
          </p>
        </div>
      </div>
      
      {/* AI Chatbot */}
      <ClientChatbot currentClientId="amitycooper" allClientData={allClientData} />
    </div>
  );
}
