// Unified Client Profile Data Structure
// Combines authentication data with performance metrics

export const clientProfiles = [
  {
    name: 'Rick Watkin',
    mission: 'Business/Personal Mission',
    archetype: 'The Visionary',
    flowReadinessScore: 45,
    leadershipLeverageScore: 60,
    topStrengths: ['Clear mission', 'High drive', 'Team-oriented'],
    keyRisks: ['Sleep deficit', 'Low recovery/play']
  },
  {
    name: 'Rick Sessinghaus',
    mission: 'AI Product/Book Focus',
    archetype: 'The Creator',
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
    mission: 'Curiosity/Passion Vector - Collective Flow Leadership',
    archetype: 'The Orchestrator',
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
    mission: 'MTP Focus',
    archetype: 'The MTP Driver',
    flowReadinessScore: 50,
    leadershipLeverageScore: 55,
    topStrengths: ['Clear prioritization', 'Intuitive flow access', 'Visionary leadership'],
    keyRisks: ['Daily grind draining flow', 'Fundraising delay', 'Structural overwhelm']
  },
  {
    name: 'Stephanie Van Deynze',
    mission: 'Veterinary/Leadership Focus',
    archetype: 'The Leader',
    flowReadinessScore: 60,
    leadershipLeverageScore: 55,
    topStrengths: ['Clear MTP', 'Solid habits', 'Authentic passion'],
    keyRisks: ['Diffused focus', 'Schedule/sleep challenges']
  },
  {
    name: 'Blair Lukan',
    mission: 'Exit Framework Focus',
    archetype: 'The System Builder',
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
    mission: 'Multiple Projects',
    archetype: 'The Community Builder',
    flowReadinessScore: 55,
    leadershipLeverageScore: 65,
    topStrengths: ['Entrepreneurial energy', 'Creative vision', 'Community builder'],
    keyRisks: ['Focus diffusion', 'Travel disruptions', 'Planning fatigue']
  },
  {
    name: 'Michael Whitaker',
    mission: 'AI-Human Creativity',
    archetype: 'The Innovator',
    flowReadinessScore: 75,
    leadershipLeverageScore: 70,
    missionAlignmentScore: 70,
    topStrengths: ['Pragmatic tone', 'Strong daily structure', 'Clear AI/parent niche', 'Invisible skills in systems-thinking'],
    keyRisks: ['Growth fragility', 'Plateau risk', 'Needs original contributions']
  },
  {
    name: 'Jason Tadros',
    mission: 'AI/Math Innovation',
    archetype: 'The Systems Thinker',
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
    mission: 'Antibody Treatments',
    archetype: 'The Scientist',
    flowReadinessScore: 60,
    leadershipLeverageScore: 65,
    topStrengths: ['Scientific innovation', 'Recovery discipline', 'Team vision'],
    keyRisks: ['Overcommitment', 'Novelty-seeking', 'Execution dilution']
  },
  {
    name: 'Geoffrey Garth',
    mission: 'Hands-on Invention',
    archetype: 'The Inventor',
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
    mission: 'Company Transformation',
    archetype: 'The Transformer',
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
    mission: 'Career Transition',
    archetype: 'The Transitioner',
    flowReadinessScore: 45,
    leadershipLeverageScore: 50,
    topStrengths: ['Adaptability', 'Learning mindset', 'Resilience'],
    keyRisks: ['Uncertainty', 'Skill development', 'Network building']
  },
  {
    name: 'Bruce Bowser',
    mission: 'Veterinary Innovation',
    archetype: 'The Disruptor',
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
  },
  {
    name: 'Courtney Karnes',
    mission: 'Unifying Personal/Professional Systems - MTP Development',
    archetype: 'The Systematizer',
    flowReadinessScore: 58,
    leadershipLeverageScore: 64,
    missionAlignmentScore: 62,
    clarityExecutionScore: 68,
    creativityIncubationScore: 55,
    emergentTrustScore: 60,
    topStrengths: [
      '1:1 coaching and seeing latent strengths in others',
      'Team building and catalyzing movements/collectives',
      'High energy as "invisible skill" that elevates rooms/teams',
      'Clarity discipline and specificity-driven execution',
      'Adaptability, resilience, and strong social support',
      'Fast pattern recognition and creative problem-solving'
    ],
    keyRisks: [
      'Information diet - self-identifies as "noise junkie"',
      'Incubation gap - fast pattern recognition without scheduled incubation',
      'AI over-production without integration (insight debt)',
      'Concept vagueness slowing execution (thriving, purpose, community)',
      'Opportunity overload and overcommitment tendency',
      'Over-immersion without recovery balance'
    ],
    hasTranscriptData: true,
    transcriptFile: 'courtney_karnes_transcripts.js'
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
