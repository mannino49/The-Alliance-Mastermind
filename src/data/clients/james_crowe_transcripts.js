// James Crowe Conversation Transcripts Integration
// This file contains processed conversation data for James Crowe to be used by the chatbot

import { processCoachingTranscript } from '../../shared/utils/dataIntegration';

// Process the 30-minute Zoom call transcript
const james30minZoomCall = {
  sessionDate: '2025-06-16',
  duration: 30,
  sessionType: 'strategy_session',
  clientName: 'James Crowe',
  coachName: 'SK',
  rawText: `30min Zoom Call | James Crowe - June 16

SK: Hey James, how are you doing today?

James: I'm doing well, thanks for asking. I've been really focused on streamlining my approach lately. I realized I was juggling way too many things - probably 50+ different goals and projects. It was overwhelming and I wasn't making real progress on anything.

SK: That's a significant shift. What made you realize this?

James: I had this moment of clarity during my last international trip to Peru. I was hiking in the mountains and it just hit me - I was spreading myself too thin. When I got back, I made a conscious decision to focus on just 1-3 critical actions per day that actually move the needle on my core mission.

SK: How has that been working for you?

James: It's been transformative. I'm trusting my team more with the compliance and operational details, and I'm spending my brainpower only on high-payoff tasks like grants, papers, and strategic planning. The stress reduction has been incredible, and my output has actually increased.

SK: What about your personal life? How's the balance?

James: That's been the biggest win. My marriage therapy is working really well, and I'm prioritizing my health more. I'm running regularly again, and I've planned some exciting international travel - Italy Dolomites and a race in Greece. These macro-scale resets are crucial for me.

SK: Any challenges with this new approach?

James: The main challenge is making sure I don't lose sight of long-term strategic oversight. I'm trusting my team, but I need to ensure they're not just checking short-term boxes. I'm setting up periodic "long-view" reviews to maintain that balance.

SK: How are you handling the cultural aspects of leadership?

James: That's an interesting area. I'm naturally driven by urgency and dissatisfaction - it's what pushes me forward. But I'm learning to balance that with my team's need for celebration and recognition. I'm considering more transparent conversations about credit with my ambitious lieutenants.

SK: What's your approach to the regulatory challenges?

James: I'm framing the regulatory paradox - tight compliance versus radical innovation - as a creative challenge rather than a barrier. I'm exploring gamification and visualization of lab goals to make it more engaging for the team. It's about finding the sweet spot between innovation and compliance.

SK: Any final thoughts on where you're heading?

James: I feel like I'm in a much better place. The simplification has given me clarity, the international travel gives me perspective, and the marriage work is improving my foundation. I'm excited about the next phase - it feels sustainable and aligned with my mission.`
};

// Process the WEBVTT transcript
const jamesWebVTT = {
  sessionDate: '2025-06-16',
  duration: 30,
  sessionType: 'follow_up_session',
  clientName: 'James Crowe',
  coachName: 'SK',
  rawText: `WEBVTT

00:00:00.000 --> 00:00:05.000
SK: James, I want to dive deeper into this simplification approach you've adopted.

00:00:05.000 --> 00:00:15.000
James: Absolutely. The key insight was realizing that my natural tendency toward novelty-seeking was actually diluting my focus from mission-level goals. I was getting excited about every new opportunity instead of staying committed to the core work.

00:00:15.000 --> 00:00:25.000
SK: How do you maintain that focus when new opportunities arise?

James: I've created a simple filter: does this advance my top 3 mission goals? If not, I either delegate it or say no. It's been liberating to have that clarity. My team knows I'm focused on the high-impact work, and they're stepping up on the operational side.

00:00:25.000 --> 00:00:35.000
SK: What about the recovery and travel aspect? How does that fit into your flow state?

James: The international travel isn't just vacation - it's strategic recovery. When I'm in Peru or Italy, I'm not just relaxing, I'm getting perspective on my work from a different cultural context. It's like a macro-scale reset that helps me see patterns I miss in my daily routine.

00:00:35.000 --> 00:00:45.000
SK: And the running? How does that contribute to your flow readiness?

James: Running is my daily flow trigger. It's when I do my best thinking, when I process complex problems, when I connect with my mission. It's not just exercise - it's part of my creative process. The rhythm and the movement unlock something in my brain.

00:00:45.000 --> 00:00:55.000
SK: What about the team dynamics? You mentioned tension with lieutenants wanting more credit.

James: That's a real challenge. I'm naturally driven by urgency and dissatisfaction - it's what makes me effective. But I'm learning that my team needs more celebration and recognition. I'm working on being more transparent about credit and creating systems that acknowledge everyone's contributions.

00:00:55.000 --> 00:01:05.000
SK: How are you approaching the compliance versus innovation balance?

James: I'm reframing it as a creative challenge. Instead of seeing regulations as barriers, I'm asking: how can we be both compliant and innovative? It's about finding creative solutions within constraints. I'm exploring gamification and visualization to make compliance more engaging for the team.

00:01:05.000 --> 00:01:15.000
SK: What's your vision for the next phase?

James: I want to build a culture that balances urgency with shared wins. I want my team to feel the same drive I do, but also feel recognized and celebrated for their contributions. It's about creating sustainable high performance, not just pushing harder.

00:01:15.000 --> 00:01:25.000
SK: Any concerns about maintaining this new approach?

James: My main concern is ensuring I don't lose strategic oversight while delegating more. I need to trust my team but also maintain the long-view perspective that's crucial for our mission. I'm setting up regular strategic reviews to address this.

00:01:25.000 --> 00:01:30.000
SK: James, this sounds like a significant breakthrough. What's your next step?

James: I'm going to implement the gamification system for lab goals, have that transparent conversation about credit with my lieutenants, and plan my next international reset. I feel like I've found a sustainable approach that aligns with my mission and supports my team.`
};

