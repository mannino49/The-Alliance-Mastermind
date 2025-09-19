// Client authentication data
export const clients = [
  {
    id: 'rick',
    firstName: 'Rick',
    lastName: 'Watkin',
    email: 'rick.watkin22@gmail.com',
    password: 'rick_flow',
    archetype: 'The Visionary',
    focus: 'Business/Personal Mission',
    lastLogin: null
  },
  {
    id: 'ricksessinghaus',
    firstName: 'Rick',
    lastName: 'Sessinghaus',
    email: 'rick@ricksessinghaus.com',
    password: 'rick_flow',
    archetype: 'The Mastermind',
    focus: 'Execution/Clarity',
    lastLogin: null
  },
  {
    id: 'brian',
    firstName: 'Brian',
    lastName: 'Camastral',
    email: 'briancamastral@me.com',
    password: 'brian_flow',
    archetype: 'The Orchestrator',
    focus: 'Curiosity/Passion Vector',
    lastLogin: null
  },
  {
    id: 'amity',
    firstName: 'Amity',
    lastName: 'Cooper',
    email: 'amity.cooper@gmail.com',
    password: 'amity_flow',
    archetype: 'The Mastermind',
    focus: 'Intuition/Purpose',
    lastLogin: null
  },
  {
    id: 'stephanie',
    firstName: 'Stephanie',
    lastName: 'Van Deynze',
    email: 'dr.stephanievandeynzesnell@gmail.com',
    password: 'stephanie_flow',
    archetype: 'Flow Systems Architect',
    focus: 'Clarity/Resonance',
    lastLogin: null
  },
  {
    id: 'blair',
    firstName: 'Blair',
    lastName: 'Lukan',
    email: 'lukanblair@gmail.com',
    password: 'blair_flow',
    archetype: 'The Integrator',
    focus: 'Systems/Influence',
    lastLogin: null
  },
  {
    id: 'rob',
    firstName: 'Rob',
    lastName: 'Finlay',
    email: 'rjf@rjfinlay.com',
    password: 'rob_flow',
    archetype: 'The Community Builder',
    focus: 'Execution/Clarity',
    lastLogin: null
  },
  {
    id: 'michael',
    firstName: 'Michael',
    lastName: 'Whitaker',
    email: 'mbwhit10@gmail.com',
    password: 'michael_flow',
    archetype: 'The Innovator',
    focus: 'Execution/Clarity',
    lastLogin: null
  },
  {
    id: 'jason',
    firstName: 'Jason',
    lastName: 'Tadros',
    email: 'jtadros@gmail.com',
    password: 'jason_flow',
    archetype: 'The Systems Thinker',
    focus: 'Intuition/Execution',
    lastLogin: null
  },
  {
    id: 'james',
    firstName: 'James',
    lastName: 'Crowe',
    email: 'james.crowe@vumc.org',
    password: 'james_flow',
    archetype: 'The Scientist',
    focus: 'Novelty/Rigor',
    lastLogin: null
  },
  {
    id: 'geof',
    firstName: 'Geoffrey',
    lastName: 'Garth',
    email: 'geofgarth@mac.com',
    password: 'geoffrey_flow',
    archetype: 'The Inventor',
    focus: 'Tinkering/Impact',
    lastLogin: null
  },
  {
    id: 'anatoliy',
    firstName: 'Anatoliy',
    lastName: 'Otchkovskiy',
    email: 'otchkovskiy@gmail.com',
    password: 'anatoliy_flow',
    archetype: 'The Transformer',
    focus: 'Vision/Execution',
    lastLogin: null
  },
  {
    id: 'sandra',
    firstName: 'Sandra',
    lastName: 'Ozols',
    email: 'sandra.ozola@icloud.com',
    password: 'sandra_flow',
    archetype: 'The Rebuilder',
    focus: 'Curiosity/Wisdom',
    lastLogin: null
  },
  {
    id: 'bruce',
    firstName: 'Bruce',
    lastName: 'Bowser',
    email: 'bbowser@amjcampbell.com',
    password: 'bruce_flow',
    archetype: 'The Disruptor',
    focus: 'Purpose/Execution',
    lastLogin: null
  },
  {
    id: 'courtney',
    firstName: 'Courtney',
    lastName: 'Karnes',
    email: 'courtney.karnes@outlook.com',
    password: 'courtney_flow',
    archetype: 'The Strategic Visionary',
    focus: 'Strategy/Intuition',
    lastLogin: null
  }
];

// Helper function to find client by email
export const findClientByEmail = (email) => {
  return clients.find(client => client.email.toLowerCase() === email.toLowerCase());
};

// Helper function to find client by ID
export const findClientById = (id) => {
  return clients.find(client => client.id === id);
};

// Helper function to validate credentials
export const validateCredentials = (email, password) => {
  const client = findClientByEmail(email);
  if (client && client.password === password) {
    return client;
  }
  return null;
};
