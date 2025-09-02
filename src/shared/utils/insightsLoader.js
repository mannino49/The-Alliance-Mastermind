// Utility to load detailed client insights from data files

// Function to read and parse insights from data files
export const loadClientInsights = async (clientName) => {
  try {
    // We'll use a static data structure since we can't use fs in browser
    return getStaticInsights(clientName);
  } catch (error) {
    console.error(`Error loading insights for ${clientName}:`, error);
    return null;
  }
};

// Static insights data - this will be populated with the actual insights
const getStaticInsights = (clientName) => {
  const insightsData = {
    'Amity Cooper': {
      // Transcript data from coaching sessions
      transcripts: {
        '6.9.25_SK_1on1': {
          date: '2025-06-09',
          duration: '40 minutes',
          type: 'one_on_one_coaching',
          keyTopics: [
            'Prioritization breakthrough and 3-tier mission focus',
            'Flow state access through meditation and spiritual practices',
            'Morning structure implementation (5 AM wake-ups)',
            'Book writing process and content organization',
            'Ranch fundraising strategy ($750k-$1M)',
            'Partnership transition (ex-partner to employee)',
            'Daily task management vs flow-generating activities'
          ],
          keyQuotes: [
            "I have shifted from scattered execution to a clear 3-tier mission: (1) stabilize the ranch + revenue, (2) complete the book, (3) defer e-learning platform",
            "Flow is not triggered by task lists/goals but by meditation, reiki, solitude, and guardrails",
            "I wake up at 5 AM and that extra hour is golden for me - I can be with myself and with my thoughts and with my dreams",
            "The tasks that I have been doing and are required of me are not flow generating tasks. They are the mucking tasks like the shit that needs to get moved around",
            "I had a Kundalini awakening in Peru and I can access flow states really fast - it is like a switch for me",
            "I have this inner knowing and inner confidence but on the day to day structure of things, I look like a fucking hot mess"
          ],
          actionItems: [
            'Create and adhere to daily clear goals list',
            'Carve out 20-30 minutes daily for 100-step plan and book progress',
            'Develop phenomenal fundraising deck for ranch project',
            'Accelerate fundraising efforts through Tiger21 network',
            'Create both bootstrapping plan and big vision plan simultaneously'
          ]
        },
        '30min_Zoom_Call': {
          date: '2025-06-09',
          duration: '30 minutes',
          type: 'progress_check_in',
          keyTopics: [
            'Progress on prioritization and goal organization',
            'Book writing process with assistant collaboration',
            'Flow state access and spiritual practices',
            'Ranch operations and fundraising urgency',
            'Partnership restructuring and employee management'
          ],
          keyInsights: [
            'Major breakthrough in recognizing what to park vs prioritize',
            'Strong intrinsic access to altered states and intuition',
            'Morning structure providing golden hour for creative work',
            'Daily grind tasks are not flow-generating but necessary',
            'Fundraising needs acceleration to prevent dream loss'
          ]
        },
        'WEBVTT_Extended': {
          date: '2025-06-09',
          duration: 'Extended session',
          type: 'deep_dive_coaching',
          keyTopics: [
            'Massively Transformative Purpose (MTP) clarity',
            'Integration of technology and nature healing approaches',
            'Research methodology and rabbit hole exploration',
            'Crisis response and problem-solving approach',
            'Business model development and execution strategy'
          ],
          keyInsights: [
            'Clear MTP: Solving mental health crisis through healing entrepreneurship and technological integration',
            'Strong research orientation and pattern recognition abilities',
            'Integration mindset - bringing together seemingly contradictory approaches',
            'High emotional charge around injustice and desire to solve problems',
            'Visionary leadership with practical execution challenges'
          ]
        }
      },
      insights: [
        {
          id: 1,
          title: "Mission Clarity + MTP Focus",
          dataSignals: [
            "Amity's Massively Transformative Purpose (MTP): Transforming mental health at scale through healing entrepreneurship and technological integration.",
            "She has a clear multi-stage vision: course launch → build company → publish textbook → explore VR production."
          ],
          analyticsInsight: {
            strengths: ["MTP is well-formed and emotionally charged, with a clear personal \"why.\""],
            risks: ["Amity has too many simultaneous vectors (course, book, VR, film, marketing overhaul) without narrowed immediate focus, creating potential for overwhelm and diffusion of energy."]
          },
          suggestedMetric: {
            name: "Mission Alignment Score",
            description: "% of weekly actions Amity reports as directly serving her MTP.",
            estimate: "~60% — clear purpose, scattered execution"
          }
        },
        {
          id: 2,
          title: "Flow Readiness & Execution Capacity",
          dataSignals: [
            "A complete course + inventory (TheraBox kits)",
            "25+ interviews for book material",
            "A dormant but existing email list (~1500)",
            "Youtube channel + prior video content",
            "She struggles with marketing, funnel optimization, and consistent audience engagement.",
            "Significant cognitive load from balancing competing priorities and cash pressure."
          ],
          analyticsInsight: {
            strengths: ["Strong assets ready for deployment."],
            risks: ["Execution bottlenecks (particularly marketing + funnel) + lack of clear weekly structure for flow triggers (clear goals, feedback, immediate progress)."]
          },
          suggestedMetric: {
            name: "Flow Readiness Index",
            description: "Composite of (1) focus on clear daily/weekly goals, (2) primary flow activities, (3) recovery practices, (4) distraction management.",
            estimate: "~40% — high intent, low structured flow practices"
          }
        },
        {
          id: 3,
          title: "Leadership Leverage + Audience Building",
          dataSignals: [
            "Amity aspires to lead a movement in mental health innovation.",
            "She has prior proof-of-concept (virtual summit with 1000 attendees, industry speaking engagements).",
            "Actively seeking to scale audience (email, webinars, Youtube, thought leadership)."
          ],
          analyticsInsight: {
            strengths: ["High leverage potential — authentic, visionary, and with credible positioning."],
            risks: ["Needs consistent audience-building engine (newsletter, webinars, digital community)."]
          },
          suggestedMetric: {
            name: "Flow Leadership Leverage Score",
            description: "Readiness to model and catalyze collective flow + build audience platform.",
            estimate: "~50% — strong foundation, audience engine still forming"
          }
        },
        {
          id: 4,
          title: "Focus & Prioritization Breakthrough",
          dataSignals: [
            "Amity has shifted from scattered execution to a clear 3-tier mission: (1) stabilize the ranch + revenue, (2) complete the book, (3) defer e-learning platform.",
            "Built a \"100 steps\" list and is using ChatGPT + assistant to organize tasks.",
            "Implementing morning structure (5 a.m. wake-ups, one golden hour of creative focus)."
          ],
          analyticsInsight: {
            strengths: ["Major breakthrough: Amity now recognizes what to park vs. what to prioritize."],
            risks: ["Still risk of overwhelm from day-to-day operations draining energy from creative focus."]
          },
          suggestedMetric: {
            name: "Prioritization Index",
            description: "% of weekly hours spent on top-2 priorities (ranch revenue + book).",
            estimate: "~65% — improved clarity, execution discipline forming"
          }
        },
        {
          id: 5,
          title: "Flow Practices & Energy Management",
          dataSignals: [
            "Flow is not triggered by task lists/goals but by meditation, reiki, solitude, and guardrails.",
            "Family absence gave her a taste of optimal flow environment; recognizes daily work often non-flow (mucking, money chasing, people management).",
            "Using early mornings for \"micro-flow\" to fuel resilience."
          ],
          analyticsInsight: {
            strengths: ["Strong intrinsic access to altered states + intuition."],
            risks: ["Daily grind risks long-term burnout unless buffered with micro-flow and clear goals at night before."]
          },
          suggestedMetric: {
            name: "Flow Sustainability Score",
            description: "Balance between high-demand tasks vs. restorative flow practices.",
            estimate: "~50% — deep state access, but inconsistent integration with workload"
          }
        },
        {
          id: 6,
          title: "Leadership & Capital Readiness",
          dataSignals: [
            "Transitioned from failed partnership → clarified ownership, converted ex-partner to employee.",
            "Building confidence in long-term vision, while openly facing daily \"hot mess\" struggles.",
            "Actively exploring fundraising (~$750k–$1M) with family offices + networks (Tiger21).",
            "Needs a stellar deck + dual-track strategy (bootstrap + big vision)."
          ],
          analyticsInsight: {
            strengths: ["Increasing confidence + structural authority."],
            risks: ["Fundraising urgency high; risk of delay undermining dream. Needs tighter narrative + accelerated capital plan."]
          },
          suggestedMetric: {
            name: "Capital Readiness Index",
            description: "Strength of fundraising deck, network outreach pace, and dual-track plan execution.",
            estimate: "~40% — strong network access, but still pre-deck, pre-traction"
          }
        }
      ],
      dashboardMetrics: {
        missionAlignment: 65,
        flowReadiness: 50,
        flowLeadership: 55,
        prioritization: 65,
        flowSustainability: 50,
        capitalReadiness: 40
      },
      updatedStrengths: [
        "Clear prioritization breakthrough with 3-tier mission focus",
        "Strong intrinsic access to altered states and intuition",
        "Visionary leadership with increasing structural authority",
        "Strong network access for fundraising (Tiger21, family offices)",
        "Morning structure implementation (5 a.m. wake-ups, golden hour)",
        "Partnership transition success (ex-partner → employee)"
      ],
      updatedRisks: [
        "Daily grind draining energy from creative focus",
        "Fundraising delay undermining long-term dream",
        "Structural overwhelm from day-to-day operations",
        "Long-term burnout risk without consistent micro-flow buffering",
        "Inconsistent integration of flow practices with workload",
        "Still pre-deck, pre-traction in capital readiness"
      ],
      actionPlan: {
        immediatePriorities: [
          "Build + test investor deck for fundraising",
          "Lock 30-min daily creative/book time in morning structure",
          "Develop dual-track strategy (bootstrap + funding plan)",
          "Maintain 3-tier mission focus (ranch revenue, book, deferred e-learning)",
          "Continue morning micro-flow practices for resilience"
        ],
        thirtyDayGoals: [
          "Increase prioritization index to 75%",
          "Complete first draft of investor deck",
          "Establish consistent micro-flow integration",
          "Reach out to 5 Tiger21 contacts for fundraising"
        ]
      },
      coachNotes: {
        majorBreakthrough: "Amity has achieved a significant prioritization breakthrough, shifting from scattered execution to a clear 3-tier mission focus. This represents a fundamental shift in her approach to managing competing priorities.",
        flowIntegration: "Her understanding of flow has evolved - she now recognizes that flow is triggered by meditation, reiki, and solitude rather than task lists. The implementation of morning structure (5 a.m. wake-ups, golden hour) shows strong execution discipline.",
        capitalReadiness: "The transition from failed partnership to clarified ownership demonstrates increasing structural authority. Her active exploration of fundraising with Tiger21 and family offices shows strategic thinking, though she needs to accelerate deck development and dual-track planning.",
        keyRisk: "The daily grind of ranch operations and people management risks draining energy from creative focus. She needs consistent micro-flow practices to buffer against long-term burnout while maintaining her fundraising momentum."
      }
    }
  };

  return insightsData[clientName] || null;
};

