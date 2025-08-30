import React from 'react';

export default function FlowDashboard({ onClientSelect }) {
  console.log('FlowDashboard rendering with onClientSelect:', onClientSelect);
  // Client data
  const clients = [
    {
      id: 'rick',
      name: 'Rick Watkin',
      missionAlignment: '80 (Biz) / 20 (Personal)',
      flowReadiness: 45,
      flowLeadershipLeverage: 60,
      topStrengths: 'Clear mission, high drive, team-oriented',
      keyRisks: 'Sleep deficit, low recovery/play',
      nextAction: 'Add primary flow activities; run sleep-IQ test',
      trend: {
        missionAlignment: 'improving',
        flowReadiness: 'steady',
        flowLeadership: 'improving'
      }
    },
    {
      id: 'ricksessinghaus',
      name: 'Rick Sessinghaus',
      missionAlignment: '50 (AI Product/Book Focus)',
      flowReadiness: 55,
      flowLeadershipLeverage: 60,
      topStrengths: 'Clear mission, brand strength, visionary plans',
      keyRisks: 'Overcommitment, diffused focus, early scaling stress',
      nextAction: 'Finalize 100-step plans; batch media; tighten boundaries',
      trend: {
        missionAlignment: 'improving',
        flowReadiness: 'improving',
        flowLeadership: 'improving'
      }
    },
    {
      id: 'brian',
      name: 'Brian Camastral',
      missionAlignment: '70 (Curiosity/Passion Vector)',
      flowReadiness: 55,
      flowLeadershipLeverage: 65,
      topStrengths: 'Visionary, group orchestration, passion-driven',
      keyRisks: 'Staying in planning mode, slow embodiment',
      nextAction: 'Start primary flow activities; pilot small group collaboration',
      trend: {
        missionAlignment: 'improving',
        flowReadiness: 'steady',
        flowLeadership: 'improving'
      }
    },
    {
      id: 'amity',
      name: 'Amity Cooper',
      missionAlignment: '60 (MTP Focus)',
      flowReadiness: 40,
      flowLeadershipLeverage: 50,
      topStrengths: 'Clear MTP, strong assets, visionary',
      keyRisks: 'Scattered execution, marketing bottleneck',
      nextAction: 'Relaunch newsletter, create 10 emails, simplify immediate goal focus',
      trend: {
        missionAlignment: 'improving',
        flowReadiness: 'improving',
        flowLeadership: 'steady'
      }
    },
    {
      id: 'stephanie',
      name: 'Stephanie Van Deynze',
      missionAlignment: '50 (Vet/Leadership Focus)',
      flowReadiness: 60,
      flowLeadershipLeverage: 55,
      topStrengths: 'Clear MTP, solid habits, authentic passion',
      keyRisks: 'Diffused focus, schedule/sleep challenges',
      nextAction: 'Create 100-item roadmap; pilot flow for vets; consider PhD plan',
      trend: {
        missionAlignment: 'steady',
        flowReadiness: 'improving',
        flowLeadership: 'improving'
      }
    },
    {
      id: 'blair',
      name: 'Blair Lukan',
      missionAlignment: '65 (Exit Framework Focus)',
      flowReadiness: 70,
      flowLeadershipLeverage: 60,
      topStrengths: 'Clear niche MTP, strong systems + recovery, authentic communicator',
      keyRisks: 'Planning > prototyping, delayed testing',
      nextAction: 'Start 100-step plan, design + test tool modules, structure night creative sprints',
      trend: {
        missionAlignment: 'improving',
        flowReadiness: 'improving',
        flowLeadership: 'steady'
      }
    },
    {
      id: 'rob',
      name: 'Rob Finlay',
      missionAlignment: '50 (Multiple Projects)',
      flowReadiness: 55,
      flowLeadershipLeverage: 65,
      topStrengths: 'Entrepreneurial energy, creative vision, community builder',
      keyRisks: 'Focus diffusion, travel disruptions, planning fatigue',
      nextAction: 'Prioritize top 2 projects; create travel-proof micro flow routines; finalize Flow Alliance plan',
      trend: {
        missionAlignment: 'steady',
        flowReadiness: 'improving',
        flowLeadership: 'improving'
      }
    },
    {
      id: 'michael',
      name: 'Michael Whitaker',
      missionAlignment: '60 (AI-Human Creativity)',
      flowReadiness: 70,
      flowLeadershipLeverage: 65,
      topStrengths: 'Clear purpose, strong daily structure, visionary on AI/human agency',
      keyRisks: 'Focus diffusion, energy management, over-exploration',
      nextAction: 'Pilot parent workshop; draft 100-step plan; refine niche in AI/flow design',
      trend: {
        missionAlignment: 'improving',
        flowReadiness: 'improving',
        flowLeadership: 'improving'
      }
    },
    {
      id: 'jason',
      name: 'Jason Tadros',
      missionAlignment: '60 (AI/Math Innovation)',
      flowReadiness: 55,
      flowLeadershipLeverage: 65,
      topStrengths: 'Novel AI innovation, visionary systems thinker, high-level network',
      keyRisks: 'Work-life balance strain, execution consistency',
      nextAction: 'Build 100-step plan; finalize DARPA grant; structure small visible wins',
      trend: {
        missionAlignment: 'improving',
        flowReadiness: 'steady',
        flowLeadership: 'improving'
      }
    },
    {
      id: 'james',
      name: 'James Crowe',
      missionAlignment: '55 (Antibody Treatments)',
      flowReadiness: 60,
      flowLeadershipLeverage: 65,
      topStrengths: 'Scientific innovation, recovery discipline, team vision',
      keyRisks: 'Overcommitment, novelty-seeking, execution dilution',
      nextAction: 'Build project list + filters; test art priming vs. microdosing; explore chief of staff hire',
      trend: {
        missionAlignment: 'steady',
        flowReadiness: 'steady',
        flowLeadership: 'improving'
      }
    },
    {
      id: 'geof',
      name: 'Geoffrey Garth',
      missionAlignment: '60 (Hands-on Invention)',
      flowReadiness: 65,
      flowLeadershipLeverage: 60,
      topStrengths: 'Rapid prototyping, creative breadth, idea generation',
      keyRisks: 'Late-market entry, diffusion of focus, under-leveraging networks',
      nextAction: 'Complete passion recipe; meet with design studio; structure curiosity mapping',
      trend: {
        missionAlignment: 'steady',
        flowReadiness: 'steady',
        flowLeadership: 'steady'
      }
    },
    {
      id: 'anatoliy',
      name: 'Anatoliy Otchkovskiy',
      missionAlignment: '60 (Company Transformation)',
      flowReadiness: 55,
      flowLeadershipLeverage: 60,
      topStrengths: 'Clear vision, systems thinking, cultural transformation focus',
      keyRisks: 'Over-planning, inconsistent execution, task switching fatigue',
      nextAction: 'Finalize system playbook; structure 100-step plan; close first acquisition',
      trend: {
        missionAlignment: 'steady',
        flowReadiness: 'steady',
        flowLeadership: 'steady'
      }
    },
    {
      id: 'sandra',
      name: 'Sandra Ozols',
      missionAlignment: '60 (Career Transition)',
      flowReadiness: 65,
      flowLeadershipLeverage: 60,
      topStrengths: 'Deep expertise, creative practices, flow discipline',
      keyRisks: 'Overwhelm from too many paths, lack of daily structure',
      nextAction: 'Build 100-step roadmap; test advisory prototype; structure creative routines',
      trend: {
        missionAlignment: 'steady',
        flowReadiness: 'steady',
        flowLeadership: 'steady'
      }
    },
    {
      id: 'bruce',
      name: 'Bruce Bowser',
      missionAlignment: '65 (Veterinary Innovation)',
      flowReadiness: 60,
      flowLeadershipLeverage: 70,
      topStrengths: 'Bold innovation, market disruptor mindset, authentic leadership',
      keyRisks: 'Focus diffusion, execution overload, rebuilding recovery practices',
      nextAction: 'Draft 100-step plan; structure release activities; sequence innovations',
      trend: {
        missionAlignment: 'steady',
        flowReadiness: 'steady',
        flowLeadership: 'improving'
      }
    },
    {
      id: 'client-e',
      name: '[Client E]',
      missionAlignment: '—',
      flowReadiness: null,
      flowLeadershipLeverage: null,
      topStrengths: '—',
      keyRisks: '—',
      nextAction: '—',
      isPlaceholder: true
    }
  ];

  // Function to get color class based on score
  const getScoreColorClass = (score) => {
    if (score === null || score === undefined) return 'text-gray-400';
    if (score >= 75) return 'text-green-400';
    if (score >= 50) return 'text-yellow-400';
    return 'text-red-400';
  };

  // Function to render trend indicator
  const renderTrendIndicator = (trend) => {
    if (!trend || trend === 'steady') return '→';
    if (trend === 'improving') return '↗︎';
    if (trend === 'declining') return '↘︎';
    return '';
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-primary-100">Mastermind Client Flow Performance Dashboard</h1>
        <div className="text-sm text-gray-400">Last updated: June 30, 2025</div>
      </div>

      <div className="bg-dark-800 rounded-xl shadow-2xl border border-dark-700 overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gradient-to-r from-dark-700 to-dark-600 text-white">
              <tr>
                <th className="p-3 text-left">Client</th>
                <th className="p-3 text-left">Mission Alignment (%)</th>
                <th className="p-3 text-left">Flow Readiness (0-100)</th>
                <th className="p-3 text-left">Flow Leadership (0-100)</th>
                <th className="p-3 text-left">Top Strengths</th>
                <th className="p-3 text-left">Key Risks</th>
                <th className="p-3 text-left">Next Action</th>
                <th className="p-3 text-left">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-700">
              {clients.map((client) => (
                <tr 
                  key={client.id} 
                  className={`${client.isPlaceholder ? 'text-gray-400' : 'hover:bg-dark-700 transition-colors'}`}
                >
                  <td className="p-3 font-medium text-gray-100">{client.name}</td>
                  <td className="p-3 text-gray-200">{client.missionAlignment}</td>
                  <td className={`p-3 ${getScoreColorClass(client.flowReadiness)}`}>
                    {client.flowReadiness || '—'}
                    {client.trend?.flowReadiness && 
                      <span className="ml-2">{renderTrendIndicator(client.trend.flowReadiness)}</span>
                    }
                  </td>
                  <td className={`p-3 ${getScoreColorClass(client.flowLeadershipLeverage)}`}>
                    {client.flowLeadershipLeverage || '—'}
                    {client.trend?.flowLeadership && 
                      <span className="ml-2">{renderTrendIndicator(client.trend.flowLeadership)}</span>
                    }
                  </td>
                  <td className="p-3 text-gray-200">{client.topStrengths}</td>
                  <td className="p-3 text-gray-200">{client.keyRisks}</td>
                  <td className="p-3 text-gray-200">{client.nextAction}</td>
                  <td className="p-3">
                    {!client.isPlaceholder && (
                      <button 
                        onClick={() => {
                          console.log('Selecting client:', client.id);
                          onClientSelect(client.id);
                        }}
                        className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white py-2 px-4 rounded-xl text-sm transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        View Details
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-dark-800 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Metric Descriptions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-primary-300">Mission Alignment Score</h3>
              <p className="text-gray-300">% of daily activities client self-reports as aligned to their mission (can be split business vs. personal)</p>
              <p className="text-sm text-gray-400 mt-1">Tracked via: Weekly journal check-in or reflection survey</p>
            </div>
            
            <div>
              <h3 className="font-medium text-primary-300">Flow Readiness Index</h3>
              <p className="text-gray-300">Composite score: sleep hours (30%), recovery practices (30%), daily deep work (20%), trigger integration (20%)</p>
              <p className="text-sm text-gray-400 mt-1">Tracked via: Self-report + coach observation</p>
            </div>
            
            <div>
              <h3 className="font-medium text-primary-300">Flow Leadership Leverage</h3>
              <p className="text-gray-300">How well client is modeling flow principles for their team (autonomy, focus, recovery, creativity)</p>
              <p className="text-sm text-gray-400 mt-1">Tracked via: Team feedback + coach judgment</p>
            </div>
          </div>
        </div>

        <div className="bg-dark-800 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-primary-100 mb-4">Dashboard Legend</h2>
          
          <div className="mb-6">
            <h3 className="font-medium text-primary-300 mb-2">Color Coding</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-600 rounded mr-2"></div>
                <span>Green: 75-100</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-600 rounded mr-2"></div>
                <span>Yellow: 50-74</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-600 rounded mr-2"></div>
                <span>Red: below 50</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-primary-300 mb-2">Trend Indicators</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center">
                <span className="text-xl font-bold text-green-500 mr-2">↗︎</span>
                <span>Improving</span>
              </div>
              <div className="flex items-center">
                <span className="text-xl font-bold text-gray-400 mr-2">→</span>
                <span>Steady</span>
              </div>
              <div className="flex items-center">
                <span className="text-xl font-bold text-red-500 mr-2">↘︎</span>
                <span>Declining</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
