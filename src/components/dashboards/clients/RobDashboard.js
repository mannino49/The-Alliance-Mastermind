import React from 'react';
import { useClientData } from '../../../shared/context/ClientDataContext';
import ClientChatbot from '../../features/chatbot/ClientChatbot';

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
  let colorClass = 'bg-red-500';
  if (value >= 75) colorClass = 'bg-green-500';
  else if (value >= 50) colorClass = 'bg-yellow-500';
  
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
    missionAlignment: [45, 48, 50, 60],
    flowReadiness: [50, 52, 55, 65],
    flowLeadership: [60, 62, 65, 70]
  };
  
  // Detailed flow readiness components
  const flowReadinessComponents = [
    { label: "Pre-Planning Discipline", value: 70 },
    { label: "Creative Microdosing", value: 75 },
    { label: "Recovery Rituals", value: 60 },
    { label: "Post-Travel Reset", value: 45 }
  ];
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Mission Alignment Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Mission Alignment</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={60} />
            <TrendIndicator trend="improving" note="pre-planning drives focus" />
          </div>
          <Sparkline data={weeklyData.missionAlignment} />
          <p className="mt-4 text-gray-300">
            60% of scheduled days pre-planned the night before. Stronger awareness of how pre-planning drives focus and flow. Active progress on two books and screenwriting experiments, with execution as primary bottleneck.
          </p>
        </div>
        
        {/* Flow Readiness Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Readiness</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={65} />
            <TrendIndicator trend="improving" note="growing toolkit, uneven execution" />
          </div>
          <Sparkline data={weeklyData.flowReadiness} />
          <p className="mt-4 text-gray-300">
            Daily creativity microdosing via drawing has become enjoyable and integrated. Practices are sticky when environment is stable, but needs structured post-travel reset ritual to protect flow continuity.
          </p>
        </div>
        
        {/* Flow Leadership Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Leadership</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={70} />
            <TrendIndicator trend="improving" note="influence growing, relational focus deepening" />
          </div>
          <Sparkline data={weeklyData.flowLeadership} />
          <p className="mt-4 text-gray-300">
            Contributing to Flow Alliance evolution with monthly accountability calls and scaling cohorts. Strongly impacted by relationship session, applying insights at home with positive results. Stepping into connector role within the Alliance.
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
            <li>Creative breadth across books and screenwriting</li>
            <li>Pre-planning discipline driving focus and flow</li>
            <li>Community builder and connector within Alliance</li>
            <li>Relational awareness and home application</li>
            <li>Daily creativity microdosing via drawing</li>
          </ul>
        </div>
        
        {/* Key Risks */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Key Risks</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Travel continues to derail consistency and momentum</li>
            <li>Execution drift without structured post-travel reset</li>
            <li>Bandwidth overload from Alliance enthusiasm</li>
            <li>Lack of recovery playbook weakens re-entry</li>
            <li>Writing exercises may be too cognitively heavy</li>
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
              <li>Build a post-travel reset ritual (gratitude + scaled goals + light creative release)</li>
              <li>Continue Alliance contributions while keeping bandwidth guardrails</li>
              <li>Systematize sauna + meditation practices as recovery anchors</li>
              <li>Balance enthusiasm for program-building with personal priorities</li>
              <li>Develop structured recovery playbook for travel transitions</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-medium text-primary-300">30-Day Goals:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Test post-travel reset ritual during next trip</li>
              <li>Continue Alliance monthly accountability calls and feedback buddy system</li>
              <li>Maintain daily drawing microdosing while exploring lighter creative release</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Detailed Insight Boxes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        
        {/* Execution Rhythm Box */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-xl shadow-xl border border-blue-700">
          <h3 className="text-lg font-semibold text-blue-100 mb-4">🎯 Execution Rhythm</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-blue-200">Pre-Planning</span>
              <span className="text-blue-100 font-bold">60%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-blue-200">Night-Before Goals</span>
              <span className="text-blue-100 font-bold">Key Driver</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-blue-200">Books Progress</span>
              <span className="text-blue-100 font-bold">2 Active</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-blue-200">Screenwriting</span>
              <span className="text-blue-100 font-bold">Experimenting</span>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              Discovered that night-before planning and goal-directed scheduling are the keys to entering flow and maintaining productivity. Execution, not creativity, is the primary bottleneck.
            </p>
          </div>
        </div>

        {/* Recovery Playbook Box */}
        <div className="bg-gradient-to-br from-green-900 to-green-800 p-6 rounded-xl shadow-xl border border-green-700">
          <h3 className="text-lg font-semibold text-green-100 mb-4">🌱 Recovery Playbook</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-green-200">Daily Drawing</span>
              <span className="text-green-100 font-bold">Integrated</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-green-200">Gratitude Practice</span>
              <span className="text-green-100 font-bold">Micro-Scale</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-green-200">Sauna + Meditation</span>
              <span className="text-green-100 font-bold">Emerging</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-green-200">Post-Travel Reset</span>
              <span className="text-green-100 font-bold">Needs Structure</span>
            </div>
            <p className="text-green-200 text-sm mt-4">
              Daily creativity microdosing via drawing has become enjoyable and integrated. Practices are sticky when environment is stable, but needs structured post-travel reset ritual.
            </p>
          </div>
        </div>

        {/* Relationship Layer Box */}
        <div className="bg-gradient-to-br from-purple-900 to-purple-800 p-6 rounded-xl shadow-xl border border-purple-700">
          <h3 className="text-lg font-semibold text-purple-100 mb-4">🤝 Relationship Layer</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-purple-200">Alliance Evolution</span>
              <span className="text-purple-100 font-bold">Contributing</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-purple-200">Monthly Calls</span>
              <span className="text-purple-100 font-bold">Active</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-purple-200">Home Application</span>
              <span className="text-purple-100 font-bold">Positive Results</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-purple-200">Peer Connections</span>
              <span className="text-purple-100 font-bold">Valued</span>
            </div>
            <p className="text-purple-200 text-sm mt-4">
              Stepping into connector role within Alliance. Strongly impacted by relationship session, immediately applying insights at home. Recognizing relational alignment as critical lever for performance.
            </p>
          </div>
        </div>
      </div>
      
      {/* Coach Notes */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Coach Notes</h2>
        <div className="prose max-w-none">
          <p>
            Rob has made significant progress in understanding his execution rhythm and flow triggers. His discovery that night-before planning and goal-directed scheduling are keys to entering flow represents a major breakthrough in his approach to productivity.
          </p>
          <p className="mt-4">
            The daily creativity microdosing via drawing has become a sustainable practice that feels playful rather than pressured. This is a crucial shift from previous approaches that felt too cognitively heavy. His recognition of execution, not creativity, as the primary bottleneck shows mature self-awareness.
          </p>
          <p className="mt-4">
            His contribution to Flow Alliance evolution demonstrates growing leadership leverage, particularly in his role as a connector and community builder. The impact of Annie's relationship session and his immediate application at home shows his ability to integrate insights into his personal life effectively.
          </p>
          <p className="mt-4">
            The primary challenge remains travel disruption and the need for a structured post-travel reset ritual. His practices are sticky when the environment is stable, but he needs a systematic approach to maintain flow continuity during transitions. The emerging sauna + meditation practices show promise as recovery anchors.
          </p>
        </div>
      </div>
      
      {/* AI Chatbot */}
      <ClientChatbot 
        currentClientId="rob"
        allClientData={allClientData}
      />
    </div>
  );
}
