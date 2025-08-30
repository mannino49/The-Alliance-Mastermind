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

export default function AnatoliyDashboard() {
  // Get client data from context
  const { allClientData } = useClientData();
  
  // Weekly data for sparklines
  const weeklyData = {
    missionAlignment: [55, 58, 60, 60],
    flowReadiness: [50, 52, 55, 55],
    flowLeadership: [55, 58, 60, 60]
  };
  
  // Detailed flow readiness components
  const flowReadinessComponents = [
    { label: "Clear Goals", value: 65 },
    { label: "Deep Work Blocks", value: 50 },
    { label: "Peak Exits", value: 45 },
    { label: "Recovery Practices", value: 60 }
  ];
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Mission Alignment Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Mission Alignment</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={60} />
            <TrendIndicator trend="steady" note="clear purpose, early execution" />
          </div>
          <Sparkline data={weeklyData.missionAlignment} />
          <p className="mt-4 text-gray-300">
            60% of time advancing core system-building and first acquisition progress. Strong mission clarity with purpose deeply tied to cooperation and transformation. Focus on modernizing mid-sized legacy companies through cultural and technological transformation.
          </p>
        </div>
        
        {/* Flow Readiness Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Readiness</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={55} />
            <TrendIndicator trend="steady" note="good intent, needs consistency" />
          </div>
          <Sparkline data={weeklyData.flowReadiness} />
          <p className="mt-4 text-gray-300">
            Composite of clear goals, deep work blocks, peak exits, and recovery practices. Strong self-awareness and implementing structural fixes, but struggles with consistency and experiences bursts of intense work followed by dips.
          </p>
        </div>
        
        {/* Flow Leadership Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Leadership</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={60} />
            <TrendIndicator trend="steady" note="clear vision, early prototype" />
          </div>
          <Sparkline data={weeklyData.flowLeadership} />
          <p className="mt-4 text-gray-300">
            Readiness to scale impact through systems, training, and cultural upgrades. High leadership leverage potential with a clear vision for scalable transformation systems, but needs early testing on real companies.
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
            <li>Clear vision for company transformation</li>
            <li>Systems thinking approach to scaling impact</li>
            <li>Focus on cultural transformation</li>
            <li>Self-awareness about performance patterns</li>
            <li>Commitment to cooperation in the age of AI</li>
          </ul>
        </div>
        
        {/* Key Risks */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Key Risks</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Over-planning without execution</li>
            <li>Inconsistent work patterns</li>
            <li>Task switching fatigue</li>
            <li>Getting stuck in design phase</li>
            <li>Energy drain from multiple projects</li>
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
              <li>Finalize system playbook draft</li>
              <li>Structure 100-step plan for company transformation</li>
              <li>Close first acquisition target</li>
              <li>Implement consistent deep work blocks on Mondays</li>
              <li>Develop peak exit strategy for high-energy periods</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-medium text-primary-300">30-Day Goals:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Complete first draft of CEO training playbook</li>
              <li>Establish consistent Monday deep work routine</li>
              <li>Identify and approach 3 potential acquisition targets</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Coach Notes */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Coach Notes</h2>
        <div className="prose max-w-none">
          <p>
            Anatoliy has a clear mission to modernize mid-sized legacy companies through cultural and technological transformation, with an emphasis on cooperation in the age of AI.
          </p>
          <p className="mt-4">
            His primary challenge is moving from concept to firm strategy. While he has a strong vision for acquiring companies and implementing transformation, he's still in the early capital raising stage with no acquisitions yet.
          </p>
          <p className="mt-4">
            Anatoliy struggles with consistency in his work patterns, experiencing bursts of intense work followed by dips. He's aware of this challenge and is working on implementing structural fixes like dedicating Mondays to deep work and creating clear goal lists.
          </p>
          <p className="mt-4">
            For leadership leverage, Anatoliy wants to build tight systems and training playbooks for CEOs to drive transformation. He's exploring how to design scalable performance coaching and upgrade menus for acquisitions, with a focus on aligning individual, team, and company goals for cultural shift.
          </p>
          <p className="mt-4">
            Recommend focusing on finalizing his system playbook draft and structuring a concrete 100-step plan while simultaneously pursuing his first acquisition. This balanced approach will help him avoid getting stuck in the planning phase while making tangible progress toward his vision.
          </p>
        </div>
      </div>
      
      {/* AI Chatbot */}
      <ClientChatbot 
        currentClientId="anatoliyotchkovskiy"
        allClientData={allClientData}
      />
    </div>
  );
}
