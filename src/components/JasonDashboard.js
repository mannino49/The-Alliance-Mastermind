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

export default function JasonDashboard() {
  // Get client data from context
  const { allClientData } = useClientData();
  
  // Weekly data for sparklines
  const weeklyData = {
    missionAlignment: [55, 58, 60, 60],
    flowReadiness: [50, 52, 55, 55],
    flowLeadership: [60, 62, 65, 65]
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
            <MetricScore score={60} />
            <TrendIndicator trend="improving" note="clear mission, competing demands" />
          </div>
          <Sparkline data={weeklyData.missionAlignment} />
          <p className="mt-4 text-gray-300">
            60% of weekly effort advancing core AI/math innovation and reskilling vision. Strong alignment between mission and emerging execution (AI model + DARPA grant), but competing with practical obligations.
          </p>
        </div>
        
        {/* Flow Readiness Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Readiness</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={55} />
            <TrendIndicator trend="steady" note="strong framework, vulnerable to overload" />
          </div>
          <Sparkline data={weeklyData.flowReadiness} />
          <p className="mt-4 text-gray-300">
            Excellent intellectual preparation and intent to structure for flow with proposed 90-min AM work blocks and 4-hr weekend sessions. Challenges with execution consistency and risk of burnout from dual commitments.
          </p>
        </div>
        
        {/* Flow Leadership Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Leadership</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={65} />
            <TrendIndicator trend="improving" note="high potential, prototyping phase needed" />
          </div>
          <Sparkline data={weeklyData.flowLeadership} />
          <p className="mt-4 text-gray-300">
            High potential to lead paradigm-shifting innovation and collective flow projects. Vision to scale AI innovation to transform education, worker reskilling, and early childhood learning.
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
            <li>Novel AI innovation approach (attractor space-based)</li>
            <li>Visionary systems thinker with transformative ideas</li>
            <li>High-level network connections (defense, quantum computing)</li>
            <li>Clear intent to structure work for flow states</li>
            <li>Strong intellectual preparation and theoretical foundation</li>
          </ul>
        </div>
        
        {/* Key Risks */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Key Risks</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Work-life balance strain from dual commitments</li>
            <li>Execution consistency challenges</li>
            <li>Potential burnout from corporate job + innovation pursuit</li>
            <li>Balancing massive vision with need for small daily wins</li>
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
              <li>Build 100-step plan for AI innovation project</li>
              <li>Finalize DARPA grant application with clear milestones</li>
              <li>Structure small visible wins for family support and self-motivation</li>
              <li>Implement 90-min AM work blocks with clear boundaries</li>
              <li>Create decision framework for corporate role vs. innovation pursuit</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-medium text-primary-300">30-Day Goals:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Complete DARPA grant application</li>
              <li>Test 90-min AM work blocks for 3 weeks</li>
              <li>Develop first prototype of attractor space AI model</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Coach Notes */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Coach Notes</h2>
        <div className="prose max-w-none">
          <p>
            Jason has a transformative vision at the intersection of AI, mathematics, and education. His novel approach to AI (attractor space-based rather than gradient descent) represents significant innovation potential.
          </p>
          <p className="mt-4">
            The primary challenge is balancing his visionary work with practical realities. The potential corporate role at Hasbro would provide financial stability but could consume significant time and energy away from his core mission.
          </p>
          <p className="mt-4">
            His intent to structure daily work with 90-min AM blocks and 4-hr weekend sessions shows strong flow awareness. However, execution consistency is at risk due to competing demands and the massive scope of his vision.
          </p>
          <p className="mt-4">
            Recommend focusing on creating small, visible wins that can build family trust/support and personal momentum. The 100-step plan will be crucial for breaking down the massive vision into manageable pieces.
          </p>
          <p className="mt-4">
            Jason's networking activities (defense contacts, quantum computing, singularity networks) are valuable for his leadership leverage. His preference for building scalable systems rather than managing large teams aligns well with his strengths.
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
