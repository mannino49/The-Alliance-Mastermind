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
        <span className="text-gray-300">{label}</span>
        <span className="text-gray-300">{value}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div 
          className={`${colorClass} h-2.5 rounded-full transition-all duration-300`} 
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
    missionAlignment: [60, 65, 68, 70],
    flowReadiness: [55, 58, 60, 60],
    flowLeadership: [65, 70, 72, 75]
  };
  
  // Detailed flow readiness components
  const flowReadinessComponents = [
    { label: "Creative Process Framework", value: 70 },
    { label: "Morning Routines (Sauna/Meditation)", value: 75 },
    { label: "Recovery Calibration", value: 65 },
    { label: "Dopamine Management", value: 60 }
  ];
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Mission Alignment Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Mission Alignment</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={70} />
            <TrendIndicator trend="improving" note="strong momentum, multiple fronts" />
          </div>
          <Sparkline data={weeklyData.missionAlignment} />
          <p className="mt-4 text-gray-300">
            70% of effort advancing priority vet + healthcare innovations. Bruce is fully immersed in pet space with 10 subscription vet clinics built/open, oral health device, and pet-friendly housing design. Strong creative process framework application.
          </p>
        </div>
        
        {/* Flow Readiness Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Readiness</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={60} />
            <TrendIndicator trend="steady" note="high capacity, recovery calibration needed" />
          </div>
          <Sparkline data={weeklyData.flowReadiness} />
          <p className="mt-4 text-gray-300">
            High flow capacity and strong creative energy. Bruce reports being "jacked up" with excitement, using guitar, walks, humor, and sketching as microdosing tools. Needs systematized recovery to manage dopamine/norepinephrine spikes.
          </p>
        </div>
        
        {/* Flow Leadership Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Leadership</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={75} />
            <TrendIndicator trend="improving" note="creative leadership breakthrough" />
          </div>
          <Sparkline data={weeklyData.flowLeadership} />
          <p className="mt-4 text-gray-300">
            Creative leadership breakthrough: Bruce now owns his role as visionary + innovator, not just business operator. Actively testing leadership in creative incubation cycles and extending to challenge medical experts, moving teams from analysis paralysis to innovation.
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
      
      {/* Additional Metrics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Flow Recovery Index */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-xl shadow-xl border border-blue-700">
          <h2 className="text-xl font-semibold text-blue-100 mb-4">Flow Recovery Index</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={65} />
            <TrendIndicator trend="steady" note="recovery tools identified" />
          </div>
          <p className="mt-4 text-blue-200">
            Balance of flow entry + deliberate recovery practices. Bruce has identified recovery tools but needs consistency in systematizing evening sauna + wind-down routines and dopamine flush practices.
          </p>
        </div>
        
        {/* Creative Leadership Leverage */}
        <div className="bg-gradient-to-br from-green-900 to-green-800 p-6 rounded-xl shadow-xl border border-green-700">
          <h2 className="text-xl font-semibold text-green-100 mb-4">Creative Leadership Leverage</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={75} />
            <TrendIndicator trend="improving" note="high trust, rising confidence" />
          </div>
          <p className="mt-4 text-green-200">
            Effectiveness in moving teams/experts from rigid expertise into generative innovation. Bruce has achieved creative leadership breakthrough and is actively testing leadership in incubation cycles.
          </p>
        </div>
        
        {/* Innovation Sequencing Score */}
        <div className="bg-gradient-to-br from-purple-900 to-purple-800 p-6 rounded-xl shadow-xl border border-purple-700">
          <h2 className="text-xl font-semibold text-purple-100 mb-4">Innovation Sequencing Score</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={60} />
            <TrendIndicator trend="steady" note="needs tighter feedback loops" />
          </div>
          <p className="mt-4 text-purple-200">
            Strategic pacing of multiple innovation tracks. Bruce needs to sequence vet clinics → pet housing → human healthcare to prevent dilution and tighten feedback loops for incubation cycles.
          </p>
        </div>
      </div>
      
      {/* Metrics Change Summary */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl mb-8">
        <h2 className="text-xl font-semibold text-primary-100 mb-6">Metrics Change Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Mission Alignment</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Previous: 65%</span>
              <span className="text-green-500">→ 70%</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">+5% - Strong momentum across multiple fronts</p>
          </div>
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Flow Readiness</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Previous: 60%</span>
              <span className="text-gray-400">→ 60%</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">No change - Recovery calibration needed</p>
          </div>
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Flow Leadership</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Previous: 70%</span>
              <span className="text-green-500">→ 75%</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">+5% - Creative leadership breakthrough</p>
          </div>
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Flow Recovery Index</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Previous: N/A</span>
              <span className="text-yellow-500">→ 65%</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">New metric - Recovery tools identified</p>
          </div>
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Creative Leadership Leverage</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Previous: N/A</span>
              <span className="text-green-500">→ 75%</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">New metric - High trust, rising confidence</p>
          </div>
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Innovation Sequencing</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Previous: N/A</span>
              <span className="text-yellow-500">→ 60%</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">New metric - Needs tighter feedback loops</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Top Strengths */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Top Strengths</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Creative leadership breakthrough and identity shift</li>
            <li>Bold innovation across pet + healthcare industries</li>
            <li>Cross-industry vision and application</li>
            <li>Strong creative process framework (prep → incubation → illumination → verification)</li>
            <li>High flow capacity and creative energy</li>
            <li>Effective at moving teams from analysis paralysis to innovation</li>
          </ul>
        </div>
        
        {/* Key Risks */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Key Risks</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Dilution across multiple innovation tracks (vet clinics, pet housing, pharma, human healthcare)</li>
            <li>Recovery inconsistency and over-excitement leading to burnout</li>
            <li>Risk of burnout from high stimulation without planned recovery</li>
            <li>Need to systematize recovery practices and dopamine management</li>
            <li>Sequencing multiple projects carefully to prevent execution overload</li>
            <li>Maintaining momentum by tightening feedback loops and pacing incubation cycles</li>
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
              <li>Systematize recovery practices: shift sauna to evening, add reading/food/TV wind-downs</li>
              <li>Build "dopamine flush" routines with exercise bursts and meditation</li>
              <li>Sequence innovation tracks to prevent dilution (vet clinics → pet housing → human healthcare)</li>
              <li>Tighten feedback loops and pace incubation cycles (24-48h vs 60-90d depending on project)</li>
              <li>Continue leveraging creative leadership identity and challenging medical experts</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-medium text-primary-300">30-Day Goals:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Establish consistent evening recovery routine with sauna + Vipassana</li>
              <li>Complete innovation sequencing plan for all active projects</li>
              <li>Implement tighter feedback loops for creative incubation cycles</li>
              <li>Maintain creative leadership momentum while managing over-excitement</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Coach Notes */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Coach Notes</h2>
        <div className="prose max-w-none">
          <p>
            Bruce has achieved a significant creative leadership breakthrough, fully immersing himself in the pet space with 10 subscription vet clinics already built/open, plus oral health device and pet-friendly housing design projects. He's actively applying the creative process framework (prep → incubation → illumination → verification) and extending innovation into human healthcare.
          </p>
          <p className="mt-4">
            He reports being "jacked up" with excitement from projects and struggles to wind down. His morning routines are strong (sauna, meditation, cold plunge), and he's experimenting with using sauna + Vipassana post-flow to downshift and manage dopamine/norepinephrine spikes. He uses guitar, walks, humor, and sketching as microdosing tools.
          </p>
          <p className="mt-4">
            Bruce has made a crucial identity shift from seeing himself as an operator to embracing his creative leadership role. He's actively testing leadership in creative incubation cycles, moving teams from analysis paralysis to innovation, and extending this to challenge medical experts (orthopedic surgeons vs. gastroenterologists).
          </p>
          <p className="mt-4">
            The main challenge is managing the breadth of innovation tracks (vet clinics, pet housing, pharma, human healthcare) without dilution. He needs to systematize recovery practices, build "dopamine flush" routines, and tighten feedback loops for incubation cycles (24-48h vs 60-90d depending on project).
          </p>
          <p className="mt-4">
            Recommend focusing on sequencing innovations strategically while building consistent recovery practices. Bruce should leverage his creative leadership breakthrough while managing over-excitement through structured recovery and tighter feedback loops to sustain momentum without burnout.
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
