// Mock API endpoint for development - replace with actual OpenAI API integration
export const mockChatAPI = async (messages, currentClientId) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

  const lastMessage = messages[messages.length - 1]?.content || '';
  const systemContext = messages[0]?.content || '';

  // Extract client data from system context - updated patterns to match actual context
  const nameMatch = systemContext.match(/Name: ([^\n]+)/);
  const currentClient = nameMatch ? nameMatch[1] : 'Unknown';
  
  const archetypeMatch = systemContext.match(/Creative Archetype: ([^\n]+)/);
  const archetype = archetypeMatch ? archetypeMatch[1] : 'Unknown';
  
  
  const missionMatch = systemContext.match(/Mission Statement: ([^\n]+)/);
  const mission = missionMatch ? missionMatch[1] : 'Unknown';
  
  const flowReadinessMatch = systemContext.match(/Flow Readiness Score: (\d+)/);
  const flowReadiness = flowReadinessMatch ? flowReadinessMatch[1] : 'Unknown';
  
  const leadershipMatch = systemContext.match(/Leadership Leverage Score: (\d+)/);
  const leadershipScore = leadershipMatch ? leadershipMatch[1] : 'Unknown';
  
  const strengthsMatch = systemContext.match(/Top Strengths: ([^\n]+)/);
  const topStrengths = strengthsMatch ? strengthsMatch[1] : 'Unknown';
  
  const risksMatch = systemContext.match(/Key Risks: ([^\n]+)/);
  const keyRisks = risksMatch ? risksMatch[1] : 'Unknown';

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
• **Type**: ${archetype}
• **Mission**: ${mission}
• **Flow Readiness**: ${flowReadiness}/100
• **Leadership Leverage**: ${leadershipScore}/100

**How ${archetype}s Excel:**
• Natural strengths in creative thinking and innovation
• Strong vision and mission alignment
• Ability to inspire and lead others
• High drive and motivation

**Your Archetype's Flow Triggers:**
• Creative problem-solving and ideation
• Vision work and strategic planning
• Team collaboration and leadership
• Mission-aligned projects

**Growth Areas for ${archetype}s:**
• Sleep and recovery optimization
• Consistent routine development
• Flow state maintenance
• Energy management

**Your Specific Advantages:**
• Your mission alignment is exceptional
• Your team orientation leverages your archetype's natural strengths
• Your drive and motivation are archetype-typical

**Archetype-Specific Recommendations:**
• Focus on recovery practices that support creative flow
• Build routines that honor your natural energy patterns
• Use your vision skills to inspire team flow states
• Balance creative work with structured execution

Your archetype is perfectly suited for your current mission and leadership role!`;
  } else if (lastMessage.toLowerCase().includes('toolkit')) {
    response = `${currentClient}, let me analyze your results through the Alliance Toolkit lens:

**Your Current Metrics:**
• Flow Readiness Score: ${flowReadiness}/100
• Leadership Leverage Score: ${leadershipScore}/100
• Creative Archetype: ${archetype}

**Toolkit Analysis for ${archetype}:**
Based on your scores and archetype, here's how the toolkit applies:

**RECOVERY TOOLS** (Your Flow Readiness: ${flowReadiness}/100):
${parseInt(flowReadiness) < 60 ? '⚠️ Priority Area - Your flow readiness needs attention. Focus on:' : '✅ Strong Area - Continue optimizing:'}
• Implement daily recovery rituals 
• Optimize sleep architecture for flow states
• Create clear boundaries between work and recovery

**CREATIVITY MICRO-DOSING** (Based on your archetype):
• As a ${archetype}, try 10-15 minute creative experiments daily
• Focus on idea generation without execution pressure
• Use movement-based creativity triggers

**Your Top Strengths:** ${topStrengths}
**Key Risks to Address:** ${keyRisks}

**Toolkit Recommendations:**
1. Start with recovery optimization if flow readiness is low
2. Use passion recipe exercises to align mission with daily actions
3. Implement flow triggers that match your archetype

What specific toolkit area would you like to dive deeper into?`;
  } else if (lastMessage.toLowerCase().includes('progress') || lastMessage.toLowerCase().includes('session')) {
    const hasTranscriptData = systemContext.includes('CONVERSATION HISTORY') || systemContext.includes('SESSION');
    response = `${currentClient}, here's your progress analysis:

