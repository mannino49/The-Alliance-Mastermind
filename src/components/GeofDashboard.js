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

export default function GeofDashboard() {
  // Get client data from context
  const { allClientData } = useClientData();
  
  // Weekly data for sparklines
  const weeklyData = {
    missionAlignment: [55, 58, 60, 60],
    flowReadiness: [60, 62, 65, 65],
    flowLeadership: [55, 58, 60, 60]
  };
  
  // Detailed flow readiness components
  const flowReadinessComponents = [
    { label: "Hands-on Creative Practice", value: 80 },
    { label: "Curiosity Mapping", value: 55 },
    { label: "Idea Filtering Structure", value: 50 },
    { label: "Project Follow-through", value: 60 }
  ];
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Mission Alignment Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Mission Alignment</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={60} />
            <TrendIndicator trend="steady" note="clear purpose, pathway forming" />
          </div>
          <Sparkline data={weeklyData.missionAlignment} />
          <p className="mt-4 text-gray-300">
            60% of effort advancing hands-on projects tied to identified needs. Clear personal purpose in inventing physical solutions that earn appreciation, but struggling to map curiosities to market demand and experiencing challenges with late-stage market entry.
          </p>
        </div>
        
        {/* Flow Readiness Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Readiness</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={65} />
            <TrendIndicator trend="steady" note="solid base, needs process discipline" />
          </div>
          <Sparkline data={weeklyData.flowReadiness} />
          <p className="mt-4 text-gray-300">
            Strong foundation for flow in physical tinkering and rapid prototyping. Enjoys shop work and micro projects, but needs better structure for idea evaluation and project sequencing to avoid dead-ends or repeated late-market realizations.
          </p>
        </div>
        
        {/* Flow Leadership Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Leadership</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={60} />
            <TrendIndicator trend="steady" note="collaborative intent, execution pending" />
          </div>
          <Sparkline data={weeklyData.flowLeadership} />
          <p className="mt-4 text-gray-300">
            High potential for collective flow and collaborative innovation. Open to joining innovation shops or design studios for idea stimulation and social engagement, but needs proactive steps to plug into existing systems for idea flow.
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
            <li>Rapid prototyping and hands-on creation</li>
            <li>Creative breadth across multiple domains</li>
            <li>Strong idea generation capabilities</li>
            <li>Ability to create impressive physical solutions</li>
            <li>Openness to collaborative innovation</li>
          </ul>
        </div>
        
        {/* Key Risks */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Key Risks</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Late-market entry with innovations</li>
            <li>Diffusion of focus across too many ideas</li>
            <li>Under-leveraging existing networks</li>
            <li>Over-analysis leading to delayed execution</li>
            <li>Lack of structured idea evaluation process</li>
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
              <li>Complete passion recipe exercise to clarify focus areas</li>
              <li>Schedule meetings with local design studios for collaboration</li>
              <li>Develop structured curiosity mapping system</li>
              <li>Create prototyping plan with clear milestones</li>
              <li>Explore licensing options for existing ideas</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-medium text-primary-300">30-Day Goals:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Establish weekly tinkering sessions with clear focus</li>
              <li>Connect with at least two potential collaborative partners</li>
              <li>Implement simple idea evaluation framework</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Coach Notes */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Coach Notes</h2>
        <div className="prose max-w-none">
          <p>
            Geoffrey is in a post-retirement creative exploration phase, seeking fulfillment through hands-on invention. He has a clear joy in creating physical solutions that impress others and contribute value.
          </p>
          <p className="mt-4">
            His primary challenge is connecting his creative capabilities to market needs efficiently. He tends to either over-analyze or realize too late that the market has moved past his innovations. A structured approach to idea evaluation would significantly improve his impact.
          </p>
          <p className="mt-4">
            Geoffrey's flow state is strongly tied to hands-on creation - rapid prototyping, shop tinkering, and micro projects bring him satisfaction. He also enjoys creative practices like video editing, drawing, and furniture design.
          </p>
          <p className="mt-4">
            For leadership leverage, Geoffrey shows strong potential for collaborative innovation rather than solo ventures. He's expressed interest in joining innovation shops or design studios, and recognizes the value in licensing rather than scaling alone.
          </p>
          <p className="mt-4">
            Recommend focusing on structured curiosity mapping and establishing connections with local design communities as the highest leverage interventions. This would provide both the process discipline and collaborative environment needed to channel his creative energy effectively.
          </p>
        </div>
      </div>
      
      {/* AI Chatbot */}
      <ClientChatbot 
        currentClientId="geoffreygarth"
        allClientData={allClientData}
      />
    </div>
  );
}
