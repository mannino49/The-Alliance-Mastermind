// Mock API endpoint for development - replace with actual OpenAI API integration
export const mockChatAPI = async (messages, currentClientId) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

  const lastMessage = messages[messages.length - 1]?.content || '';
  const systemContext = messages[0]?.content || '';

  // Extract client data from system context
  const currentClientMatch = systemContext.match(/Current client: ([^\n]+)/);
  const currentClient = currentClientMatch ? currentClientMatch[1] : 'Unknown';
  
  const archetypeMatch = systemContext.match(/Current client archetype: ([^\n]+)/);
  const archetype = archetypeMatch ? archetypeMatch[1] : 'Unknown';
  
  const missionMatch = systemContext.match(/Current client mission: ([^\n]+)/);
  const mission = missionMatch ? missionMatch[1] : 'Unknown';

  // Check if this is Brian Camastral with rich transcript data
  const hasTranscriptData = systemContext.includes('conversationHistory') && 
                           systemContext.includes('brianCamastralTranscript');

  // Parse all client data for comparisons
  // eslint-disable-next-line no-unused-vars
  const allClientsData = systemContext.match(/- ([^:]+) \(([^)]+)\):[\s\S]*?Flow Readiness: (\d+)[\s\S]*?Leadership Leverage: (\d+)[\s\S]*?Top Strengths: ([^\n]+)[\s\S]*?Key Risks: ([^\n]+)/g);
  
  let response = '';
  
  // Enhanced responses for Brian Camastral with transcript data
  if (currentClient.toLowerCase().includes('brian') && hasTranscriptData) {
    if (lastMessage.toLowerCase().includes('collective') || lastMessage.toLowerCase().includes('group') || lastMessage.toLowerCase().includes('orchestrat')) {
      response = `Brian, based on your recent conversation with Steven, I can see your focus on collective flow and group orchestration is exactly where your strengths lie.

**Your Collective Flow Insights:**
• **Group Orchestration Score: 85/100** - You excel at bringing teams together for collective results
• **Collective Flow Index: 80/100** - You understand how to create group flow states
• **Mission Alignment: 70/100** - Your shift toward collaborative groups aligns with your purpose

**Key Insights from Your Session:**
• You've crystallized your direction toward orchestrating collaborative, high-impact groups
• Your true strength shows up when working with larger groups toward shared goals
• You're moving from individual coaching to collective orchestration - this is your sweet spot

**Steven's Key Recommendation:**
"Collective ambition is where everybody's got individual desires, but you need each other for everybody to get what they individually want." This is exactly what you're designed to facilitate.

**Your Next Steps:**
• Schedule that call with Dr. Michael Mannino about Synergy's group flow tracking
• Read Team Flow by Jeff Vanderhall and Oren Davis
• Start exploring your rolodex for collaborative group opportunities

You're not just a coach - you're a collective flow architect. That's your unique position in the market.`;
    } else if (lastMessage.toLowerCase().includes('neuroscience') || lastMessage.toLowerCase().includes('learn') || lastMessage.toLowerCase().includes('education')) {
      response = `Brian, your neuroscience education focus is perfectly timed. Based on your conversation, here's your learning roadmap:

**Your Current Neuroscience Level: 60/100**
• You're familiar with flow concepts but need deeper knowledge for credibility
• Your goal: Enough expertise to overcome client objections and enhance your coaching

**Steven's Recommended Reading List:**
1. **Team Flow** by Jeff Vanderhall and Oren Davis - Essential for your collective focus
2. **Affective Neuroscience** by Jaak Panksepp - The 7 foundational emotional pathways
3. **Cambridge Handbook series** - Comprehensive primers on specific topics
4. **Oxford Very Short Introduction series** - Concise, expert-level overviews

**Key Learning Areas for You:**
• **Collective Ambition**: How groups develop shared goals and mutual support
• **Behavioral Change**: Understanding resistance patterns (especially around money)
• **Group Flow Triggers**: What creates flow states in collaborative settings
• **Neuroscience of Leadership**: How to model flow principles for teams

**Your Learning Strategy:**
• Start with Team Flow - it directly supports your collective orchestration focus
• Focus on the neuroscience that helps you overcome client objections
• Use your corporate experience to bridge theory with practical application

**The Goal:** Not to become a neuroscientist, but to have enough knowledge to enhance your credibility and overcome resistance when working with high-level executives and teams.

This knowledge will be your competitive advantage in the collective flow space.`;
    } else if (lastMessage.toLowerCase().includes('goal') || lastMessage.toLowerCase().includes('process') || lastMessage.toLowerCase().includes('outcome')) {
      response = `Brian, your process vs outcome focus is exactly what Steven emphasized. Here's how to apply it:

**Your Goal Stack Approach:**
• **Process Goals**: Daily actions that build momentum (like Steven's 500 words/day)
• **Outcome Goals**: The big vision (like your collective flow leadership)
• **Key Insight**: "The only way to get wherever is to stick to the process"

**Your Specific Process Metrics:**
• **Primary Flow Activity**: Challenging endurance activities (your biking experience)
• **Weekly Structure**: 4 hours/week on primary flow activity
• **Daily Practice**: 30 minutes of recovery/play activities
• **Learning Schedule**: Consistent neuroscience study time

**Steven's Framework for You:**
• **2-Year Goals**: What do you want in 2 years? (Collective flow leadership)
• **Cut in Half**: What about 1 year? (Building neuroscience expertise)
• **Cut in Half**: What about 6 months? (Testing with 1-2 clients)
• **Cut in Half**: What about 3 months? (Reading Team Flow, calling Mannino)
• **Next 30 Days**: Start coaching 1-2 clients, begin neuroscience reading

**Your Process Focus:**
• Don't get attached to specific outcomes
• Focus on the daily actions that build your expertise
• Trust that the process will lead to the right opportunities
• Use your passion and curiosity as fuel, not pressure

**The Key**: You're not trying to become someone else - you're becoming the best version of your collective orchestration self. The process will reveal the exact opportunities you're meant to pursue.`;
    } else if (lastMessage.toLowerCase().includes('recommend') || lastMessage.toLowerCase().includes('suggest') || lastMessage.toLowerCase().includes('action')) {
      response = `Brian, based on your conversation with Steven, here are your specific next actions:

**Immediate Actions (This Week):**
• **Schedule the Mannino Call**: Contact Dr. Michael Mannino about Synergy's group flow tracking
• **Order Team Flow**: Get Jeff Vanderhall and Oren Davis's book on collective flow
• **Reach Out to Former CEO**: Start coaching that client you mentioned (free initially)

**Short-term Goals (Next 30 Days):**
• **Read Team Flow**: Focus on collective ambition and group flow concepts
• **Begin Neuroscience Study**: Start with Affective Neuroscience by Panksepp
• **Test Your Messaging**: Use the coaching client to refine your collective flow approach

**Medium-term Focus (Next 90 Days):**
• **Explore Your Rolodex**: Identify potential collaborative group members
• **Develop Your Framework**: Create your unique collective orchestration methodology
• **Build Credibility**: Use neuroscience knowledge to overcome client objections

**Your Unique Positioning:**
• **The Collective Flow Architect**: You orchestrate groups for collective results
• **Corporate + Soulcraft Bridge**: You understand both business and transformation
• **Neuroscience-Informed**: You'll have the knowledge to back up your approach

**Steven's Key Insight for You:**
"You're not just a coach - you're positioned at the intersection of corporate leadership, soulcraft, and neuroscience. That's a category of one."

**Success Metrics:**
• Track your neuroscience knowledge progression
• Monitor client engagement with your collective approach
• Measure group flow outcomes in your collaborative work

Start with the Mannino call - that's your immediate next step toward understanding group flow measurement.`;
    } else {
      response = `Brian, I have access to your recent conversation with Steven, and I can see the clarity you've gained about your direction.

**Your Current State:**
• **Mission**: Collective Flow Leadership - orchestrating collaborative, high-impact groups
• **Flow Readiness**: 55/100 (room for improvement in personal flow practices)
• **Leadership Leverage**: 65/100 (strong foundation for group work)
• **Collective Flow Index**: 80/100 (this is your sweet spot!)

**Key Insights from Your Session:**
• You've crystallized your shift from individual coaching to collective orchestration
• Your true strength shows up when working with larger groups toward shared goals
• You're exploring the intersection of corporate leadership, soulcraft, and neuroscience

**Your Next Steps:**
• Schedule call with Dr. Michael Mannino about Synergy's group flow tracking
• Read Team Flow by Jeff Vanderhall and Oren Davis
• Begin coaching 1-2 clients to test your collective approach
• Explore your rolodex for collaborative group opportunities

**What I Can Help With:**
• Dive deeper into collective flow concepts
• Explore your neuroscience learning path
• Discuss process vs outcome goal setting
• Help you develop your unique positioning

What aspect of your collective flow leadership journey would you like to explore?`;
    }
  } else if (lastMessage.toLowerCase().includes('performance') || lastMessage.toLowerCase().includes('score')) {
    response = `Based on your performance data, ${currentClient}, here's what I can see:

**Your Current Scores:**
• Flow Readiness: 45/100 (This indicates you need to focus on recovery and flow practices)
• Leadership Leverage: 60/100 (You're showing good leadership potential)

**Key Areas for Growth:**
• Your flow readiness is below optimal levels - focus on sleep, recovery, and flow triggers
• Your leadership leverage shows promise but could be enhanced through modeling flow principles

**Strengths to Build On:**
• Clear mission alignment
• High drive and motivation
• Team-oriented approach

Would you like me to dive deeper into any specific area or compare you with similar archetypes?`;
  } else if (lastMessage.toLowerCase().includes('areas for growth') || lastMessage.toLowerCase().includes('improve') || lastMessage.toLowerCase().includes('growth')) {
    response = `Great question, ${currentClient}! Based on your data, here are your key areas for growth:

**Priority 1: Flow Readiness (45/100)**
• **Sleep Optimization**: You're currently getting 4 hours/night - aim for 7-8 hours
• **Recovery Practices**: Integrate more play, meditation, and relaxation activities
• **Flow Triggers**: Implement consistent flow state triggers and routines

**Priority 2: Leadership Leverage (60/100)**
• **Model Flow Principles**: Demonstrate flow practices to your team
• **Create Flow-Friendly Environment**: Set up team structures that support flow states
• **Lead by Example**: Show your team how to balance work and recovery

**Specific Actions:**
• Start with 30 minutes of recovery activities daily
• Implement a consistent sleep schedule
• Create flow trigger routines (music, environment, timing)

Your archetype (${archetype}) suggests you're naturally visionary - use this strength to inspire others while building your own flow foundation.`;
  } else if (lastMessage.toLowerCase().includes('creative') || lastMessage.toLowerCase().includes('creativity')) {
    response = `Excellent question! As a ${archetype}, creativity is one of your core strengths. Here's how to enhance it:

**Your Creative Profile:**
• **Archetype Advantage**: ${archetype}s naturally excel at creative thinking and innovation
• **Current Challenge**: Your flow readiness (45/100) may be limiting your creative output
• **Opportunity**: When you optimize your flow state, your creativity will naturally flourish

**Creativity Enhancement Strategies:**
• **Flow State Optimization**: Better sleep and recovery will dramatically improve creative thinking
• **Creative Triggers**: Establish routines that signal your brain it's time to create
• **Environment Design**: Create spaces that inspire your unique creative process
• **Time Blocking**: Schedule dedicated creative time when you're most alert

**Your Creative Strengths:**
• Visionary thinking (clear mission alignment)
• High motivation and drive
• Team collaboration skills

**Immediate Action**: Start with 15 minutes of creative activity daily, even if it's just brainstorming or journaling. Your creativity will expand as your flow readiness improves.`;
  } else if (lastMessage.toLowerCase().includes('compare') || lastMessage.toLowerCase().includes('other') || lastMessage.toLowerCase().includes('clients')) {
    response = `Great question! Let me compare you with other Flow Mastermind participants:

**Your Position:**
• Flow Readiness: 45/100 (Below average - group average is ~55)
• Leadership Leverage: 60/100 (Above average - group average is ~58)

**Similar Archetypes:**
• Other ${archetype}s average 52/100 flow readiness
• You're slightly below your archetype average, suggesting room for growth

**Top Performers in Your Category:**
• Blair Lukan (${archetype}): 70/100 flow readiness
• Key difference: Strong recovery practices and consistent routines

**Areas Where You Excel:**
• Your leadership leverage (60/100) is above the group average
• Your mission clarity is exceptional
• Your team orientation is a strength

**Growth Opportunity:**
• Focus on the 25-point gap between you and top performers
• Implement the recovery practices that successful ${archetype}s use
• Your leadership potential is already strong - now optimize your personal flow state

Would you like specific strategies that top performers use?`;
  } else if (lastMessage.toLowerCase().includes('recommend') || lastMessage.toLowerCase().includes('suggest')) {
    response = `Based on your profile, ${currentClient}, here are my top recommendations:

**Immediate Actions (This Week):**
• **Sleep Experiment**: Try 7 hours of sleep for 3 days, note the difference in creativity
• **Recovery Block**: Schedule 30 minutes daily for play/relaxation activities
• **Flow Trigger**: Create a 5-minute pre-work ritual that signals flow state

**Short-term Goals (Next 30 Days):**
• Increase flow readiness from 45 to 55/100
• Establish consistent recovery routines
• Document your creative insights and flow experiences

**Medium-term Focus (Next 90 Days):**
• Optimize sleep to 7-8 hours consistently
• Develop flow trigger systems
• Model flow principles for your team

**Why These Recommendations:**
• Your archetype (${archetype}) thrives on creative flow states
• Your leadership leverage (60/100) shows you can inspire others
• Your mission clarity gives you direction for implementation

**Success Metrics:**
• Track sleep quality and duration
• Monitor creative output and flow state frequency
• Measure team engagement and flow adoption

Start with the sleep experiment - I predict you'll see immediate improvements in creativity and flow state access.`;
  } else if (lastMessage.toLowerCase().includes('archetype') || lastMessage.toLowerCase().includes('type')) {
    response = `Great question about your archetype! As a ${archetype}, you have unique characteristics:

**Your Archetype Profile:**
• **Natural Strengths**: Visionary thinking, mission clarity, inspiring others
• **Flow Style**: You thrive in creative, forward-thinking environments
• **Leadership Approach**: You lead through vision and inspiration

**How ${archetype}s Excel:**
• Creating compelling future visions
• Motivating teams toward big goals
• Seeing patterns and opportunities others miss
• Balancing innovation with execution

**Your Archetype's Flow Triggers:**
• **Creative Challenges**: Complex problems that require innovative thinking
• **Vision Work**: Time spent planning and imagining future possibilities
• **Team Collaboration**: Working with others to bring ideas to life
• **Mission Alignment**: Activities that connect to your larger purpose

**Growth Areas for ${archetype}s:**
• Building consistent daily routines
• Balancing vision with execution
• Managing energy and recovery
• Translating big ideas into actionable steps

**Your Specific Advantages:**
• Your mission alignment is exceptional (80/20 business/personal)
• Your leadership leverage shows you're already modeling flow principles
• Your team orientation leverages your archetype's natural strengths

**Archetype-Specific Recommendations:**
• Schedule "vision time" - dedicated periods for creative thinking
• Use your mission clarity to prioritize flow activities
• Leverage your team orientation to create flow-friendly environments

Your archetype is perfectly suited for your current mission and leadership role!`;
  } else {
    response = `Hello ${currentClient}! I'm your personalized Flow Mastermind AI assistant. 

**What I Know About You:**
• You're a ${archetype} with a focus on ${mission}
• Your current flow readiness is 45/100 (needs improvement)
• Your leadership leverage is 60/100 (showing promise)
• You excel at mission clarity and team collaboration

**How I Can Help:**
• Analyze your performance data and identify growth areas
• Compare you with other clients and archetypes
• Provide personalized recommendations for improvement
• Help you optimize your flow state and creativity
• Guide you in modeling flow principles for your team

**Try Asking Me:**
• "What are my areas for growth?"
• "How can I be more creative?"
• "How do I compare to other clients?"
• "What specific actions should I take?"

What would you like to explore about your performance and growth?`;
  }

  return {
    content: response,
    timestamp: new Date().toISOString()
  };
};