**Recent Progress Indicators:**
• Mission Alignment: ${mission !== 'Unknown' ? 'Clearly defined and actively pursued' : 'Still developing'}
• Flow Readiness: ${flowReadiness}/100 ${parseInt(flowReadiness) >= 70 ? '(Strong progress!)' : parseInt(flowReadiness) >= 50 ? '(Steady improvement)' : '(Focus area for growth)'}
• Leadership Leverage: ${leadershipScore}/100

${hasTranscriptData ? '**Key Themes from Your Sessions:**\n• Breakthrough moments in creative practices\n• Challenges with consistency and structure\n• Growing clarity on mission alignment\n• Active work on flow optimization' : '**Progress Highlights:**\n• Consistent work on archetype development\n• Active engagement with flow principles\n• Mission refinement and execution focus'}

**Areas of Growth:**
${parseInt(flowReadiness) < 60 ? '• Flow readiness improvement through better recovery practices\n' : ''}${parseInt(leadershipScore) < 60 ? '• Leadership leverage through modeling flow principles\n' : ''}• Addressing key risks: ${keyRisks}

**Next Session Focus:**
• Continue building on your strengths: ${topStrengths}
• Implement specific toolkit strategies for ${archetype} types
• Create measurable progress markers

What specific area would you like to dive deeper into?`;
  } else if (lastMessage.toLowerCase().includes('transcript') || lastMessage.toLowerCase().includes('themes') || lastMessage.toLowerCase().includes('repeating')) {
    const hasSpecificTranscripts = systemContext.includes('CONVERSATION HISTORY') || systemContext.includes('TRANSCRIPT');
    response = `${currentClient}, analyzing patterns from your data:

${hasSpecificTranscripts ? '**Recurring Themes from Your Transcripts:**\n• Mission clarity vs. execution tension\n• Flow state optimization challenges\n• Leadership development through personal growth\n• Creative practice consistency issues\n• Recovery and energy management patterns' : '**Key Patterns in Your Profile:**\n• Strong alignment between archetype and mission\n• Consistent focus areas around flow optimization\n• Leadership development through modeling principles'}

**What Keeps Repeating:**
1. **Execution vs. Vision Gap** - You have clear vision but struggle with consistent daily implementation
2. **Recovery Inconsistency** - Flow states are achievable but not sustainable without better recovery
3. **Leadership Through Example** - Your growth directly impacts your ability to lead others

**Pattern Analysis:**
• Your ${archetype} nature drives you toward: ${mission}
• Your current challenge pattern: ${keyRisks}
• Your success pattern: ${topStrengths}

**Breakthrough Opportunities:**
• Address the execution gap through micro-dosing creativity
• Systematize recovery to stabilize flow access
• Use your strengths to model flow principles for others

Which pattern would you like to break through first?`;
  } else if (lastMessage.toLowerCase().includes('aligned') || lastMessage.toLowerCase().includes('mission') || lastMessage.toLowerCase().includes('actions')) {
    response = `${currentClient}, let's analyze your mission alignment:

**Mission Alignment Analysis:**
• Your Core Mission: ${mission}
• Current Alignment Score: Estimated ${Math.floor(65 + Math.random() * 20)}%

**Recent Actions Assessment:**
✅ **Well-Aligned Activities:**
• Daily practices supporting ${archetype} development
• Consistent work on flow readiness (currently ${flowReadiness}/100)
• Leadership activities that model your principles

⚠️ **Misalignment Patterns:**
• Activities that drain energy without advancing mission
• Reactive rather than intentional daily structure
• Focus on urgency over importance

**Your Strengths Supporting Mission:** ${topStrengths}
**Risks Threatening Alignment:** ${keyRisks}

**Mission Alignment Optimization:**
1. **Daily Audit:** Track time spent on mission-critical vs. reactive activities
2. **Energy Alignment:** Ensure high-energy time goes to mission work
3. **Boundary Creation:** Say no to opportunities that don't advance your core mission

**Action Recommendations:**
• Schedule 30 minutes weekly to review mission alignment
• Create clear criteria for saying "yes" vs "no" to opportunities
• Design your ideal day around mission-critical activities first

What specific area of misalignment should we address first?`;
  } else if (lastMessage.toLowerCase().includes('say no') || lastMessage.toLowerCase().includes('opportunities')) {
    response = `${currentClient}, here's your strategic "No" framework:

**Current Challenge:**
As a ${archetype}, you're naturally drawn to multiple opportunities, but this can dilute your mission focus.

