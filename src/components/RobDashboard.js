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

export default function RobDashboard() {
  // Get client data from context
  const { allClientData } = useClientData();
  
  // Weekly data for sparklines
  const weeklyData = {
    missionAlignment: [45, 48, 50, 50],
    flowReadiness: [50, 52, 55, 55],
    flowLeadership: [60, 62, 65, 65]
  };
  
  // Detailed flow readiness components
  const flowReadinessComponents = [
    { label: "Goal-Setting Consistency", value: 60 },
    { label: "Creative Microdosing", value: 65 },
    { label: "Recovery Practices", value: 55 },
    { label: "Travel Adaptation", value: 40 }
  ];
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Mission Alignment Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Mission Alignment</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={50} />
            <TrendIndicator trend="steady" note="purpose clear, execution scattered" />
          </div>
          <Sparkline data={weeklyData.missionAlignment} />
          <p className="mt-4 text-gray-300">
            50% of weekly work advancing top-priority missions/projects. Clear entrepreneurial drive and creative ambition, but energy is diffused across multiple projects.
          </p>
        </div>
        
        {/* Flow Readiness Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Readiness</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={55} />
            <TrendIndicator trend="improving" note="solid tools, variable adherence" />
          </div>
          <Sparkline data={weeklyData.flowReadiness} />
          <p className="mt-4 text-gray-300">
            Rob engages with core practices when conditions allow, but travel disrupts consistency. Responding well to micro-practices like 5-min gratitude and small creative exercises.
          </p>
        </div>
        
        {/* Flow Leadership Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Leadership</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={65} />
            <TrendIndicator trend="improving" note="vision forming, execution approaching" />
          </div>
          <Sparkline data={weeklyData.flowLeadership} />
          <p className="mt-4 text-gray-300">
            Positioned for high leverage in collective flow leadership with strong commitment to building community. Playing a central role in shaping potential Flow Alliance offerings.
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
            <li>Entrepreneurial energy and creative ambition</li>
            <li>Genuine curiosity and diverse interests</li>
            <li>Community builder with vision for Flow Alliance</li>
            <li>Responds well to micro-practices for flow</li>
            <li>Pre-planning nightly goals shows positive impact</li>
          </ul>
        </div>
        
        {/* Key Risks */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Key Risks</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Diffusion of energy across too many simultaneous projects</li>
            <li>Travel disrupts consistency of flow practices</li>
            <li>Planning fatigue without clear execution timeline</li>
            <li>Difficulty prioritizing long-term projects</li>
            <li>Lack of travel-resilient routines</li>
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
              <li>Prioritize top 2 projects for focused execution</li>
              <li>Create travel-proof micro flow routines (5-10 min practices)</li>
              <li>Finalize Flow Alliance program outline with clear timeline</li>
              <li>Develop post-travel reset protocol to maintain consistency</li>
              <li>Implement project tracking system to measure progress</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-medium text-primary-300">30-Day Goals:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Select and commit to 2 priority projects</li>
              <li>Test travel micro-routine during next trip</li>
              <li>Complete Flow Alliance program structure with pricing</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Coach Notes */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Coach Notes</h2>
        <div className="prose max-w-none">
          <p>
            Rob demonstrates strong entrepreneurial drive and creative vision across multiple domains. His challenge is not a lack of ideas or motivation, but rather the diffusion of energy across too many simultaneous projects.
          </p>
          <p className="mt-4">
            The pre-planning of nightly goals has shown positive results when implemented consistently. This practice should be adapted to work during travel periods, which currently disrupt his flow routines.
          </p>
          <p className="mt-4">
            His role in developing the Flow Alliance program represents a significant opportunity for leadership leverage. To avoid planning fatigue, he needs to establish clear timelines, pricing strategy, and a launch date.
          </p>
          <p className="mt-4">
            Recommend focusing on creating "travel-proof" micro-practices (5-10 minutes) that can be maintained regardless of location. These should include his effective practices like drawing, meditation, and goal-setting in condensed formats.
          </p>
        </div>
      </div>
      
      {/* AI Chatbot */}
      <ClientChatbot 
        currentClientId="rob finlay"
        allClientData={allClientData}
      />
    </div>
  );
}