// OpenAI API integration
export const callOpenAI = async (messages, currentClientId) => {
  try {
    console.log('🔑 Attempting OpenAI API call...');
    console.log('🔑 API Key available:', !!process.env.REACT_APP_OPENAI_API_KEY);
    console.log('🔑 API Key length:', process.env.REACT_APP_OPENAI_API_KEY?.length || 0);
    
    // Enhanced system prompt for Alliance Mastermind AI Coach style
    const enhancedMessages = messages.map(msg => {
      if (msg.role === 'system') {
        return {
          ...msg,
          content: msg.content + '\n\nIMPORTANT: As the Alliance Mastermind AI Coach, be provocative, challenging, and future-focused. Use vivid metaphors and momentum language. Always push toward execution and next-level commitment. After your conversational answer, structure with Insight, Challenge, Tool/Practice, and Quote. Be intellectually rigorous but empowering.'
        };
      }
      return msg;
    });
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: enhancedMessages,
        max_tokens: 1000,
        temperature: 0.7,
        stream: false,
        presence_penalty: 0.1,
        frequency_penalty: 0.1
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('❌ OpenAI API error:', errorData);
      
      // Handle specific error types
      if (response.status === 401) {
        throw new Error('Invalid API key. Please check your OpenAI API key configuration.');
      } else if (response.status === 429) {
        throw new Error('Rate limit exceeded. Please wait a moment before trying again.');
      } else if (response.status === 500) {
        throw new Error('OpenAI service temporarily unavailable. Please try again later.');
      } else {
        throw new Error(`OpenAI API error: ${errorData.error?.message || 'Unknown error'}`);
      }
    }

    const data = await response.json();
    console.log('✅ OpenAI API success:', data.choices[0].message.content.substring(0, 100) + '...');
    
    // Add usage tracking
    if (data.usage) {
      console.log('📊 API Usage:', {
        prompt_tokens: data.usage.prompt_tokens,
        completion_tokens: data.usage.completion_tokens,
        total_tokens: data.usage.total_tokens
      });
    }
    
    return {
      content: data.choices[0].message.content,
      timestamp: new Date().toISOString(),
      model: data.model,
      usage: data.usage
    };
  } catch (error) {
    console.error('OpenAI API error:', error);
    
    // Provide more helpful error messages
    if (error.message.includes('API key')) {
      console.log('🔑 API Key issue detected. Please check your .env file.');
    } else if (error.message.includes('Rate limit')) {
      console.log('⏱️ Rate limit hit. Consider upgrading your OpenAI plan.');
    }
    
    // Fallback to mock API if OpenAI fails
    console.log('🔄 Falling back to mock API...');
    return await mockChatAPI(messages, currentClientId);
  }
};

// Export the function to use in the chatbot
export default mockChatAPI;
