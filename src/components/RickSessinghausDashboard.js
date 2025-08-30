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

export default function RickSessinghausDashboard() {
  // Get client data from context
  const { allClientData } = useClientData();
  
  // Weekly data for sparklines
  const weeklyData = {
    missionAlignment: [45, 48, 50, 50],
    flowReadiness: [50, 52, 55, 55],
    flowLeadership: [55, 58, 60, 60]
  };
  
  // Detailed flow readiness components
  const flowReadinessComponents = [
    { label: "Flow Block Adherence", value: 60 },
    { label: "Meditation Practice", value: 70 },
    { label: "Distraction Management", value: 45 },
    { label: "Recovery Activities", value: 50 }
  ];
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Mission Alignment Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Mission Alignment</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={50} />
            <TrendIndicator trend="improving" note="clarity emerging" />
          </div>
          <Sparkline data={weeklyData.missionAlignment} />
          <p className="mt-4 text-gray-300">
            50% of time spent on activities directly advancing AI product, book, or core coaching. Clear on strategic priorities but execution still diffused.
          </p>
        </div>
        
        {/* Flow Readiness Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Readiness</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={55} />
            <TrendIndicator trend="improving" note="adopting new practices" />
          </div>
          <Sparkline data={weeklyData.flowReadiness} />
          <p className="mt-4 text-gray-300">
            Strong intent and adoption of focused practices (meditation, micro flow blocks), but overload and inconsistent implementation undermine readiness.
          </p>
        </div>
        
        {/* Flow Leadership Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Leadership</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={60} />
            <TrendIndicator trend="improving" note="scaling systems emerging" />
          </div>
          <Sparkline data={weeklyData.flowLeadership} />
          <p className="mt-4 text-gray-300">
            Positioned for high collective flow leadership leverage — authentic, credible, and ambitious with strong brand momentum.
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
            <li>Clear mission and strategic priorities</li>
            <li>Strong brand momentum in mental performance coaching</li>
            <li>Visionary plans for scaling and new ventures</li>
            <li>Adoption of focused practices (meditation, micro flow blocks)</li>
            <li>Authentic and credible leadership presence</li>
          </ul>
        </div>
        
        {/* Key Risks */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Key Risks</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Overcommitment and "hustler's mindset" leading to cognitive overload</li>
            <li>Diffused focus across too many initiatives</li>
            <li>Inconsistent boundary setting and opportunity filtering</li>
            <li>Early scaling stress without structured plan</li>
            <li>Insufficient batching of media/marketing efforts</li>
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
              <li>Finalize 100-step roadmap to clarify priorities and filter opportunities</li>
              <li>Implement batching strategy for media and marketing efforts</li>
              <li>Establish stronger boundaries and opportunity filtering system</li>
              <li>Develop structured scaling plan for new ventures</li>
              <li>Optimize travel routines for better flow state access</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-medium text-primary-300">30-Day Goals:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Complete 100-step roadmap with clear priorities</li>
              <li>Establish media batching system (1 day/week)</li>
              <li>Increase flow block adherence to 75%</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Coach Notes */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Coach Notes</h2>
        <div className="prose max-w-none">
          <p>
            Rick has excellent strategic clarity but struggles with tactical execution due to overcommitment. His "hustler's mindset" and desire to help others leads to boundary issues and cognitive overload.
          </p>
          <p className="mt-4">
            The new meditation practice is showing positive results, particularly for sleep quality. Recommend continuing this while focusing on shorter flow blocks (20-25 min) that match his natural attention span.
          </p>
          <p className="mt-4">
            His brand momentum and leadership position in mental performance coaching create significant opportunities for scaling, but he needs a more structured approach to avoid burnout. The 100-step roadmap will be crucial for filtering opportunities and maintaining focus on his primary goals: AI-enabled golf product, second book, and core coaching.
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
