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

export default function StephanieDashboard() {
  // Get client data from context
  const { allClientData } = useClientData();
  
  // Weekly data for sparklines
  const weeklyData = {
    missionAlignment: [45, 48, 52, 50],
    flowReadiness: [55, 58, 62, 60],
    flowLeadership: [50, 52, 55, 55]
  };
  
  // Detailed flow readiness components
  const flowReadinessComponents = [
    { label: "Clear Goals", value: 75 },
    { label: "Distraction Management", value: 65 },
    { label: "Recovery Activities", value: 70 },
    { label: "Sleep Quality", value: 30 }
  ];
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Mission Alignment Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Mission Alignment</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={50} />
            <TrendIndicator trend="steady" note="working on focus" />
          </div>
          <Sparkline data={weeklyData.missionAlignment} />
          <p className="mt-4 text-gray-300">
            50% of time spent on activities directly advancing the most strategic, near-term MTP. Good mission clarity, but diffusion across too many initiatives.
          </p>
        </div>
        
        {/* Flow Readiness Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Readiness</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={60} />
            <TrendIndicator trend="improving" note="addressing sleep issues" />
          </div>
          <Sparkline data={weeklyData.flowReadiness} />
          <p className="mt-4 text-gray-300">
            Good foundational flow practices with solid habits, but disrupted by external factors affecting sleep and schedule adherence.
          </p>
        </div>
        
        {/* Flow Leadership Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Leadership</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={55} />
            <TrendIndicator trend="improving" note="building vet credibility" />
          </div>
          <Sparkline data={weeklyData.flowLeadership} />
          <p className="mt-4 text-gray-300">
            High leadership leverage potential, especially in the veterinary sector where she has domain expertise. Great vision with execution phase starting.
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
            <li>Clear MTP centered on well-being, flow, and organizational health</li>
            <li>Strong personal practices (daily planning, distraction management)</li>
            <li>Solid recovery activities (walking, sauna, meditation)</li>
            <li>Domain expertise in veterinary practice</li>
            <li>Authentic passion for reducing burnout and enhancing wellbeing</li>
          </ul>
        </div>
        
        {/* Key Risks */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Key Risks</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Vector diffusion — multiple simultaneous ambitions without prioritization</li>
            <li>Inconsistent sleep due to external factors (kids, long daylight)</li>
            <li>Schedule disruptions affecting flow state access</li>
            <li>Indecision between vet focus vs. broader leadership</li>
            <li>Need for credibility building before scaling programs</li>
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
              <li>Create 100-item roadmap to clarify sequential priorities</li>
              <li>Develop and pilot "Flow for Vets" program with measurable outcomes</li>
              <li>Formalize PhD research plan to build academic credibility</li>
              <li>Implement sleep optimization protocol (blackout curtains, consistent schedule)</li>
              <li>Establish partnerships with veterinary organizations for pilot studies</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-medium text-primary-300">30-Day Goals:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Complete roadmap and select primary vector for next 90 days</li>
              <li>Improve sleep consistency by 30%</li>
              <li>Draft initial "Flow for Vets" program outline</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Coach Notes */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Coach Notes</h2>
        <div className="prose max-w-none">
          <p>
            Stephanie shows exceptional commitment to flow principles and has already incorporated many foundational practices. Her primary challenge is focus diffusion across multiple vectors without clear sequencing.
          </p>
          <p className="mt-4">
            Sleep quality represents her biggest opportunity for improvement. External factors (children, long daylight) are disrupting her sleep, which impacts cognitive performance and flow access. Recommend prioritizing sleep environment optimization.
          </p>
          <p className="mt-4">
            Her domain expertise in veterinary practice provides a natural starting point for building credibility before expanding to broader leadership. Suggest focusing on "Flow for Vets" as the primary vector for the next 90 days, with clear metrics for success.
          </p>
        </div>
      </div>
      
      {/* AI Chatbot */}
      <ClientChatbot 
        currentClientId="stephanievandeynze"
        allClientData={allClientData}
      />
    </div>
  );
}
