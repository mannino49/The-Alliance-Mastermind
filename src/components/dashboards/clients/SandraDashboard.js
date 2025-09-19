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

// Progress bar component for detailed metrics with color coding
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

export default function SandraDashboard() {
  // Get client data from context
  const { allClientData } = useClientData();
  
  // Weekly data for sparklines
  const weeklyData = {
    missionAlignment: [55, 58, 60, 65],
    flowReadiness: [60, 62, 65, 70],
    flowLeadership: [55, 58, 60, 65]
  };
  
  // Detailed flow readiness components with updated values
  const flowReadinessComponents = [
    { label: "Sleep Quality", value: 70 },
    { label: "Recovery Practices", value: 75 },
    { label: "Daily Deep Work", value: 65 },
    { label: "Trigger Integration", value: 70 }
  ];
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Mission Alignment Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Mission Alignment</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={65} />
            <TrendIndicator trend="improving" note="strong forward motion on execution basics" />
          </div>
          <Sparkline data={weeklyData.missionAlignment} />
          <p className="mt-4 text-gray-300">
            65% of activities tied directly to validating advisory model with real clients. Actively building foundation: working on 100-step list, structuring company setup (legal, tax, accounting), and developing portfolio/playbook of capabilities. Strong forward motion on execution basics and clarity of offering.
          </p>
        </div>
        
        {/* Flow Readiness Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Readiness</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={70} />
            <TrendIndicator trend="improving" note="solid creative foundation, expanding AI skills" />
          </div>
          <Sparkline data={weeklyData.flowReadiness} />
          <p className="mt-4 text-gray-300">
            Composite of sleep quality, recovery practices, daily deep work, and trigger integration. Solid creative/recovery foundation with AI tool experimentation. Needs to sharpen "risk-taking muscle" - testing offers, conversations, and prototypes without waiting for confidence first.
          </p>
        </div>
        
        {/* Flow Leadership Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Leadership</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={65} />
            <TrendIndicator trend="improving" note="positioning sharpening, requires active outreach" />
          </div>
          <Sparkline data={weeklyData.flowLeadership} />
          <p className="mt-4 text-gray-300">
            Progress on drafting AI/org design white paper, securing 3-5 early advisory tests, and building targeted network. Clear articulation of target markets (founders/CEOs scaling beyond startup, asset management firms heading toward IPOs) with unique leverage from KKR-scale HR infrastructure.
          </p>
        </div>
      </div>
      
      {/* Additional Insights - Colored Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Mission Alignment + Ecosystem Relevance */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-xl shadow-xl border border-blue-700">
          <h3 className="text-lg font-semibold text-blue-100 mb-3">🎯 Mission Alignment + Ecosystem Relevance</h3>
          <div className="space-y-2 text-sm">
            <p className="text-blue-200">✅ Strong forward motion on execution basics and clarity of offering</p>
            <p className="text-yellow-300">❗ Risk: Spending too much time on "infrastructure" vs. early testing in market</p>
            <p className="text-green-300">➡ Next-Level Leverage: Frame niche as 21st-century human capital accelerator aligned with AI-era organizational needs</p>
          </div>
        </div>
        
        {/* Flow Readiness & Confidence Building */}
        <div className="bg-gradient-to-br from-green-900 to-green-800 p-6 rounded-xl shadow-xl border border-green-700">
          <h3 className="text-lg font-semibold text-green-100 mb-3">🎯 Flow Readiness & Confidence Building</h3>
          <div className="space-y-2 text-sm">
            <p className="text-green-200">✅ Solid creative/recovery foundation; expanding skill set with AI experimentation</p>
            <p className="text-yellow-300">❗ Needs to sharpen the "risk-taking muscle" - testing offers, conversations, and prototypes</p>
            <p className="text-green-300">➡ Confidence grows through action + results, not pre-work</p>
          </div>
        </div>
        
        {/* Market Testing + Positioning Strategy */}
        <div className="bg-gradient-to-br from-purple-900 to-purple-800 p-6 rounded-xl shadow-xl border border-purple-700">
          <h3 className="text-lg font-semibold text-purple-100 mb-3">🎯 Market Testing + Positioning Strategy</h3>
          <div className="space-y-2 text-sm">
            <p className="text-purple-200">✅ Clear articulation of target markets and unique leverage (KKR-scale HR infrastructure)</p>
            <p className="text-yellow-300">❗ External network is thin; must be deliberately cultivated through Alliance contacts</p>
            <p className="text-purple-300">➡ Progress on white paper, 3-5 early advisory tests, building targeted network</p>
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
            <li>Deep HR/organizational expertise with KKR-scale infrastructure experience</li>
            <li>Execution discipline and openness to AI tools</li>
            <li>Consistent creative practices (meditation, writing, drawing)</li>
            <li>Commitment to flow-inducing activities (boxing, kickboxing)</li>
            <li>Clear articulation of target markets and unique leverage</li>
          </ul>
        </div>
        
        {/* Key Risks */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Key Risks</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Overfocus on infrastructure vs. early market testing</li>
            <li>Fear of irrelevance in AI-disrupted organizational landscape</li>
            <li>Thin external network requiring deliberate cultivation</li>
            <li>Spending too much time on "infrastructure" vs. market-facing activities</li>
            <li>Confidence lagging until proven in practice</li>
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
              <li>Draft AI/org design white paper as thought leadership anchor</li>
              <li>Test 3-5 advisory prototypes with diverse clients</li>
              <li>Engage Alliance + KKR portfolio for warm introductions</li>
              <li>Set daily/weekly market-facing action quota</li>
              <li>Frame niche as 21st-century human capital accelerator aligned with AI-era needs</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-medium text-primary-300">30-Day Goals:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Complete first draft of AI/org design white paper</li>
              <li>Secure 3 prototype advisory sessions with diverse clients</li>
              <li>Establish daily market-facing action quota (5 outreach activities/week)</li>
              <li>Leverage Alliance network for targeted introductions</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Coach Notes */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Coach Notes</h2>
        <div className="prose max-w-none">
          <p>
            Sandra is actively building her foundation with strong forward motion on execution basics and clarity of offering. She's working on her 100-step list, structuring company setup (legal, tax, accounting), and developing her portfolio/playbook of capabilities. Her main concern is relevance in a fast-moving, AI-disrupted organizational landscape.
          </p>
          <p className="mt-4">
            She's exploring ways to stay current through AI tools, ecosystems, and thought leadership via white papers. The key insight is framing her niche not just as "HR expertise" but as a 21st-century human capital accelerator aligned with AI-era organizational needs.
          </p>
          <p className="mt-4">
            Sandra uses creative practices and has begun experimenting with AI tools for productivity. She acknowledged imposter syndrome, particularly around "punching above her weight" and staying relevant. This is reframed as a natural byproduct of transformation - confidence lags until proven in practice.
          </p>
          <p className="mt-4">
            She's identifying her sweet spot: founders/CEOs scaling beyond startup stage needing HR structure but not full departments, and asset management/financial firms heading toward IPOs. She's exploring entry points through KKR's portfolio network, leveraging introductions, and targeting "founders on their second company."
          </p>
          <p className="mt-4">
            The main risk is spending too much time on "infrastructure" vs. early testing in market. Her external network is thin and must be deliberately cultivated through Alliance contacts, introductions, and testing prototypes in "softer spaces" before pitching high-value Rolodex contacts. Confidence grows through action + results, not pre-work.
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
