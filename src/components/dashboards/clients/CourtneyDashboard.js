import React from 'react';
import { useClientData } from '../../../shared/context/ClientDataContext';
import ClientChatbot from '../../features/chatbot/ClientChatbot';

export default function CourtneyDashboard() {
  // Get client data from context
  const { allClientData } = useClientData();
  
  // Weekly data for trend charts
  const weeklyData = {
    missionAlignment: [58, 60, 62, 62],
    flowReadiness: [55, 56, 57, 58],
    flowLeadership: [60, 62, 63, 64],
    clarityExecution: [65, 66, 67, 68],
    creativityIncubation: [50, 52, 53, 55],
    emergentTrust: [58, 59, 59, 60]
  };

  // Component for trend indicators
  const TrendIndicator = ({ trend, note }) => {
    let icon = "→";
    let color = "text-gray-400";
    
    if (trend === "improving") {
      icon = "↗︎";
      color = "text-green-500";
    } else if (trend === "declining") {
      icon = "↘︎";
      color = "text-red-500";
    }
    
    return (
      <div className="flex items-center">
        <span className={`text-xl font-bold ${color}`}>{icon}</span>
        <span className="ml-2 text-sm text-gray-400">({note})</span>
      </div>
    );
  };

  // Component for metric score with color coding
  const MetricScore = ({ score }) => {
    let color = "text-red-600";
    
    if (score >= 75) {
      color = "text-green-600";
    } else if (score >= 50) {
      color = "text-yellow-600";
    }
    
    return <span className={`text-xl font-bold ${color}`}>{score}</span>;
  };

  // Simple sparkline component
  const Sparkline = ({ data }) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;
    
    return (
      <div className="flex items-end h-8 gap-1">
        {data.map((value, index) => {
          const height = ((value - min) / range) * 100;
          return (
            <div 
              key={index}
              className="w-2 bg-primary-500 rounded-t"
              style={{ height: `${Math.max(10, height)}%` }}
            ></div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="p-6 max-w-6xl mx-auto bg-dark-800 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-primary-100">Courtney Karnes's Flow Dashboard</h1>
        <div className="text-sm text-gray-400">Last updated: January 15, 2025</div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Mission Alignment Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Mission Alignment</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={62} />
            <TrendIndicator trend="improving" note="MTP roadmap in progress" />
          </div>
          <Sparkline data={weeklyData.missionAlignment} />
          <p className="mt-4 text-gray-300">
            Actively unifying personal and professional systems to track progress and fulfillment. Building MTP roadmap with pillars → goals → timing structure to align work/life around clear mission.
          </p>
        </div>
        
        {/* Flow Readiness Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Readiness</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={58} />
            <TrendIndicator trend="improving" note="silent practice producing results" />
          </div>
          <Sparkline data={weeklyData.flowReadiness} />
          <p className="mt-4 text-gray-300">
            Silent practice producing strong visualizations, signaling need for more incubation. Self-identifies as "noise junkie" - low-input time unlocks deeper processing and pattern recognition.
          </p>
        </div>
        
        {/* Flow Leadership Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Leadership</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={64} />
            <TrendIndicator trend="improving" note="testing three verticals" />
          </div>
          <Sparkline data={weeklyData.flowLeadership} />
          <p className="mt-4 text-gray-300">
            Core strengths in 1:1 coaching, team building, and catalyzing movements. High energy as "invisible skill" that elevates rooms/teams. Testing CEO whisperer, team builder, and thought leader verticals.
          </p>
        </div>
      </div>

      {/* Updated Tracking Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Clarity Execution Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Clarity Execution</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={68} />
            <TrendIndicator trend="improving" note="clarity discipline emerging" />
          </div>
          <Sparkline data={weeklyData.clarityExecution} />
          <p className="mt-4 text-gray-300">
            Strong discipline around clarity and specificity - refining goals, milestones, and habits like painting the Golden Gate Bridge. Higher productivity with batching and specificity present.
          </p>
        </div>
        
        {/* Creativity Incubation Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Creativity Incubation</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={55} />
            <TrendIndicator trend="improving" note="3-week experiment assigned" />
          </div>
          <Sparkline data={weeklyData.creativityIncubation} />
          <p className="mt-4 text-gray-300">
            Creativity microdosing yields valuable "weird unlocks" but underutilized. Vipassana shown to declutter mental input. 3-week experiment: 5x/week, 3x/week, and 2-hour creative blocks.
          </p>
        </div>
        
        {/* Emergent Trust Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Emergent Trust</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={60} />
            <TrendIndicator trend="steady" note="abundance management needed" />
          </div>
          <Sparkline data={weeklyData.emergentTrust} />
          <p className="mt-4 text-gray-300">
            At a "cusp" seeing abundance of opportunities. Learning to let go of micromanaging outcomes and lean into emergence. Strong adaptability, resilience, and social support.
          </p>
        </div>
      </div>

      {/* Flow Readiness Breakdown */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl mb-8">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Readiness Breakdown</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          <div className="mb-3">
            <div className="flex justify-between mb-1">
              <span>Silent Practice & Incubation</span>
              <span>65%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-yellow-500 h-2.5 rounded-full" 
                style={{ width: '65%' }}
              ></div>
            </div>
          </div>
          
          <div className="mb-3">
            <div className="flex justify-between mb-1">
              <span>Information Diet Management</span>
              <span>45%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-red-500 h-2.5 rounded-full" 
                style={{ width: '45%' }}
              ></div>
            </div>
          </div>
          
          <div className="mb-3">
            <div className="flex justify-between mb-1">
              <span>AI Integration & Internalization</span>
              <span>50%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-red-500 h-2.5 rounded-full" 
                style={{ width: '50%' }}
              ></div>
            </div>
          </div>
          
          <div className="mb-3">
            <div className="flex justify-between mb-1">
              <span>Concept Clarity & Definition</span>
              <span>55%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-yellow-500 h-2.5 rounded-full" 
                style={{ width: '55%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

        {/* Top Strengths */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Top Strengths</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>1:1 coaching and seeing latent strengths in others</li>
            <li>Team building and catalyzing movements/collectives</li>
            <li>High energy as "invisible skill" that elevates rooms/teams</li>
            <li>Clarity discipline and specificity-driven execution</li>
            <li>Adaptability, resilience, and strong social support</li>
            <li>Fast pattern recognition and creative problem-solving</li>
          </ul>
        </div>
        
        {/* Key Risks */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Key Risks</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Information diet - self-identifies as "noise junkie"</li>
            <li>Incubation gap - fast pattern recognition without scheduled incubation</li>
            <li>AI over-production without integration (insight debt)</li>
            <li>Concept vagueness slowing execution (thriving, purpose, community)</li>
            <li>Opportunity overload and overcommitment tendency</li>
            <li>Over-immersion without recovery balance</li>
          </ul>
        </div>
      </div>

      {/* Detailed Insight Boxes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        
        {/* Mission Alignment & System Unification Box */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-xl shadow-xl border border-blue-700">
          <h3 className="text-lg font-semibold text-blue-100 mb-4">🎯 Mission Alignment & System Unification</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-blue-200">MTP Roadmap</span>
              <span className="text-blue-100 font-bold">In Progress</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-blue-200">Pillars → Goals → Timing</span>
              <span className="text-blue-100 font-bold">Structured</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-blue-200">AI Journal Analysis</span>
              <span className="text-blue-100 font-bold">Active</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-blue-200">Work/Life Integration</span>
              <span className="text-blue-100 font-bold">Unifying</span>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              Actively unifying personal and professional systems to track progress and fulfillment. Building MTP roadmap with clear structure to align all actions under mission.
            </p>
          </div>
        </div>

        {/* Flow Readiness & Incubation Box */}
        <div className="bg-gradient-to-br from-green-900 to-green-800 p-6 rounded-xl shadow-xl border border-green-700">
          <h3 className="text-lg font-semibold text-green-100 mb-4">🌱 Flow Readiness & Incubation</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-green-200">Silent Practice</span>
              <span className="text-green-100 font-bold">Producing Results</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-green-200">Visualizations</span>
              <span className="text-green-100 font-bold">Strong Signals</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-green-200">Noise Reduction</span>
              <span className="text-green-100 font-bold">Critical Need</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-green-200">Incubation Time</span>
              <span className="text-green-100 font-bold">Scheduled</span>
            </div>
            <p className="text-green-200 text-sm mt-4">
              Silent practice producing strong visualizations, signaling need for more incubation. Low-input time unlocks deeper processing and pattern recognition.
            </p>
          </div>
        </div>

        {/* Leadership Leverage & Vertical Testing Box */}
        <div className="bg-gradient-to-br from-purple-900 to-purple-800 p-6 rounded-xl shadow-xl border border-purple-700">
          <h3 className="text-lg font-semibold text-purple-100 mb-4">🚀 Leadership Leverage & Vertical Testing</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-purple-200">1:1 Coaching</span>
              <span className="text-purple-100 font-bold">Core Strength</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-purple-200">Team Building</span>
              <span className="text-purple-100 font-bold">Movement Catalyst</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-purple-200">High Energy</span>
              <span className="text-purple-100 font-bold">Invisible Skill</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-purple-200">Three Verticals</span>
              <span className="text-purple-100 font-bold">Testing Phase</span>
            </div>
            <p className="text-purple-200 text-sm mt-4">
              Core strengths in 1:1 coaching, team building, and catalyzing movements. High energy as "invisible skill" that elevates others. Testing CEO whisperer, team builder, and thought leader verticals.
            </p>
          </div>
        </div>
      </div>

      {/* Action Plan */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl mb-8">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Action Plan</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-primary-300">Next Steps:</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Build MTP Map (MTP → 3–5 pillars → 1–3 HHGs per pillar → current actions)</li>
              <li>Schedule 3 "vertical tests" (one per week) with clear inputs, offer, audience, and outcome metrics</li>
              <li>Lock daily 10–15 min of silence + weekly 45-min synthesis block to convert insights into placed actions</li>
              <li>Run 3-week creativity experiment: 5x/week, 3x/week, and 2-hour creative blocks</li>
              <li>Define key terms (thriving, purpose, community/movement) with crisp, operational language</li>
              <li>Map "yes/no" filters for opportunities to prevent overcommitment</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-medium text-primary-300">30-Day Goals:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Complete MTP roadmap with clear pillar structure</li>
              <li>Execute all three vertical tests with measurable outcomes</li>
              <li>Establish consistent silent practice and synthesis routines</li>
              <li>Prototype Purpose Scorecard v0.1 linking weekly behaviors to pillars</li>
              <li>Maintain clarity batching routines and specificity discipline</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Coach Notes */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Coach Notes</h2>
        <div className="prose max-w-none">
          <p>
            Courtney is at a powerful inflection point, actively unifying personal and professional systems while building clarity around her MTP. Her silent practice is producing strong visualizations, indicating she's on the right track with incubation and noise reduction.
          </p>
          <p className="mt-4">
            Her core strengths in 1:1 coaching, team building, and catalyzing movements are clear differentiators. The high energy she brings as an "invisible skill" that elevates rooms and teams is a significant asset that needs structured channels for maximum impact.
          </p>
          <p className="mt-4">
            The key focus areas are: 1) Building her MTP roadmap with clear pillar structure, 2) Running structured experiments to test her three verticals, 3) Establishing consistent silent practice and synthesis routines, and 4) Managing the abundance of opportunities with clear yes/no filters.
          </p>
          <p className="mt-4">
            Her clarity discipline and specificity-driven execution are strong foundations. The main challenge is preventing overcommitment while maintaining the structured experimentation needed to discover her optimal "room size" and leadership altitude.
          </p>
        </div>
      </div>
      
      {/* AI Chatbot */}
      <ClientChatbot 
        currentClientId="courtneykarnes"
        allClientData={allClientData}
      />
    </div>
  );
}
