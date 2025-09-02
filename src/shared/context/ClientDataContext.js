import React, { createContext, useContext, useState, useEffect } from 'react';

// Import the client profiles data
import { clientProfiles } from '../../data/clientProfiles';
import { getAllClientInsights } from '../utils/insightsLoaderSimple';
import { jamesCroweConversationSummary } from '../../data/clients/james_crowe_transcripts';
import { brianCamastralTranscript } from '../../data/clients/brian_camastral_data';

const ClientDataContext = createContext();

export const useClientData = () => {
  const context = useContext(ClientDataContext);
  if (!context) {
    throw new Error('useClientData must be used within a ClientDataProvider');
  }
  return context;
};

export const ClientDataProvider = ({ children }) => {
  const [allClientData, setAllClientData] = useState([]);
  const [detailedInsights, setDetailedInsights] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load detailed insights
    const insights = getAllClientInsights();
    setDetailedInsights(insights);

    // Transform the client profiles to include IDs and ensure all required fields
    const transformedData = clientProfiles.map((profile, index) => {
      const clientInsights = insights[profile.name];
      
      return {
        id: profile.name.toLowerCase().replace(/\s+/g, ''), // Generate ID from name
        name: profile.name,
        archetype: profile.archetype,
        mission: profile.mission,
        flowReadinessScore: profile.flowReadinessScore,
        leadershipLeverageScore: profile.leadershipLeverageScore,
        // Add new metrics if available
        missionAlignmentScore: profile.missionAlignmentScore,
        patentPartnershipIndex: profile.patentPartnershipIndex,
        storyClarityScore: profile.storyClarityScore,
        teamBuildIndex: profile.teamBuildIndex,
        resilienceProtocolScore: profile.resilienceProtocolScore,
        consistencyIndex: profile.consistencyIndex,
        microdoseFlowGain: profile.microdoseFlowGain,
        groupFlowIntegrationScore: profile.groupFlowIntegrationScore,
        missionProgressScore: profile.missionProgressScore,
        flowStabilityIndex: profile.flowStabilityIndex,
        connectionLeverageScore: profile.connectionLeverageScore,
        flowRecoveryIndex: profile.flowRecoveryIndex,
        creativeLeadershipLeverage: profile.creativeLeadershipLeverage,
        topStrengths: profile.topStrengths,
        keyRisks: profile.keyRisks,
        // Add additional computed fields
        overallScore: Math.round((profile.flowReadinessScore + profile.leadershipLeverageScore) / 2),
        performanceLevel: profile.flowReadinessScore >= 75 && profile.leadershipLeverageScore >= 75 ? 'high' : 
                         profile.flowReadinessScore >= 50 && profile.leadershipLeverageScore >= 50 ? 'medium' : 'low',
        // Add detailed insights if available
        detailedInsights: clientInsights || null,
        // Add conversation history for specific clients
        conversationHistory: profile.name === 'James Crowe' ? jamesCroweConversationSummary : 
                           profile.name === 'Brian Camastral' ? brianCamastralTranscript : null
      };
    });

    setAllClientData(transformedData);
    setLoading(false);
  }, []);

  // Helper functions for data analysis
  const getClientById = (clientId) => {
    return allClientData.find(client => client.id === clientId);
  };

  const getClientsByArchetype = (archetype) => {
    return allClientData.filter(client => client.archetype === archetype);
  };

  const getTopPerformers = (scoreType = 'overallScore', limit = 5) => {
    return allClientData
      .sort((a, b) => b[scoreType] - a[scoreType])
      .slice(0, limit);
  };

  const getClientsNeedingAttention = (threshold = 50) => {
    return allClientData.filter(client => 
      client.flowReadinessScore < threshold || client.leadershipLeverageScore < threshold
    );
  };

  const getArchetypeStats = () => {
    const stats = {};
    allClientData.forEach(client => {
      if (!stats[client.archetype]) {
        stats[client.archetype] = {
          count: 0,
          avgFlowReadiness: 0,
          avgLeadershipLeverage: 0,
          totalFlowReadiness: 0,
          totalLeadershipLeverage: 0
        };
      }
      stats[client.archetype].count++;
      stats[client.archetype].totalFlowReadiness += client.flowReadinessScore;
      stats[client.archetype].totalLeadershipLeverage += client.leadershipLeverageScore;
    });

    // Calculate averages
    Object.keys(stats).forEach(archetype => {
      const stat = stats[archetype];
      stat.avgFlowReadiness = Math.round(stat.totalFlowReadiness / stat.count);
      stat.avgLeadershipLeverage = Math.round(stat.totalLeadershipLeverage / stat.count);
    });

    return stats;
  };

  const getPerformanceInsights = (clientId) => {
    const client = getClientById(clientId);
    if (!client) return null;

    const similarArchetypes = getClientsByArchetype(client.archetype);
    const topPerformers = getTopPerformers('overallScore', 3);
    const needsAttention = getClientsNeedingAttention();

    return {
      client,
      similarArchetypes,
      topPerformers,
      needsAttention,
      archetypeStats: getArchetypeStats(),
      recommendations: generateRecommendations(client)
    };
  };

  const generateRecommendations = (client) => {
    const recommendations = [];
    
    if (client.flowReadinessScore < 50) {
      recommendations.push({
        type: 'flow-readiness',
        priority: 'high',
        message: 'Focus on improving flow readiness through better sleep and recovery practices',
        action: 'Implement consistent sleep schedule and recovery routines'
      });
    }
    
    if (client.leadershipLeverageScore < 50) {
      recommendations.push({
        type: 'leadership',
        priority: 'high',
        message: 'Work on modeling flow principles for your team',
        action: 'Start with small team workshops and lead by example'
      });
    }
    
    if (client.keyRisks.length > 0) {
      recommendations.push({
        type: 'risk-mitigation',
        priority: 'medium',
        message: `Address key risks: ${client.keyRisks.join(', ')}`,
        action: 'Create specific action plans for each identified risk'
      });
    }
    
    if (recommendations.length === 0) {
      recommendations.push({
        type: 'maintenance',
        priority: 'low',
        message: 'Maintain current high performance levels',
        action: 'Continue current practices and mentor others'
      });
    }
    
    return recommendations;
  };

  const value = {
    allClientData,
    detailedInsights,
    loading,
    getClientById,
    getClientsByArchetype,
    getTopPerformers,
    getClientsNeedingAttention,
    getArchetypeStats,
    getPerformanceInsights
  };

  return (
    <ClientDataContext.Provider value={value}>
      {children}
    </ClientDataContext.Provider>
  );
};
