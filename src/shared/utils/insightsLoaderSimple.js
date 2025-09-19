// Simplified insights loader to test if the complex data structure is causing issues

export const getAllClientInsights = () => {
  return {
    'Amity Cooper': {
      insights: [
        {
          id: 1,
          title: "Mission Clarity + MTP Focus",
          dataSignals: ["Clear MTP with emotional charge"],
          analyticsInsight: {
            strengths: ["MTP is well-formed"],
            risks: ["Too many simultaneous vectors"]
          },
          suggestedMetric: {
            name: "Mission Alignment Score",
            description: "Percentage of weekly actions serving MTP",
            estimate: "~60%"
          }
        }
      ],
      dashboardMetrics: {
        missionAlignment: 65,
        flowReadiness: 50,
        flowLeadership: 55
      }
    },
    'Jason Tadros': {
      insights: [
        {
          id: 1,
          title: "Mission Alignment + Execution Trajectory",
          dataSignals: [
            "Jason has moved from theory to execution: building a novel AI (attractor space-based rather than gradient descent) and applying for a DARPA grant",
            "Clear mission around transforming AI, mathematics, and potentially education/workforce reskilling",
            "Balancing this with practical realities (e.g., considering a high-level corporate role at Hasbro for financial stability)"
          ],
          analyticsInsight: {
            strengths: ["Strong alignment between mission and emerging execution (AI model + DARPA grant)"],
            risks: ["Torn between dream pursuit and practical obligations (corporate job may consume most time/energy)"]
          },
          suggestedMetric: {
            name: "Mission Alignment Score",
            description: "Percentage of weekly effort Jason reports advancing core AI/math innovation and reskilling vision",
            estimate: "~70% — clear mission, competing demands"
          }
        },
        {
          id: 2,
          title: "Flow Readiness & Structural Discipline",
          dataSignals: [
            "Clear intent to structure daily work: proposed 90-min AM work blocks, 4-hr weekend sessions, micro flow practices",
            "Challenges: balancing massive intellectual vision with need for small daily wins to build family trust/support",
            "Recognizes need for clear goal breakdown (e.g., 100-step plan)"
          ],
          analyticsInsight: {
            strengths: ["Excellent intellectual preparation + intent to structure for flow"],
            risks: ["Execution inconsistency, risk of burnout from dual commitments (job + dream)"]
          },
          suggestedMetric: {
            name: "Flow Readiness Index",
            description: "Composite of structured deep work blocks, recovery, micro-practices, visible progress",
            estimate: "~60% — strong framework, vulnerable to work-life overload"
          }
        },
        {
          id: 3,
          title: "Leadership Leverage + Visionary Potential",
          dataSignals: [
            "Vision: scale AI innovation to transform education, worker reskilling, early childhood learning",
            "Actively networking (e.g., defense contacts, quantum computing, singularity networks)",
            "Strong inclination toward building scalable systems rather than managing large teams himself"
          ],
          analyticsInsight: {
            strengths: ["High potential to lead paradigm-shifting innovation + collective flow projects"],
            risks: ["Needs early system prototypes + visible results to build external credibility + internal momentum"]
          },
          suggestedMetric: {
            name: "Flow Leadership Leverage Score",
            description: "Readiness to scale, inspire, and deliver impact at a systems level",
            estimate: "~70% — high potential, prototyping phase needed"
          }
        },
        {
          id: 4,
          title: "Tech Validation + Patent Acceleration",
          dataSignals: [
            "Algorithms validated across turbulence, EEG, and AI model training, matching or outperforming large labs",
            "GPU kernel optimization now achieves supercomputer-level performance on desktops",
            "Actively filing patents, DARPA challenge submitted, incubator application underway",
            "AWS partnership secured with credits and support"
          ],
          analyticsInsight: {
            strengths: ["Technical proof points + institutional recognition (DARPA, AWS) show Jason is moving beyond theory into defensible IP and real partnerships"],
            risks: ["Pace of breakthroughs outstripping ability to communicate them clearly or build the support structure (team, business scaffolding)"]
          },
          suggestedMetric: {
            name: "Patent & Partnership Milestone Index",
            description: "Percentage of planned patents filed + active institutional partnerships each quarter",
            estimate: "~70% — strong momentum, needs systematization of outputs"
          }
        },
        {
          id: 5,
          title: "Storytelling & Market Entry Strategy",
          dataSignals: [
            "Struggles to explain platform (information topology) but breakthrough when reframed as services (e.g., EEG acceleration, turbulence optimization)",
            "Feedback: build a 15–20 slide storytelling deck (headline + image + minimal text)",
            "Pivot discussions: avoid overregulated/long-cycle markets (medicine, defense) → focus on finance, data centers, HVAC, supercomputing waitlists",
            "Exploring Nvidia bundling/licensing strategy"
          ],
          analyticsInsight: {
            strengths: ["Clearer articulation of value proposition beginning to emerge"],
            risks: ["If narrative gap persists, Jason may stall at fundraising/talent onboarding"]
          },
          suggestedMetric: {
            name: "Story Clarity Score",
            description: "Percentage of external audiences (investors, partners) who can explain the platform in one sentence after a pitch",
            estimate: "~40% — still in early narrative formation"
          }
        },
        {
          id: 6,
          title: "Leadership Architecture + Scaling Challenge",
          dataSignals: [
            "Wife stepped back from CEO role → Jason now assembling team (trustworthy, technical, sales, CFO)",
            "Recognizes sales deck + salesperson as immediate need over CEO search",
            "Considering family connections (e.g., brother in HVAC for sales)",
            "Exploring part-time CFO to handle finance/funding"
          ],
          analyticsInsight: {
            strengths: ["Moving from \"solo inventor\" toward practical leadership scaffolding (sales + finance)"],
            risks: ["If team assembly lags behind technical advances, execution bottleneck will widen"]
          },
          suggestedMetric: {
            name: "Team Build Index",
            description: "Number of critical functions (Sales, CFO, Ops) filled and active",
            estimate: "~30% — roles identified, not yet filled"
          }
        },
        {
          id: 7,
          title: "Flow Practices & Resilience",
          dataSignals: [
            "Completed drawing/digital exercises → improved slow thinking and weekly reflection",
            "Still hasn't built \"shit to do when shit goes wrong\" list, but recognizes importance",
            "Balancing research sprints, setbacks (Python versioning), family time, and job interviews",
            "Desires advanced practices, feels slightly out of sync with group pace"
          ],
          analyticsInsight: {
            strengths: ["Reflection + slowing down emerging as resilience strategy"],
            risks: ["Without structured fallback routines, high-pressure pivots (DARPA, patents, Hasbro job) may trigger overload"]
          },
          suggestedMetric: {
            name: "Resilience Protocol Score",
            description: "Percentage of fallback tools documented + used during setbacks",
            estimate: "~35% — starting, but incomplete"
          }
        }
      ],
      dashboardMetrics: {
        missionAlignment: 70,
        flowReadiness: 60,
        flowLeadership: 70,
        patentPartnershipIndex: 70,
        storyClarityScore: 40,
        teamBuildIndex: 30,
        resilienceProtocolScore: 35
      },
      transcripts: {
        "6.9.25 SK 1 on 1 Jason Tadros Transcript": {
          type: "1-on-1 Coaching Session",
          date: "June 9, 2025",
          duration: "46 minutes",
          keyTopics: [
            "Business progress and technology development",
            "DARPA grant application and AI model training",
            "Team building and scaling challenges",
            "Storytelling and market entry strategy",
            "Flow practices and resilience protocols"
          ],
          summary: "Jason discusses significant progress in his AI research, including algorithms validated across multiple domains, DARPA grant application, and AWS partnership. Key challenges include storytelling clarity, team assembly, and balancing technical breakthroughs with business execution. The session focuses on creating a sales deck, identifying unregulated markets for quick entry, and building practical leadership scaffolding."
        },
        "Jason_30min Zoom Call": {
          type: "30-minute Zoom Call",
          date: "June 9",
          duration: "30 minutes",
          keyTopics: [
            "Technology development progress",
            "Business development challenges",
            "Strategic next steps",
            "Personal development and flow practices"
          ],
          summary: "Comprehensive discussion of Jason's technology development including turbulence data processing, AI model training, and GPU optimization. Focus on business development challenges, market entry strategies, and the need for clearer storytelling. Action items include creating a sales deck, identifying unregulated markets, and developing minimal viable products."
        },
        "Jason_WEBVTT": {
          type: "Video Transcript (WEBVTT)",
          date: "Recent",
          duration: "1 hour 14 minutes",
          keyTopics: [
            "AI and mathematics research",
            "Business strategy and execution",
            "Flow practices and personal development",
            "Team building and scaling",
            "Market entry and storytelling"
          ],
          summary: "Detailed transcript covering Jason's AI research breakthrough, including attractor space-based AI models, patent applications, and institutional partnerships. Extensive discussion of business strategy, team building challenges, and the need for better storytelling. Includes insights on flow practices, resilience protocols, and balancing technical innovation with practical execution."
        }
      }
    },
    'Anatoliy Otchkovskiy': {
      insights: [
        {
          id: 1,
          title: "Mission Alignment + System Vision",
          dataSignals: [
            "Clear vision for transforming organizational culture through group flow",
            "Strong systems thinking approach to business transformation",
            "Focus on acquisition-based business model with flow integration"
          ],
          analyticsInsight: {
            strengths: ["Clear mission alignment with business model"],
            risks: ["Risk of staying in theory phase without real-world testing"]
          },
          suggestedMetric: {
            name: "Mission Alignment Score",
            description: "Percentage of business activities aligned with group flow transformation mission",
            estimate: "~62%"
          }
        },
        {
          id: 2,
          title: "Flow Readiness + Energy Management",
          dataSignals: [
            "Inconsistent weekly energy cycles: strong Thursday-Friday, low Monday output",
            "Experimenting with steadier rhythm: light weekend work + structured Sunday prep",
            "Adopting strategies like reducing weekday overexertion and creating buffers"
          ],
          analyticsInsight: {
            strengths: ["High self-awareness and concrete fixes being applied"],
            risks: ["Fragile to disruptions, especially travel where routines collapse"]
          },
          suggestedMetric: {
            name: "Flow Readiness Index",
            description: "Composite of energy consistency, recovery practices, and routine stability",
            estimate: "~65%"
          }
        },
        {
          id: 3,
          title: "Leadership Leverage + Group Flow Vision",
          dataSignals: [
            "Strong vision for group flow as foundational to business model",
            "Exploring diagnostic tools for company culture assessment",
            "Interest in Syneurgy as real-time diagnostic + intervention platform"
          ],
          analyticsInsight: {
            strengths: ["Clear strategic alignment with group flow as differentiator"],
            risks: ["Needs to move from theory to pilot application with real companies"]
          },
          suggestedMetric: {
            name: "Flow Leadership Leverage Score",
            description: "Readiness to scale group flow practices in organizational settings",
            estimate: "~63%"
          }
        },
        {
          id: 4,
          title: "Energy Regulation + Consistency Upgrade",
          dataSignals: [
            "Identified biggest issue as inconsistent weekly energy cycles: strong Thursday–Friday, but low output on Mondays after unplugging on weekends",
            "Now experimenting with steadier rhythm: light work (1–1.5 hrs) on weekends plus structured Sunday prep to avoid the 'Monday rebuild'",
            "Adopted strategies like reducing weekday overexertion, creating buffers, and spreading workload more evenly"
          ],
          analyticsInsight: {
            strengths: ["Shows significant self-awareness and is applying concrete fixes (weekend buffer work, Sunday planning)"],
            risks: ["Still fragile to disruptions (e.g., travel) where routines collapse. Needs travel rituals and micro-resets to sustain flow"]
          },
          suggestedMetric: {
            name: "Consistency Index",
            description: "% of weeks where energy remains stable across Monday–Friday",
            estimate: "~65% — improvement from ~55%, but still variable"
          }
        },
        {
          id: 5,
          title: "Creativity Microdosing as a Flow Tool",
          dataSignals: [
            "Using short creative breaks (music app jamming, business communication styled like 90s print ads) as 'microdoses' between tasks",
            "Finds these recharges clear mental RAM and increase readiness for the next block",
            "Inspired by immersive group music experience — reinforces his belief in creative play as a gateway to group flow"
          ],
          analyticsInsight: {
            strengths: ["Highly innovative use of micro-rituals to maintain flow. Aligns with his broader mission of embedding creativity into organizational culture"],
            risks: ["Microdosing may drift into distraction if not consistently bounded in time. Needs to measure whether it improves task completion rates"]
          },
          suggestedMetric: {
            name: "Microdose Flow Gain",
            description: "% of task blocks following micro-breaks completed at/above planned productivity",
            estimate: "~70% — strong potential, early stage"
          }
        },
        {
          id: 6,
          title: "Group Flow Integration + Business Model Testing",
          dataSignals: [
            "Focused heavily on group flow this month; sees it as foundational to his business model",
            "Exploring diagnostic tools to assess baseline company culture pre-acquisition; interested in Syneurgy as a real-time diagnostic + intervention platform",
            "Recognizes current lack of standard tools, considering custom diagnostics tailored to acquisition targets"
          ],
          analyticsInsight: {
            strengths: ["Clear strategic alignment: group flow = differentiator for his transformation system"],
            risks: ["Needs to move from theory/research to pilot application with at least one real company acquisition or trial"]
          },
          suggestedMetric: {
            name: "Group Flow Integration Score",
            description: "% of business model components tested in live environments (diagnostics, Syneurgy, practices)",
            estimate: "~45% — strong intellectual foundation, limited real-world deployment so far"
          }
        }
      ],
      dashboardMetrics: {
        missionAlignment: 62,
        flowReadiness: 65,
        flowLeadership: 63,
        consistencyIndex: 65,
        microdoseFlowGain: 70,
        groupFlowIntegrationScore: 45
      },
      transcripts: {
        "6.10.25 SK 1 on 1 Anatoliy O. Transcript": {
          type: "1-on-1 Coaching Session",
          date: "June 10, 2025",
          duration: "60 minutes",
          keyTopics: ["Flow triggers", "Drawing practice", "Educational program development", "Business strategy", "Deep work sessions"],
          summary: "Detailed coaching session covering flow triggers, drawing practice effectiveness, educational program development, and business strategy. Key insights: 10 minutes of drawing erases 2-3 hours of stress, implementing structured deep work sessions, developing curriculum for company transformation, and building acquisition strategy for legacy companies."
        },
        "8.25.25 SK 1 on 1 Anatoliy O. Transcript": {
          type: "1-on-1 Coaching Session",
          date: "August 25, 2025",
          duration: "60 minutes",
          keyTopics: ["Energy regulation", "Consistency challenges", "Group flow integration", "Weekend buffer work", "Creativity microdosing"],
          summary: "Follow-up session discussing energy regulation, consistency challenges, and group flow integration. Major themes: addressing Monday productivity crashes, implementing weekend buffer work, using creativity microdosing between tasks, and exploring Syneurgy platform for real-time group flow diagnostics."
        },
        "Anatoly_30min Zoom Call": {
          type: "Progress Review Call",
          date: "June 10, 2025",
          duration: "30 minutes",
          keyTopics: ["Flow triggers progress", "Educational program", "Productivity strategies", "Creative music experience"],
          summary: "Summary of June 10 session covering progress on flow triggers, educational program development, and personal productivity strategies. Highlights drawing as effective reset tool, structured deep work implementation, and upcoming creative music experience."
        },
        "Anatoly_WEBVTT": {
          type: "Coaching Session Transcript",
          date: "Multiple sessions",
          duration: "Various",
          keyTopics: ["Business model development", "Consistency challenges", "Group flow research", "Acquisition strategy", "Energy regulation"],
          summary: "Detailed transcript of coaching session covering business model development, consistency challenges, and group flow research. Key discussions: acquisition strategy for legacy companies, energy regulation solutions, creativity microdosing techniques, and integration of flow practices into business transformation model."
        }
      }
    },
    'Michael Whitaker': {
      insights: [
        {
          id: 1,
          title: "Mission Clarity + AI Focus",
          dataSignals: [
            "Clear mission around protecting human creativity in the age of AI",
            "Strong focus on AI-human collaboration and innovation",
            "Creative vision with practical application mindset"
          ],
          analyticsInsight: {
            strengths: ["Clear mission alignment", "AI expertise", "Innovation mindset"],
            risks: ["Work-life balance challenges", "Focus diffusion", "Recovery practices"]
          },
          suggestedMetric: {
            name: "Mission Alignment Score",
            description: "Percentage of activities aligned with AI-human creativity mission",
            estimate: "~60%"
          }
        },
        {
          id: 2,
          title: "Flow Readiness + Creative Practices",
          dataSignals: [
            "Building creative routines and practices",
            "Working on flow state access and maintenance",
            "Developing recovery and energy management strategies"
          ],
          analyticsInsight: {
            strengths: ["Creative vision", "Innovation mindset"],
            risks: ["Focus challenges", "Recovery practices", "Work-life balance"]
          },
          suggestedMetric: {
            name: "Flow Readiness Score",
            description: "Consistency of flow state access and creative practices",
            estimate: "~50%"
          }
        },
        {
          id: 3,
          title: "Leadership Leverage + Innovation",
          dataSignals: [
            "Strong AI expertise and innovation mindset",
            "Community building and creative vision",
            "Entrepreneurial energy with practical application"
          ],
          analyticsInsight: {
            strengths: ["AI expertise", "Innovation mindset", "Entrepreneurial energy"],
            risks: ["Focus diffusion", "Travel disruptions", "Planning fatigue"]
          },
          suggestedMetric: {
            name: "Flow Leadership Leverage",
            description: "Ability to scale AI-human creativity innovations",
            estimate: "~55%"
          }
        },
        {
          id: 4,
          title: "Mission Alignment + Strategic Positioning",
          dataSignals: [
            "Sharpened mission from general 'protecting human creativity in the age of AI' to specific wedge: helping parents, schools, and communities navigate AI's role in children's education and development",
            "Launched Navigating AI Transitions with Wit (Substack), grown subscribers into the hundreds, gained organic traction (including reposts by larger AI newsletters)",
            "Engaged school boards and local communities, consciously avoiding alarmism and clickbait, instead taking a pragmatic, solution-driven tone",
            "Began experimenting with earned media, public comment, and op-eds"
          ],
          analyticsInsight: {
            strengths: ["Clearer and more grounded thematic focus with visible early traction and a distinct 'parent–school AI' niche"],
            risks: ["Still early stage; growth is fragile and visibility is tied to his personal energy. Needs to anchor into institutional partnerships and differentiators (e.g., original research, surveys, or parent guides)"]
          },
          suggestedMetric: {
            name: "Mission Alignment Score",
            description: "% of activities that directly grow his AI/parenting platform (newsletter, school engagement, earned media)",
            estimate: "70% — stronger focus, building credibility, needs more systematization"
          }
        },
        {
          id: 5,
          title: "Flow Readiness + Platform Stability",
          dataSignals: [
            "Built steady routines: daily morning writing, creative practices (drawing, sketching), Vipassana resets, and mountain biking for recovery",
            "Reports strong energy and enjoyment from writing, with the mantra 'just paddle' keeping him in movement rather than paralysis",
            "Intentionally balances exploration with family/work stability (keeping his job while building his platform on nights, weekends, and unstructured time)"
          ],
          analyticsInsight: {
            strengths: ["Morning creative blocks and pragmatic pacing are producing sustained momentum without burnout"],
            risks: ["Growth periods are followed by plateaus. Needs a proactive plan for when momentum slows (habit anchors, feedback partners, fallback routines)"]
          },
          suggestedMetric: {
            name: "Flow Readiness Index",
            description: "Adherence to creative mornings, recovery practices, and proactive plateau planning",
            estimate: "75% — strong discipline, but still vulnerable to dips when external demands rise"
          }
        },
        {
          id: 6,
          title: "Leadership Leverage + Invisible Skills",
          dataSignals: [
            "Unique edge emerging: the ability to synthesize complex systems (business, AI, parenting, policy) into pragmatic frameworks",
            "Steven called out this 'invisible skill' as analogous to seeing lines down a mountain no one else sees",
            "Beginning to bring this into AI/parenting but hasn't fully integrated it yet",
            "Networking upward (educators, thought leaders, Substack peers) and positioning for future speaking (TEDx, paid talks)",
            "Early steps toward differentiation include creating simplified AI school policy guides and proposing frameworks that schools can use"
          ],
          analyticsInsight: {
            strengths: ["Strong leverage point in combining systems-thinking with pragmatic parent-school tools"],
            risks: ["Needs to showcase original intellectual contributions (not just reframes) to establish credibility beyond 'commentator' and avoid being seen as a marketer"]
          },
          suggestedMetric: {
            name: "Flow Leadership Leverage Score",
            description: "Readiness to integrate invisible skills + unique frameworks into public voice (talks, op-eds, research, guides)",
            estimate: "70% — growing reputation, credibility hinges on original contributions"
          }
        }
      ],
      dashboardMetrics: {
        missionAlignment: 70,
        flowReadiness: 75,
        flowLeadership: 70
      }
    },
    'Geoffrey Garth': {
      insights: [
        {
          id: 1,
          title: "Mission Alignment + Purpose Discovery",
          dataSignals: [
            "Clear mission around hands-on invention and practical creativity",
            "Strong focus on workshop-based innovation and technical expertise",
            "Creative vision with practical application mindset"
          ],
          analyticsInsight: {
            strengths: ["Hands-on innovation", "Practical creativity", "Technical expertise"],
            risks: ["Focus distribution", "Recovery practices", "Execution consistency"]
          },
          suggestedMetric: {
            name: "Mission Alignment Score",
            description: "Percentage of activities aligned with hands-on invention mission",
            estimate: "~60%"
          }
        },
        {
          id: 2,
          title: "Flow Readiness + Workshop Practices",
          dataSignals: [
            "Strong flow states in workshop and hands-on activities",
            "Technical expertise and practical creativity",
            "Recovery practices and execution consistency"
          ],
          analyticsInsight: {
            strengths: ["Workshop flow states", "Technical skills", "Practical creativity"],
            risks: ["Focus distribution", "Recovery consistency", "Execution follow-through"]
          },
          suggestedMetric: {
            name: "Flow Readiness Score",
            description: "Consistency of flow states in workshop and hands-on activities",
            estimate: "~55%"
          }
        },
        {
          id: 3,
          title: "Leadership Leverage + Team Vision",
          dataSignals: [
            "Leadership in technical innovation and team vision",
            "Practical creativity and hands-on expertise",
            "Recovery discipline and execution consistency"
          ],
          analyticsInsight: {
            strengths: ["Technical leadership", "Team vision", "Practical expertise"],
            risks: ["Overcommitment", "Novelty-seeking", "Execution dilution"]
          },
          suggestedMetric: {
            name: "Leadership Leverage Score",
            description: "Effectiveness in leading technical innovation and team development",
            estimate: "~60%"
          }
        },
        {
          id: 4,
          title: "Mission Alignment + Sampling Period",
          dataSignals: [
            "Geof still struggles to name a single massively transformative purpose, but has leaned into the idea that purpose may show up through hands-on projects in the shop",
            "He feels satisfaction restoring paddles, tinkering with new fly designs, and even remodeling the cottage",
            "These activities reliably bring him flow",
            "He has also recognized that political obsessions (e.g., Trump) can drain curiosity and paralyze creative thought"
          ],
          analyticsInsight: {
            strengths: ["Purpose may not be abstract—it may emerge through experimentation and intersection of shop-based curiosities"],
            risks: ["Risk: framing lack of one big \"MTP\" as failure → may undercut his satisfaction and momentum"]
          },
          suggestedMetric: {
            name: "Mission Progress Score",
            description: "Track number of shop projects per month that combine curiosity + values (e.g., environmental, creative, educational)",
            estimate: "~65%"
          }
        },
        {
          id: 5,
          title: "Flow Readiness & Recovery Routines",
          dataSignals: [
            "Geof consistently enters flow in his workshop and while fishing—especially in solitary, repetitive activities like casting or shaping foam for flies",
            "Meditation practice (Vipassana, Sam Harris app) was strong, but has weakened due to travel and new relationship rhythms",
            "He acknowledged shop time itself is a reliable flow gateway",
            "Travel and irregular routines make regulation harder"
          ],
          analyticsInsight: {
            strengths: ["Shop + fishing are high-probability flow triggers"],
            risks: ["Needs a lightweight travel protocol (mini Vipassana, fishing analogs, journaling) to stabilize creativity across contexts"]
          },
          suggestedMetric: {
            name: "Flow Stability Index",
            description: "Number of days per week he reports consistent access to flow via shop/fishing/meditation, even while traveling",
            estimate: "~70%"
          }
        },
        {
          id: 6,
          title: "Collaborative Engagement + Group Value",
          dataSignals: [
            "Geof finds the conversations with others in the Alliance most rewarding",
            "He proposed low-friction continuity: book club (via Audible), group calls, and periodic gatherings",
            "He feels reassured that his presence has been meaningful for others",
            "He wants ongoing interaction, but with minimal overhead—he values shared ideas and perspectives more than structured feedback systems"
          ],
          analyticsInsight: {
            strengths: ["Strong social capital within group; others cite him as memorable and impactful"],
            risks: ["Risk: group disbands with no continuity → lost engagement and sense of contribution"]
          },
          suggestedMetric: {
            name: "Connection Leverage Score",
            description: "Participation in group continuations (book club, digital calls, live events)",
            estimate: "~75%"
          }
        }
      ],
      dashboardMetrics: {
        missionProgressScore: 65,
        flowStabilityIndex: 70,
        connectionLeverageScore: 75,
        topStrengths: ["Workshop tinkering", "Fishing flow", "Group presence"],
        keyRisks: ["Overweighting \"MTP\"", "Travel dysregulation", "Risk of group dissolution"],
        nextAction: "Set up 3–4 parallel shop projects as \"curiosity experiments\"; adopt light travel ritual; join post-Alliance book club"
      }
    },
    'Bruce Bowser': {
      insights: [
        {
          id: 1,
          title: "Mission Alignment + Pet & Healthcare Innovation",
          dataSignals: [
            "Bruce is now fully immersed in the pet space, pushing forward on multiple fronts: subscription vet clinics (10 already built/open), oral health device, and pet-friendly housing design with engineers and builders",
            "He's actively applying the creative process framework (prep → incubation → illumination → verification), blending brainstorming, incubation, and microdosing",
            "He's also extending innovation into human healthcare (orthopedic centers, colonoscopy clinics), showing a pattern of cross-pollinating pet + human medical innovation"
          ],
          analyticsInsight: {
            strengths: ["Strong momentum: Bruce has transitioned from idea to structured incubation cycles, testing with real partners and industry experts"],
            risks: ["Running multiple innovation tracks (vet clinics, pet housing, pharma, human healthcare) could overload execution unless sequenced carefully"]
          },
          suggestedMetric: {
            name: "Mission Alignment Score",
            description: "% of effort advancing priority vet + healthcare innovations (clinics, housing, oral health)",
            estimate: "~70% — stronger alignment, but breadth of pursuits still creates dilution risk"
          }
        },
        {
          id: 2,
          title: "Flow Readiness & Recovery Calibration",
          dataSignals: [
            "Bruce reports being \"jacked up\" with excitement from projects, struggling to wind down",
            "Morning routines are strong (sauna, meditation, cold plunge). He's now experimenting with using sauna + Vipassana post-flow to downshift and manage dopamine/norepinephrine spikes",
            "Using guitar, walks, humor, and sketching as microdosing tools",
            "Recognizing that overstimulation from fun/creative work can tilt toward burnout without planned recovery"
          ],
          analyticsInsight: {
            strengths: ["High flow capacity and strong creative energy"],
            risks: ["Needs to systematize recovery: shifting sauna to evening, adding reading/food/TV wind-downs, and building \"dopamine flush\" routines (exercise bursts, meditation)"]
          },
          suggestedMetric: {
            name: "Flow Recovery Index",
            description: "Balance of flow entry + deliberate recovery practices",
            estimate: "~65% — recovery tools identified, consistency still forming"
          }
        },
        {
          id: 3,
          title: "Leadership Leverage + Creative Confidence",
          dataSignals: [
            "Bruce has delegated operations (new president hire) and freed himself for visioning/innovation",
            "Actively testing leadership in creative incubation cycles (whiteboarding, external feedback, 100-step plans)",
            "Moving from seeing himself as an operator to embracing creative leadership identity — reinforced by peers recognizing him as one of the group's strongest creative leaders",
            "Extending leadership to challenge medical experts (orthopedic surgeons vs. gastroenterologists), learning how to elevate rooms out of analysis paralysis and into innovation"
          ],
          analyticsInsight: {
            strengths: ["Creative leadership breakthrough: Bruce is now owning his role as a visionary + innovator, not just a business operator"],
            risks: ["Needs to sustain momentum by tightening feedback loops and pacing incubation cycles (24–48h vs. 60–90d, depending on project)"]
          },
          suggestedMetric: {
            name: "Creative Leadership Leverage Score",
            description: "Effectiveness in moving teams/experts from rigid expertise into generative innovation",
            estimate: "~75% — high trust, rising confidence, sharpening incubation + feedback systems"
          }
        }
      ],
      dashboardMetrics: {
        missionAlignment: 70,
        flowReadiness: 60,
        flowLeadership: 75,
        flowRecoveryIndex: 65,
        creativeLeadershipLeverage: 75,
        innovationSequencingScore: 60
      },
      summary: {
        topStrengths: ["Creative leadership breakthrough", "Bold innovation across pet + healthcare", "Cross-industry vision and application", "Strong creative process framework", "High flow capacity and energy"],
        keyRisks: ["Dilution across multiple innovation tracks", "Recovery inconsistency and over-excitement", "Risk of burnout from high stimulation", "Need to systematize recovery practices", "Sequencing multiple projects carefully"],
        nextAction: "Systematize recovery (evening sauna + wind-down), sequence innovations, tighten feedback loops"
      }
    },
    'Rick Watkin': {
      insights: [
        {
          id: 1,
          title: "Mission Clarity + Vision Integration",
          dataSignals: [
            "Clear mission focus with strong visionary perspective",
            "High drive and motivation toward business and personal goals",
            "Team-oriented approach with natural leadership tendencies"
          ],
          analyticsInsight: {
            strengths: ["Clear mission provides strong direction and focus", "High drive creates consistent momentum", "Team orientation enables collaborative leadership"],
            risks: ["Sleep deficit undermining performance and decision-making", "Low recovery/play creating burnout risk", "High drive without adequate rest unsustainable long-term"]
          },
          suggestedMetric: {
            name: "Sustainable Drive Score",
            description: "High performance maintained through proper recovery balance",
            estimate: "~50% — strong drive but needs recovery optimization for sustainability"
          }
        },
        {
          id: 2,
          title: "Flow Readiness + Recovery Optimization",
          dataSignals: [
            "Flow readiness limited by sleep deficit and recovery gaps",
            "High drive creating push without adequate pull-back",
            "Mission clarity strong but energy management needs attention"
          ],
          analyticsInsight: {
            strengths: ["Clear mission provides flow direction", "High drive enables deep engagement when rested", "Team focus creates accountability and energy"],
            risks: ["Sleep deficit directly impacting flow access", "Low recovery preventing sustainable high performance", "Drive without recovery creating diminishing returns"]
          },
          suggestedMetric: {
            name: "Recovery-Performance Balance",
            description: "Flow readiness supported by consistent recovery practices",
            estimate: "~45% — immediate need for sleep and recovery optimization"
          }
        },
        {
          id: 3,
          title: "Leadership Leverage + Team Impact",
          dataSignals: [
            "Team-oriented leadership style with collaborative approach",
            "Visionary perspective helps others see bigger picture",
            "High drive models commitment and dedication for team"
          ],
          analyticsInsight: {
            strengths: ["Team orientation creates inclusive leadership style", "Clear mission helps align others toward common goals", "High drive demonstrates commitment and inspires others"],
            risks: ["Sleep deficit may affect leadership presence and decision quality", "Lack of recovery modeling unsustainable patterns for team", "High drive without boundaries may create team pressure"]
          },
          suggestedMetric: {
            name: "Sustainable Leadership Impact",
            description: "Consistent positive influence on team through balanced high performance",
            estimate: "~60% — good leadership foundation, needs recovery modeling for team"
          }
        }
      ],
      dashboardMetrics: {
        missionAlignment: 70,
        flowReadiness: 45,
        flowLeadership: 60
      },
      summary: {
        topStrengths: ["Clear mission vision that provides direction and focus", "High drive and motivation that creates momentum", "Team-oriented leadership style that includes others", "Visionary perspective that helps others see possibilities", "Collaborative approach that builds alignment"],
        keyRisks: ["Sleep deficit undermining cognitive performance and decision-making", "Low recovery/play creating burnout and sustainability issues", "High drive without boundaries leading to team pressure", "Mission focus without energy management reducing effectiveness", "Leadership impact limited by personal energy depletion"],
        nextAction: "Implement consistent sleep schedule (7-8 hours), add daily recovery ritual, design sustainable high-performance rhythm"
      }
    },
    'Rob Finlay': {
      insights: [
        {
          id: 1,
          title: "Mission Alignment + Project Portfolio Focus",
          dataSignals: [
            "Rob manages multiple entrepreneurial projects with creative vision",
            "Strong community building abilities with entrepreneurial energy",
            "Balancing various business initiatives and creative pursuits"
          ],
          analyticsInsight: {
            strengths: ["Entrepreneurial energy drives multiple opportunities", "Natural community builder creates valuable networks", "Creative vision enables innovative approaches"],
            risks: ["Focus diffusion across too many projects", "Travel disruptions affect consistency", "Planning fatigue from juggling multiple initiatives"]
          },
          suggestedMetric: {
            name: "Project Focus Score",
            description: "% of energy going to top 3 highest-impact projects vs. scattered across many",
            estimate: "~60% — entrepreneurial drive creating opportunities, needs focus prioritization"
          }
        },
        {
          id: 2,
          title: "Flow Readiness & Consistency Management",
          dataSignals: [
            "Flow readiness challenged by travel disruptions and multiple project demands",
            "Entrepreneurial energy creates momentum but can lead to burnout patterns",
            "Planning fatigue affects ability to maintain consistent systems"
          ],
          analyticsInsight: {
            strengths: ["High energy and drive when focused", "Creative vision enables flow state access", "Community connections provide energy and feedback"],
            risks: ["Travel disrupts recovery and flow routines", "Focus diffusion prevents deep flow states", "Planning fatigue creates inconsistent execution"]
          },
          suggestedMetric: {
            name: "Flow Consistency Index",
            description: "Consistent access to flow states despite travel and multiple projects",
            estimate: "~55% — good energy but needs better systems for consistency"
          }
        },
        {
          id: 3,
          title: "Leadership Leverage + Community Impact",
          dataSignals: [
            "Natural community builder with ability to inspire and connect others",
            "Entrepreneurial energy creates opportunities for others",
            "Creative vision helps others see new possibilities"
          ],
          analyticsInsight: {
            strengths: ["Community building creates natural leadership platform", "Entrepreneurial experience provides valuable mentorship", "Creative vision inspires innovative thinking in others"],
            risks: ["Focus diffusion reduces depth of impact", "Travel affects consistent community engagement", "Multiple projects may dilute leadership presence"]
          },
          suggestedMetric: {
            name: "Community Leadership Score",
            description: "Consistent positive impact on community members through focused leadership",
            estimate: "~65% — strong natural ability, needs focus to maximize impact"
          }
        }
      ],
      dashboardMetrics: {
        missionAlignment: 60,
        flowReadiness: 55,
        flowLeadership: 65
      },
      summary: {
        topStrengths: ["Entrepreneurial energy that creates opportunities", "Natural community building and networking abilities", "Creative vision that inspires innovative approaches", "High drive and motivation", "Ability to see potential in multiple areas"],
        keyRisks: ["Focus diffusion across too many projects reducing depth", "Travel disruptions affecting consistency and routines", "Planning fatigue from juggling multiple initiatives", "Risk of burnout from high-energy, scattered approach", "Difficulty prioritizing among many opportunities"],
        nextAction: "Focus on top 3 highest-impact projects, create travel-friendly routines, implement weekly planning rhythm to reduce fatigue"
      }
    },
    'Sandra Ozols': {
      insights: [
        {
          id: 1,
          title: "Mission Alignment + Next Chapter Design",
          dataSignals: [
            "Sandra's mission: transition from a structured corporate identity to a more creative, fluid, self-directed chapter",
            "Exploring consulting/advisory paths, possibly launching her own firm, or joining a fund if values align",
            "Seeks to blend accumulated expertise (human capital, org design, talent management) with a renewed sense of purpose and joy"
          ],
          analyticsInsight: {
            strengths: ["Strong thematic clarity: helping leaders and organizations cross to higher performance levels through talent and culture design"],
            risks: ["Overwhelm from too many potential pathways, difficulty mapping actions to this emerging mission"]
          },
          suggestedMetric: {
            name: "Mission Alignment Score",
            description: "% of effort advancing design + testing of new career models (advisory, consulting, fund roles)",
            estimate: "~65% — mission clarity emerging, execution gaining focus"
          }
        },
        {
          id: 2,
          title: "Flow Readiness & Chaos Management",
          dataSignals: [
            "Embracing daily practices: meditation, writing, drawing, reading; committed to primary flow activity (e.g., boxing, kickboxing)",
            "Feels discomfort with 'nothingness' post-corporate structure, leading to bouts of chaos and uncertainty",
            "Actively seeking to build a clear goals list and 100-step roadmap to tame the chaos"
          ],
          analyticsInsight: {
            strengths: ["Strong foundations in recovery and primary flow activity"],
            risks: ["Needs clearer daily structure and sequencing of creative + goal-directed activities to stabilize nervous system and sustain momentum"]
          },
          suggestedMetric: {
            name: "Flow Readiness Index",
            description: "Composite of clear goals, creative practice consistency, flow activity time, and recovery adherence",
            estimate: "~70% — good base, improving structured daily planning"
          }
        },
        {
          id: 3,
          title: "Leadership Leverage + Market Testing",
          dataSignals: [
            "Desires to test advisory value beyond financial services: e.g., with founders, VCs, tech/creative sectors",
            "Considering balanced portfolio (finance clients + founders) to explore adjacent markets while leveraging existing strengths",
            "Interested in framing herself as a 21st-century human capital accelerator aligned with AI-era organizational needs"
          ],
          analyticsInsight: {
            strengths: ["Clear articulation of target markets and unique leverage from KKR-scale HR infrastructure experience"],
            risks: ["External network is thin; must be deliberately cultivated through Alliance contacts", "Risk of spending too much time on infrastructure vs. early market testing"]
          },
          suggestedMetric: {
            name: "Leadership Leverage Score",
            description: "Progress on white paper, advisory tests, and building targeted network",
            estimate: "~65% — positioning sharpening, requires active outreach"
          }
        }
      ],
      dashboardMetrics: {
        missionAlignment: 65,
        flowReadiness: 70,
        flowLeadership: 65
      },
      summary: {
        topStrengths: ["Deep HR/organizational expertise with KKR-scale infrastructure experience", "Execution discipline and openness to AI tools", "Consistent creative practices (meditation, writing, drawing)", "Commitment to flow-inducing activities (boxing, kickboxing)", "Clear articulation of target markets and unique leverage"],
        keyRisks: ["Overfocus on infrastructure vs. early market testing", "Fear of irrelevance in AI-disrupted organizational landscape", "Thin external network requiring deliberate cultivation", "Confidence lagging until proven in practice", "Risk of analysis paralysis vs. market action"],
        nextAction: "Draft AI/org design white paper, test 3-5 advisory prototypes with diverse clients, engage Alliance + KKR portfolio for warm introductions"
      }
    }
  };
};

