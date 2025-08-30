import React from 'react';
import { useClientData } from '../context/ClientDataContext';
import ClientChatbot from './ClientChatbot';

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
  let colorClass = 'bg-dark-7000';
  if (value >= 75) colorClass = 'bg-dark-7000';
  else if (value >= 50) colorClass = 'bg-dark-7000';
  
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className={`${colorClass} h-2.5 rounded-full`} 
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

export default function JamesDashboard() {
  // Get client data from context
  const { allClientData } = useClientData();
  
  // Weekly data for sparklines
  const weeklyData = {
    missionAlignment: [50, 52, 55, 55],
    flowReadiness: [55, 58, 60, 60],
    flowLeadership: [60, 62, 65, 65]
  };
  
  // Detailed flow readiness components
  const flowReadinessComponents = [
    { label: "Clear Goals & Focus", value: 65 },
    { label: "Distraction Management", value: 45 },
    { label: "Recovery Practices", value: 70 },
    { label: "Deep Work Blocks", value: 60 }
  ];
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Mission Alignment Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Mission Alignment</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={55} />
            <TrendIndicator trend="steady" note="clear mission, scattered execution" />
          </div>
          <Sparkline data={weeklyData.missionAlignment} />
          <p className="mt-4 text-gray-300">
            55% of effort advancing core mission of innovative antibody treatments. Strong mission clarity in scientific innovation, but overcommitted across too many projects with novelty-seeking diluting focus from mission-level goals.
          </p>
        </div>
        
        {/* Flow Readiness Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Readiness</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={60} />
            <TrendIndicator trend="steady" note="good base, needs tighter distraction control" />
          </div>
          <Sparkline data={weeklyData.flowReadiness} />
          <p className="mt-4 text-gray-300">
            Solid flow foundations with effective recovery activities in place (running, art, meditation). Barriers include distraction (email), novelty-seeking, and overcommitment pulling focus from consistent flow triggers.
          </p>
        </div>
        
        {/* Flow Leadership Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Leadership</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={65} />
            <TrendIndicator trend="improving" note="strong potential, structure under review" />
          </div>
          <Sparkline data={weeklyData.flowLeadership} />
          <p className="mt-4 text-gray-300">
            High leverage potential through team scale and innovation capacity. Needs to prioritize structure that balances creative innovation and operational execution without overloading.
          </p>
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
            <li>Scientific innovation in antibody treatments</li>
            <li>Strong recovery discipline (running, art, meditation)</li>
            <li>Team vision and leadership capacity</li>
            <li>Clear mission to change medical practice</li>
            <li>High-performing team leadership</li>
          </ul>
        </div>
        
        {/* Key Risks */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Key Risks</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Overcommitment across multiple projects</li>
            <li>Novelty-seeking behavior diluting focus</li>
            <li>Execution dilution from competing priorities</li>
            <li>Email and distraction management challenges</li>
            <li>Sustainability concerns with current structure</li>
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
              <li>Build comprehensive project list with priority filters</li>
              <li>Test art priming vs. microdosing for creative flow</li>
              <li>Explore chief of staff hire to offload execution load</li>
              <li>Implement email boundaries to protect deep work</li>
              <li>Develop crisis readiness plan for funding/political risks</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-medium text-primary-300">30-Day Goals:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Complete project inventory and priority assessment</li>
              <li>Establish morning deep work protocol (no email first)</li>
              <li>Draft team reorganization options (elite team model)</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Coach Notes */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Coach Notes</h2>
        <div className="prose max-w-none">
          <p>
            James has exceptional vision and innovation capacity in medical science, particularly with antibody treatments. His mission to change medical practice through 100 new drugs and novel brain delivery methods is compelling and clear.
          </p>
          <p className="mt-4">
            The primary challenge is managing his tendency toward overcommitment and novelty-seeking. He's currently juggling an academic lab, startup, nonprofit, large-scale grants, and multiple side projects, which dilutes his execution focus.
          </p>
          <p className="mt-4">
            His flow readiness shows strong foundations, particularly in recovery practices (running, art, meditation). However, his admitted struggles with email checking and distraction management are undermining his deep work capacity.
          </p>
          <p className="mt-4">
            For leadership leverage, James is exploring reorganization options including a small elite team model and potentially adding management layers like a chief of staff. This shows awareness of the need to balance innovation with operational execution.
          </p>
          <p className="mt-4">
            Recommend focusing on distraction management as the highest leverage intervention, particularly establishing firm boundaries around email and implementing structured project prioritization to combat novelty-seeking tendencies.
          </p>
        </div>
      </div>
      
      {/* AI Chatbot */}
      <ClientChatbot 
        currentClientId="jamescrowe"
        allClientData={allClientData}
      />
    </div>
  );
}