**Opportunities to Decline:**
🚫 **High-Drain, Low-Mission Activities:**
• Networking events that don't connect to your core mission
• Projects that require significant time but don't build toward your goals
• "Favor" requests that don't leverage or develop your core strengths

🚫 **Energy Mismatches:**
• Late-night commitments that compromise recovery (your flow readiness is ${flowReadiness}/100)
• High-stimulation activities when you need creative space
• Reactive urgent tasks that prevent important mission work

**Your "Yes" Filter Questions:**
1. Does this directly advance: ${mission}?
2. Does this leverage my strengths: ${topStrengths}?
3. Will this energize or drain my ${archetype} nature?
4. Does this align with my flow optimization needs?

**Specific to Your Risks:** ${keyRisks}
• Say no to anything that amplifies these risk patterns
• Prioritize opportunities that strengthen your weak areas

**Your Power Statement:**
"I'm focused on ${mission}, and I've found that staying aligned with this creates the most value for everyone."

What specific opportunity are you considering that we should analyze?`;
  } else if (lastMessage.toLowerCase().includes('score update') || lastMessage.toLowerCase().includes('mission alignment score')) {
    const currentScore = Math.floor(65 + (parseInt(flowReadiness) + parseInt(leadershipScore)) / 10);
    response = `${currentClient}, here's your Mission Alignment Score update:

**Current Mission Alignment Score: ${currentScore}%**

**Score Breakdown:**
• Vision Clarity: 85% - You have strong thematic clarity around ${mission}
• Daily Execution: ${Math.floor(currentScore * 0.7)}% - Room for improvement in consistent daily actions
• Energy Alignment: ${flowReadiness}% - Matches your flow readiness score
• Resource Focus: ${Math.floor(currentScore * 0.8)}% - Getting better at resource allocation

**What's Driving Your Score:**
✅ **Strengths Contributing:** ${topStrengths}
⚠️ **Factors Lowering Score:** ${keyRisks}

**Score Trends:**
• Mission clarity is strong and stable
• Execution consistency needs daily structure improvements  
• ${archetype} alignment is naturally high
• Leadership leverage (${leadershipScore}/100) directly impacts your ability to scale mission impact

**To Improve Your Score:**
1. **Daily Mission Actions** - Spend first 90 minutes of day on mission-critical work
2. **Weekly Alignment Review** - Track % of time spent on mission vs. reactive tasks
3. **Energy Management** - Improve flow readiness to sustain mission focus
4. **Clear Boundaries** - Use "no" framework to maintain mission focus

**Target Score for Next Month:** ${currentScore + 10}%

What specific action will you take this week to move your score up?`;
  } else if (lastMessage.toLowerCase().includes('flow trigger') || lastMessage.toLowerCase().includes('strongest')) {
    response = `${currentClient}, analyzing your optimal flow triggers:

**Your Strongest Flow Triggers (Based on ${archetype}):**

🎯 **Primary Triggers:**
• **Challenge-Skill Balance**: Projects that stretch your expertise in ${mission} without overwhelming
• **Clear Goals**: Well-defined outcomes that align with your strengths: ${topStrengths}
• **Immediate Feedback**: Regular progress markers and results visibility

🧠 **Cognitive Triggers:**
• **Deep Focus Blocks**: 90-120 minute sessions on mission-critical work
• **Pattern Recognition**: Connecting your expertise to new applications
• **Creative Problem-Solving**: Using your ${archetype} nature to find novel solutions

⚡ **Environmental Triggers:**
• **Minimized Distractions**: Clean workspace, phone in another room
• **Energy Management**: Working during your peak energy hours
• **Recovery Boundaries**: Clear transitions between work and renewal

**Current Flow Readiness:** ${flowReadiness}/100
${parseInt(flowReadiness) < 60 ? 'Focus on optimizing recovery and energy management first' : 'You have good flow access - now optimize trigger consistency'}

**Personalized Flow Protocol:**
1. **Morning Setup**: Start with mission-aligned, high-challenge work
2. **Environment**: Optimize for your ${archetype} preferences
3. **Recovery**: Honor the balance between flow and renewal

**To Address Your Risks:** ${keyRisks}
• Build triggers that counteract these patterns
• Use your strengths as flow entry points

Which trigger feels most accessible for you to implement immediately?`;
  } else if (lastMessage.toLowerCase().includes('losing flow') || lastMessage.toLowerCase().includes('opportunities')) {
    response = `${currentClient}, here's where you're losing flow opportunities:

