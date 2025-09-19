import { clientProfiles } from '../data/clientProfiles.js';

// Score analysis utilities
export const getScoreLevel = (score) => {
  if (score >= 75) return 'high';
  if (score >= 50) return 'medium';
  return 'low';
};

export const getScoreColor = (score) => {
  if (score >= 75) return 'text-green-600';
  if (score >= 50) return 'text-yellow-600';
  return 'text-red-600';
};

export const getScoreBackgroundColor = (score) => {
  if (score >= 75) return 'bg-green-100';
  if (score >= 50) return 'bg-yellow-100';
  return 'bg-red-100';
};

// Client analysis utilities
export const getClientInsights = (clientProfile) => {
  const insights = {
    flowReadinessLevel: getScoreLevel(clientProfile.flowReadinessScore),
    leadershipLevel: getScoreLevel(clientProfile.leadershipLeverageScore),
    overallPerformance: getScoreLevel((clientProfile.flowReadinessScore + clientProfile.leadershipLeverageScore) / 2),
    priority: 'medium'
  };

  // Determine priority based on scores
  if (clientProfile.flowReadinessScore < 50 || clientProfile.leadershipLeverageScore < 50) {
    insights.priority = 'high';
  } else if (clientProfile.flowReadinessScore >= 70 && clientProfile.leadershipLeverageScore >= 70) {
    insights.priority = 'low';
  }

  return insights;
};

export const getClientRecommendations = (clientProfile) => {
  const recommendations = [];
  
  if (clientProfile.flowReadinessScore < 50) {
    recommendations.push('Focus on improving flow readiness through better sleep and recovery practices');
  }
  
  if (clientProfile.leadershipLeverageScore < 50) {
    recommendations.push('Work on modeling flow principles for your team');
  }
  
  if (clientProfile.keyRisks.length > 0) {
    recommendations.push(`Address key risks: ${clientProfile.keyRisks.join(', ')}`);
  }
  
  if (recommendations.length === 0) {
    recommendations.push('Maintain current high performance levels');
  }
  
  return recommendations;
};

// Group analysis utilities
export const getArchetypeAnalysis = () => {
  const archetypeStats = {};
  
  clientProfiles.forEach(profile => {
    if (!archetypeStats[profile.archetype]) {
      archetypeStats[profile.archetype] = {
        count: 0,
        avgFlowReadiness: 0,
        avgLeadershipLeverage: 0,
        totalFlowReadiness: 0,
        totalLeadershipLeverage: 0
      };
    }
    
    archetypeStats[profile.archetype].count++;
    archetypeStats[profile.archetype].totalFlowReadiness += profile.flowReadinessScore;
    archetypeStats[profile.archetype].totalLeadershipLeverage += profile.leadershipLeverageScore;
  });
  
  // Calculate averages
  Object.keys(archetypeStats).forEach(archetype => {
    const stats = archetypeStats[archetype];
    stats.avgFlowReadiness = Math.round(stats.totalFlowReadiness / stats.count);
    stats.avgLeadershipLeverage = Math.round(stats.totalLeadershipLeverage / stats.count);
  });
  
  return archetypeStats;
};

export const getPerformanceTrends = () => {
  const trends = {
    topPerformers: [],
    needsAttention: [],
    improving: [],
    steady: []
  };
  
  clientProfiles.forEach(profile => {
    const insights = getClientInsights(profile);
    
    if (insights.overallPerformance === 'high') {
      trends.topPerformers.push(profile);
    } else if (insights.priority === 'high') {
      trends.needsAttention.push(profile);
    }
  });
  
  return trends;
};

// Search and filter utilities
export const searchClientProfiles = (query) => {
  const searchTerm = query.toLowerCase();
  
  return clientProfiles.filter(profile => 
    profile.name.toLowerCase().includes(searchTerm) ||
    profile.archetype.toLowerCase().includes(searchTerm) ||
    profile.mission.toLowerCase().includes(searchTerm) ||
    profile.topStrengths.some(strength => strength.toLowerCase().includes(searchTerm)) ||
    profile.keyRisks.some(risk => risk.toLowerCase().includes(searchTerm))
  );
};

export const filterByScoreRange = (minScore, maxScore, scoreType = 'flowReadinessScore') => {
  return clientProfiles.filter(profile => 
    profile[scoreType] >= minScore && profile[scoreType] <= maxScore
  );
};

export const filterByArchetype = (archetype) => {
  return clientProfiles.filter(profile => 
    profile.archetype === archetype
  );
};

// Export the main clientProfiles array for convenience
export { clientProfiles };
