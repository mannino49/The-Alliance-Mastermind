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

export default function JasonDashboard() {
  // Get client data from context
  const { allClientData } = useClientData();
  
  // Weekly data for sparklines
  const weeklyData = {
    missionAlignment: [55, 58, 60, 70],
    flowReadiness: [50, 52, 55, 60],
    flowLeadership: [60, 62, 65, 70]
  };
  
  // Detailed flow readiness components
  const flowReadinessComponents = [
    { label: "Structured Deep Work Blocks", value: 60 },
    { label: "Recovery Practices", value: 45 },
    { label: "Micro Flow Practices", value: 55 },
    { label: "Visible Progress Tracking", value: 60 }
  ];
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Mission Alignment Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Mission Alignment</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={70} />
            <TrendIndicator trend="improving" note="+10% from previous" />
          </div>
          <Sparkline data={weeklyData.missionAlignment} />
          <p className="mt-4 text-gray-300">
            70% of weekly effort advancing core AI/math innovation. Strong technical validation with algorithms outperforming large labs, DARPA challenge submitted, and AWS partnership secured. Moving beyond theory into defensible IP.
          </p>
        </div>
        
        {/* Flow Readiness Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Readiness</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={60} />
            <TrendIndicator trend="improving" note="+5% from previous" />
          </div>
          <Sparkline data={weeklyData.flowReadiness} />
          <p className="mt-4 text-gray-300">
            Improved flow practices with completed drawing/digital exercises enhancing slow thinking and weekly reflection. Still building resilience protocols for high-pressure situations (DARPA, patents, job interviews).
          </p>
        </div>
        
        {/* Flow Leadership Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Leadership</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={70} />
            <TrendIndicator trend="improving" note="+5% from previous" />
          </div>
          <Sparkline data={weeklyData.flowLeadership} />
          <p className="mt-4 text-gray-300">
            Moving from "solo inventor" toward practical leadership scaffolding. Assembling team with focus on sales and CFO roles. Strong technical validation creating credibility for scaling AI innovation.
          </p>
        </div>
      </div>
      
      {/* New Metrics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Patent & Partnership Index */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Patent & Partnership Index</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={70} />
            <TrendIndicator trend="improving" note="strong momentum" />
          </div>
          <p className="mt-4 text-gray-300">
            Actively filing patents, DARPA challenge submitted, incubator application underway. AWS partnership secured with credits and support. Strong technical validation across multiple domains.
          </p>
        </div>
        
        {/* Story Clarity Score */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Story Clarity Score</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={40} />
            <TrendIndicator trend="steady" note="needs improvement" />
          </div>
          <p className="mt-4 text-gray-300">
            Struggles to explain platform but breakthrough when reframed as services. Building 15-20 slide storytelling deck. Pivoting to focus on finance, data centers, HVAC markets.
          </p>
        </div>
        
        {/* Team Build Index */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Team Build Index</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={30} />
            <TrendIndicator trend="steady" note="roles identified" />
          </div>
          <p className="mt-4 text-gray-300">
            Wife stepped back from CEO role. Now assembling team with focus on sales and CFO positions. Considering family connections for sales role. Exploring part-time CFO.
          </p>
        </div>
      </div>
      
      {/* Metrics Change Summary */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl mb-8">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Metrics Change Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Mission Alignment</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Previous: 60%</span>
              <span className="text-green-400 font-bold">→ 70% (+10%)</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Strong technical validation and institutional partnerships</p>
          </div>
          
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Flow Readiness</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Previous: 55%</span>
              <span className="text-green-400 font-bold">→ 60% (+5%)</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Improved reflection practices and flow exercises</p>
          </div>
          
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Flow Leadership</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Previous: 65%</span>
              <span className="text-green-400 font-bold">→ 70% (+5%)</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Moving toward practical leadership scaffolding</p>
          </div>
          
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Patent & Partnership Index</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">New Metric</span>
              <span className="text-blue-400 font-bold">70%</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Strong momentum in IP and partnerships</p>
          </div>
          
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Story Clarity Score</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">New Metric</span>
              <span className="text-yellow-400 font-bold">40%</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Needs improvement for fundraising</p>
          </div>
          
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Team Build Index</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">New Metric</span>
              <span className="text-yellow-400 font-bold">30%</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Roles identified, not yet filled</p>
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
            <li>Technical breakthroughs validated across multiple domains</li>
            <li>Visionary systems thinker with rapid validation capability</li>
            <li>Strong institutional recognition (DARPA, AWS partnerships)</li>
            <li>Novel AI innovation approach (attractor space-based)</li>
            <li>High-level network connections (defense, quantum computing)</li>
            <li>Moving from theory to defensible IP and real partnerships</li>
          </ul>
        </div>
        
        {/* Key Risks */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Key Risks</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Storytelling gap may stall fundraising/talent onboarding</li>
            <li>Execution bottleneck if team assembly lags behind technical advances</li>
            <li>Resilience under overload during high-pressure pivots</li>
            <li>Pace of breakthroughs outstripping communication/support structure</li>
            <li>Work-life balance strain from dual commitments</li>
            <li>Family trust/support requires visible progress</li>
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
              <li>Build storytelling deck (15-20 slides with headline + image + minimal text)</li>
              <li>Recruit sales person and CFO support to build team scaffolding</li>
              <li>Finalize patent filings and systematize IP outputs</li>
              <li>Create fallback routine for high-pressure situations</li>
              <li>Focus market entry on finance, data centers, HVAC (avoid overregulated markets)</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-medium text-primary-300">30-Day Goals:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Complete storytelling deck for investor/partner presentations</li>
              <li>Identify and recruit sales person (consider family connections)</li>
              <li>Document resilience protocols and fallback routines</li>
              <li>Explore Nvidia bundling/licensing strategy</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Coach Notes */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Coach Notes</h2>
        <div className="prose max-w-none">
          <p>
            Jason has made significant progress moving from theory to execution with strong technical validation across multiple domains. His algorithms are now outperforming large labs, and he's secured institutional recognition through DARPA and AWS partnerships.
          </p>
          <p className="mt-4">
            The primary challenge has shifted from technical validation to communication and team building. His storytelling gap (40% clarity score) could stall fundraising and talent onboarding, while his team build index (30%) shows critical functions still need to be filled.
          </p>
          <p className="mt-4">
            His flow practices have improved with completed drawing/digital exercises enhancing reflection, but he still needs structured fallback routines for high-pressure situations. The pace of his breakthroughs is outstripping his ability to communicate them clearly.
          </p>
          <p className="mt-4">
            Recommend prioritizing the storytelling deck and team assembly (sales + CFO) to create the support structure needed for his technical advances. The pivot to focus on finance, data centers, and HVAC markets shows strategic thinking.
          </p>
          <p className="mt-4">
            Jason's resilience protocol score (35%) indicates he's starting to build fallback tools but needs completion. His movement from "solo inventor" toward practical leadership scaffolding is a positive trend that needs acceleration.
          </p>
        </div>
      </div>
      
      {/* AI Chatbot */}
      <ClientChatbot 
        currentClientId="jasontadros"
        allClientData={allClientData}
      />
    </div>
  );
}
