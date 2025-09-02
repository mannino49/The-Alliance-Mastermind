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

export default function JamesDashboard() {
  // Get client data from context
  const { allClientData } = useClientData();
  
  // Weekly data for sparklines
  const weeklyData = {
    missionAlignment: [50, 52, 55, 70],
    flowReadiness: [55, 58, 60, 75],
    flowLeadership: [60, 62, 65, 70]
  };
  
  // Detailed flow readiness components
  const flowReadinessComponents = [
    { label: "Strategic Simplification", value: 80 },
    { label: "Recovery & Novelty Integration", value: 85 },
    { label: "Team Trust & Delegation", value: 70 },
    { label: "Family & Health Balance", value: 75 }
  ];
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Mission Alignment Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Mission Alignment</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={70} />
            <TrendIndicator trend="improving" note="strategic simplification working" />
          </div>
          <Sparkline data={weeklyData.missionAlignment} />
          <p className="mt-4 text-gray-300">
            70% of effort advancing top mission goals with sustained simplification. Jim shifted from juggling 50+ goals to focusing on 1-3 critical actions per day, trusting his team with compliance/details while spending brainpower on high-payoff tasks (grants, papers, strategy).
          </p>
        </div>
        
        {/* Flow Readiness Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Readiness</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={75} />
            <TrendIndicator trend="improving" note="sustainable reset system working" />
          </div>
          <Sparkline data={weeklyData.flowReadiness} />
          <p className="mt-4 text-gray-300">
            Higher resilience with strong recovery integration. Jim looks and feels happier with running, international travel (Peru, Italy Dolomites, Greece race), and novelty exploration providing macro-scale resets. Marriage therapy is working and improving his balance.
          </p>
        </div>
        
        {/* Flow Leadership Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Leadership</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={70} />
            <TrendIndicator trend="improving" note="better structure emerging" />
          </div>
          <Sparkline data={weeklyData.flowLeadership} />
          <p className="mt-4 text-gray-300">
            Improving cultural leadership with more transparency, celebration calibration, and story-driven team goals. Still navigating tension between urgency/dissatisfaction (his natural drive) and team needs for celebration and recognition.
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
            <li>Strategic simplification and focus (1-3 critical actions/day)</li>
            <li>Novelty recovery integration (international travel, running)</li>
            <li>Trust in team with effective delegation</li>
            <li>Family prioritization and marriage therapy progress</li>
            <li>Cultural leadership improvements (transparency, celebration)</li>
          </ul>
        </div>
        
        {/* Key Risks */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Key Risks</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Long-term strategic oversight drift with team delegation</li>
            <li>Team credit tension with ambitious lieutenants</li>
            <li>Compliance-innovation paradox confusion for team</li>
            <li>Need for culture rituals balancing urgency with shared wins</li>
            <li>Potential blind spots without structured check-ins</li>
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
              <li>Create quarterly long-view check-ins to prevent strategic oversight drift</li>
              <li>Define celebration cadence and recognition rituals for team</li>
              <li>Visualize lab goals with gamification elements</li>
              <li>Set transparent credit pathways for ambitious lieutenants</li>
              <li>Establish culture rituals balancing urgency with shared wins</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-medium text-primary-300">30-Day Goals:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Implement structured quarterly strategic reviews</li>
              <li>Design team celebration and credit recognition system</li>
              <li>Create visual goal tracking system for lab objectives</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Detailed Insight Boxes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        
        {/* Strategic Simplification Box */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-xl shadow-xl border border-blue-700">
          <h3 className="text-lg font-semibold text-blue-100 mb-4">🎯 Strategic Simplification</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-blue-200">Goal Reduction</span>
              <span className="text-blue-100 font-bold">50+ → 3</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-blue-200">Daily Focus</span>
              <span className="text-blue-100 font-bold">1-3 Actions</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-blue-200">Team Trust</span>
              <span className="text-blue-100 font-bold">High</span>
            </div>
            <div className="mt-4 p-3 bg-blue-800 rounded-lg">
              <p className="text-blue-100 text-sm">
                Jim shifted from juggling 50+ goals to focusing on 1-3 critical actions per day, trusting his team with compliance/details while spending brainpower on high-payoff tasks.
              </p>
            </div>
          </div>
        </div>

        {/* Recovery & Reset Box */}
        <div className="bg-gradient-to-br from-green-900 to-green-800 p-6 rounded-xl shadow-xl border border-green-700">
          <h3 className="text-lg font-semibold text-green-100 mb-4">🌍 Recovery & Reset</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-green-200">International Travel</span>
              <span className="text-green-100 font-bold">Peru, Italy, Greece</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-green-200">Running</span>
              <span className="text-green-100 font-bold">Active</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-green-200">Marriage Therapy</span>
              <span className="text-green-100 font-bold">Working</span>
            </div>
            <div className="mt-4 p-3 bg-green-800 rounded-lg">
              <p className="text-green-100 text-sm">
                Macro-scale resets through international travel and novelty exploration, with marriage therapy improving balance and happiness.
              </p>
            </div>
          </div>
        </div>

        {/* Cultural Leadership Box */}
        <div className="bg-gradient-to-br from-purple-900 to-purple-800 p-6 rounded-xl shadow-xl border border-purple-700">
          <h3 className="text-lg font-semibold text-purple-100 mb-4">👥 Cultural Leadership</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-purple-200">Transparency</span>
              <span className="text-purple-100 font-bold">Improving</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-purple-200">Celebration</span>
              <span className="text-purple-100 font-bold">Calibrating</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-purple-200">Team Credit</span>
              <span className="text-purple-100 font-bold">Tension</span>
            </div>
            <div className="mt-4 p-3 bg-purple-800 rounded-lg">
              <p className="text-purple-100 text-sm">
                Navigating tension between urgency/dissatisfaction drive and team needs for celebration and recognition, with transparent credit pathways needed.
              </p>
            </div>
          </div>
        </div>

      </div>
      
      {/* Coach Notes */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Coach Notes</h2>
        <div className="prose max-w-none">
          <p>
            James has made significant progress in strategic simplification, shifting from juggling 50+ goals to focusing on 1-3 critical actions per day. This represents a major breakthrough in mission alignment and execution focus.
          </p>
          <p className="mt-4">
            His flow readiness has improved dramatically through better integration of recovery practices, international travel for macro-scale resets, and successful marriage therapy. He looks and feels happier, with stronger balance between work sprints and deep recovery/novelty.
          </p>
          <p className="mt-4">
            Leadership leverage is showing improvement with more transparency, celebration calibration, and story-driven team goals. However, he's still navigating tension between his natural urgency/dissatisfaction drive and team needs for celebration and recognition.
          </p>
          <p className="mt-4">
            Key areas for continued growth include creating quarterly long-view check-ins to prevent strategic oversight drift, defining celebration cadence and recognition rituals, and establishing culture rituals that balance urgency with shared wins.
          </p>
          <p className="mt-4">
            The team credit tension with ambitious lieutenants and the compliance-innovation paradox remain areas requiring attention. Recommend implementing transparent credit pathways and visual goal tracking systems to address these challenges.
          </p>
        </div>
      </div>
      
      {/* AI Chatbot */}
      <ClientChatbot 
        currentClientId="jamescrowe"
        allClientData={allClientData}
      />
    </div>
  );
}
