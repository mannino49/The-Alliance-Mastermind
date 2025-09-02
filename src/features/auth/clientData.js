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
    archetype: 'The Creator',
    focus: 'AI Product/Book',
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
    archetype: 'The MTP Driver',
    focus: 'MTP Focus',
    lastLogin: null
  },
  {
    id: 'stephanie',
    firstName: 'Stephanie',
    lastName: 'Van Deynze',
    email: 'dr.stephanievandeynzesnell@gmail.com',
    password: 'stephanie_flow',
    archetype: 'The Leader',
    focus: 'Veterinary/Leadership',
    lastLogin: null
  },
  {
    id: 'blair',
    firstName: 'Blair',
    lastName: 'Lukan',
    email: 'lukanblair@gmail.com',
    password: 'blair_flow',
    archetype: 'The System Builder',
    focus: 'Exit Framework',
    lastLogin: null
  },
  {
    id: 'rob',
    firstName: 'Rob',
    lastName: 'Finlay',
    email: 'rjf@rjfinlay.com',
    password: 'rob_flow',
    archetype: 'The Community Builder',
    focus: 'Multiple Projects',
    lastLogin: null
  },
  {
    id: 'michael',
    firstName: 'Michael',
    lastName: 'Whitaker',
    email: 'mbwhit10@gmail.com',
    password: 'michael_flow',
    archetype: 'The Innovator',
    focus: 'AI-Human Creativity',
    lastLogin: null
  },
  {
    id: 'jason',
    firstName: 'Jason',
    lastName: 'Tadros',
    email: 'jtadros@gmail.com',
    password: 'jason_flow',
    archetype: 'The Systems Thinker',
    focus: 'AI/Math Innovation',
    lastLogin: null
  },
  {
    id: 'james',
    firstName: 'James',
    lastName: 'Crowe',
    email: 'james.crowe@vumc.org',
    password: 'james_flow',
    archetype: 'The Scientist',
    focus: 'Antibody Treatments',
    lastLogin: null
  },
  {
    id: 'geof',
    firstName: 'Geoffrey',
    lastName: 'Garth',
    email: 'geofgarth@mac.com',
    password: 'geoffrey_flow',
    archetype: 'The Inventor',
    focus: 'Hands-on Invention',
    lastLogin: null
  },
  {
    id: 'anatoliy',
    firstName: 'Anatoliy',
    lastName: 'Otchkovskiy',
    email: 'otchkovskiy@gmail.com',
    password: 'anatoliy_flow',
    archetype: 'The Transformer',
    focus: 'Company Transformation',
    lastLogin: null
  },
  {
    id: 'sandra',
    firstName: 'Sandra',
    lastName: 'Ozols',
    email: 'sandra.ozola@icloud.com',
    password: 'sandra_flow',
    archetype: 'The Transitioner',
    focus: 'Career Transition',
    lastLogin: null
  },
  {
    id: 'bruce',
    firstName: 'Bruce',
    lastName: 'Bowser',
    email: 'bbowser@amjcampbell.com',
    password: 'bruce_flow',
    archetype: 'The Disruptor',
    focus: 'Veterinary Innovation',
    lastLogin: null
  },
  {
    id: 'courtney',
    firstName: 'Courtney',
    lastName: 'Karnes',
    email: 'courtney.karnes@outlook.com',
    password: 'courtney_flow',
    archetype: 'TBD',
    focus: 'TBD',
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
