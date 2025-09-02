// Data Integration Utilities
// Helper functions to process and integrate coaching transcripts and survey data

/**
 * Process raw coaching session transcript into structured data
 * @param {Object} rawTranscript - Raw transcript data
 * @returns {Object} Structured coaching session data
 */
export const processCoachingTranscript = (rawTranscript) => {
  const {
    sessionDate,
    duration,
    rawText,
    coachName,
    clientName,
    sessionType = 'regular_session'
  } = rawTranscript;

  // Extract key quotes (you could use NLP or manual tagging)
  const extractKeyQuotes = (text) => {
    // Simple implementation - look for quoted text or important statements
    // In production, you might use NLP libraries or manual tagging
    const sentences = text.split(/[.!?]+/);
    return sentences
      .filter(sentence => 
        sentence.includes('I feel') || 
        sentence.includes('I want') || 
        sentence.includes('The challenge is') ||
        sentence.includes('I need to')
      )
      .map(quote => quote.trim())
      .slice(0, 5); // Limit to top 5 quotes
  };

  // Extract themes using keyword matching
  const extractThemes = (text) => {
    const themeKeywords = {
      'vision_to_execution': ['vision', 'execution', 'implement', 'action', 'doing'],
      'flow_triggers': ['flow', 'zone', 'focus', 'deep work', 'concentration'],
      'leadership': ['team', 'lead', 'manage', 'influence', 'collaborate'],
      'measurement_systems': ['measure', 'track', 'metric', 'goal', 'progress'],
      'recovery_practices': ['recovery', 'rest', 'sleep', 'recharge', 'balance'],
      'mission_alignment': ['purpose', 'mission', 'why', 'meaning', 'passion']
    };

    const foundThemes = [];
    const lowerText = text.toLowerCase();

    Object.entries(themeKeywords).forEach(([theme, keywords]) => {
      const matchCount = keywords.filter(keyword => 
        lowerText.includes(keyword)
      ).length;
      
      if (matchCount >= 2) { // At least 2 keyword matches
        foundThemes.push(theme);
      }
    });

    return foundThemes;
  };

  // Analyze sentiment (basic implementation)
  const analyzeSentiment = (text) => {
    const positiveWords = ['excited', 'motivated', 'confident', 'ready', 'optimistic', 'energized'];
    const negativeWords = ['stuck', 'frustrated', 'overwhelmed', 'confused', 'blocked'];
    const neutralWords = ['thinking', 'considering', 'exploring', 'learning'];

    const lowerText = text.toLowerCase();
    const positiveCount = positiveWords.filter(word => lowerText.includes(word)).length;
    const negativeCount = negativeWords.filter(word => lowerText.includes(word)).length;

    if (positiveCount > negativeCount) return 'motivated_and_ready';
    if (negativeCount > positiveCount) return 'challenged_but_working';
    return 'reflective_and_exploring';
  };

  // Generate session summary
  const generateSummary = (text, themes) => {
    const sentences = text.split(/[.!?]+/).filter(s => s.length > 20);
    const themeString = themes.length > 0 ? themes.join(', ') : 'general discussion';
    return `Session focused on ${themeString}. Key discussion points included implementation strategies and next steps.`;
  };

  return {
    sessionId: `${clientName.toLowerCase().replace(' ', '')}_${sessionDate.replace(/-/g, '_')}`,
    date: sessionDate,
    duration: duration || 60,
    type: sessionType,
    coachNotes: '', // To be filled manually or extracted
    keyInsights: [], // To be filled manually or extracted
    actionItems: [], // To be filled manually or extracted
    transcript: {
      summary: generateSummary(rawText, extractThemes(rawText)),
      keyQuotes: extractKeyQuotes(rawText),
      themes: extractThemes(rawText),
      sentiment: analyzeSentiment(rawText),
      fullText: rawText // Optional: store full transcript
    }
  };
};

/**
 * Process diagnostic survey responses into structured scores
 * @param {Object} surveyResponses - Raw survey response data
 * @returns {Object} Processed diagnostic data
 */
