// Rob Finlay Enhanced Data
// Copy this structure and add it to your enhancedClientData.js file

const robFinlayData = {
  // Basic Profile Info
  id: 'robfinlay',
  name: 'Rob Finlay',
  mission: 'Multiple Projects',
  archetype: 'The Community Builder',
  
  // Core Scores (from your coaching insights)
  flowReadinessScore: 55,
  leadershipLeverageScore: 65,
  topStrengths: ['Entrepreneurial energy', 'Creative vision', 'Community builder'],
  keyRisks: ['Focus diffusion', 'Travel disruptions', 'Planning fatigue'],
  
  // Coaching Session Data (based on your insights)
  coachingSessions: [
    {
      sessionId: 'rob_2025_01_15',
      date: '2025-01-15',
      duration: 60,
      type: 'strategy_session',
      coachNotes: 'Rob has multiple active interests: two books, podcast idea, soil regeneration tech, Flow Alliance program. Difficulty prioritizing long-term projects amid entrepreneurial energy.',
      keyInsights: [
        'Clear entrepreneurial drive, genuine curiosity, and creative ambition',
        'Benefits from pre-planning nightly goals, but consistency disrupted by travel',
        'Responds well to micro-practices (5 min gratitude, small creative exercises)',
        'Central role in shaping Flow Alliance offerings - high leverage potential'
      ],
      actionItems: [
        'Prioritize top 2 projects to avoid energy diffusion',
        'Create travel-proof micro flow routines',
        'Finalize Flow Alliance plan outline with clear focus, start date, and pricing'
      ],
      transcript: {
        summary: 'Strategy session focused on mission alignment challenges, travel disruptions to flow practices, and Flow Alliance program development',
        keyQuotes: [
          "I have so many active interests - two books, podcast, soil tech - but I'm struggling to prioritize",
          "Travel keeps disrupting my flow practices, I need routines that work anywhere",
          "The Flow Alliance program has huge potential, but I need to avoid planning fatigue"
        ],
        themes: ['focus_prioritization', 'travel_adaptation', 'leadership_leverage', 'program_development'],
        sentiment: 'motivated_but_scattered'
      }
    }
  ],
  
  // Diagnostic Survey Data (estimated from coaching insights)
  diagnosticSurveys: [
    {
      surveyId: 'rob_flow_readiness_q1_2025',
      date: '2025-01-10',
      surveyType: 'flow_readiness_assessment',
      responses: {
        // Sleep & Recovery (affected by travel)
        sleepHours: 6.5,
        sleepQuality: 6, // 1-10 scale (disrupted by travel)
        recoveryActivities: ['drawing', 'meditation', 'gratitude_practice'],
        recoveryFrequency: 3, // days per week (inconsistent due to travel)
        stressLevel: 6, // 1-10 scale (higher due to multiple projects)
        
        // Deep Work & Focus (challenged by multiple projects)
        deepWorkHours: 2.5, // daily average (scattered across projects)
        focusQuality: 5, // 1-10 scale (diffused focus)
        distractionManagement: 4, // 1-10 scale (multiple project pull)
        workEnvironmentOptimized: false, // travel disruptions
        
        // Flow Triggers (micro-practices working)
        primaryFlowActivities: ['creative_writing', 'drawing', 'goal_setting'],
        flowFrequency: 3, // times per week (travel disrupted)
        flowDuration: 30, // average minutes (micro-practices)
        flowTriggers: ['creativity', 'goal_clarity', 'artistic_expression'],
        
        // Mission Alignment (multiple missions competing)
        missionClarity: 7, // 1-10 scale (clear but multiple)
        dailyMissionAlignment: 50, // percentage (scattered across projects)
        passionLevel: 9, // 1-10 scale (high passion, multiple directions)
        purposeDriven: true
      },
      calculatedScores: {
        sleepRecovery: 45, // Travel disruptions impact
        deepWorkFocus: 50, // Scattered focus across projects
        flowTriggerIntegration: 55, // Micro-practices working when consistent
        missionAlignment: 70 // Clear passion, execution scattered
      },
      overallFlowReadiness: 55
    }
  ],
  
  // Weekly Check-ins
  weeklyCheckins: [
    {
      week: '2025-01-06',
      missionAlignment: 50,
      flowReadiness: 55,
      flowLeadership: 65,
      notes: 'Strong week for creative visioning. Multiple projects competing for attention. Travel disrupted flow routines.',
      challenges: [
        'Focus diffusion across multiple projects',
        'Travel disrupting established routines',
        'Decision fatigue from too many options'
      ],
      wins: [
        'Strong progress on Flow Alliance program vision',
        'Good use of micro-practices when traveling',
        'Clear entrepreneurial energy and drive'
      ],
      nextWeekFocus: [
        'Choose top 2 priority projects',
        'Create travel-resilient routine checklist',
        'Define Flow Alliance program parameters'
      ]
    }
  ],
  
  // Performance Analytics
  analytics: {
    trends: {
      missionAlignment: { direction: 'steady', rate: 0 }, // Needs focus prioritization
      flowReadiness: { direction: 'improving', rate: 0.25 }, // Micro-practices helping
      flowLeadership: { direction: 'improving', rate: 0.5 } // Program development momentum
    },
    patterns: {
      bestFlowDays: ['monday', 'tuesday', 'friday'], // Home days, less travel
      optimalFlowTime: '7:00-9:00', // Morning routine when possible
      flowDisruptors: ['travel_days', 'multiple_project_switching', 'decision_overload'],
      flowEnhancers: ['clear_daily_priorities', 'micro_creative_practices', 'community_building']
    },
    goals: {
      currentQuarter: {
        flowReadiness: { target: 70, current: 55, onTrack: false },
        missionAlignment: { target: 75, current: 50, onTrack: false },
        flowLeadership: { target: 75, current: 65, onTrack: true }
      }
    }
  },
  
  // Rich Context Data
  personalContext: {
    workStyle: 'entrepreneurial_creative',
    communicationPreferences: ['brainstorming_sessions', 'visual_mapping', 'community_discussions'],
    motivationFactors: ['creative_expression', 'community_impact', 'entrepreneurial_building'],
    learningStyle: 'experiential_and_collaborative',
    stressors: ['project_overload', 'travel_disruptions', 'decision_paralysis'],
    energizers: ['creative_work', 'community_building', 'program_development', 'artistic_expression']
  },
  
  // Assessment History
  assessmentHistory: [
    {
      date: '2025-01-10',
      type: 'comprehensive_flow_assessment',
      scores: {
        overallFlow: 55,
        cognitiveLoad: 70, // High due to multiple projects
        emotionalRegulation: 65,
        physicalOptimization: 45, // Travel impact
        environmentalDesign: 50, // Travel variability
        socialConnection: 85 // Strong community building
      }
    }
  ]
};

// Instructions for integration:
console.log('To add Rob Finlay data:');
console.log('1. Copy this data structure');
console.log('2. Add it to your enhancedClientProfiles array in src/data/enhancedClientData.js');
console.log('3. Update any existing Rob Finlay entry');
console.log('4. Test in the dashboard');

export default robFinlayData;