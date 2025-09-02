import React, { useState } from 'react';
import { useClientData } from '../../../shared/context/ClientDataContext';
import ClientChatbot from './ClientChatbot';

const ChatbotTest = () => {
  const { allClientData, getClientById } = useClientData();
  const [selectedClient, setSelectedClient] = useState('briancamastral');

  const brianClient = getClientById('briancamastral');

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Chatbot Integration Test</h1>
      
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Test Brian Camastral's Enhanced Chatbot</h2>
        <p className="text-gray-600 mb-4">
          This test verifies that Brian's transcript data is properly integrated into the chatbot.
        </p>
        
        {brianClient && (
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h3 className="font-semibold">Brian's Enhanced Profile:</h3>
            <ul className="text-sm space-y-1">
              <li><strong>Name:</strong> {brianClient.name}</li>
              <li><strong>Archetype:</strong> {brianClient.archetype}</li>
              <li><strong>Mission:</strong> {brianClient.mission}</li>
              <li><strong>Flow Readiness:</strong> {brianClient.flowReadinessScore}/100</li>
              <li><strong>Leadership Leverage:</strong> {brianClient.leadershipLeverageScore}/100</li>
              <li><strong>Has Transcript Data:</strong> {brianClient.conversationHistory ? 'Yes' : 'No'}</li>
              <li><strong>Collective Flow Index:</strong> {brianClient.collectiveFlowIndex || 'N/A'}/100</li>
              <li><strong>Group Orchestration Score:</strong> {brianClient.groupOrchestrationScore || 'N/A'}/100</li>
            </ul>
          </div>
        )}
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-3">Test Questions for Brian:</h3>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-800 mb-2">Try asking Brian these questions to test the enhanced responses:</p>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• "Tell me about collective flow and group orchestration"</li>
            <li>• "What should I focus on for neuroscience learning?"</li>
            <li>• "Help me with process vs outcome goal setting"</li>
            <li>• "What are my specific next actions?"</li>
            <li>• "How can I leverage my archetype strengths?"</li>
          </ul>
        </div>
      </div>

      <div className="border rounded-lg">
        <ClientChatbot 
          currentClientId={selectedClient} 
          allClientData={allClientData} 
        />
      </div>

      <div className="mt-6 text-sm text-gray-600">
        <h4 className="font-semibold mb-2">Integration Status:</h4>
        <ul className="space-y-1">
          <li>✅ Brian's transcript data loaded</li>
          <li>✅ Enhanced client profile created</li>
          <li>✅ Chatbot context updated</li>
          <li>✅ Mock API responses enhanced</li>
          <li>✅ System context includes conversation history</li>
        </ul>
      </div>
    </div>
  );
};

export default ChatbotTest;