import React from 'react';
import { useAuth } from '../../../features/auth/AuthContext';

export default function PersonalHomepage({ onViewFullDashboard }) {
  const { currentUser } = useAuth();

  // Weekly data for trend charts (this would come from the user's actual data)
  const weeklyData = {
    missionAlignment: [65, 67, 68, 70],
    flowReadiness: [55, 58, 60, 62],
    flowLeadership: [50, 52, 55, 58]
  };

  // Component for trend indicators
  const TrendIndicator = ({ trend, note }) => {
    let icon = "→";
    let color = "text-gray-400";
    
    if (trend === "improving") {
      icon = "↗︎";
      color = "text-green-400";
    } else if (trend === "declining") {
      icon = "↘︎";
      color = "text-red-400";
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
    let color = "text-red-400";
    
    if (score >= 75) {
      color = "text-green-400";
    } else if (score >= 50) {
      color = "text-yellow-400";
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

  if (!currentUser) {
    return <div className="text-gray-300">Loading...</div>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-dark-700 to-dark-800 rounded-xl p-8 text-white mb-8 border border-dark-600 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              Welcome back, {currentUser.firstName}! 👋
            </h1>
            <p className="text-xl text-gray-200">
              Your personalized flow dashboard is ready
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Last login: {currentUser.lastLogin ? new Date(currentUser.lastLogin).toLocaleDateString() : 'First time'}
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-semibold mb-1 text-primary-100">{currentUser.archetype}</div>
            <div className="text-gray-300">{currentUser.focus}</div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-dark-800 p-6 rounded-xl shadow-xl border-l-4 border-primary-500 border border-dark-700">
          <h3 className="text-lg font-semibold text-gray-100 mb-2">Mission Alignment</h3>
          <div className="flex items-center justify-between">
            <MetricScore score={70} />
            <TrendIndicator trend="improving" note="+5 this week" />
          </div>
          <div className="mt-4">
            <Sparkline data={weeklyData.missionAlignment} />
          </div>
        </div>

        <div className="bg-dark-800 p-6 rounded-xl shadow-xl border-l-4 border-green-500 border border-dark-700">
          <h3 className="text-lg font-semibold text-gray-100 mb-2">Flow Readiness</h3>
          <div className="flex items-center justify-between">
            <MetricScore score={62} />
            <TrendIndicator trend="improving" note="+7 this week" />
          </div>
          <div className="mt-4">
            <Sparkline data={weeklyData.flowReadiness} />
          </div>
        </div>

        <div className="bg-dark-800 p-6 rounded-xl shadow-xl border-l-4 border-purple-500 border border-dark-700">
          <h3 className="text-lg font-semibold text-gray-100 mb-2">Leadership Leverage</h3>
          <div className="flex items-center justify-between">
            <MetricScore score={58} />
            <TrendIndicator trend="improving" note="+6 this week" />
          </div>
          <div className="mt-4">
            <Sparkline data={weeklyData.flowLeadership} />
          </div>
        </div>
      </div>

      {/* Today's Focus */}
      <div className="bg-dark-800 rounded-xl shadow-xl p-6 mb-8 border border-dark-700">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Today's Focus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-primary-300 mb-3">Priority Actions</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-primary-600 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-200">Complete 90-minute deep work session</p>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-600 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-200">Review weekly mission alignment</p>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-600 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-200">Schedule recovery activity</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-primary-300 mb-3">Flow Triggers</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-dark-700 rounded-lg border border-dark-600">
                <span className="text-gray-200">Deep Work Environment</span>
                <span className="text-green-400 text-sm font-medium">Ready</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-dark-700 rounded-lg border border-dark-600">
                <span className="text-gray-200">Energy Level</span>
                <span className="text-yellow-400 text-sm font-medium">Moderate</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-dark-700 rounded-lg border border-dark-600">
                <span className="text-gray-200">Sleep Quality</span>
                <span className="text-red-400 text-sm font-medium">Needs Attention</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Progress */}
      <div className="bg-dark-800 rounded-xl shadow-xl p-6 mb-8 border border-dark-700">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Recent Progress</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-dark-700 rounded-lg border border-green-500/20">
            <div className="flex items-center">
              <div className="bg-green-500 rounded-full p-2 mr-4">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-green-400">Flow Readiness Improved</p>
                <p className="text-sm text-green-300">Your flow readiness score increased by 7 points this week</p>
              </div>
            </div>
            <span className="text-sm text-green-300">2 hours ago</span>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-dark-700 rounded-lg border border-primary-500/20">
            <div className="flex items-center">
              <div className="bg-primary-500 rounded-full p-2 mr-4">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-primary-400">New Goal Set</p>
                <p className="text-sm text-primary-300">You've set a new 100-day goal for mission alignment</p>
              </div>
            </div>
            <span className="text-sm text-primary-300">1 day ago</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="text-center">
        <button
          onClick={() => onViewFullDashboard && onViewFullDashboard()}
          className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          View My Detailed Dashboard
        </button>
      </div>
    </div>
  );
}
