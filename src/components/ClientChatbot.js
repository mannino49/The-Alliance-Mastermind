import React, { useState, useRef, useEffect } from 'react';

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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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

**CURRENT CLIENT PROFILE:**
Name: ${currentClient ? currentClient.name : 'Unknown'}
Creative Archetype: ${currentClient ? currentClient.archetype : 'Unknown'}
Mission Statement: ${currentClient ? currentClient.mission : 'Unknown'}
Flow Readiness Score: ${currentClient ? currentClient.flowReadinessScore : 'Unknown'}/100
Leadership Leverage Score: ${currentClient ? currentClient.leadershipLeverageScore : 'Unknown'}/100
Top Strengths: ${currentClient ? currentClient.topStrengths.join(', ') : 'Unknown'}
Key Risks: ${currentClient ? currentClient.keyRisks.join(', ') : 'Unknown'}

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
      const { callOpenAI } = await import('../api/chatApi');
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
        <div className="w-full bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg">
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
      )}
    </>
  );
};

export default ClientChatbot;