export const processDiagnosticSurvey = (surveyResponses) => {
  const {
    surveyId,
    surveyDate,
    surveyType,
    responses
  } = surveyResponses;

  // Flow Readiness Calculation (matches your existing system)
  const calculateFlowReadiness = (responses) => {
    const sleepScore = Math.min(100, (responses.sleepHours / 8) * 100 * (responses.sleepQuality / 10));
    const recoveryScore = Math.min(100, (responses.recoveryFrequency / 7) * 100 * (1 - responses.stressLevel / 10));
    const focusScore = Math.min(100, (responses.deepWorkHours / 4) * 50 + (responses.focusQuality / 10) * 50);
    const triggerScore = Math.min(100, (responses.flowFrequency / 7) * 100);

    return {
      sleepRecovery: Math.round(sleepScore * 0.3 + recoveryScore * 0.3),
      deepWorkFocus: Math.round(focusScore),
      flowTriggerIntegration: Math.round(triggerScore),
      missionAlignment: Math.round((responses.missionClarity / 10) * 100),
      overall: Math.round(sleepScore * 0.3 + recoveryScore * 0.3 + focusScore * 0.2 + triggerScore * 0.2)
    };
  };

  // Leadership Leverage Calculation
  const calculateLeadershipLeverage = (responses) => {
    const teamModeling = responses.teamFlowModeling || 5; // 1-10 scale
    const systemsThinking = responses.systemsApproach || 5;
    const communicationClarity = responses.communicationSkills || 5;
    const visionCasting = responses.visionClarity || 5;
    const executionSupport = responses.executionSupport || 5;

    return Math.round(
      (teamModeling + systemsThinking + communicationClarity + visionCasting + executionSupport) * 2
    );
  };

  const calculatedScores = surveyType === 'flow_readiness_assessment' 
    ? calculateFlowReadiness(responses)
    : surveyType === 'leadership_leverage_assessment'
    ? { overallLeadership: calculateLeadershipLeverage(responses) }
    : {};

  return {
    surveyId,
    date: surveyDate,
    surveyType,
    responses,
    calculatedScores,
    overallFlowReadiness: calculatedScores.overall || null,
    overallLeadershipLeverage: calculatedScores.overallLeadership || null
  };
};

/**
 * Create weekly check-in data structure
 * @param {Object} checkinData - Raw check-in data
 * @returns {Object} Structured weekly check-in
 */
export const processWeeklyCheckin = (checkinData) => {
  const {
    weekDate,
    missionAlignment,
    flowReadiness,
    flowLeadership,
    notes,
    challenges = [],
    wins = [],
    nextWeekFocus = []
  } = checkinData;

  return {
    week: weekDate,
    missionAlignment: Number(missionAlignment),
    flowReadiness: Number(flowReadiness),
    flowLeadership: Number(flowLeadership),
    notes: notes || '',
    challenges: Array.isArray(challenges) ? challenges : [challenges],
    wins: Array.isArray(wins) ? wins : [wins],
    nextWeekFocus: Array.isArray(nextWeekFocus) ? nextWeekFocus : [nextWeekFocus]
  };
};

/**
 * Batch import function for multiple data types
 * @param {Array} dataItems - Array of data items with type indicators
 * @returns {Object} Processed data organized by type
 */
export const batchImportClientData = (dataItems) => {
  const processed = {
    coachingSessions: [],
    diagnosticSurveys: [],
    weeklyCheckins: [],
    errors: []
  };

  dataItems.forEach((item, index) => {
    try {
      switch (item.type) {
        case 'coaching_transcript':
          processed.coachingSessions.push(processCoachingTranscript(item.data));
          break;
        case 'diagnostic_survey':
          processed.diagnosticSurveys.push(processDiagnosticSurvey(item.data));
          break;
        case 'weekly_checkin':
          processed.weeklyCheckins.push(processWeeklyCheckin(item.data));
          break;
        default:
          processed.errors.push(`Unknown data type: ${item.type} at index ${index}`);
      }
    } catch (error) {
      processed.errors.push(`Error processing item ${index}: ${error.message}`);
    }
  });

  return processed;
};

/**
 * Template generators for easy data entry
 */
export const generateTemplates = () => {
  return {
    coachingSession: {
      sessionDate: '2025-01-15',
      duration: 60,
      sessionType: 'strategy_session', // 'check_in', 'breakthrough_session', 'goal_setting'
      clientName: 'Client Name',
      rawText: 'Full transcript text here...',
      manualCoachNotes: '',
      manualKeyInsights: [],
      manualActionItems: []
    },
    
    diagnosticSurvey: {
      surveyId: 'flow_readiness_q1_2025',
      surveyDate: '2025-01-10',
      surveyType: 'flow_readiness_assessment', // or 'leadership_leverage_assessment'
      responses: {
        // Sleep & Recovery
        sleepHours: 7.5,
        sleepQuality: 8, // 1-10
        recoveryActivities: ['meditation', 'walking', 'reading'],
        recoveryFrequency: 5, // days per week
        stressLevel: 4, // 1-10
        
        // Focus & Deep Work  
        deepWorkHours: 3,
        focusQuality: 7, // 1-10
        distractionManagement: 6, // 1-10
        
        // Flow Triggers
        flowFrequency: 4, // times per week
        flowDuration: 45, // minutes
        primaryFlowActivities: ['creative_work', 'exercise'],
        
        // Mission Alignment
        missionClarity: 8, // 1-10
        dailyMissionAlignment: 75, // percentage
        passionLevel: 9 // 1-10
      }
    },
    
    weeklyCheckin: {
      weekDate: '2025-01-06',
      missionAlignment: 75,
      flowReadiness: 60,
      flowLeadership: 65,
      notes: 'Great week for deep work...',
      challenges: ['Email distractions', 'Late meetings'],
      wins: ['Completed major project', 'Good sleep consistency'],
      nextWeekFocus: ['Implement morning routine', 'Reduce meeting load']
    }
  };
};

export default {
  processCoachingTranscript,
  processDiagnosticSurvey,
  processWeeklyCheckin,
  batchImportClientData,
  generateTemplates
};