// Function to get all available client insights
export const getAllClientInsights = () => {
  return {
    'Amity Cooper': getStaticInsights('Amity Cooper')
  };
};

// Function to format insights for chatbot context
export const formatInsightsForChatbot = (insights) => {
  if (!insights) return '';

  let formatted = '\n**DETAILED CLIENT INSIGHTS:**\n\n';
  
  // Add transcript data if available
  if (insights.transcripts) {
    formatted += `**RECENT COACHING SESSIONS:**\n`;
    Object.entries(insights.transcripts).forEach(([sessionKey, session]) => {
      formatted += `\n📅 **${session.date} - ${session.type} (${session.duration})**\n`;
      formatted += `Key Topics: ${session.keyTopics.join(', ')}\n`;
      
      if (session.keyQuotes) {
        formatted += `\nKey Quotes:\n`;
        session.keyQuotes.forEach(quote => {
          formatted += `- "${quote}"\n`;
        });
      }
      
      if (session.actionItems) {
        formatted += `\nAction Items:\n`;
        session.actionItems.forEach(item => {
          formatted += `- ${item}\n`;
        });
      }
      formatted += `\n`;
    });
  }
  
  // Add insights
  insights.insights.forEach(insight => {
    formatted += `🎯 **Insight ${insight.id}: ${insight.title}**\n`;
    formatted += `Data Signals:\n`;
    insight.dataSignals.forEach(signal => {
      formatted += `- ${signal}\n`;
    });
    formatted += `\nAnalytics Insight:\n`;
    insight.analyticsInsight.strengths.forEach(strength => {
      formatted += `✅ ${strength}\n`;
    });
    insight.analyticsInsight.risks.forEach(risk => {
      formatted += `❗ ${risk}\n`;
    });
    formatted += `\nSuggested Metric: ${insight.suggestedMetric.name} - ${insight.suggestedMetric.description}\n`;
    formatted += `(Estimate: ${insight.suggestedMetric.estimate})\n\n`;
  });

  // Add updated metrics
  if (insights.dashboardMetrics) {
    formatted += `**UPDATED DASHBOARD METRICS:**\n`;
    formatted += `- Mission Alignment: ${insights.dashboardMetrics.missionAlignment}%\n`;
    formatted += `- Flow Readiness: ${insights.dashboardMetrics.flowReadiness}%\n`;
    formatted += `- Flow Leadership: ${insights.dashboardMetrics.flowLeadership}%\n`;
    formatted += `- Prioritization Index: ${insights.dashboardMetrics.prioritization}%\n`;
    formatted += `- Flow Sustainability: ${insights.dashboardMetrics.flowSustainability}%\n`;
    formatted += `- Capital Readiness: ${insights.dashboardMetrics.capitalReadiness}%\n\n`;
  }

  // Add updated strengths and risks
  if (insights.updatedStrengths) {
    formatted += `**UPDATED STRENGTHS:**\n`;
    insights.updatedStrengths.forEach(strength => {
      formatted += `- ${strength}\n`;
    });
    formatted += `\n`;
  }

  if (insights.updatedRisks) {
    formatted += `**UPDATED RISKS:**\n`;
    insights.updatedRisks.forEach(risk => {
      formatted += `- ${risk}\n`;
    });
    formatted += `\n`;
  }

  // Add action plan
  if (insights.actionPlan) {
    formatted += `**CURRENT ACTION PLAN:**\n`;
    formatted += `Immediate Priorities:\n`;
    insights.actionPlan.immediatePriorities.forEach(priority => {
      formatted += `- ${priority}\n`;
    });
    formatted += `\n30-Day Goals:\n`;
    insights.actionPlan.thirtyDayGoals.forEach(goal => {
      formatted += `- ${goal}\n`;
    });
    formatted += `\n`;
  }

  // Add coach notes
  if (insights.coachNotes) {
    formatted += `**COACH NOTES:**\n`;
    formatted += `Major Breakthrough: ${insights.coachNotes.majorBreakthrough}\n\n`;
    formatted += `Flow Integration: ${insights.coachNotes.flowIntegration}\n\n`;
    formatted += `Capital Readiness: ${insights.coachNotes.capitalReadiness}\n\n`;
    formatted += `Key Risk: ${insights.coachNotes.keyRisk}\n\n`;
  }

  return formatted;
};