**Flow Killers in Your Current Pattern:**

🚫 **Structural Issues:**
• **Fragmented Time**: Too many small tasks interrupting deep work blocks
• **Reactive Mode**: Responding to urgent vs. important (affects your ${mission} focus)
• **Energy Mismanagement**: Using peak hours for low-value activities

🚫 **Mental Blocks:**
• **Perfectionism**: Waiting for ideal conditions instead of starting
• **Overwhelm**: Taking on too much without clear priorities
• **Context Switching**: Moving between different types of work too frequently

**Specific to Your Profile:**
• **${archetype} Challenges**: Your type tends to lose flow when [specific pattern]
• **Mission Misalignment**: Flow breaks when activities don't connect to ${mission}
• **Recovery Deficit**: Your ${flowReadiness}/100 flow readiness shows this pattern

**Your Risk Patterns:** ${keyRisks}
• These directly interrupt your flow states
• Address these to reclaim lost flow time

**Flow Recovery Strategy:**
1. **Time Blocking**: Protect 2-hour blocks for mission-critical work
2. **Boundary Setting**: Say no to flow-disrupting commitments
3. **Recovery Optimization**: Better rest = better flow access
4. **Trigger Consistency**: Use same cues to enter flow state

**Lost Flow Calculation:**
• You're likely losing 10-15 hours/week of potential flow time
• This translates to ~40% reduction in mission progress
• Recovery = 4-6 additional productive hours weekly

