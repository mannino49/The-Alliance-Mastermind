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

export default function BlairDashboard() {
  // Get client data from context
  const { allClientData } = useClientData();
  
  // Weekly data for sparklines
  const weeklyData = {
    missionAlignment: [60, 62, 65, 65],
    flowReadiness: [65, 68, 70, 70],
    flowLeadership: [55, 58, 60, 60]
  };
  
  // Detailed flow readiness components
  const flowReadinessComponents = [
    { label: "Distraction Management", value: 85 },
    { label: "Recovery Practices", value: 80 },
    { label: "Creative Work Blocks", value: 60 },
    { label: "Circadian Alignment", value: 55 }
  ];
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Mission Alignment Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Mission Alignment</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={65} />
            <TrendIndicator trend="improving" note="focused purpose" />
          </div>
          <Sparkline data={weeklyData.missionAlignment} />
          <p className="mt-4 text-gray-300">
            65% of Blair's weekly effort advancing exit framework/system. Mission is clear, niche-focused, and authentic to Blair's skills and values.
          </p>
        </div>
        
        {/* Flow Readiness Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Readiness</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={70} />
            <TrendIndicator trend="improving" note="strong foundation" />
          </div>
          <Sparkline data={weeklyData.flowReadiness} />
          <p className="mt-4 text-gray-300">
            Strong foundation for flow with excellent distraction control, recovery practices, and physical energy management. Creative work block integration still emerging.
          </p>
        </div>
        
        {/* Flow Leadership Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Leadership</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={60} />
            <TrendIndicator trend="steady" note="vision strong, systems developing" />
          </div>
          <Sparkline data={weeklyData.flowLeadership} />
          <p className="mt-4 text-gray-300">
            High leverage potential with authentic leadership vision, communication strength, and scalable systems mindset. Systems development in early stage.
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
            <li>Clear niche MTP focused on small business owners</li>
            <li>Excellent distraction management (Byron Katie + GTD mastery)</li>
            <li>Strong recovery practices (strength training, biking, skiing, Whoop tracking)</li>
            <li>Authentic communication style and leadership vision</li>
            <li>Scalable systems mindset for business exit frameworks</li>
          </ul>
        </div>
        
        {/* Key Risks */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Key Risks</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Tendency toward over-intellectualization and planning</li>
            <li>Delayed testing and prototyping of systems</li>
            <li>Inconsistent structuring of peak creative work (night energy)</li>
            <li>Questioning if mission is "big enough" despite clear resonance</li>
            <li>Need to move from concept to implementation phase</li>
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
              <li>Start 100-step roadmap for exit framework development</li>
              <li>Design and test initial tool modules for business owners</li>
              <li>Structure consistent 90-minute night creative sprints</li>
              <li>Explore AI integration to support system scalability</li>
              <li>Implement rapid prototyping approach for framework components</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-medium text-primary-300">30-Day Goals:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Complete 100-step roadmap with clear milestones</li>
              <li>Prototype at least 2 tool modules for business exits</li>
              <li>Establish consistent night flow block schedule (3x/week)</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Coach Notes */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Coach Notes</h2>
        <div className="prose max-w-none">
          <p>
            Blair has an excellent foundation for flow with his mastery of distraction management and strong recovery practices. His mission to help small business owners navigate exits is clear and authentic to his values.
          </p>
          <p className="mt-4">
            The primary opportunity is to leverage his peak creative energy at night by establishing structured 90-minute flow blocks during this optimal time. This will help move his exit framework from concept to prototype more efficiently.
          </p>
          <p className="mt-4">
            Blair should focus on rapid prototyping and testing of his system rather than extended planning. His tendency toward over-intellectualization could delay implementation, so establishing concrete milestones in his 100-step roadmap will be crucial.
          </p>
          <p className="mt-4">
            His interest in AI integration for scalability shows forward thinking and could significantly enhance the leverage of his system. Recommend exploring this after initial prototypes are tested with real business owners.
          </p>
        </div>
      </div>
      
      {/* AI Chatbot */}
      <ClientChatbot 
        currentClientId="blairlukan"
        allClientData={allClientData}
      />
    </div>
  );
}
