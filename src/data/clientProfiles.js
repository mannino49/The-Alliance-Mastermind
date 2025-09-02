// Unified Client Profile Data Structure
// Combines authentication data with performance metrics

export const clientProfiles = [
  {
    name: 'Rick Watkin',
    archetype: 'The Visionary',
    mission: 'Business/Personal Mission',
    flowReadinessScore: 45,
    leadershipLeverageScore: 60,
    topStrengths: ['Clear mission', 'High drive', 'Team-oriented'],
    keyRisks: ['Sleep deficit', 'Low recovery/play']
  },
  {
    name: 'Rick Sessinghaus',
    archetype: 'The Creator',
    mission: 'AI Product/Book Focus',
    flowReadinessScore: 60,
    leadershipLeverageScore: 70,
    missionAlignmentScore: 65,
    topStrengths: [
      'Clarity on priorities with anchored planning rituals',
      'Brand authority and strong mission alignment',
      'Major breakthrough in cognitive load awareness',
      'Strong structural awareness of scalable leadership requirements',
      'Clear intent to shift brand positioning from golf expert to peak performance authority',
      'Learning from Kotler\'s FRC scaling lessons (hire alignment > star power)'
    ],
    keyRisks: [
      'Urgency bias can blur true importance and inflate cognitive load',
      'Boundary drift and overcommitment from "nice guy" default',
      'Risk of culture dilution and overextension without operationalized boundaries',
      'Still wrestling with "nice vs clear" boundary language',
      'Cognitive overload impacts creativity, resilience, and decision quality'
    ],
    hasTranscriptData: true,
    transcriptFile: 'rick_sessinghaus_transcripts.js'
  },
  {
    name: 'Brian Camastral',
    archetype: 'The Orchestrator',
    mission: 'Curiosity/Passion Vector - Collective Flow Leadership',
    flowReadinessScore: 55,
    leadershipLeverageScore: 65,
    missionAlignmentScore: 70,
    collectiveFlowIndex: 80,
    groupOrchestrationScore: 85,
    neuroscienceKnowledgeLevel: 60,
    topStrengths: [
      'Visionary group orchestration',
      'Passion-driven approach', 
      'High-performance teamwork experience',
      'Strategic collective thinking',
      'Deep empathy and connection'
    ],
    keyRisks: [
      'Staying in planning mode vs execution',
      'Slow embodiment of concepts',
      'Process vs outcome balance',
      'Individual coaching vs collective focus'
    ],
    hasTranscriptData: true,
    transcriptFile: 'brian_camastral_data.js'
  },
  {
    name: 'Amity Cooper',
    archetype: 'The MTP Driver',
    mission: 'MTP Focus',
    flowReadinessScore: 50,
    leadershipLeverageScore: 55,
    topStrengths: ['Clear prioritization', 'Intuitive flow access', 'Visionary leadership'],
    keyRisks: ['Daily grind draining flow', 'Fundraising delay', 'Structural overwhelm']
  },
  {
    name: 'Stephanie Van Deynze',
    archetype: 'The Leader',
    mission: 'Veterinary/Leadership Focus',
    flowReadinessScore: 60,
    leadershipLeverageScore: 55,
    topStrengths: ['Clear MTP', 'Solid habits', 'Authentic passion'],
    keyRisks: ['Diffused focus', 'Schedule/sleep challenges']
  },
  {
    name: 'Blair Lukan',
    archetype: 'The System Builder',
    mission: 'Exit Framework Focus',
    flowReadinessScore: 72,
    leadershipLeverageScore: 68,
    missionAlignmentScore: 75,
    topStrengths: [
      'Clarified 6-8 year MTP with active execution momentum',
      'System thinker with strong recovery & execution capabilities',
      'Authentic communicator with clear leverage vector in frameworks',
      'Creative microdosing approach (2-10 min daily practices)',
      'Strong foundation: distraction control, recovery, physical energy',
      'Ripple effect: son independently adopting creative practices'
    ],
    keyRisks: [
      'Overscheduling → fragility risk (packed calendar leaves little slack)',
      'Creative reps inconsistent amidst firm overhaul',
      'System codification still in early buildout phase',
      'Energy risk if scaling collides with overloaded personal bandwidth',
      'Need to build time-buffer into calendar for anti-fragility'
    ]
  },
  {
    name: 'Rob Finlay',
    archetype: 'The Community Builder',
    mission: 'Multiple Projects',
    flowReadinessScore: 55,
    leadershipLeverageScore: 65,
    topStrengths: ['Entrepreneurial energy', 'Creative vision', 'Community builder'],
    keyRisks: ['Focus diffusion', 'Travel disruptions', 'Planning fatigue']
  },
  {
    name: 'Michael Whitaker',
    archetype: 'The Innovator',
    mission: 'AI-Human Creativity',
    flowReadinessScore: 75,
    leadershipLeverageScore: 70,
    missionAlignmentScore: 70,
    topStrengths: ['Pragmatic tone', 'Strong daily structure', 'Clear AI/parent niche', 'Invisible skills in systems-thinking'],
    keyRisks: ['Growth fragility', 'Plateau risk', 'Needs original contributions']
  },
  {
    name: 'Jason Tadros',
    archetype: 'The Systems Thinker',
    mission: 'AI/Math Innovation',
    flowReadinessScore: 60,
    leadershipLeverageScore: 70,
    missionAlignmentScore: 70,
    patentPartnershipIndex: 70,
    storyClarityScore: 40,
    teamBuildIndex: 30,
    resilienceProtocolScore: 35,
    topStrengths: ['Technical breakthroughs', 'Visionary systems thinker', 'Rapid validation', 'Novel AI innovation', 'High-level network'],
    keyRisks: ['Storytelling gap', 'Execution bottleneck', 'Resilience under overload', 'Work-life balance strain']
  },
  {
    name: 'James Crowe',
    archetype: 'The Scientist',
    mission: 'Antibody Treatments',
    flowReadinessScore: 60,
    leadershipLeverageScore: 65,
    topStrengths: ['Scientific innovation', 'Recovery discipline', 'Team vision'],
    keyRisks: ['Overcommitment', 'Novelty-seeking', 'Execution dilution']
  },
  {
    name: 'Geoffrey Garth',
    archetype: 'The Inventor',
    mission: 'Hands-on Invention',
    flowReadinessScore: 70,
    leadershipLeverageScore: 75,
    missionProgressScore: 65,
    flowStabilityIndex: 70,
    connectionLeverageScore: 75,
    topStrengths: ['Workshop tinkering', 'Fishing flow', 'Group presence'],
    keyRisks: ['Overweighting "MTP"', 'Travel dysregulation', 'Risk of group dissolution']
  },
  {
    name: 'Anatoliy Otchkovskiy',
    archetype: 'The Transformer',
    mission: 'Company Transformation',
    flowReadinessScore: 65,
    leadershipLeverageScore: 63,
    missionAlignmentScore: 62,
    consistencyIndex: 65,
    microdoseFlowGain: 70,
    groupFlowIntegrationScore: 45,
    topStrengths: ['Systems thinker', 'Group flow vision', 'Creative microdosing', 'High self-awareness', 'Strategic alignment'],
    keyRisks: ['Fragile routines during travel', 'Risk of staying in theory phase', 'Microdosing may drift into distraction']
  },
  {
    name: 'Sandra Ozols',
    archetype: 'The Transitioner',
    mission: 'Career Transition',
    flowReadinessScore: 45,
    leadershipLeverageScore: 50,
    topStrengths: ['Adaptability', 'Learning mindset', 'Resilience'],
    keyRisks: ['Uncertainty', 'Skill development', 'Network building']
  },
  {
    name: 'Bruce Bowser',
    archetype: 'The Disruptor',
    mission: 'Veterinary Innovation',
    flowReadinessScore: 60,
    leadershipLeverageScore: 70,
    missionAlignmentScore: 70,
    flowRecoveryIndex: 65,
    creativeLeadershipLeverage: 75,
    topStrengths: [
      'Creative leadership breakthrough',
      'Bold innovation across pet + healthcare',
      'Cross-industry vision and application',
      'Strong creative process framework',
      'High flow capacity and energy'
    ],
    keyRisks: [
      'Dilution across multiple innovation tracks',
      'Recovery inconsistency and over-excitement',
      'Risk of burnout from high stimulation',
      'Need to systematize recovery practices',
      'Sequencing multiple projects carefully'
    ],
    hasTranscriptData: true,
    transcriptFile: 'bruce_bowser_transcripts.js'
  }
];

// Helper function to find client profile by name
export const findClientProfileByName = (name) => {
  return clientProfiles.find(profile => 
    profile.name.toLowerCase() === name.toLowerCase()
  );
};

// Helper function to find client profile by archetype
export const findClientProfilesByArchetype = (archetype) => {
  return clientProfiles.filter(profile => 
    profile.archetype.toLowerCase() === archetype.toLowerCase()
  );
};

// Helper function to get clients by score range
export const getClientsByScoreRange = (minScore, maxScore, scoreType = 'flowReadinessScore') => {
  return clientProfiles.filter(profile => 
    profile[scoreType] >= minScore && profile[scoreType] <= maxScore
  );
};

// Helper function to get top performers
export const getTopPerformers = (scoreType = 'flowReadinessScore', limit = 5) => {
  return clientProfiles
    .sort((a, b) => b[scoreType] - a[scoreType])
    .slice(0, limit);
};

// Helper function to get clients needing attention (low scores)
export const getClientsNeedingAttention = (scoreType = 'flowReadinessScore', threshold = 50) => {
  return clientProfiles.filter(profile => profile[scoreType] < threshold);
};
