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

export default function AnatoliyDashboard() {
  // Get client data from context
  const { allClientData } = useClientData();
  
  // Weekly data for sparklines
  const weeklyData = {
    missionAlignment: [55, 58, 60, 62],
    flowReadiness: [50, 52, 55, 65],
    flowLeadership: [55, 58, 60, 63]
  };
  
  // Detailed flow readiness components
  const flowReadinessComponents = [
    { label: "Energy Consistency", value: 65 },
    { label: "Weekend Buffer Work", value: 60 },
    { label: "Sunday Prep Routines", value: 55 },
    { label: "Travel Resilience", value: 40 }
  ];
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Mission Alignment Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Mission Alignment</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={62} />
            <TrendIndicator trend="improving" note="+2% from previous" />
          </div>
          <Sparkline data={weeklyData.missionAlignment} />
          <p className="mt-4 text-gray-300">
            62% of business activities aligned with group flow transformation mission. Clear vision for transforming organizational culture through group flow, with strong systems thinking approach to business transformation and acquisition-based model.
          </p>
        </div>
        
        {/* Flow Readiness Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Readiness</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={65} />
            <TrendIndicator trend="improving" note="+10% from previous" />
          </div>
          <Sparkline data={weeklyData.flowReadiness} />
          <p className="mt-4 text-gray-300">
            Significant improvement in energy consistency through weekend buffer work and structured Sunday prep. High self-awareness and concrete fixes being applied, but still fragile to disruptions like travel.
          </p>
        </div>
        
        {/* Flow Leadership Card */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Flow Leadership</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={63} />
            <TrendIndicator trend="improving" note="+3% from previous" />
          </div>
          <Sparkline data={weeklyData.flowLeadership} />
          <p className="mt-4 text-gray-300">
            Strong vision for group flow as foundational to business model. Exploring diagnostic tools for company culture assessment and Syneurgy as real-time intervention platform. Needs to move from theory to pilot application.
          </p>
        </div>
      </div>
      
      {/* New Metrics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Consistency Index */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Consistency Index</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={65} />
            <TrendIndicator trend="improving" note="+10% improvement" />
          </div>
          <p className="mt-4 text-gray-300">
            % of weeks where energy remains stable across Monday–Friday. Significant improvement from ~55% through weekend buffer work and structured Sunday prep to avoid "Monday rebuild" cycles.
          </p>
        </div>
        
        {/* Microdose Flow Gain */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Microdose Flow Gain</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={70} />
            <TrendIndicator trend="improving" note="strong potential" />
          </div>
          <p className="mt-4 text-gray-300">
            % of task blocks following micro-breaks completed at/above planned productivity. Using creative breaks (music jamming, 90s print ad styling) as "microdoses" to clear mental RAM and increase readiness.
          </p>
        </div>
        
        {/* Group Flow Integration Score */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Group Flow Integration Score</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={45} />
            <TrendIndicator trend="steady" note="needs real-world testing" />
          </div>
          <p className="mt-4 text-gray-300">
            % of business model components tested in live environments. Strong intellectual foundation with group flow as differentiator, but limited real-world deployment. Needs pilot application with real companies.
          </p>
        </div>
      </div>
      
      {/* New Metrics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Consistency Index */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Consistency Index</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={65} />
            <TrendIndicator trend="improving" note="+10% from previous" />
          </div>
          <p className="mt-4 text-gray-300">
            65% of weeks where energy remains stable across Monday–Friday. Improvement from ~55%, but still variable. Shows significant self-awareness and is applying concrete fixes (weekend buffer work, Sunday planning).
          </p>
        </div>
        
        {/* Microdose Flow Gain */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Microdose Flow Gain</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={70} />
            <TrendIndicator trend="improving" note="strong potential" />
          </div>
          <p className="mt-4 text-gray-300">
            70% of task blocks following micro-breaks completed at/above planned productivity. Highly innovative use of micro-rituals to maintain flow. Using short creative breaks (music app jamming, business communication styled like 90s print ads) as "microdoses" between tasks.
          </p>
        </div>
        
        {/* Group Flow Integration Score */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Group Flow Integration Score</h2>
          <div className="flex items-center justify-between mb-4">
            <MetricScore score={45} />
            <TrendIndicator trend="steady" note="needs real-world testing" />
          </div>
          <p className="mt-4 text-gray-300">
            45% of business model components tested in live environments (diagnostics, Syneurgy, practices). Strong intellectual foundation, limited real-world deployment so far. Needs to move from theory/research to pilot application with at least one real company acquisition or trial.
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
              <span className="text-green-400 font-bold">→ 62% (+2%)</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Energy regulation and consistency upgrade</p>
          </div>
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Flow Readiness</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Previous: 55%</span>
              <span className="text-green-400 font-bold">→ 65% (+10%)</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Creative microdosing as flow tool</p>
          </div>
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Flow Leadership</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Previous: 60%</span>
              <span className="text-green-400 font-bold">→ 63% (+3%)</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Group flow integration and business model testing</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Consistency Index</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">New Metric</span>
              <span className="text-blue-400 font-bold">→ 65%</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Energy stability across weekdays</p>
          </div>
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Microdose Flow Gain</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">New Metric</span>
              <span className="text-blue-400 font-bold">→ 70%</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Creative microdosing effectiveness</p>
          </div>
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Group Flow Integration</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">New Metric</span>
              <span className="text-blue-400 font-bold">→ 45%</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Business model testing progress</p>
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
      
      {/* Metrics Change Summary */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl mb-8">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Metrics Change Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Mission Alignment</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Previous: 60%</span>
              <span className="text-green-400 font-bold">→ 62% (+2%)</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Clear vision for group flow transformation</p>
          </div>
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Flow Readiness</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Previous: 55%</span>
              <span className="text-green-400 font-bold">→ 65% (+10%)</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Significant improvement in energy consistency</p>
          </div>
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Flow Leadership</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Previous: 60%</span>
              <span className="text-green-400 font-bold">→ 63% (+3%)</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Strong vision, needs real-world testing</p>
          </div>
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Consistency Index</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">New Metric</span>
              <span className="text-blue-400 font-bold">65%</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Weekend buffer work showing results</p>
          </div>
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Microdose Flow Gain</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">New Metric</span>
              <span className="text-green-400 font-bold">70%</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Creative microdosing showing strong potential</p>
          </div>
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-medium text-primary-300 mb-2">Group Flow Integration</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">New Metric</span>
              <span className="text-yellow-400 font-bold">45%</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">Strong foundation, needs real-world testing</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Top Strengths */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Top Strengths</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Systems thinker with clear group flow vision</li>
            <li>Highly innovative creative microdosing approach</li>
            <li>High self-awareness and concrete fixes being applied</li>
            <li>Strategic alignment with group flow as differentiator</li>
            <li>Significant improvement in energy consistency through weekend buffer work</li>
          </ul>
        </div>
        
        {/* Key Risks */}
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Key Risks</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Fragile routines during travel where routines collapse</li>
            <li>Risk of staying in theory phase without real-world testing</li>
            <li>Microdosing may drift into distraction if not bounded in time</li>
            <li>Needs to move from theory/research to pilot application</li>
            <li>Travel rituals and micro-resets needed to sustain flow</li>
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
              <li>Pilot Syneurgy diagnostic with a target company</li>
              <li>Formalize weekend buffer + microdose routines</li>
              <li>Design minimal viable diagnostic tool</li>
              <li>Create travel rituals and micro-resets for flow sustainability</li>
              <li>Move from theory/research to pilot application with real companies</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-medium text-primary-300">30-Day Goals:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Test group flow integration with at least one real company</li>
              <li>Document and measure microdose flow gain effectiveness</li>
              <li>Develop travel resilience protocols</li>
              <li>Create bounded time limits for creative microdosing</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Coach Notes */}
      <div className="bg-dark-800 p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-semibold text-primary-100 mb-4">Coach Notes</h2>
        <div className="prose max-w-none">
          <p>
            Anatoliy has made significant progress in energy regulation and consistency, showing remarkable self-awareness in identifying his biggest challenge: inconsistent weekly energy cycles. His innovative approach to weekend buffer work and structured Sunday prep has resulted in a 10% improvement in flow readiness.
          </p>
          <p className="mt-4">
            His creative microdosing strategy is particularly noteworthy - using short creative breaks (music jamming, 90s print ad styling) as "microdoses" between tasks to clear mental RAM and increase readiness. This aligns perfectly with his broader mission of embedding creativity into organizational culture and shows strong potential at 70%.
          </p>
          <p className="mt-4">
            However, Anatoliy still faces the critical challenge of moving from theory to real-world application. His group flow integration score of 45% reflects strong intellectual foundation but limited real-world deployment. He needs to pilot his Syneurgy diagnostic with actual companies rather than staying in the research phase.
          </p>
          <p className="mt-4">
            The main risk remains his fragile routines during travel, where his carefully constructed energy management systems collapse. He needs to develop travel rituals and micro-resets to sustain flow during disruptions. Additionally, his microdosing approach needs bounded time limits to prevent drift into distraction.
          </p>
          <p className="mt-4">
            <strong>Recommendation:</strong> Focus on piloting Syneurgy diagnostic with a target company while formalizing his weekend buffer and microdose routines. This dual approach will move him from theory to practice while maintaining the energy consistency gains he's achieved.
          </p>
        </div>
      </div>
      
      {/* AI Chatbot */}
      <ClientChatbot 
        currentClientId="anatoliyotchkovskiy"
        allClientData={allClientData}
      />
    </div>
  );
}
