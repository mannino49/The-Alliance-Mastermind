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

export default function BruceBowserDashboard() {
  // Get client data from context
  const { allClientData } = useClientData();
  
  // Weekly data for sparklines
  const weeklyData = {
    missionAlignment: [60, 62, 65, 65],
    flowReadiness: [55, 58, 60, 60],
    flowLeadership: [65, 68, 70, 70]
  };
  
  // Detailed flow readiness components
  const flowReadinessComponents = [
    { label: "Creative Microdosing", value: 55 },
    { label: "Release Activities", value: 60 },
    { label: "Recovery Practices", value: 65 },
    { label: "Daily Structure", value: 60 }
  ];
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Mission Alignment Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Mission Alignment</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={65} />
            <TrendIndicator trend="steady" note="purpose clear, sequencing coalescing" />
          </div>
          <Sparkline data={weeklyData.missionAlignment} />
          <p className="mt-4 text-gray-300">
            65% of effort directly advancing subscription model, dual-use clinic, or pharma disruption initiatives. Strong mission clarity with multiple innovative vectors, but risk of juggling too many innovations simultaneously.
          </p>
        </div>
        
        {/* Flow Readiness Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Readiness</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={60} />
            <TrendIndicator trend="steady" note="rebuilding, with good intent" />
          </div>
          <Sparkline data={weeklyData.flowReadiness} />
          <p className="mt-4 text-gray-300">
            Composite of daily creative microdosing, release activities, and recovery practices. Solid intent and awareness; rebuilding routines for sustained flow, but needs structure and accountability.
          </p>
        </div>
        
        {/* Flow Leadership Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Leadership</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={70} />
            <TrendIndicator trend="improving" note="strong vision, execution ramping up" />
          </div>
          <Sparkline data={weeklyData.flowLeadership} />
          <p className="mt-4 text-gray-300">
            Readiness to deliver transformative impact at scale while sustaining flow culture. High leverage potential as an authentic, innovative leader in veterinary and pet wellness space, with execution now ramping up.
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
            <li>Bold innovation in veterinary services</li>
            <li>Market disruptor mindset</li>
            <li>Authentic leadership style</li>
            <li>Strong vision for transforming pet care</li>
            <li>Willingness to explore partnerships and collaborations</li>
          </ul>
        </div>
        
        {/* Key Risks */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Key Risks</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Focus diffusion across multiple innovations</li>
            <li>Execution overload without proper sequencing</li>
            <li>Rebuilding recovery practices after drift</li>
            <li>Balancing intensity with creative release</li>
            <li>Maintaining consistency in flow-supporting habits</li>
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
              <li>Draft comprehensive 100-step plan for veterinary innovations</li>
              <li>Structure daily release activities (walks, guitar, drawing)</li>
              <li>Sequence major innovations to prevent diluted focus</li>
              <li>Establish accountability system for recovery practices</li>
              <li>Integrate creative microdosing into daily schedule</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-medium text-primary-300">30-Day Goals:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Complete first draft of innovation sequencing plan</li>
              <li>Establish consistent daily creative practice</li>
              <li>Delegate key execution items to new president</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Coach Notes */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Coach Notes</h2>
        <div className="prose max-w-none">
          <p>
            Bruce is focused on transforming veterinary services through multiple innovative approaches: subscription-based models to enhance pet longevity and affordability, dual-use clinic models (daytime and emergency services), and disrupting pet pharmaceuticals with better pricing via partnerships.
          </p>
          <p className="mt-4">
            He has recognized the need to rebuild his release activities such as walks, creative microdosing (guitar, drawing), and has admitted drifting from past recovery habits despite having written a book on the subject. He's committed to adding humor and creative activities to his daily life to balance intensity.
          </p>
          <p className="mt-4">
            Bruce has high leadership leverage potential, positioned as an authentic, innovative leader in the veterinary and pet wellness space. He's exploring cohabitation design for pets and humans as a potential market disruptor and is open to partnerships to build and scale his ideas.
          </p>
          <p className="mt-4">
            The main challenge is ensuring proper execution sequencing and team delegation to prevent focus diffusion across too many simultaneous innovations. The recent hiring of a new president should help with this delegation.
          </p>
          <p className="mt-4">
            Recommend focusing on creating a structured plan for innovation sequencing while simultaneously rebuilding consistent recovery and creative practices. Bruce should leverage his new president to handle execution details while he focuses on vision and strategic partnerships.
          </p>
        </div>
      </div>
      
      {/* AI Chatbot */}
      <ClientChatbot 
        currentClientId="brucebowser"
        allClientData={allClientData}
      />
    </div>
  );
}