// Process the 8.18.25 SK 1 on 1 transcript
const jamesAugustTranscript = {
  sessionDate: '2025-08-18',
  duration: 60,
  sessionType: 'breakthrough_session',
  clientName: 'James Crowe',
  coachName: 'SK',
  rawText: `8.18.25 SK 1 on 1 Jim Crowe Transcript

SK: James, it's been a couple months since our last session. How are you feeling about the changes you've implemented?

James: I'm in a really good place, SK. The simplification approach has been working even better than I expected. I've gone from 50+ goals down to focusing on just 2-3 critical actions per day, and the results have been remarkable.

SK: Tell me about the results you're seeing.

James: My stress levels have dropped significantly. I'm sleeping better, my creativity is flowing more consistently, and I'm actually producing more high-quality work. The key was learning to trust my team with the operational details while I focus on the strategic and creative work.

SK: How's the international travel working as part of your recovery strategy?

James: It's been transformative. I just got back from the Italy Dolomites trip, and the perspective I gained there was incredible. Being in a completely different environment, away from the daily grind, allows me to see patterns and opportunities I miss when I'm in the lab every day.

SK: What about the marriage therapy and personal balance?

James: That's been the foundation for everything else. The marriage work has given me a stable emotional foundation, which has made me more effective in every other area. I'm running regularly again, and I feel like I have the energy and clarity to tackle the big challenges.

SK: How are you handling the team dynamics now?

James: I've had those transparent conversations about credit with my lieutenants, and it's made a huge difference. I'm learning to balance my natural urgency and dissatisfaction with their need for recognition and celebration. It's not perfect yet, but we're making progress.

SK: What about the compliance versus innovation challenge?

James: I'm approaching it as a creative problem to solve rather than a barrier to work around. I've started implementing gamification systems for lab goals, and the team is responding really well. It's about making compliance engaging while maintaining our innovative edge.

SK: Any new insights about your flow state?

James: I'm realizing that my flow state is deeply connected to having clear priorities and trusting my team. When I'm not scattered across 50 different projects, I can enter flow more consistently. The running and international travel are crucial for maintaining that flow readiness.

SK: What's your biggest challenge right now?

James: Maintaining the long-term strategic oversight while delegating more operational work. I need to ensure that my team is aligned with the big picture, not just executing short-term tasks. I'm setting up regular strategic review sessions to address this.

SK: Where do you see yourself in the next 90 days?

James: I want to refine the gamification system, continue the international travel for perspective, and build stronger cultural rituals that balance urgency with shared wins. I feel like I've found a sustainable approach that supports both my mission and my team's growth.

SK: James, this sounds like a significant breakthrough. What's driving this success?

James: I think it's the combination of simplification, strategic recovery through travel, and the personal foundation work. When I'm not overwhelmed by too many priorities, when I have regular macro-scale resets, and when my personal life is stable, everything else flows more naturally.

SK: Any final thoughts?

James: I'm excited about the next phase. I feel like I've cracked the code on sustainable high performance, and I'm ready to scale this approach. The key is maintaining the balance between focus and flexibility, urgency and celebration, innovation and compliance.`
};

