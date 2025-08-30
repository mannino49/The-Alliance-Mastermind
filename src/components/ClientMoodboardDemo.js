import React, { useState } from 'react';
import ClientMoodboard from './ClientMoodboard';

// Sample client profile data for demonstration
const sampleClientProfiles = [
  {
    name: 'Rick Watkin',
    archetype: 'The Visionary',
    mission: 'Business/Personal Mission',
    flowReadinessScore: 45,
    leadershipLeverageScore: 60,
    topStrengths: ['Clear mission', 'High drive', 'Team-oriented'],
    keyRisks: ['Sleep deficit', 'Low recovery/play']
  },
  {
    name: 'Amity Cooper',
    archetype: 'The MTP Driver',
    mission: 'MTP Focus',
    flowReadinessScore: 40,
    leadershipLeverageScore: 50,
    topStrengths: ['Clear MTP', 'Strong assets', 'Visionary'],
    keyRisks: ['Scattered execution', 'Marketing bottleneck']
  },
  {
    name: 'Blair Lukan',
    archetype: 'The System Builder',
    mission: 'Exit Framework Focus',
    flowReadinessScore: 70,
    leadershipLeverageScore: 60,
    topStrengths: ['Clear niche MTP', 'Strong systems + recovery', 'Authentic communicator'],
    keyRisks: ['Planning > prototyping', 'Delayed testing']
  },
  {
    name: 'Bruce Bowser',
    archetype: 'The Disruptor',
    mission: 'Veterinary Innovation',
    flowReadinessScore: 60,
    leadershipLeverageScore: 70,
    topStrengths: ['Bold innovation', 'Market disruptor mindset', 'Authentic leadership'],
    keyRisks: ['Focus diffusion', 'Execution overload', 'Rebuilding recovery practices']
  }
];

const ClientMoodboardDemo: React.FC = () => {
  const [selectedClientIndex, setSelectedClientIndex] = useState(0);

  const handleClientChange = (index: number) => {
    setSelectedClientIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Client Selector */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Client Moodboard Demo</h2>
          <div className="flex flex-wrap gap-2">
            {sampleClientProfiles.map((client, index) => (
              <button
                key={index}
                onClick={() => handleClientChange(index)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedClientIndex === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {client.name}
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Select a client to see their personalized moodboard with archetype-based theming
          </p>
        </div>
      </div>

      {/* Moodboard Display */}
      <ClientMoodboard clientProfile={sampleClientProfiles[selectedClientIndex]} />
    </div>
  );
};

export default ClientMoodboardDemo;
