// Enhanced Client Data Structure
// Integrates coaching transcripts, diagnostic surveys, and performance metrics

export const enhancedClientProfiles = [
  {
    // Basic Profile Info
    id: 'briancamastral',
    name: 'Brian Camastral',
    mission: 'Curiosity/Passion Vector',
    archetype: 'The Orchestrator',
    
    // Core Scores
    flowReadinessScore: 55,
    leadershipLeverageScore: 65,
    topStrengths: ['Visionary', 'Group orchestration', 'Passion-driven'],
    keyRisks: ['Staying in planning mode', 'Slow embodiment'],
    
    // Coaching Session Data
    coachingSessions: [
      {
        sessionId: 'brian_2025_01_15',
        date: '2025-01-15',
        duration: 60, // minutes
        type: 'strategy_session',
        coachNotes: 'Brian is crystallizing his curiosity/passion vector. Strong visionary thinking but needs to move from planning to action.',
        keyInsights: [
          'Identified primary flow activities: endurance challenges, creative problem-solving',
          'Strong group orchestration abilities emerging',
          'Risk of staying too long in exploratory phase'
        ],
        actionItems: [
          'Reintegrate endurance activities as primary flow trigger',
          'Pilot small group collaboration experiment',
          'Develop actionable process metrics for reflection'
        ],
        transcript: {
          summary: 'Discussion focused on moving from vision to execution, identifying primary flow activities',
          keyQuotes: [
            "I see the potential for orchestrating high-impact collaborative groups, but I keep getting stuck in the planning phase",
            "The endurance challenges used to give me that flow state - I need to bring those back",
            "I want to measure process over outcome, but I need concrete metrics to track that"
          ],
          themes: ['vision_to_execution', 'flow_triggers', 'measurement_systems'],
          sentiment: 'motivated_but_stuck'
        }
      },
      {
        sessionId: 'brian_2025_01_01',
        date: '2025-01-01',
        duration: 45,
        type: 'check_in',
        coachNotes: 'New Year reflection session. Brian showing strong intellectual preparation but needs embodiment.',
        keyInsights: [
          'High level of neuroscience literacy and flow understanding',
          'Commitment to process-oriented goals vs outcome goals',
          'Strong empathy and team-building instincts'
        ],
        actionItems: [
          'Continue neuroscience study but add practical application',
          'Set up weekly reflection protocol',
          'Identify 1-2 collaborators for initial experiments'
        ]
      }
    ],
    
    // Diagnostic Survey Data
    diagnosticSurveys: [
      {
        surveyId: 'flow_readiness_q1_2025',
        date: '2025-01-10',
        surveyType: 'flow_readiness_assessment',
        responses: {
          // Sleep & Recovery (30% weight)
          sleepHours: 7.2,
          sleepQuality: 6, // 1-10 scale
          recoveryActivities: ['reading', 'walking', 'meditation'],
          recoveryFrequency: 4, // days per week
          stressLevel: 5, // 1-10 scale
          
          // Deep Work & Focus (20% weight)
          deepWorkHours: 3.5, // daily average
          focusQuality: 7, // 1-10 scale
          distractionManagement: 6, // 1-10 scale
          workEnvironmentOptimized: true,
          
          // Flow Triggers (20% weight)
          primaryFlowActivities: ['creative_problem_solving', 'endurance_exercise', 'group_facilitation'],
          flowFrequency: 3, // times per week
          flowDuration: 45, // average minutes
          flowTriggers: ['challenge', 'creativity', 'collaboration'],
          
          // Mission Alignment (30% weight)
          missionClarity: 8, // 1-10 scale
          dailyMissionAlignment: 70, // percentage
          passionLevel: 9, // 1-10 scale
          purposeDriven: true
        },
        calculatedScores: {
          sleepRecovery: 65,
          deepWorkFocus: 70,
          flowTriggerIntegration: 40, // Low due to inconsistent practice
          missionAlignment: 70
        },
        overallFlowReadiness: 55
      }
    ],
    
    // Weekly Check-in Data
    weeklyCheckins: [
      {
        week: '2025-01-06',
        missionAlignment: 70,
        flowReadiness: 55,
        flowLeadership: 65,
        notes: 'Strong week for visioning and planning. Started reading more neuroscience research.',
        challenges: ['Moving from planning to action', 'Consistent flow practice integration'],
        wins: ['Clearer vision of group orchestration potential', 'Good sleep consistency'],
        nextWeekFocus: ['Start endurance activity experiment', 'Reach out to potential collaborators']
      },
      {
        week: '2024-12-30',
        missionAlignment: 67,
        flowReadiness: 55,
        flowLeadership: 62,
        notes: 'Holiday reflection period. Good time for strategic thinking.',
        challenges: ['Holiday schedule disruption', 'Less structured flow practice'],
        wins: ['Deep reflection on 2025 goals', 'Strong family connection time'],
        nextWeekFocus: ['Resume consistent schedule', 'Plan Q1 experiments']
      }
    ],
    
    // Performance Analytics
    analytics: {
      trends: {
        missionAlignment: { direction: 'improving', rate: 0.5 }, // points per week
        flowReadiness: { direction: 'steady', rate: 0 },
        flowLeadership: { direction: 'improving', rate: 0.75 }
      },
      patterns: {
        bestFlowDays: ['tuesday', 'wednesday', 'thursday'],
        optimalFlowTime: '9:00-11:00',
        flowDisruptors: ['meetings_after_2pm', 'email_notifications', 'unstructured_mornings'],
        flowEnhancers: ['morning_exercise', 'clear_goals', 'collaborative_work']
      },
      goals: {
        currentQuarter: {
          flowReadiness: { target: 65, current: 55, onTrack: false },
          missionAlignment: { target: 80, current: 70, onTrack: true },
          flowLeadership: { target: 70, current: 65, onTrack: true }
        }
      }
    },
    
    // Rich Context Data
    personalContext: {
      workStyle: 'collaborative_visionary',
      communicationPreferences: ['visual_mapping', 'group_discussion', 'written_reflection'],
      motivationFactors: ['group_impact', 'intellectual_challenge', 'creative_expression'],
      learningStyle: 'experiential_and_theoretical',
      stressors: ['unstructured_time', 'solo_work_too_long', 'unclear_outcomes'],
      energizers: ['group_facilitation', 'creative_challenges', 'learning_new_concepts']
    },
    
    // Assessment History
    assessmentHistory: [
      {
        date: '2025-01-10',
        type: 'comprehensive_flow_assessment',
        scores: {
          overallFlow: 55,
          cognitiveLoad: 60,
          emotionalRegulation: 70,
          physicalOptimization: 50,
          environmentalDesign: 65,
          socialConnection: 80
        }
      },
      {
        date: '2024-12-15',
        type: 'leadership_leverage_assessment', 
        scores: {
          overallLeadership: 65,
          teamModeling: 70,
          systemsThinking: 80,
          communicationClarity: 60,
          visionCasting: 85,
          executionSupport: 45
        }
      }
    ]
  }
  // ... other clients would follow the same structure
];

