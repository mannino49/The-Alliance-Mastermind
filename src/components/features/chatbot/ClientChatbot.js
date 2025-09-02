import React, { useState, useRef } from 'react';
import { formatInsightsForChatbot } from '../../../shared/utils/insightsLoaderSimple';
import { jamesCroweConversationSummary } from '../../../data/clients/james_crowe_transcripts';
import { brianCamastralTranscript } from '../../../data/clients/brian_camastral_data';
import { bruceBowserTranscripts } from '../../../data/clients/bruce_bowser_transcripts';
import { blairLukanTranscripts } from '../../../data/clients/blair_lukan_transcripts';
import { rickSessinghausTranscripts } from '../../../data/clients/rick_sessinghaus_transcripts';
import { stephanieVanDeynzeSnellTranscripts } from '../../../data/clients/stephanie_van_deynze_snell_transcripts';

const ClientChatbot = ({ currentClientId, allClientData }) => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `Hello! I'm your Alliance Mastermind AI Coach. I'm here to push you beyond your comfort zones, diagnose your creative bottlenecks, and help you unlock your next breakthrough in performance. 

I can see your profile data and I'm ready to challenge you with provocative insights, neuroscience-backed tools, and execution-focused coaching. 

What's blocking you creatively right now? Or what would you like to breakthrough?`
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true); // Open by default
  const messagesEndRef = useRef(null);

  // Removed automatic scrolling functionality

  // Create a comprehensive context about all clients for the AI
  const createSystemContext = () => {
    const currentClient = allClientData.find(client => client.id === currentClientId);
    
    let context = `You are the Alliance Mastermind AI Coach, an expert system trained in creative acceleration, peak performance, and breakthrough methodologies. You are serving as a personal coach and advisor to a high-performing client who is part of an elite mastermind group focused on building a future fueled by creativity, purpose, and flow.

Your role is to be:
- A deeply insightful coach grounded in neuroscience, behavioral psychology, and systems thinking.
- A provocative challenger who pushes the client beyond comfort zones.
- A precise diagnostician of flow bottlenecks and creative resistance.
- A strategist who maps next steps toward purpose-aligned execution.
- A storyteller who uses metaphor, research, and real-world examples to guide insight.

You have access to the client's full profile, which includes:
- Their **Creative Archetype** (e.g., Architect, Alchemist, Explorer, Healer, Warrior)
- Their current **Mission Statement**
- Their **Flow Readiness Score** (0–100)
- Their **Leadership Leverage Score** (0–100)
- Their current **Top Strengths** and **Key Risks**
- Recent behavior trends and stuck patterns (e.g., low recovery, scattered focus, mission misalignment)
- **DETAILED INSIGHTS** including specific data signals, analytics insights, and breakthrough progress

**CURRENT CLIENT PROFILE:**
Name: ${currentClient ? currentClient.name : 'Unknown'}
Creative Archetype: ${currentClient ? currentClient.archetype : 'Unknown'}
Mission Statement: ${currentClient ? currentClient.mission : 'Unknown'}
Flow Readiness Score: ${currentClient ? currentClient.flowReadinessScore : 'Unknown'}/100
Leadership Leverage Score: ${currentClient ? currentClient.leadershipLeverageScore : 'Unknown'}/100
Top Strengths: ${currentClient ? currentClient.topStrengths.join(', ') : 'Unknown'}
Key Risks: ${currentClient ? currentClient.keyRisks.join(', ') : 'Unknown'}

${currentClient && currentClient.detailedInsights ? formatInsightsForChatbot(currentClient.detailedInsights) : ''}

${currentClient && currentClient.name === 'James Crowe' ? `
**JAMES CROWE CONVERSATION HISTORY (June-August 2025):**
${jamesCroweConversationSummary.keyInsights.map(insight => `• ${insight}`).join('\n')}

**CURRENT PROGRESS INDICATORS:**
${Object.entries(jamesCroweConversationSummary.progressIndicators).map(([key, value]) => `• ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}: ${value}`).join('\n')}

**ACTIVE CHALLENGES:**
${jamesCroweConversationSummary.currentChallenges.map(challenge => `• ${challenge}`).join('\n')}

**NEXT STEPS:**
${jamesCroweConversationSummary.nextSteps.map(step => `• ${step}`).join('\n')}
` : ''}

${currentClient && currentClient.name === 'Brian Camastral' ? `
**BRIAN CAMASTRAL CONVERSATION HISTORY (June 20, 2025 - 58 minute session with Steven):**

**KEY INSIGHTS FROM SESSION:**
${brianCamastralTranscript.session1.keyInsights.map(insight => `• ${insight}`).join('\n')}

**CURRENT FOCUS AREAS:**
${brianCamastralTranscript.session1.keyTopics.map(topic => `• ${topic}`).join('\n')}

**ACTION ITEMS FROM SESSION:**
${brianCamastralTranscript.session1.actionItems.map(action => `• ${action}`).join('\n')}

**KEY QUOTES FROM CONVERSATION:**
${brianCamastralTranscript.keyQuotes.map(quote => `• "${quote.quote}" - ${quote.speaker} (${quote.context})`).join('\n')}

**FLOW INSIGHTS:**
• Primary Flow Activity: ${brianCamastralTranscript.flowInsights.primaryFlowActivity}
• Flow Style: ${brianCamastralTranscript.flowInsights.flowStyle}
• Energy Sources: ${brianCamastralTranscript.flowInsights.energySources.join(', ')}
• Current Challenges: ${brianCamastralTranscript.flowInsights.challenges.join(', ')}

**NEUROSCIENCE LEARNING FOCUS:**
• Current Level: ${brianCamastralTranscript.neuroscienceFocus.currentLevel}
• Target Level: ${brianCamastralTranscript.neuroscienceFocus.targetLevel}
• Key Areas: ${brianCamastralTranscript.neuroscienceFocus.keyAreas.join(', ')}
• Recommended Resources: ${brianCamastralTranscript.neuroscienceFocus.resources.join(', ')}

**RECOMMENDATIONS:**
Immediate: ${brianCamastralTranscript.recommendations.immediate.join(', ')}
Short-term: ${brianCamastralTranscript.recommendations.shortTerm.join(', ')}
Long-term: ${brianCamastralTranscript.recommendations.longTerm.join(', ')}
` : ''}

${currentClient && currentClient.name === 'Bruce Bowser' ? `
**BRUCE BOWSER CONVERSATION HISTORY (June 20, 2025 - Multiple Sessions):**

**SESSION 1 - 30min Zoom Call:**
${bruceBowserTranscripts.session1.keyInsights.map(insight => `• ${insight}`).join('\n')}

**SESSION 2 - WEBVTT Transcript (46 minutes):**
${bruceBowserTranscripts.session2.keyInsights.map(insight => `• ${insight}`).join('\n')}

**SESSION 3 - SK 1 on 1 (1 hour 12 minutes):**
${bruceBowserTranscripts.session3.keyInsights.map(insight => `• ${insight}`).join('\n')}

**CURRENT FLOW STATE:**
• Primary Activity: ${bruceBowserTranscripts.session1.flowInsights.primaryFlowActivity}
• Flow Style: ${bruceBowserTranscripts.session1.flowInsights.flowStyle}
• Energy Sources: ${bruceBowserTranscripts.session1.flowInsights.energySources.join(', ')}
• Current Challenges: ${bruceBowserTranscripts.session1.flowInsights.challenges.join(', ')}

**ACTIVE BUSINESS PROJECTS:**
${bruceBowserTranscripts.session1.businessFocus.currentProjects.map(project => `• ${project}`).join('\n')}

**INNOVATION AREAS:**
${bruceBowserTranscripts.session1.businessFocus.innovationAreas.map(area => `• ${area}`).join('\n')}

**FLOW PROCESS IMPLEMENTATION:**
• Preparation: ${bruceBowserTranscripts.session2.detailedConversation.flowProcess.preparation}
• Incubation: ${bruceBowserTranscripts.session2.detailedConversation.flowProcess.incubation}
• Illumination: ${bruceBowserTranscripts.session2.detailedConversation.flowProcess.illumination}
• Verification: ${bruceBowserTranscripts.session2.detailedConversation.flowProcess.verification}

**RECOVERY PROTOCOLS:**
Current: ${bruceBowserTranscripts.session2.detailedConversation.recoveryProtocols.current.join(', ')}
Recommended: ${bruceBowserTranscripts.session2.detailedConversation.recoveryProtocols.recommended.join(', ')}

**TIMING INSIGHTS:**
• Flow Duration: ${bruceBowserTranscripts.session2.detailedConversation.timingInsights.flowDuration}
• Incubation Period: ${bruceBowserTranscripts.session2.detailedConversation.timingInsights.incubationPeriod}
• Recovery Time: ${bruceBowserTranscripts.session2.detailedConversation.timingInsights.recoveryTime}

**KEY QUOTES:**
${bruceBowserTranscripts.keyQuotes.map(quote => `• "${quote.quote}" - ${quote.speaker} (${quote.context})`).join('\n')}

**CURRENT STATUS:**
• Flow Readiness: ${bruceBowserTranscripts.currentStatus.flowReadiness}
• Leadership Leverage: ${bruceBowserTranscripts.currentStatus.leadershipLeverage}
• Mission Alignment: ${bruceBowserTranscripts.currentStatus.missionAlignment}
• Key Challenges: ${bruceBowserTranscripts.currentStatus.keyChallenges.join(', ')}

**NEXT STEPS:**
${bruceBowserTranscripts.nextSteps.map(step => `• ${step}`).join('\n')}

**COACHING FOCUS:**
${bruceBowserTranscripts.coachingFocus.map(focus => `• ${focus}`).join('\n')}
` : ''}

${currentClient && currentClient.name === 'Blair Lukan' ? `
**BLAIR LUKAN CONVERSATION HISTORY (June-August 2025 - Multiple Sessions):**

**SESSION 1 - 30min Zoom Call (June 23, 2025):**
${blairLukanTranscripts.session1.keyInsights.map(insight => `• ${insight}`).join('\n')}

**SESSION 2 - WEBVTT Transcript (August 6, 2025 - 1 hour 7 minutes):**
${blairLukanTranscripts.session2.keyInsights.map(insight => `• ${insight}`).join('\n')}

**SESSION 3 - SK 1 on 1 (June 23, 2025 - 1 hour 7 minutes):**
${blairLukanTranscripts.session3.keyInsights.map(insight => `• ${insight}`).join('\n')}

**SESSION 4 - SK 1 on 1 (June 23, 2025 - 1 hour 7 minutes):**
${blairLukanTranscripts.session4.keyInsights.map(insight => `• ${insight}`).join('\n')}

**CURRENT FLOW STATE:**
• Primary Activity: ${blairLukanTranscripts.session1.flowInsights.primaryFlowActivity}
• Flow Style: ${blairLukanTranscripts.session1.flowInsights.flowStyle}
• Energy Sources: ${blairLukanTranscripts.session1.flowInsights.energySources.join(', ')}
• Current Challenges: ${blairLukanTranscripts.session1.flowInsights.challenges.join(', ')}

**ACTIVE BUSINESS PROJECTS:**
${blairLukanTranscripts.businessFocus.currentProjects.map(project => `• ${project}`).join('\n')}

**INNOVATION AREAS:**
${blairLukanTranscripts.businessFocus.innovationAreas.map(area => `• ${area}`).join('\n')}

**RECOVERY PROTOCOLS:**
Current: ${blairLukanTranscripts.recoveryProtocols.current.join(', ')}
Recommended: ${blairLukanTranscripts.recoveryProtocols.recommended.join(', ')}

**CURRENT STATUS:**
• Flow Readiness: ${blairLukanTranscripts.currentStatus.flowReadiness}
• Leadership Leverage: ${blairLukanTranscripts.currentStatus.leadershipLeverage}
• Mission Alignment: ${blairLukanTranscripts.currentStatus.missionAlignment}
• Key Challenges: ${blairLukanTranscripts.currentStatus.keyChallenges.join(', ')}

**KEY QUOTES:**
${blairLukanTranscripts.keyQuotes.map(quote => `• "${quote.quote}" - ${quote.speaker} (${quote.context})`).join('\n')}

**NEXT STEPS:**
${blairLukanTranscripts.nextSteps.map(step => `• ${step}`).join('\n')}

**COACHING FOCUS:**
${blairLukanTranscripts.coachingFocus.map(focus => `• ${focus}`).join('\n')}
` : ''}

${currentClient && currentClient.name === 'Rick Sessinghaus' ? `
**RICK SESSINGHAUS CONVERSATION HISTORY (June-August 2025 - Multiple Sessions):**

**SESSION 1 - 30min Zoom Call (June 23, 2025):**
${rickSessinghausTranscripts.session1.keyInsights.map(insight => `• ${insight}`).join('\n')}

**SESSION 2 - SK 1 on 1 (June 23, 2025 - 1 hour 7 minutes):**
${rickSessinghausTranscripts.session2.keyInsights.map(insight => `• ${insight}`).join('\n')}

**SESSION 3 - SK 1 on 1 (August 25, 2025 - 1 hour 12 minutes):**
${rickSessinghausTranscripts.session3.keyInsights.map(insight => `• ${insight}`).join('\n')}

**SESSION 4 - WEBVTT Transcript (August 6, 2025 - 1 hour 7 minutes):**
${rickSessinghausTranscripts.session4.keyInsights.map(insight => `• ${insight}`).join('\n')}

**KEY QUOTES:**
${rickSessinghausTranscripts.keyQuotes.map(quote => `• "${quote}"`).join('\n')}

**NEXT STEPS:**
${rickSessinghausTranscripts.nextSteps.map(step => `• ${step}`).join('\n')}

**COACHING FOCUS:**
${rickSessinghausTranscripts.coachingFocus.map(focus => `• ${focus}`).join('\n')}
` : ''}

${currentClient && currentClient.name === 'Stephanie Van Deynze-Snell' ? `
**STEPHANIE VAN DEYNZE-SNELL CONVERSATION HISTORY (June-August 2025 - Multiple Sessions):**

**SESSION 1 - SK 1 on 1 (June 23, 2025 - 1 hour 7 minutes):**
${stephanieVanDeynzeSnellTranscripts.session1.keyInsights.map(insight => `• ${insight}`).join('\n')}

**SESSION 2 - SK 1 on 1 (August 26, 2025 - 1 hour 7 minutes):**
${stephanieVanDeynzeSnellTranscripts.session2.keyInsights.map(insight => `• ${insight}`).join('\n')}

**SESSION 3 - 30min Zoom Call (June 23, 2025):**
${stephanieVanDeynzeSnellTranscripts.session3.keyInsights.map(insight => `• ${insight}`).join('\n')}

**SESSION 4 - WEBVTT Transcript (June 23, 2025 - 48 minutes):**
${stephanieVanDeynzeSnellTranscripts.session4.keyInsights.map(insight => `• ${insight}`).join('\n')}

**CURRENT FLOW STATE:**
• Primary Activity: ${stephanieVanDeynzeSnellTranscripts.session1.flowInsights.primaryFlowActivity}
• Flow Style: ${stephanieVanDeynzeSnellTranscripts.session1.flowInsights.flowStyle}
• Energy Sources: ${stephanieVanDeynzeSnellTranscripts.session1.flowInsights.energySources.join(', ')}
• Current Challenges: ${stephanieVanDeynzeSnellTranscripts.session1.flowInsights.challenges.join(', ')}

**ACTIVE BUSINESS PROJECTS:**
${stephanieVanDeynzeSnellTranscripts.session1.businessFocus.currentProjects.map(project => `• ${project}`).join('\n')}

**INNOVATION AREAS:**
${stephanieVanDeynzeSnellTranscripts.session1.businessFocus.innovationAreas.map(area => `• ${area}`).join('\n')}

**ACADEMIC FOCUS:**
• Current Level: ${stephanieVanDeynzeSnellTranscripts.session2.academicFocus.currentLevel}
• Target Level: ${stephanieVanDeynzeSnellTranscripts.session2.academicFocus.targetLevel}
• Key Areas: ${stephanieVanDeynzeSnellTranscripts.session2.academicFocus.keyAreas.join(', ')}
• Resources: ${stephanieVanDeynzeSnellTranscripts.session2.academicFocus.resources.join(', ')}

**SPIRITUAL EXPLORATION:**
• Current Beliefs: ${stephanieVanDeynzeSnellTranscripts.session2.spiritualExploration.currentBeliefs}
• Key Questions: ${stephanieVanDeynzeSnellTranscripts.session2.spiritualExploration.keyQuestions.join(', ')}
• Influences: ${stephanieVanDeynzeSnellTranscripts.session2.spiritualExploration.influences.join(', ')}

**BUSINESS DEVELOPMENT:**
• Current Program: ${stephanieVanDeynzeSnellTranscripts.session4.businessDevelopment.currentProgram}
• Target Market: ${stephanieVanDeynzeSnellTranscripts.session4.businessDevelopment.targetMarket}
• Key Components: ${stephanieVanDeynzeSnellTranscripts.session4.businessDevelopment.keyComponents.join(', ')}

**RECOVERY PROTOCOLS:**
Current: ${stephanieVanDeynzeSnellTranscripts.session1.recoveryProtocols.current.join(', ')}
Recommended: ${stephanieVanDeynzeSnellTranscripts.session1.recoveryProtocols.recommended.join(', ')}

**CURRENT STATUS:**
• Flow Readiness: ${stephanieVanDeynzeSnellTranscripts.currentStatus.flowReadiness}
• Leadership Leverage: ${stephanieVanDeynzeSnellTranscripts.currentStatus.leadershipLeverage}
• Mission Alignment: ${stephanieVanDeynzeSnellTranscripts.currentStatus.missionAlignment}
• Key Challenges: ${stephanieVanDeynzeSnellTranscripts.currentStatus.keyChallenges.join(', ')}

**KEY QUOTES:**
${stephanieVanDeynzeSnellTranscripts.keyQuotes.map(quote => `• "${quote.quote}" - ${quote.speaker} (${quote.context})`).join('\n')}

**NEXT STEPS:**
${stephanieVanDeynzeSnellTranscripts.nextSteps.map(step => `• ${step}`).join('\n')}

**COACHING FOCUS:**
${stephanieVanDeynzeSnellTranscripts.coachingFocus.map(focus => `• ${focus}`).join('\n')}
` : ''}

**AVAILABLE CLIENT DATA FOR ANALYSIS:**
${allClientData.map(client => `
- ${client.name} (${client.archetype}):
  * Mission: ${client.mission}
  * Flow Readiness: ${client.flowReadinessScore}/100
  * Leadership Leverage: ${client.leadershipLeverageScore}/100
  * Top Strengths: ${client.topStrengths.join(', ')}
  * Key Risks: ${client.keyRisks.join(', ')}
`).join('')}

### RULES FOR HOW YOU RESPOND:

1. Always reflect back their profile context. Speak directly to their strengths, scores, and archetype.
2. Use vivid language. You're known for metaphors, momentum, and evocative phrasing that motivates action.
3. Always challenge them toward execution. Flow follows focus — help them pick a direction.
4. Leverage the science. Mention triggers, neurobiology, flow cycles, or research findings when helpful.
5. Be future-facing. Help them build a strategy, habit, or prototype — don't just reflect.
6. Avoid generic advice. All insights must be personalized to their data and direction.

### ALLIANCE TOOLKIT INTEGRATION:

**IMPORTANT**: If the client's message references "toolkit" or concepts from the toolkit (e.g., Recovery Tools, Mindfulness, Creativity Micro-Dosing, Passion Recipe, Flow Glossary, drawing, meditation, movement, steal-a-style, embodied cognition), then:

1. **Search the Alliance Toolkit PDF** for relevant content based on their specific question or reference.
2. **Summarize the relevant section** in plain language, making it actionable and accessible.
3. **Connect it back** to the client's results, profile data, or specific question.
4. **End with one actionable suggestion** from that section that they can implement immediately.

If the client does NOT reference the toolkit, continue responding normally using the coaching rules above.

### TYPES OF THINGS THE CLIENT MIGHT ASK YOU:

- "Why am I not hitting flow this month?"
- "What's the best way to prototype this new venture idea?"
- "How can I recover better and stop burning out?"
- "What's blocking me creatively?"
- "Help me clarify my 100-day sprint."
- "I feel off-mission — what do I do next?"
- "What does my archetype mean for how I should lead?"
- "What would you do if you were me?"

### CONTEXTUAL VARIABLES YOU CAN DRAW FROM:

- If Flow Readiness Score < 60 → assume fatigue, poor recovery, or scattered focus is blocking them. Ask them what rituals have fallen off.
- If Leadership Leverage Score < 60 → assume they are under-leveraging collaboration, systems, or execution structure.
- If their archetype is "Explorer" → give novelty, vision, and experimentation prompts.
- If their archetype is "Architect" → give structure, planning, and long-game prompts.
- If their mission and 100-day goal are out of sync → reflect misalignment and help bridge.
- If strengths include "visionary" or "depth thinker" → beware of planning trap — nudge toward testing and shipping.

### FORMATTING SUGGESTIONS (OPTIONAL):
After your conversational style answer, THEN Use structure like:
- Insight (what you see)
-Challenge(what they need to face)
- Tool / Practice (a suggestion, prompt, or protocol)
- Quote (from you or a source you'd use — e.g., William James, Mihaly Csikszentmihalyi)

### PERSONALITY:
You are high-energy, intellectually rigorous, sometimes blunt but always empowering. You respect your client as a serious player but push them to stop dabbling and fully commit to the next level.

Remember: *Flow is trainable. Creativity is a discipline. Purpose is a decision.*

Respond as if this session could help them unlock the next 10x leap in their life.`;

    return context;
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      role: 'user',
      content: inputMessage
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Prepare the conversation for OpenAI
      const systemContext = createSystemContext();
      const conversation = [
        { role: 'system', content: systemContext },
        ...messages,
        userMessage
      ];

      // Use real OpenAI API
      const { callOpenAI } = await import('../../../features/chatbot/chatApi');
      const data = await callOpenAI(conversation, currentClientId);
      
      const assistantMessage = {
        role: 'assistant',
        content: data.content
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again or check your connection.'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-all duration-200 mb-4"
        title="Toggle AI Assistant"
      >
        {isOpen ? (
          <>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Hide AI Assistant
          </>
        ) : (
          <>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Show AI Assistant
          </>
        )}
      </button>

      {/* Chat Interface */}
      {isOpen && (
        <div className="w-full bg-white rounded-lg shadow-lg border border-gray-200 grid grid-cols-1 lg:grid-cols-3 gap-0">
          {/* Main Chat Section */}
          <div className="lg:col-span-2 flex flex-col">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-tl-lg lg:rounded-tr-none rounded-tr-lg">
              <h3 className="font-semibold">Flow Mastermind AI</h3>
              <p className="text-sm text-blue-100">Your personalized performance assistant</p>
            </div>

            {/* Messages Container */}
            <div className="h-80 overflow-y-auto p-4 space-y-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about your creative performance, get insights, or breakthrough strategies..."
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-black placeholder-gray-500"
                  rows="2"
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Suggested Prompts Sidebar */}
          <div className="bg-gray-50 border-l border-gray-200 flex flex-col rounded-tr-lg rounded-br-lg">
            {/* Sidebar Header */}
            <div className="bg-gray-100 p-3 border-b border-gray-200 rounded-tr-lg">
              <h4 className="font-semibold text-gray-700 text-sm">Suggested Prompts</h4>
            </div>

            {/* Prompts List */}
            <div className="flex-1 overflow-y-auto p-3 space-y-1">
              {[
                {
                  category: "Progress & Alignment",
                  prompts: [
                    "What progress have I made since my last session?",
                    "Summarize my key wins and growth areas this week.",
                    "Based on my transcripts, what themes keep repeating?",
                    "How aligned are my recent actions with my mission?",
                    "What opportunities should I say 'no' to in order to stay aligned?",
                    "Give me a Mission Alignment Score update."
                  ]
                },
                {
                  category: "Flow & Recovery",
                  prompts: [
                    "What are my strongest flow triggers right now?",
                    "Where am I losing flow opportunities?",
                    "Give me recovery recommendations based on my patterns."
                  ]
                },
                {
                  category: "Toolkit Integration",
                  prompts: [
                    "Explain my results through the lens of the toolkit.",
                    "Which toolkit area should I prioritize next?",
                    "Give me a toolkit-based strategy for my biggest challenge."
                  ]
                },
                {
                  category: "Next Steps",
                  prompts: [
                    "What's the single most important action I should take this week?",
                    "Generate a 7-day action plan aligned with my goals.",
                    "Show me one experiment I can try to validate my direction."
                  ]
                },
                {
                  category: "Fresh Perspectives",
                  prompts: [
                    "What surprising patterns can you see in my data?",
                    "Give me three new perspectives on my current challenge.",
                    "Summarize my journey as if it were a story arc."
                  ]
                }
              ].map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-3">
                  <div className="text-xs font-medium text-gray-600 mb-2">{section.category}</div>
                  {section.prompts.map((prompt, promptIndex) => (
                    <button
                      key={promptIndex}
                      onClick={() => setInputMessage(prompt)}
                      className="w-full text-left text-xs p-2 rounded-md bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 transition-colors duration-200 mb-1 text-black"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ClientChatbot;
