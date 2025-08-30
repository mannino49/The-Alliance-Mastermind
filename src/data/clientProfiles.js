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
    flowReadinessScore: 55,
    leadershipLeverageScore: 60,
    topStrengths: ['Clear mission', 'Brand strength', 'Visionary plans'],
    keyRisks: ['Overcommitment', 'Diffused focus', 'Early scaling stress']
  },
  {
    name: 'Brian Camastral',
    archetype: 'The Orchestrator',
    mission: 'Curiosity/Passion Vector',
    flowReadinessScore: 55,
    leadershipLeverageScore: 65,
    topStrengths: ['Visionary', 'Group orchestration', 'Passion-driven'],
    keyRisks: ['Staying in planning mode', 'Slow embodiment']
  },
  {
    name: 'Amity Cooper',
    archetype: 'The MTP Driver',
    mission: 'MTP Focus',
    flowReadinessScore: 40,
    leadershipLeverageScore: 50,
    topStrengths: ['Clear MTP', 'Strong assets', 'Visionary'],
    keyRisks: ['Scattered execution', 'Marketing bottleneck']
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
    flowReadinessScore: 70,
    leadershipLeverageScore: 60,
    topStrengths: ['Clear niche MTP', 'Strong systems + recovery', 'Authentic communicator'],
    keyRisks: ['Planning > prototyping', 'Delayed testing']
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
    flowReadinessScore: 50,
    leadershipLeverageScore: 55,
    topStrengths: ['Creative vision', 'AI expertise', 'Innovation mindset'],
    keyRisks: ['Work-life balance', 'Focus challenges', 'Recovery practices']
  },
  {
    name: 'Jason Tadros',
    archetype: 'The Systems Thinker',
    mission: 'AI/Math Innovation',
    flowReadinessScore: 55,
    leadershipLeverageScore: 65,
    topStrengths: ['Novel AI innovation', 'Visionary systems thinker', 'High-level network'],
    keyRisks: ['Work-life balance strain', 'Execution consistency']
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
    flowReadinessScore: 55,
    leadershipLeverageScore: 60,
    topStrengths: ['Hands-on innovation', 'Practical creativity', 'Technical expertise'],
    keyRisks: ['Focus distribution', 'Recovery practices', 'Execution consistency']
  },
  {
    name: 'Anatoliy Otchkovskiy',
    archetype: 'The Transformer',
    mission: 'Company Transformation',
    flowReadinessScore: 50,
    leadershipLeverageScore: 60,
    topStrengths: ['Transformational vision', 'Leadership experience', 'Strategic thinking'],
    keyRisks: ['Change management', 'Team alignment', 'Execution pace']
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
    topStrengths: ['Bold innovation', 'Market disruptor mindset', 'Authentic leadership'],
    keyRisks: ['Focus diffusion', 'Execution overload', 'Rebuilding recovery practices']
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
