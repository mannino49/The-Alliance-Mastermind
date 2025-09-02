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
      <div className="flex justify-between mb-1 text-gray-300">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
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
    missionAlignment: [55, 58, 60, 70],
    flowReadiness: [50, 55, 60, 75],
    flowLeadership: [55, 58, 60, 70]
  };
  
  // Detailed flow readiness components
  const flowReadinessComponents = [
    { label: "Daily Morning Writing", value: 85 },
    { label: "Creative Practices (Drawing/Sketching)", value: 80 },
    { label: "Vipassana Resets", value: 75 },
    { label: "Mountain Biking Recovery", value: 70 }
  ];
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Mission Alignment Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Mission Alignment</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={70} />
            <TrendIndicator trend="improving" note="+10% from previous" />
          </div>
          <Sparkline data={weeklyData.missionAlignment} />
          <p className="mt-4 text-gray-300">
            70% of activities directly grow his AI/parenting platform. Sharpened mission from general AI-human creativity to specific wedge: helping parents, schools, and communities navigate AI's role in children's education. Launched "Navigating AI Transitions with Wit" Substack with hundreds of subscribers and organic traction.
          </p>
        </div>
        
        {/* Flow Readiness Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Readiness</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={75} />
            <TrendIndicator trend="improving" note="+5% from previous" />
          </div>
          <Sparkline data={weeklyData.flowReadiness} />
          <p className="mt-4 text-gray-300">
            Built steady routines: daily morning writing, creative practices (drawing, sketching), Vipassana resets, and mountain biking for recovery. Reports strong energy and enjoyment from writing, with the mantra "just paddle" keeping him in movement rather than paralysis.
          </p>
        </div>
        
        {/* Flow Leadership Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Leadership</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={70} />
            <TrendIndicator trend="improving" note="+5% from previous" />
          </div>
          <Sparkline data={weeklyData.flowLeadership} />
          <p className="mt-4 text-gray-300">
            Unique edge emerging: ability to synthesize complex systems (business, AI, parenting, policy) into pragmatic frameworks. Steven called out this "invisible skill" as analogous to seeing lines down a mountain no one else sees. Networking upward and positioning for future speaking opportunities.
          </p>
        </div>
      </div>
      
      {/* Metrics Change Summary */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl mb-8">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Metrics Change Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Mission Alignment</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Previous: 60%</span>
              <span className="text-green-400 font-bold">→ 70% (+10%)</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Sharpened focus on AI/parenting niche with Substack traction</p>
          </div>
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Flow Readiness</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Previous: 70%</span>
              <span className="text-green-400 font-bold">→ 75% (+5%)</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Strong daily routines and creative practices</p>
          </div>
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Flow Leadership</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Previous: 65%</span>
              <span className="text-green-400 font-bold">→ 70% (+5%)</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Invisible skills in systems-thinking emerging</p>
          </div>
        </div>
      </div>
      
      {/* New Metrics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Platform Growth Index */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Platform Growth Index</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={75} />
            <TrendIndicator trend="improving" note="strong momentum" />
          </div>
          <p className="mt-4 text-gray-300">
            "Navigating AI Transitions with Wit" Substack grown to hundreds of subscribers with organic traction. Gained reposts by larger AI newsletters and engaged school boards and local communities. Taking pragmatic, solution-driven tone.
          </p>
        </div>
        
        {/* Creative Routine Stability */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Creative Routine Stability</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={80} />
            <TrendIndicator trend="improving" note="excellent discipline" />
          </div>
          <p className="mt-4 text-gray-300">
            Daily morning writing, creative practices (drawing, sketching), Vipassana resets, and mountain biking for recovery. Strong energy and enjoyment from writing with "just paddle" mantra keeping movement over paralysis.
          </p>
        </div>
        
        {/* Invisible Skills Integration */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Invisible Skills Integration</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={65} />
            <TrendIndicator trend="improving" note="emerging edge" />
          </div>
          <p className="mt-4 text-gray-300">
            Unique ability to synthesize complex systems (business, AI, parenting, policy) into pragmatic frameworks. Beginning to bring this into AI/parenting but hasn't fully integrated yet. Networking upward and positioning for future speaking.
          </p>
        </div>
      </div>
      
      {/* Metrics Change Summary */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl mb-8">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Metrics Change Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Mission Alignment</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Previous: 60%</span>
              <span className="text-green-400 font-bold">→ 70% (+10%)</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Sharpened focus on AI/parenting niche with Substack traction</p>
          </div>
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Flow Readiness</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Previous: 50%</span>
              <span className="text-green-400 font-bold">→ 75% (+25%)</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Strong daily structure and creative morning routines</p>
          </div>
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Flow Leadership</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Previous: 55%</span>
              <span className="text-green-400 font-bold">→ 70% (+15%)</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Invisible skills emerging and networking upward</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Platform Growth Index</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">New Metric</span>
              <span className="text-blue-400 font-bold">→ 75%</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Substack growth and community engagement</p>
          </div>
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Creative Routine Stability</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">New Metric</span>
              <span className="text-blue-400 font-bold">→ 80%</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Daily creative practices and recovery routines</p>
          </div>
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Invisible Skills Integration</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">New Metric</span>
              <span className="text-blue-400 font-bold">→ 65%</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Systems-thinking synthesis capabilities</p>
          </div>
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
            <li>Pragmatic tone avoiding alarmism and clickbait</li>
            <li>Strong daily structure with morning writing and creative practices</li>
            <li>Clear AI/parent niche with Substack traction and community engagement</li>
            <li>Invisible skills in systems-thinking and framework synthesis</li>
            <li>Balanced approach maintaining job stability while building platform</li>
          </ul>
        </div>
        
        {/* Key Risks */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Key Risks</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Growth fragility and visibility tied to personal energy</li>
            <li>Plateau risk when momentum slows without fallback routines</li>
            <li>Needs original contributions to avoid being seen as just a commentator</li>
            <li>Early stage growth requires institutional partnerships and differentiators</li>
            <li>Credibility hinges on showcasing unique frameworks beyond reframes</li>
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
              <li>Formalize parent guides and surveys to establish original contributions</li>
              <li>Pitch op-eds to major publications to expand reach</li>
              <li>Target TEDx speaking opportunities to showcase invisible skills</li>
              <li>Systematize outreach list for school boards and communities</li>
              <li>Create fallback routines for plateau periods</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-medium text-primary-300">30-Day Goals:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Develop original AI school policy guides and frameworks</li>
              <li>Submit 2-3 op-ed pitches to major publications</li>
              <li>Create systematic approach to institutional partnerships</li>
              <li>Establish habit anchors and feedback partners for momentum maintenance</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Coach Notes */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Coach Notes</h2>
        <div className="prose max-w-none">
          <p>
            Michael has successfully sharpened his mission from general AI-human creativity to a specific, actionable niche: helping parents, schools, and communities navigate AI's role in children's education. This focus has yielded tangible results with his Substack "Navigating AI Transitions with Wit" gaining hundreds of subscribers and organic traction.
          </p>
          <p className="mt-4">
            His flow readiness has significantly improved through consistent daily routines: morning writing, creative practices (drawing, sketching), Vipassana resets, and mountain biking for recovery. The mantra "just paddle" effectively keeps him in movement rather than paralysis, and he reports strong energy and enjoyment from writing.
          </p>
          <p className="mt-4">
            His unique "invisible skill" of synthesizing complex systems (business, AI, parenting, policy) into pragmatic frameworks is emerging as a key differentiator. Steven's analogy of "seeing lines down a mountain no one else sees" captures this well. He's beginning to integrate this into his AI/parenting work and is networking upward with educators and thought leaders.
          </p>
          <p className="mt-4">
            Key areas for development: establishing original intellectual contributions beyond reframes to build credibility, creating fallback routines for plateau periods, and developing institutional partnerships to anchor growth beyond personal energy. The pragmatic, solution-driven tone avoiding alarmism is working well and should be maintained.
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
