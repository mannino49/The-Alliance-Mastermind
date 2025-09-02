import React from 'react';
import { useClientData } from '../../../shared/context/ClientDataContext';
import ClientChatbot from '../../features/chatbot/ClientChatbot';

export default function BrianDashboard() {
  // Get client data from context
  const { allClientData } = useClientData();
  
  // Weekly data for trend charts
  const weeklyData = {
    missionAlignment: [65, 67, 68, 75],
    flowReadiness: [55, 55, 55, 65],
    flowLeadership: [60, 62, 64, 70]
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
        <h1 className="text-3xl font-bold text-primary-100">Brian Camastral's Flow Dashboard</h1>
        <div className="text-sm text-gray-400">Last updated: June 30, 2025</div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Mission Alignment Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Mission Alignment</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={75} />
            <TrendIndicator trend="improving" note="goal stack clarified, experiments started" />
          </div>
          <Sparkline data={weeklyData.missionAlignment} />
          <p className="mt-4 text-gray-300">
            75% of weekly work tied to testing/practicing team-building offers. Reworked goal stack and sequenced priorities, reducing overwhelm and improving clarity. Parked "big purpose" driver and now testing hypotheses through smaller coaching and positioning experiments.
          </p>
        </div>
        
        {/* Flow Readiness Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Readiness</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={65} />
            <TrendIndicator trend="improving" note="stronger embodiment, relational practice still early" />
          </div>
          <Sparkline data={weeklyData.flowReadiness} />
          <p className="mt-4 text-gray-300">
            Integration of grounding practices and relational truth-telling reps. Acknowledged relational blind spot and experimenting with truth-telling and gratitude practices. Nature remains strongest grounding flow practice.
          </p>
        </div>
        
        {/* Flow Leadership Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Leadership</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={70} />
            <TrendIndicator trend="improving" note="clear fast team positioning, needs pilots" />
          </div>
          <Sparkline data={weeklyData.flowLeadership} />
          <p className="mt-4 text-gray-300">
            70% of positioning and pilots focused on fast-forming high-performing teams. Recognizes his edge in orchestrating elite, fast-forming teams. Clear positioning with three offers, with "high-performing project-based teams" as most differentiated lever.
          </p>
        </div>
      </div>

      {/* Flow Readiness Breakdown */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl mb-8">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Readiness Breakdown</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          <div className="mb-3">
            <div className="flex justify-between mb-1">
              <span>Grounded Experimentation</span>
              <span>75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-green-500 h-2.5 rounded-full" 
                style={{ width: '75%' }}
              ></div>
            </div>
          </div>
          
          <div className="mb-3">
            <div className="flex justify-between mb-1">
              <span>Relational Truth-Telling</span>
              <span>60%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-yellow-500 h-2.5 rounded-full" 
                style={{ width: '60%' }}
              ></div>
            </div>
          </div>
          
          <div className="mb-3">
            <div className="flex justify-between mb-1">
              <span>Nature Grounding</span>
              <span>85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-green-500 h-2.5 rounded-full" 
                style={{ width: '85%' }}
              ></div>
            </div>
          </div>
          
          <div className="mb-3">
            <div className="flex justify-between mb-1">
              <span>Embodied Practices</span>
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
            <li>Elite team orchestration and fast-forming capabilities</li>
            <li>Grounded clarity with reduced overwhelm</li>
            <li>Relational experimentation and truth-telling</li>
            <li>Clear "fast team" positioning and differentiation</li>
            <li>Nature grounding as strongest flow practice</li>
          </ul>
        </div>
        
        {/* Key Risks */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Key Risks</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Risk of lingering in design/positioning mode</li>
            <li>Relational distance and resistance to vulnerability</li>
            <li>Dilution across too many offers instead of focus</li>
            <li>Need for early pilots to validate positioning</li>
            <li>Staying too long in prep mode without market testing</li>
          </ul>
        </div>
      </div>

      {/* Detailed Insight Boxes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        
        {/* Grounded Experimentation Box */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-xl shadow-xl border border-blue-700">
          <h3 className="text-lg font-semibold text-blue-100 mb-4">🎯 Grounded Experimentation</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-blue-200">Goal Stack</span>
              <span className="text-blue-100 font-bold">Reworked</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-blue-200">Big Purpose</span>
              <span className="text-blue-100 font-bold">Parked</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-blue-200">Coaching Experiments</span>
              <span className="text-blue-100 font-bold">Active</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-blue-200">Team Building</span>
              <span className="text-blue-100 font-bold">Environmental Focus</span>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              Reworked goal stack and sequenced priorities, reducing overwhelm. Parked "big purpose" driver and now testing hypotheses through smaller coaching and positioning experiments.
            </p>
          </div>
        </div>

        {/* Embodiment & Relational Box */}
        <div className="bg-gradient-to-br from-green-900 to-green-800 p-6 rounded-xl shadow-xl border border-green-700">
          <h3 className="text-lg font-semibold text-green-100 mb-4">🌱 Embodiment & Relational</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-green-200">Relational Blind Spot</span>
              <span className="text-green-100 font-bold">Acknowledged</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-green-200">Truth-Telling</span>
              <span className="text-green-100 font-bold">Experimenting</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-green-200">Gratitude Practice</span>
              <span className="text-green-100 font-bold">Letters & Cards</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-green-200">Nature Grounding</span>
              <span className="text-green-100 font-bold">Strongest Practice</span>
            </div>
            <p className="text-green-200 text-sm mt-4">
              Acknowledged relational blind spot of keeping distance. Experimenting with truth-telling and gratitude practices. Progress from intellectual prep toward embodied experiments in connection.
            </p>
          </div>
        </div>

        {/* Market Positioning Box */}
        <div className="bg-gradient-to-br from-purple-900 to-purple-800 p-6 rounded-xl shadow-xl border border-purple-700">
          <h3 className="text-lg font-semibold text-purple-100 mb-4">🚀 Market Positioning</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-purple-200">Elite Team Orchestration</span>
              <span className="text-purple-100 font-bold">Core Edge</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-purple-200">Three Clear Offers</span>
              <span className="text-purple-100 font-bold">Positioned</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-purple-200">Fast-Forming Teams</span>
              <span className="text-purple-100 font-bold">Differentiated</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-purple-200">Environmental Innovation</span>
              <span className="text-purple-100 font-bold">Target Market</span>
            </div>
            <p className="text-purple-200 text-sm mt-4">
              Recognizes his edge in orchestrating elite, fast-forming teams. Clear positioning with three offers, with "high-performing project-based teams" as most differentiated lever.
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
              <li>Pilot "fast-forming high-performing team" product in environmental innovation space</li>
              <li>Deepen relational truth-telling practices with letters to wife and cards to family</li>
              <li>Double down on differentiated "fast team" niche to avoid dilution</li>
              <li>Develop early pilots to validate positioning and market fit</li>
              <li>Continue nature grounding practices as primary flow trigger</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-medium text-primary-300">30-Day Goals:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Launch first pilot with environmental innovation team</li>
              <li>Complete relational truth-telling experiment with family</li>
              <li>Refine "fast team" positioning based on market feedback</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Coach Notes */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Coach Notes</h2>
        <div className="prose max-w-none">
          <p>
            Brian has made significant progress in grounding his approach and reducing overwhelm. His clarity around elite team orchestration is his strongest differentiator, and he's successfully moved from aspirational "big purpose" thinking to grounded experimentation.
          </p>
          <p className="mt-4">
            The key breakthrough is his recognition of his unique edge in orchestrating fast-forming, high-performing teams, particularly in environmental innovation. His three clear offers show strategic thinking, but the risk is staying too long in positioning mode without market validation.
          </p>
          <p className="mt-4">
            His relational work represents important growth - acknowledging his blind spot of keeping distance and experimenting with truth-telling and gratitude practices. Nature remains his strongest grounding practice, which should be leveraged as his primary flow trigger.
          </p>
          <p className="mt-4">
            The critical next step is moving from positioning to pilots, particularly in the environmental innovation space where his "fast-forming high-performing teams" approach can be validated and refined based on real market feedback.
          </p>
        </div>
      </div>
      
      {/* AI Chatbot */}
      <ClientChatbot 
        currentClientId="briancamastral"
        allClientData={allClientData}
      />
    </div>
  );
}