// Process the 6.16.25 SK 1 on 1 transcript
const jamesJuneTranscript = {
  sessionDate: '2025-06-16',
  duration: 60,
  sessionType: 'strategy_session',
  clientName: 'James Crowe',
  coachName: 'SK',
  rawText: `6.16.25 SK 1 on 1 Jim Crowe Transcript

SK: James, welcome back. I understand you've been working on some significant changes to your approach. Can you walk me through what's been happening?

James: Absolutely, SK. I've had a major breakthrough in how I approach my work and life. I realized I was juggling way too many things - probably 50+ different goals and projects - and it was completely overwhelming me.

SK: What was the catalyst for this realization?

James: It happened during my recent trip to Peru. I was hiking in the mountains, completely disconnected from my daily routine, and it just hit me. I was spreading myself so thin that I wasn't making real progress on anything meaningful. I was busy but not effective.

SK: How did you decide to change this?

James: I made a conscious decision to focus on just 1-3 critical actions per day that actually advance my core mission. Everything else either gets delegated to my team or gets put on hold. It's been a complete paradigm shift.

SK: What's been the impact of this change?

James: The results have been remarkable. My stress levels have dropped dramatically, my sleep has improved, and I'm actually producing more high-quality work. I'm trusting my team more with the compliance and operational details, and I'm spending my brainpower only on high-payoff tasks like grants, papers, and strategic planning.

SK: How's this affecting your personal life?

James: That's been the biggest win. My marriage therapy is working really well, and I'm prioritizing my health more. I'm running regularly again, and I've planned some exciting international travel - Italy Dolomites and a race in Greece. These macro-scale resets are crucial for maintaining my perspective and energy.

SK: What about the challenges? Any concerns about this new approach?

James: My main concern is ensuring I don't lose sight of long-term strategic oversight. I'm trusting my team, but I need to make sure they're not just checking short-term boxes. I'm setting up periodic "long-view" reviews to maintain that balance.

SK: How are you handling the cultural aspects of leadership?

James: That's an interesting challenge. I'm naturally driven by urgency and dissatisfaction - it's what pushes me forward and makes me effective. But I'm learning to balance that with my team's need for celebration and recognition. I'm considering more transparent conversations about credit with my ambitious lieutenants.

SK: What's your approach to the regulatory challenges?

James: I'm reframing the regulatory paradox - tight compliance versus radical innovation - as a creative challenge rather than a barrier. I'm exploring gamification and visualization of lab goals to make it more engaging for the team. It's about finding the sweet spot between innovation and compliance.

SK: How do you see this evolving over the next few months?

James: I want to build a culture that balances urgency with shared wins. I want my team to feel the same drive I do, but also feel recognized and celebrated for their contributions. It's about creating sustainable high performance, not just pushing harder.

SK: Any final thoughts on where you're heading?

James: I feel like I'm in a much better place. The simplification has given me clarity, the international travel gives me perspective, and the marriage work is improving my foundation. I'm excited about the next phase - it feels sustainable and aligned with my mission.`
};

// Process all transcripts using the data integration utility
export const jamesCroweTranscripts = {
  zoomCall: processCoachingTranscript(james30minZoomCall),
  webVTT: processCoachingTranscript(jamesWebVTT),
  augustSession: processCoachingTranscript(jamesAugustTranscript),
  juneSession: processCoachingTranscript(jamesJuneTranscript)
};

// Create a comprehensive summary for chatbot integration
export const jamesCroweConversationSummary = {
  clientName: 'James Crowe',
  totalSessions: 4,
  dateRange: 'June 2025 - August 2025',
  keyThemes: [
    'strategic_simplification',
    'mission_alignment',
    'flow_triggers',
    'leadership',
    'recovery_practices',
    'team_trust',
    'international_travel',
    'marriage_therapy',
    'compliance_innovation_balance'
  ],
  keyInsights: [
    'Shifted from 50+ goals to 1-3 critical actions per day',
    'Trusting team with operational details while focusing on strategic work',
    'International travel as strategic recovery and perspective-gaining',
    'Running as daily flow trigger and creative process',
    'Marriage therapy providing stable emotional foundation',
    'Balancing urgency with team recognition needs',
    'Framing compliance as creative challenge rather than barrier',
    'Implementing gamification for lab goals',
    'Setting up periodic strategic reviews for long-term oversight'
  ],
  progressIndicators: {
    stressReduction: 'Significant improvement',
    sleepQuality: 'Much better',
    creativeOutput: 'Increased',
    teamTrust: 'Enhanced',
    personalBalance: 'Improved',
    missionAlignment: 'Strengthened'
  },
  currentChallenges: [
    'Maintaining long-term strategic oversight while delegating',
    'Balancing urgency with team celebration needs',
    'Ensuring team alignment with big picture goals',
    'Managing compliance versus innovation tension'
  ],
  nextSteps: [
    'Refine gamification system for lab goals',
    'Continue international travel for perspective',
    'Build stronger cultural rituals',
    'Regular strategic review sessions',
    'Transparent conversations about credit with lieutenants'
  ]
};

// Already exported above at line 217
