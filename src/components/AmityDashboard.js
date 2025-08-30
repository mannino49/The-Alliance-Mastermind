import React from 'react';
import { useClientData } from '../context/ClientDataContext';
import ClientChatbot from './ClientChatbot';

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
  
  // Weekly data for sparklines
  const weeklyData = {
    missionAlignment: [55, 58, 62, 60],
    flowReadiness: [35, 38, 42, 40],
    flowLeadership: [45, 48, 52, 50]
  };
  
  // Detailed flow readiness components
  const flowReadinessComponents = [
    { label: "Clear Daily/Weekly Goals", value: 45 },
    { label: "Primary Flow Activities", value: 35 },
    { label: "Recovery Practices", value: 30 },
    { label: "Distraction Management", value: 50 }
  ];
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Mission Alignment Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl border border-dark-700">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Mission Alignment</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={60} />
            <TrendIndicator trend="improving" note="focusing on core MTP" />
          </div>
          <Sparkline data={weeklyData.missionAlignment} />
          <p className="mt-4 text-gray-300">
            60% of weekly actions directly serve Amity's MTP of transforming mental health at scale through healing entrepreneurship and technological integration.
          </p>
        </div>
        
        {/* Flow Readiness Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl border border-dark-700">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Readiness</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={40} />
            <TrendIndicator trend="improving" note="implementing structure" />
          </div>
          <Sparkline data={weeklyData.flowReadiness} />
          <p className="mt-4 text-gray-300">
            Composite score showing high intent but low structured flow practices. Working on implementing better daily structure.
          </p>
        </div>
        
        {/* Flow Leadership Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl border border-dark-700">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Leadership</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={50} />
            <TrendIndicator trend="steady" note="audience engine forming" />
          </div>
          <Sparkline data={weeklyData.flowLeadership} />
          <p className="mt-4 text-gray-300">
            Strong foundation with prior proof-of-concept (virtual summit with 1000 attendees, industry speaking engagements), but audience engine still forming.
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
            <li>Clear MTP with emotional charge and personal "why"</li>
            <li>Strong assets ready for deployment (course, TheraBox kits)</li>
            <li>Substantial book material (25+ interviews)</li>
            <li>Existing audience foundation (email list ~1500)</li>
            <li>Visionary leadership with authentic positioning</li>
          </ul>
        </div>
        
        {/* Key Risks */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl border border-dark-700">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Key Risks</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-200">
            <li>Too many simultaneous vectors without narrowed focus</li>
            <li>Scattered execution creating potential for overwhelm</li>
            <li>Marketing and funnel optimization bottlenecks</li>
            <li>Lack of clear weekly structure for flow triggers</li>
            <li>Significant cognitive load from competing priorities</li>
          </ul>
        </div>
      </div>
      
      {/* Action Plan */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl border border-dark-700 mb-8">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Action Plan</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-primary-300">Next Steps:</h3>
            <ol className="list-decimal pl-5 space-y-2 text-gray-200">
              <li>Relaunch newsletter with consistent weekly cadence</li>
              <li>Create 10 emails for automated sequence</li>
              <li>Simplify immediate goal focus to one primary vector</li>
              <li>Implement daily deep work blocks (2 hours minimum)</li>
              <li>Develop audience-building engine (newsletter, webinars, digital community)</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-medium text-primary-300">30-Day Goals:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-200">
              <li>Increase mission alignment to 75%</li>
              <li>Establish consistent daily flow structure</li>
              <li>Grow email list by 20%</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Coach Notes */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl border border-dark-700 mb-8">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Coach Notes</h2>
        <div className="prose max-w-none text-gray-200">
          <p>
            Amity shows exceptional vision and purpose clarity, but needs support in execution structure and focus. Her primary challenge is narrowing down multiple vectors into a sequential approach rather than parallel processing.
          </p>
          <p className="mt-4">
            The cognitive load from balancing competing priorities and cash pressure is creating barriers to consistent flow states. Recommend implementing a simple daily structure with clear triggers for flow (defined goals, immediate feedback mechanisms).
          </p>
          <p className="mt-4">
            Her audience-building potential is significant given her authentic positioning and prior success with the virtual summit. Focus should be on creating a sustainable content engine that doesn't require constant new creation.
          </p>
        </div>
      </div>
      
      {/* AI Chatbot */}
      <ClientChatbot currentClientId="amitycooper" allClientData={allClientData} />
    </div>
  );
}