What's the biggest flow killer you want to eliminate first?`;
  } else if (lastMessage.toLowerCase().includes('recovery recommend') || lastMessage.toLowerCase().includes('recovery') || lastMessage.toLowerCase().includes('patterns')) {
    response = `${currentClient}, here are personalized recovery recommendations based on your patterns:

**Your Current Recovery Status:**
• Flow Readiness: ${flowReadiness}/100 ${parseInt(flowReadiness) < 60 ? '(Needs immediate attention)' : '(Good foundation to build on)'}
• Archetype: ${archetype} - Your type needs specific recovery approaches

**Recovery Patterns Analysis:**
• **Energy Cycles**: Your ${archetype} nature has predictable energy patterns
• **Stress Triggers**: ${keyRisks} - These deplete your recovery capacity
• **Strength-Based Recovery**: ${topStrengths} - Use these for natural restoration

**Personalized Recovery Protocol:**

🌅 **Daily Recovery Rituals:**
• **Morning**: 10-15 minutes of mindful movement or breathing
• **Midday**: 5-minute reset between high-focus sessions
• **Evening**: Wind-down routine that disconnects from work stimulation

⚡ **Energy Management:**
• **High-Energy Windows**: Reserve for mission-critical work (${mission})
• **Medium-Energy**: Administrative and planning tasks
• **Low-Energy**: Recovery, reflection, and light creative activities

🛌 **Sleep Architecture for Flow:**
• Target 7-9 hours based on your ${archetype} needs
• Create consistent sleep/wake times
• Optimize sleep environment for deep recovery

**Recovery Recommendations Specific to ${archetype}:**
• Your type recovers best through [specific activities]
• Avoid [specific recovery killers] that many ${archetype}s fall into
• Use your strengths (${topStrengths}) as recovery accelerators

**Weekly Recovery Audit:**
• Track energy levels vs. recovery investment
• Monitor flow access after good vs. poor recovery
• Adjust based on your patterns

What recovery area feels most urgent for you to address?`;
  } else if (lastMessage.toLowerCase().includes('toolkit area') || lastMessage.toLowerCase().includes('prioritize next') || lastMessage.toLowerCase().includes('which toolkit')) {
    const toolkitPriority = parseInt(flowReadiness) < 60 ? 'Recovery Tools' : parseInt(leadershipScore) < 60 ? 'Leadership Leverage' : 'Creativity Micro-dosing';
    response = `${currentClient}, based on your current metrics, here's your toolkit prioritization:

**Next Toolkit Priority: ${toolkitPriority}**

**Why This Priority:**
• Flow Readiness: ${flowReadiness}/100
• Leadership Leverage: ${leadershipScore}/100  
• Your ${archetype} nature and current mission phase

**${toolkitPriority} - Your Focus Area:**

${toolkitPriority === 'Recovery Tools' ? `**RECOVERY TOOLS** (Priority due to flow readiness ${flowReadiness}/100):
• **Sleep Optimization**: 7-9 hours with consistent schedule
• **Daily Reset Rituals**: 5-15 minute recovery breaks
• **Energy Management**: Align high-energy time with mission work
• **Boundary Creation**: Clear work/recovery transitions
• **Nervous System Regulation**: Breathing, movement, or meditation` : ''}

${toolkitPriority === 'Leadership Leverage' ? `**LEADERSHIP LEVERAGE** (Priority due to score ${leadershipScore}/100):
• **Modeling Flow Principles**: Demonstrate what you're learning
• **Team Flow Creation**: Design environments that support others' flow
• **Feedback Systems**: Create loops that help others optimize performance
• **Vision Communication**: Share your mission in ways that inspire action
• **Collaborative Flow**: Design group activities that elevate collective performance` : ''}

${toolkitPriority === 'Creativity Micro-dosing' ? `**CREATIVITY MICRO-DOSING** (Priority for optimization):
• **10-15 Minute Experiments**: Daily creative practice without outcome pressure
• **Idea Generation**: Regular brainstorming without immediate execution
• **Cross-Domain Thinking**: Connect your expertise to unexpected areas
• **Movement-Based Creativity**: Physical activity that sparks ideas
• **Constraint-Based Innovation**: Use limitations to drive creative solutions` : ''}

**Implementation Plan:**
Week 1-2: Master the foundational practice
Week 3-4: Integrate with your daily rhythm  
Week 5-6: Scale and optimize based on results

**Success Metrics:**
• Track daily consistency with chosen toolkit area
• Monitor impact on flow readiness and leadership leverage
• Measure mission alignment improvement

Ready to dive deep into ${toolkitPriority}?`;
  } else if (lastMessage.toLowerCase().includes('toolkit-based strategy') || lastMessage.toLowerCase().includes('biggest challenge')) {
    response = `${currentClient}, let's create a toolkit-based strategy for your biggest challenge:

**Your Biggest Challenge Analysis:**
Based on your profile: ${keyRisks}

**Root Challenge:** The gap between your vision (${mission}) and consistent daily execution.

**Toolkit Strategy Stack:**

🎯 **PASSION RECIPE** (Foundation):
• **Morning Mission Connection**: Start each day with 15 minutes connecting your planned activities to ${mission}
• **Energy-Mission Alignment**: Schedule high-energy time for mission-critical work
• **Progress Rituals**: Daily tracking of mission-aligned actions

⚡ **FLOW TRIGGERS** (Acceleration):
• **Challenge-Skill Balance**: Design work that stretches your expertise without overwhelming
• **Clear Goals**: Break mission into daily, achievable targets
• **Immediate Feedback**: Create systems to see progress in real-time

🔄 **RECOVERY TOOLS** (Sustainability):
• **Daily Reset**: 15-minute recovery ritual between intense work sessions
• **Weekly Review**: Assess what's working vs. what's draining energy
• **Boundary Protection**: Say no to activities that don't serve your mission

**Your ${archetype} Customization:**
• Leverage your natural ${topStrengths} as entry points to flow
• Design systems that counteract your risk patterns: ${keyRisks}
• Create accountability that matches your archetype preferences

**90-Day Implementation:**
Days 1-30: Master morning mission connection + daily reset ritual
Days 31-60: Add flow triggers and optimize work design
Days 61-90: Scale the system and model it for others

**Success Metrics:**
• Mission alignment score improvement
• Flow readiness increase from ${flowReadiness}/100
• Leadership leverage growth from ${leadershipScore}/100

Which part of this strategy feels most actionable for you to start immediately?`;
  } else if (lastMessage.toLowerCase().includes('most important action') || lastMessage.toLowerCase().includes('single') || lastMessage.toLowerCase().includes('this week')) {
    const priorityAction = parseInt(flowReadiness) < 50 ? 'Implement daily recovery ritual' : parseInt(leadershipScore) < 50 ? 'Model one flow principle for others' : 'Create mission-aligned morning routine';
    response = `${currentClient}, here's your single most important action this week:

**This Week's Priority Action: ${priorityAction}**

**Why This Action:**
• Your current flow readiness (${flowReadiness}/100) and leadership leverage (${leadershipScore}/100) indicate this is your highest-leverage starting point
• As a ${archetype}, this action aligns with your natural strengths
• This directly addresses your key risk: ${keyRisks}

**Specific Implementation:**

${priorityAction.includes('recovery') ? `**DAILY RECOVERY RITUAL:**
• **When**: Same time each day (recommend 4-6 PM energy dip)
• **Duration**: 15-20 minutes
• **Activities**: Choose 2-3 that restore your ${archetype} energy
• **Track**: Energy level before/after (1-10 scale)` : ''}

${priorityAction.includes('Model') ? `**MODEL ONE FLOW PRINCIPLE:**
• **Choose**: One flow practice you're developing
• **Share**: Explain to your team/family what you're learning
• **Demonstrate**: Show the practice in action
• **Invite**: Ask others to try it with you` : ''}

${priorityAction.includes('morning') ? `**MISSION-ALIGNED MORNING ROUTINE:**
• **Duration**: First 30-60 minutes of day
• **Connect**: Link today's priorities to ${mission}
• **Plan**: Choose 1-3 mission-critical actions
• **Begin**: Start with highest-energy work immediately` : ''}

**Daily Success Criteria:**
• Complete the action before noon
• Track consistency (7/7 days this week)
• Notice impact on energy and focus

**This Leads To:**
• Immediate improvement in flow readiness
• Foundation for larger changes
• Proof that small actions create momentum

**Your Accountability:**
Check in with yourself each evening: "Did I do my priority action today?"

Ready to commit to this one action for 7 days?`;
  } else if (lastMessage.toLowerCase().includes('7-day') || lastMessage.toLowerCase().includes('action plan') || lastMessage.toLowerCase().includes('weekly plan')) {
    response = `${currentClient}, here's your personalized 7-day action plan:

**7-DAY MISSION-ALIGNED ACTION PLAN**

**Foundation:** ${mission}
**Your Archetype:** ${archetype}
**Focus Areas:** Flow Readiness (${flowReadiness}/100) & Leadership Leverage (${leadershipScore}/100)

**DAILY STRUCTURE:**

🌅 **Morning (First 90 minutes):**
• 15 min: Mission connection - Why today's work matters
• 75 min: High-focus mission-critical work (your strongest energy)

⚡ **Midday (Peak performance window):**
• Tackle your most challenging task aligned with ${mission}
• Use your strengths: ${topStrengths}

🌅 **Evening (Recovery & reflection):**
• 15-20 min recovery ritual
• 5 min: What advanced my mission today?

**SPECIFIC DAILY ACTIONS:**

**Day 1-2: Foundation Building**
• Establish morning mission connection routine
• Identify your top 3 mission-critical activities
• Begin consistent recovery ritual

**Day 3-4: Flow Optimization**
• Design ideal work environment for flow
• Practice one flow trigger consistently
• Track energy patterns vs. productivity

**Day 5-6: Leadership Integration**
• Share one insight with your team/network
• Model a flow principle for others
• Get feedback on your approach

**Day 7: Integration & Planning**
• Review the week's mission alignment
• Plan next week based on what worked
• Celebrate progress and adjust strategy

**WEEKLY METRICS:**
• Mission alignment: Track % of time on mission-critical work
• Flow access: Rate flow state frequency (1-10)
• Energy management: Monitor energy vs. recovery balance
• Leadership impact: Note responses from modeling flow principles

**SUCCESS INDICATORS:**
• Completed morning routine 6/7 days
• 1+ hour daily of mission-critical deep work
• Consistent recovery ritual
• At least one leadership/modeling action

This plan addresses your risks (${keyRisks}) while building on your strengths (${topStrengths}).

Which day feels most challenging for you to execute?`;
  } else if (lastMessage.toLowerCase().includes('experiment') || lastMessage.toLowerCase().includes('validate') || lastMessage.toLowerCase().includes('direction')) {
    response = `${currentClient}, here's a strategic experiment to validate your direction:

**MISSION VALIDATION EXPERIMENT**

**Hypothesis:** Your current focus on ${mission} is the right direction for maximum impact and fulfillment.

**30-Day Experiment Design:**

📊 **Week 1: Baseline Data Collection**
• Track current time allocation (mission vs. other activities)
• Rate daily energy and satisfaction (1-10 scale)
• Document current challenge patterns

🧪 **Week 2-3: Mission Intensity Increase**
• Increase mission-aligned activities by 50%
• Reduce non-essential commitments
• Apply ${archetype} strengths directly to mission work
• Use toolkit strategies to optimize performance

📈 **Week 4: Results Analysis & Direction Decision**
• Compare energy, satisfaction, and results
• Analyze what aspects of the mission created most engagement
• Identify which activities to continue vs. modify

**Specific Experiment Parameters:**

**DAILY MEASUREMENTS:**
• Energy level (1-10): Morning, midday, evening
• Mission alignment: % of work time on mission-critical activities  
• Flow access: Minutes spent in deep focus/flow states
• Satisfaction: How fulfilled you felt with the day

**WEEKLY ASSESSMENTS:**
• Progress on mission-critical outcomes
• Feedback from others (if relevant to your mission)
• Personal fulfillment and sense of purpose
• Physical and mental well-being trends

**SUCCESS METRICS:**
• Sustained energy levels above 7/10
• 70%+ of work time on mission activities
• Increased flow state frequency
• Growing clarity about direction

**VALIDATION QUESTIONS:**
1. Does this work energize or drain you over time?
2. Are you getting results that matter to you?
3. Do others respond positively to your mission focus?
4. Does this align with your ${archetype} nature?

**DECISION FRAMEWORK:**
• Strong Yes (7+ metrics positive): Double down on current mission
• Mixed Results (4-6 metrics positive): Refine and adjust approach
• Clear No (0-3 metrics positive): Pivot to different mission focus

Ready to commit to this 30-day validation experiment?`;
  } else if (lastMessage.toLowerCase().includes('surprising patterns') || lastMessage.toLowerCase().includes('data')) {
    response = `${currentClient}, here are some surprising patterns I see in your data:

**UNEXPECTED PATTERN #1: The ${archetype} Paradox**
• Your archetype suggests you should thrive in [specific conditions]
• But your actual performance data shows you excel when [different pattern]
• **Hidden Insight**: You may be operating in a hybrid mode that's uniquely effective for you

**UNEXPECTED PATTERN #2: Mission-Energy Correlation**
• Most people assume mission alignment automatically increases energy
• Your data suggests: ${mission} energizes you ONLY when combined with specific conditions
• **Hidden Insight**: It's not just what you do, but HOW and WHEN you do it

**UNEXPECTED PATTERN #3: Recovery-Performance Inverse**
• Typical pattern: More recovery = better performance
• Your pattern: Your best performance comes after [specific type] of challenge, not rest
• **Hidden Insight**: You may need "active recovery" rather than passive rest

**COUNTERINTUITIVE STRENGTH:**
• Your listed risk (${keyRisks}) might actually be a strength in disguise
• When you [specific risk behavior], it creates [unexpected positive outcome]
• **Hidden Insight**: The key is channeling this risk into productive directions

**TIMING PATTERN:**
• Your flow readiness (${flowReadiness}/100) suggests specific optimal work windows
• But your mission work (${mission}) might require different timing than typical ${archetype} patterns
• **Hidden Insight**: You may need to customize standard archetype advice

**RELATIONSHIP PATTERN:**
• Your leadership leverage (${leadershipScore}/100) improves when you [specific behavior]
• This is opposite to what most ${archetype} types experience
• **Hidden Insight**: Your leadership style is more unique than typical templates

**MOST SURPRISING INSIGHT:**
The combination of your strengths (${topStrengths}) creates a unique capability that's rare in your field. Most people with your archetype focus on [typical path], but your data suggests you're designed for [unique approach].

**Strategic Implications:**
• Stop trying to fit standard ${archetype} templates
• Lean into your unique pattern combination
• Design systems that honor your specific rhythms

Which surprising pattern resonates most with your experience?`;
  } else if (lastMessage.toLowerCase().includes('three new perspectives') || lastMessage.toLowerCase().includes('perspectives') || lastMessage.toLowerCase().includes('challenge')) {
    response = `${currentClient}, here are three fresh perspectives on your current challenge:

**PERSPECTIVE 1: THE SYSTEMS VIEW**
Instead of seeing your challenge as a personal limitation, view it as a systems design problem.

• **Current Frame**: "I struggle with ${keyRisks}"
• **New Frame**: "My current system isn't optimized for my ${archetype} operating style"
• **Implication**: The solution isn't fixing yourself, it's designing better systems
• **Action**: Create environmental and process changes that make success automatic

**PERSPECTIVE 2: THE STRENGTHS LEVERAGE**
Your challenge might be the flip side of your greatest strength.

• **Current Frame**: Your risks (${keyRisks}) are problems to eliminate
• **New Frame**: These are overcorrections of your strengths (${topStrengths})
• **Implication**: Channel the underlying drive differently rather than suppressing it
• **Action**: Use the energy behind your "problems" as fuel for your mission

**PERSPECTIVE 3: THE FUTURE SELF VIEW**
Look at your challenge from the perspective of who you're becoming, not who you've been.

• **Current Frame**: Based on past patterns and current limitations
• **New Frame**: You're evolving into a ${archetype} leader in ${mission}
• **Implication**: Your current challenge is exactly what you need to develop next-level capabilities
• **Action**: Embrace the challenge as training for your future impact

**INTEGRATION QUESTIONS:**
1. **Systems**: What environmental change would make this 50% easier?
2. **Strengths**: How is this challenge connected to your greatest gift?
3. **Future**: What capability is this challenge developing in you?

**PERSPECTIVE SHIFT EXPERIMENT:**
For the next week, approach your challenge from each perspective on alternating days:
• Days 1,4,7: Systems design approach
• Days 2,5: Strengths leverage approach  
• Days 3,6: Future self development approach

**MOST RADICAL REFRAME:**
What if this isn't actually a challenge to solve, but a creative tension to leverage? Some of the most successful ${archetype} types maintain productive tension rather than resolving it.

Which perspective shift feels most liberating or energizing to you?`;
  } else if (lastMessage.toLowerCase().includes('story arc') || lastMessage.toLowerCase().includes('journey') || lastMessage.toLowerCase().includes('summarize')) {
    response = `${currentClient}, here's your Alliance Mastermind journey as a story arc:

**THE ${archetype} TRANSFORMATION STORY**

**ACT I: THE CALLING** 
*"The Structured World Begins to Crack"*

You entered this journey as a successful ${archetype}, excelling in your field but sensing something missing. The mission (${mission}) was calling, but unclear. Your strengths (${topStrengths}) had gotten you far, but you felt the pull toward something more aligned and impactful.

**ACT II: THE AWAKENING**
*"Tools, Insights, and Creative Disruption"*

Through the Alliance work, you've been developing your flow readiness (currently ${flowReadiness}/100) and leadership leverage (${leadershipScore}/100). You've encountered new tools for creativity, recovery, and mission alignment. The comfortable certainties have been disrupted - which is exactly what needed to happen.

**THE CRISIS POINT**
*"Resistance and Integration Challenges"*

Your key risks (${keyRisks}) have emerged as the real story. These aren't just obstacles - they're the exact patterns that need transformation for you to step into your next level of impact. This is where many ${archetype} types get stuck, but you're pushing through.

**ACT III: THE INTEGRATION** 
*"Becoming the Leader You're Designed to Be"*

You're in the process of integrating everything - using toolkit strategies to optimize performance, modeling flow principles for others, and aligning daily actions with your deeper mission. Your unique combination of strengths is becoming a force for transformation.

**THE TRANSFORMATION:**
From: Successful but seeking → To: Mission-aligned and flow-optimized leader
From: Individual contributor → To: Someone who elevates others through modeling
From: Following standard patterns → To: Creating your unique ${archetype} leadership style

**WHERE YOU ARE NOW:**
You're in the "messy middle" of transformation - past the comfortable old patterns, but not yet fully in the new rhythm. This is normal and necessary. The toolkit work and mission alignment are building your capacity.

**THE CLIMAX AHEAD:**
The story is building toward you fully embodying your mission (${mission}) while modeling flow principles for others. Your leadership leverage score suggests you're already beginning to impact others through your growth.

**YOUR HERO'S JOURNEY THEME:**
"The ${archetype} who discovered that true mastery isn't about personal perfection, but about creating conditions for collective flourishing."

**NEXT CHAPTER PREVIEW:**
The evidence suggests your next chapter involves scaling your impact - using your developed capabilities to elevate not just your own performance, but to create flow and alignment for others in your sphere of influence.

What part of your story arc resonates most strongly with your current experience?`;
  } else {
    response = `Hello ${currentClient}! I'm your Alliance Mastermind AI Coach.

**Your Current Profile:**
• Profile Type: [Profile Type]
• Mission: ${mission}
• Flow Readiness: ${flowReadiness}/100
• Leadership Leverage: ${leadershipScore}/100
• Strengths: ${topStrengths}
• Key Risks: ${keyRisks}

I have access to your detailed insights and can help you with:
• Analyzing your toolkit results and recommending next steps
• Reviewing transcript patterns and breakthrough moments
• Creating action plans aligned with your specific archetype
• Optimizing your flow states and creative practices

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
        model: 'gpt-4o',
        messages: enhancedMessages,
        max_tokens: 5000,
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
