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

export default function BlairDashboard() {
  // Get client data from context
  const { allClientData } = useClientData();
  
  // Weekly data for sparklines
  const weeklyData = {
    missionAlignment: [60, 62, 65, 75, 60],
    flowReadiness: [65, 68, 70, 72, 70],
    flowLeadership: [55, 58, 60, 68, 65]
  };
  
  // Detailed flow readiness components
  const flowReadinessComponents = [
    { label: "Recovery Habits", value: 80 },
    { label: "Stability During Transitions", value: 70 },
    { label: "Sleep Protocols", value: 75 },
    { label: "Flow-Driven Recovery", value: 65 }
  ];
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Mission Alignment Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Mission Alignment</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={60} />
            <TrendIndicator trend="declining" note="direction sharpening" />
          </div>
          <Sparkline data={weeklyData.missionAlignment} />
          <p className="mt-4 text-gray-300">
            60% of Blair's time advancing chosen strategic next step. Clear MTP around wellbeing, flow, and leadership with meaningful refinement - letting go of guilt around downtime, exploring academic pathways while piloting talks and workshops.
          </p>
        </div>
        
        {/* Flow Readiness Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Readiness</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={70} />
            <TrendIndicator trend="improving" note="recovery evolution" />
          </div>
          <Sparkline data={weeklyData.flowReadiness} />
          <p className="mt-4 text-gray-300">
            Major psychological upgrade with reduced guilt/shame around downtime leading to better resilience. Increased primary flow & active recovery during summer, sleep stability improving, shift from fear-driven to flow-driven recovery.
          </p>
        </div>
        
        {/* Flow Leadership Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Leadership</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={65} />
            <TrendIndicator trend="improving" note="thought leadership" />
          </div>
          <Sparkline data={weeklyData.flowLeadership} />
          <p className="mt-4 text-gray-300">
            Rising leverage potential with academic rigor and relatability. Actively preparing talks, referencing research papers, strengthening academic writing muscles, exploring intersection of flow, spirituality, neuroscience, and leadership.
          </p>
        </div>
      </div>
      
      {/* Key Insights Boxes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Insight 3: Mission Alignment + Emerging Direction */}
        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/50 p-6 rounded-xl shadow-xl">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
            <h3 className="text-lg font-semibold text-blue-200">Mission Alignment + Emerging Direction</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-blue-900/20 p-3 rounded-lg">
              <p className="text-sm text-blue-100 font-medium">✅ Direction Sharpening</p>
              <p className="text-xs text-blue-200 mt-1">"Flow for vets" still in play, but actively shaping broader integrative leadership/science path</p>
            </div>
            <div className="bg-blue-900/20 p-3 rounded-lg">
              <p className="text-sm text-blue-100 font-medium">🎯 Clear MTP</p>
              <p className="text-xs text-blue-200 mt-1">Wellbeing, flow, and leadership with meaningful refinement - letting go of guilt around downtime</p>
            </div>
            <div className="bg-yellow-900/20 p-3 rounded-lg">
              <p className="text-sm text-yellow-100 font-medium">⚠️ Over-commitment Risk</p>
              <p className="text-xs text-yellow-200 mt-1">Running clinics, academic aspirations, family life, and thought leadership simultaneously</p>
            </div>
          </div>
        </div>

        {/* Insight 5: Flow Readiness & Recovery Evolution */}
        <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-700/50 p-6 rounded-xl shadow-xl">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
            <h3 className="text-lg font-semibold text-green-200">Flow Readiness & Recovery Evolution</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-green-900/20 p-3 rounded-lg">
              <p className="text-sm text-green-100 font-medium">✅ Major Psychological Upgrade</p>
              <p className="text-xs text-green-200 mt-1">Reduced guilt/shame around downtime → better resilience and readiness to ramp up</p>
            </div>
            <div className="bg-green-900/20 p-3 rounded-lg">
              <p className="text-sm text-green-100 font-medium">🔄 Recovery Evolution</p>
              <p className="text-xs text-green-200 mt-1">Increased primary flow & active recovery, sleep stability improving, shift from fear-driven to flow-driven</p>
            </div>
            <div className="bg-yellow-900/20 p-3 rounded-lg">
              <p className="text-sm text-yellow-100 font-medium">⚠️ Transition Vulnerability</p>
              <p className="text-xs text-yellow-200 mt-1">Still vulnerable to post-travel crashes, chaotic household demands, operational overload</p>
            </div>
          </div>
        </div>

        {/* Insight 6: Flow Leadership Leverage + Thought Leadership Trajectory */}
        <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-700/50 p-6 rounded-xl shadow-xl">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
            <h3 className="text-lg font-semibold text-purple-200">Flow Leadership Leverage + Thought Leadership</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-purple-900/20 p-3 rounded-lg">
              <p className="text-sm text-purple-100 font-medium">🎯 Increasing Leverage Potential</p>
              <p className="text-xs text-purple-200 mt-1">Building both credibility (academic rigor) and relatability (simplifying complex ideas)</p>
            </div>
            <div className="bg-purple-900/20 p-3 rounded-lg">
              <p className="text-sm text-purple-100 font-medium">🧠 Academic Integration</p>
              <p className="text-xs text-purple-200 mt-1">Preparing talks, referencing research papers, strengthening academic writing, exploring neurotheology</p>
            </div>
            <div className="bg-yellow-900/20 p-3 rounded-lg">
              <p className="text-sm text-yellow-100 font-medium">⚠️ Needs Sequencing</p>
              <p className="text-xs text-yellow-200 mt-1">Vet credibility + academic foundations → then broader thought leadership scaling</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Metric Summary Boxes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Mission Alignment Summary */}
        <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/30 border border-blue-600/60 p-6 rounded-xl shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-blue-200">Mission Alignment Score</h3>
            <div className="text-3xl font-bold text-blue-300">60%</div>
          </div>
          <p className="text-sm text-blue-100">
            % of time advancing chosen strategic next step (exit framework development, business reorganization, and workshop pilots)
          </p>
          <div className="mt-3 bg-blue-900/30 rounded-lg p-3">
            <p className="text-xs text-blue-200">
              <span className="font-medium">Estimate:</span> ~60% — clearer than before, with healthier mindset, but execution energy spread thin
            </p>
          </div>
        </div>

        {/* Flow Readiness Summary */}
        <div className="bg-gradient-to-br from-green-900/40 to-green-800/30 border border-green-600/60 p-6 rounded-xl shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-green-200">Flow Readiness Index</h3>
            <div className="text-3xl font-bold text-green-300">70%</div>
          </div>
          <p className="text-sm text-green-100">
            Composite of recovery habits + stability during transitions (travel, family chaos)
          </p>
          <div className="mt-3 bg-green-900/30 rounded-lg p-3">
            <p className="text-xs text-green-200">
              <span className="font-medium">Estimate:</span> ~70% — up from 60%, showing resilience gains and emotional rewiring
            </p>
          </div>
        </div>

        {/* Flow Leadership Summary */}
        <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/30 border border-purple-600/60 p-6 rounded-xl shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-purple-200">Flow Leadership Leverage Score</h3>
            <div className="text-3xl font-bold text-purple-300">65%</div>
          </div>
          <p className="text-sm text-purple-100">
            Readiness to influence orgs/audiences via credible flow frameworks
          </p>
          <div className="mt-3 bg-purple-900/30 rounded-lg p-3">
            <p className="text-xs text-purple-200">
              <span className="font-medium">Estimate:</span> ~65% — rising with his prep for talks and deeper intellectual integration
            </p>
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
            <li>Clear MTP around wellbeing, flow, and leadership with meaningful refinement</li>
            <li>Reduced guilt/shame around downtime leading to better resilience</li>
            <li>Authentic integration of science & spirituality with strong recovery habits</li>
            <li>Active preparation for talks and workshops with academic rigor</li>
            <li>Strong pull toward bridging science, spirituality, and practical leadership</li>
            <li>Exploring academic/scientific pathways (PhD, neuroscience, neurotheology)</li>
          </ul>
        </div>
        
        {/* Key Risks */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Key Risks</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Overload across multiple roles: clinics, academic aspirations, family life, thought leadership</li>
            <li>Household/clinic operational demands creating drag on strategic focus</li>
            <li>Sequencing challenge: academic vs. leadership goals need prioritization</li>
            <li>Still vulnerable to post-travel crashes and chaotic household demands</li>
            <li>Execution energy spread thin across multiple strategic directions</li>
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
              <li>Narrow near-term focus: Exit framework development + 1 pilot project (not all directions simultaneously)</li>
              <li>Codify flow rituals for travel/chaos periods to maintain stability</li>
              <li>Leverage talks and workshops for credibility building</li>
              <li>Sequence exit framework foundations before broader thought leadership scaling</li>
              <li>Create 100-item roadmap for strategic direction clarity</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-medium text-primary-300">30-Day Goals:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Choose between exit framework development OR workshop development (not both)</li>
              <li>Pilot exit framework for small businesses as credibility foundation</li>
              <li>Establish flow rituals for household chaos and travel transitions</li>
              <li>Complete business writing muscle strengthening with diverse storytelling styles</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Coach Notes */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Coach Notes</h2>
        <div className="prose max-w-none">
          <p>
            Blair continues to hold a clear MTP around helping small business owners exit well, integrating business, financial, and personal planning. The past two months show meaningful refinement as he develops his comprehensive exit framework system.
          </p>
          <p className="mt-4">
            He is developing his exit framework for small business owners under $5M while also piloting talks and workshops. There's a strong pull toward bridging business, financial, and personal planning applications. The direction is sharpening with his core focus on comprehensive exit strategies, and he's actively building his systematic approach to business transitions.
          </p>
          <p className="mt-4">
            Major psychological upgrade with improved work-life balance and better resilience in managing his financial planning firm. Increased focus on creativity and flow during business reorganization, with improving protocols for managing high-energy creative work. However, still challenged by firm reorganization demands and carving out time for creative microdosing.
          </p>
          <p className="mt-4">
            Rising leverage potential with business expertise and storytelling capabilities. Actively preparing talks, expanding writing skills beyond business writing, strengthening communication through diverse writing styles. Needs sequencing: exit framework development → credibility building through successful client outcomes → then broader thought leadership scaling in business transitions.
          </p>
        </div>
      </div>
      
      {/* Summary Table */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl mb-8">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Client Summary</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 text-primary-200">Client</th>
                <th className="text-left py-3 px-4 text-primary-200">Mission Alignment Score (%)</th>
                <th className="text-left py-3 px-4 text-primary-200">Flow Readiness (0-100)</th>
                <th className="text-left py-3 px-4 text-primary-200">Flow Leadership Leverage (0-100)</th>
                <th className="text-left py-3 px-4 text-primary-200">Top Strengths</th>
                <th className="text-left py-3 px-4 text-primary-200">Key Risks</th>
                <th className="text-left py-3 px-4 text-primary-200">Next Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="py-3 px-4 text-gray-300">Blair Lukan</td>
                <td className="py-3 px-4 text-gray-300">60</td>
                <td className="py-3 px-4 text-gray-300">70</td>
                <td className="py-3 px-4 text-gray-300">65</td>
                <td className="py-3 px-4 text-gray-300">Clear MTP, reduced guilt, authentic integration of science & spirituality, strong recovery habits</td>
                <td className="py-3 px-4 text-gray-300">Overload across roles, household/clinic ops drag, sequencing academic vs. leadership goals</td>
                <td className="py-3 px-4 text-gray-300">Narrow near-term focus (PhD prep + 1 pilot project); codify flow rituals for travel/chaos periods; leverage talks for credibility</td>
              </tr>
            </tbody>
          </table>
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