// Helper Functions for Data Access
export const getClientCoachingSessions = (clientId, limit = null) => {
  const client = enhancedClientProfiles.find(c => c.id === clientId);
  if (!client) return [];
  
  const sessions = client.coachingSessions || [];
  return limit ? sessions.slice(0, limit) : sessions;
};

export const getLatestDiagnostic = (clientId, surveyType = null) => {
  const client = enhancedClientProfiles.find(c => c.id === clientId);
  if (!client || !client.diagnosticSurveys) return null;
  
  let surveys = client.diagnosticSurveys;
  if (surveyType) {
    surveys = surveys.filter(s => s.surveyType === surveyType);
  }
  
  return surveys.sort((a, b) => new Date(b.date) - new Date(a.date))[0];
};

export const getWeeklyTrends = (clientId, weeks = 4) => {
  const client = enhancedClientProfiles.find(c => c.id === clientId);
  if (!client || !client.weeklyCheckins) return null;
  
  return client.weeklyCheckins
    .slice(0, weeks)
    .reverse()
    .map(week => ({
      week: week.week,
      missionAlignment: week.missionAlignment,
      flowReadiness: week.flowReadiness,
      flowLeadership: week.flowLeadership
    }));
};

export const getActionItems = (clientId, sessionLimit = 3) => {
  const sessions = getClientCoachingSessions(clientId, sessionLimit);
  return sessions.flatMap(session => 
    (session.actionItems || []).map(item => ({
      item,
      sessionDate: session.date,
      sessionType: session.type
    }))
  );
};

export const getKeyInsights = (clientId, sessionLimit = 5) => {
  const sessions = getClientCoachingSessions(clientId, sessionLimit);
  return sessions.flatMap(session => 
    (session.keyInsights || []).map(insight => ({
      insight,
      sessionDate: session.date,
      coachNotes: session.coachNotes
    }))
  );
};

export const getTranscriptThemes = (clientId) => {
  const sessions = getClientCoachingSessions(clientId);
  const allThemes = sessions.flatMap(session => session.transcript?.themes || []);
  
  // Count theme frequency
  const themeCount = allThemes.reduce((acc, theme) => {
    acc[theme] = (acc[theme] || 0) + 1;
    return acc;
  }, {});
  
  return Object.entries(themeCount)
    .sort(([,a], [,b]) => b - a)
    .map(([theme, count]) => ({ theme, frequency: count }));
};

export default enhancedClientProfiles;