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

export default function MichaelDashboard() {
  // Get client data from context
  const { allClientData } = useClientData();
  
  // Weekly data for sparklines
  const weeklyData = {
    missionAlignment: [55, 58, 60, 60],
    flowReadiness: [65, 68, 70, 70],
    flowLeadership: [60, 62, 65, 65]
  };
  
  // Detailed flow readiness components
  const flowReadinessComponents = [
    { label: "Morning Routine Adherence", value: 80 },
    { label: "Goal Setting & Tracking", value: 75 },
    { label: "Energy Management", value: 60 },
    { label: "Distraction Management", value: 65 }
  ];
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Mission Alignment Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Mission Alignment</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={60} />
            <TrendIndicator trend="improving" note="deep clarity of theme, exploring delivery" />
          </div>
          <Sparkline data={weeklyData.missionAlignment} />
          <p className="mt-4 text-gray-300">
            60% of weekly activities directly advance Michael's AI-human creativity mission. Strong mission clarity in thematic purpose (human agency + AI), but still exploring multiple delivery pathways.
          </p>
        </div>
        
        {/* Flow Readiness Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Readiness</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={70} />
            <TrendIndicator trend="improving" note="solid structure, risk of overextension" />
          </div>
          <Sparkline data={weeklyData.flowReadiness} />
          <p className="mt-4 text-gray-300">
            Strong foundation for flow readiness through intentional structuring of mornings and goal setting. Re-engineered morning routine: phone-free, creative work first, low-light environment.
          </p>
        </div>
        
        {/* Flow Leadership Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Leadership</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={65} />
            <TrendIndicator trend="improving" note="vision clear, delivery forming" />
          </div>
          <Sparkline data={weeklyData.flowLeadership} />
          <p className="mt-4 text-gray-300">
            High leverage potential in shaping human-AI collaboration narrative and solutions. Uniquely positioned at the intersection of AI, flow science, and human agency.
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
            <li>Clear purpose focused on human creativity and agency in AI era</li>
            <li>Strong daily structure with optimized morning routine</li>
            <li>Visionary perspective on AI/human agency intersection</li>
            <li>Effective goal-setting with whiteboard system</li>
            <li>Access to testing ideas in current job and community</li>
          </ul>
        </div>
        
        {/* Key Risks */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Key Risks</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Focus diffusion across too many potential pathways</li>
            <li>Energy management challenges with extroverted activities</li>
            <li>Over-exploration without sufficient prototyping</li>
            <li>Travel and external obligations disrupting routines</li>
            <li>Lack of defined niche within broad AI/human agency space</li>
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
              <li>Pilot a parent workshop on AI/creativity/flow</li>
              <li>Draft 100-step plan for primary project focus</li>
              <li>Refine niche in AI/flow design space</li>
              <li>Create energy management protocol for high-demand days</li>
              <li>Prototype one interface concept for flow-friendly AI interaction</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-medium text-primary-300">30-Day Goals:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Complete first parent workshop with 5-10 participants</li>
              <li>Select primary project focus from exploration options</li>
              <li>Test energy management protocol for 2 weeks</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Coach Notes */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Coach Notes</h2>
        <div className="prose max-w-none">
          <p>
            Michael has a compelling vision at the intersection of AI, flow science, and human agency. His mission to safeguard creativity and grit across generations is timely and important.
          </p>
          <p className="mt-4">
            His re-engineered morning routine shows strong commitment to flow practices, with phone-free creative work first and a low-light environment. The whiteboard goal system with physical crossing-off of items is working well.
          </p>
          <p className="mt-4">
            The main challenge is focus diffusion across multiple potential pathways (workshops, books, interfaces, ventures). Recommend narrowing to 1-2 primary vehicles in the next 30 days to build momentum.
          </p>
          <p className="mt-4">
            Energy management is a concern, particularly with extroverted activities. Suggest creating a specific protocol for high-demand days and ensuring adequate recovery time.
          </p>
          <p className="mt-4">
            The "earned dopamine" framing is an interesting approach to fuel momentum. Worth exploring how this can be further leveraged in his flow system.
          </p>
        </div>
      </div>
      
      {/* AI Chatbot */}
      <ClientChatbot 
        currentClientId="michaelwhitaker"
        allClientData={allClientData}
      />
    </div>
  );
}