export const formatInsightsForChatbot = (insights) => {
  if (!insights) return '';
  
  let formatted = '\n**DETAILED CLIENT INSIGHTS:**\n\n';
  
  if (insights.insights) {
    insights.insights.forEach(insight => {
      formatted += `🎯 **Insight ${insight.id}: ${insight.title}**\n`;
      formatted += `Data Signals: ${insight.dataSignals.join(', ')}\n`;
      if (insight.analyticsInsight) {
        formatted += `Strengths: ${insight.analyticsInsight.strengths.join(', ')}\n`;
        formatted += `Risks: ${insight.analyticsInsight.risks.join(', ')}\n`;
      }
      if (insight.suggestedMetric) {
        formatted += `Metric: ${insight.suggestedMetric.name} - ${insight.suggestedMetric.estimate}\n`;
      }
      formatted += '\n';
    });
  }
  
  // Add transcript information if available
  if (insights.transcripts) {
    formatted += '\n**RECENT SESSIONS & TRANSCRIPTS:**\n\n';
    Object.entries(insights.transcripts).forEach(([title, transcript]) => {
      formatted += `📋 **${title}**\n`;
      formatted += `Type: ${transcript.type}\n`;
      formatted += `Date: ${transcript.date}\n`;
      formatted += `Duration: ${transcript.duration}\n`;
      formatted += `Key Topics: ${transcript.keyTopics.join(', ')}\n`;
      formatted += `Summary: ${transcript.summary}\n\n`;
    });
  }
  
  return formatted;
};
