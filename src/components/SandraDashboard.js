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

export default function SandraDashboard() {
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
    { label: "Clear Goals", value: 60 },
    { label: "Creative Practice Consistency", value: 75 },
    { label: "Flow Activity Time", value: 70 },
    { label: "Recovery Adherence", value: 65 }
  ];
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Mission Alignment Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Mission Alignment</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={60} />
            <TrendIndicator trend="steady" note="mission clarity emerging, execution diffuse" />
          </div>
          <Sparkline data={weeklyData.missionAlignment} />
          <p className="mt-4 text-gray-300">
            60% of effort advancing design and testing of new career models (advisory, consulting, fund roles). Strong thematic clarity in helping leaders and organizations cross to higher performance levels through talent and culture design, but facing overwhelm from too many potential pathways.
          </p>
        </div>
        
        {/* Flow Readiness Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Readiness</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={65} />
            <TrendIndicator trend="steady" note="good base, needs daily structure" />
          </div>
          <Sparkline data={weeklyData.flowReadiness} />
          <p className="mt-4 text-gray-300">
            Composite of clear goals, creative practice consistency, flow activity time, and recovery adherence. Strong foundations in recovery and primary flow activity (boxing, kickboxing), but needs clearer daily structure to stabilize momentum.
          </p>
        </div>
        
        {/* Flow Leadership Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Leadership</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={60} />
            <TrendIndicator trend="steady" note="strong potential, early prototyping" />
          </div>
          <Sparkline data={weeklyData.flowLeadership} />
          <p className="mt-4 text-gray-300">
            Readiness to scale impact via frameworks, coaching, and advisory offerings. High leverage potential with deep domain expertise and curiosity about new sectors, but needs structured prototyping to validate fit and refine positioning.
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
            <li>Deep expertise in human capital and organizational design</li>
            <li>Consistent creative practices (meditation, writing, drawing)</li>
            <li>Commitment to flow-inducing activities (boxing, kickboxing)</li>
            <li>Strong recovery discipline</li>
            <li>Thematic clarity in professional purpose</li>
          </ul>
        </div>
        
        {/* Key Risks */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Key Risks</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Overwhelm from too many potential career pathways</li>
            <li>Discomfort with "nothingness" post-corporate structure</li>
            <li>Lack of clear daily structure</li>
            <li>Difficulty mapping actions to emerging mission</li>
            <li>Bouts of chaos and uncertainty</li>
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
              <li>Build comprehensive 100-step roadmap for career transition</li>
              <li>Test advisory prototype with 3-5 clients from diverse sectors</li>
              <li>Structure daily creative routines with clear start/end times</li>
              <li>Explore potential collaborations for framework development</li>
              <li>Create balanced portfolio of finance clients and founders</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-medium text-primary-300">30-Day Goals:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Complete first draft of career transition roadmap</li>
              <li>Conduct 3 prototype advisory sessions with diverse clients</li>
              <li>Establish consistent daily structure with creative blocks</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Coach Notes */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Coach Notes</h2>
        <div className="prose max-w-none">
          <p>
            Sandra is navigating a significant transition from a structured corporate identity to a more creative, fluid, self-directed chapter in her career. She's exploring consulting/advisory paths, possibly launching her own firm, or joining a fund if values align.
          </p>
          <p className="mt-4">
            Her mission centers on blending her accumulated expertise in human capital, organizational design, and talent management with a renewed sense of purpose and joy. There's strong thematic clarity in her desire to help leaders and organizations reach higher performance levels through talent and culture design.
          </p>
          <p className="mt-4">
            Sandra has embraced daily practices like meditation, writing, drawing, and reading, and is committed to primary flow activities such as boxing and kickboxing. However, she feels discomfort with the "nothingness" of her post-corporate life, which leads to bouts of chaos and uncertainty.
          </p>
          <p className="mt-4">
            For leadership leverage, Sandra wants to test her advisory value beyond financial services, exploring work with founders, VCs, and tech/creative sectors. She's considering a balanced portfolio approach to explore adjacent markets while leveraging her existing strengths.
          </p>
          <p className="mt-4">
            Recommend focusing on building a structured 100-step roadmap for her career transition while simultaneously testing her advisory approach with a diverse set of clients. Establishing a clear daily structure with dedicated time for creative practices will help stabilize her nervous system and maintain momentum during this transition period.
          </p>
        </div>
      </div>
      
      {/* AI Chatbot */}
      <ClientChatbot 
        currentClientId="sandraozols"
        allClientData={allClientData}
      />
    </div>
  );
}
