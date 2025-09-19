import React, { useState } from 'react';
import { generateTemplates } from '../utils/dataIntegration';

export default function DataEntryInterface() {
  const [activeForm, setActiveForm] = useState('coaching');
  const [formData, setFormData] = useState(generateTemplates().coachingSession);
  const [output, setOutput] = useState('');

  const templates = generateTemplates();

  const handleFormTypeChange = (type) => {
    setActiveForm(type);
    switch(type) {
      case 'coaching':
        setFormData(templates.coachingSession);
        break;
      case 'survey':
        setFormData(templates.diagnosticSurvey);
        break;
      case 'weekly':
        setFormData(templates.weeklyCheckin);
        break;
    }
    setOutput('');
  };

  const handleInputChange = (path, value) => {
    setFormData(prev => {
      const newData = { ...prev };
      const keys = path.split('.');
      let current = newData;
      
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {};
        current = current[keys[i]];
      }
      
      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const generateDataStructure = () => {
    const timestamp = Date.now();
    const dataStructure = {
      ...formData,
      generatedAt: new Date().toISOString(),
      dataId: `${activeForm}_${timestamp}`
    };
    
    const formatted = JSON.stringify(dataStructure, null, 2);
    setOutput(formatted);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    alert('Copied to clipboard!');
  };

  return (
    <div className="p-6 max-w-6xl mx-auto bg-dark-800 rounded-xl">
      <h1 className="text-2xl font-bold text-primary-100 mb-6">Client Data Entry Interface</h1>
      
      {/* Form Type Selector */}
      <div className="mb-6">
        <div className="flex space-x-2">
          <button
            onClick={() => handleFormTypeChange('coaching')}
            className={`px-4 py-2 rounded ${activeForm === 'coaching' 
              ? 'bg-primary-600 text-white' 
              : 'bg-dark-700 text-gray-300 hover:bg-dark-600'}`}
          >
            Coaching Session
          </button>
          <button
            onClick={() => handleFormTypeChange('survey')}
            className={`px-4 py-2 rounded ${activeForm === 'survey' 
              ? 'bg-primary-600 text-white' 
              : 'bg-dark-700 text-gray-300 hover:bg-dark-600'}`}
          >
            Diagnostic Survey
          </button>
          <button
            onClick={() => handleFormTypeChange('weekly')}
            className={`px-4 py-2 rounded ${activeForm === 'weekly' 
              ? 'bg-primary-600 text-white' 
              : 'bg-dark-700 text-gray-300 hover:bg-dark-600'}`}
          >
            Weekly Check-in
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Form */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-primary-100">
            {activeForm === 'coaching' && 'Coaching Session Data'}
            {activeForm === 'survey' && 'Diagnostic Survey Data'}
            {activeForm === 'weekly' && 'Weekly Check-in Data'}
          </h2>

          {/* Coaching Session Form */}
          {activeForm === 'coaching' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Session Date</label>
                <input
                  type="date"
                  value={formData.sessionDate}
                  onChange={(e) => handleInputChange('sessionDate', e.target.value)}
                  className="w-full p-2 bg-dark-700 border border-dark-600 rounded text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Client Name</label>
                <input
                  type="text"
                  value={formData.clientName}
                  onChange={(e) => handleInputChange('clientName', e.target.value)}
                  className="w-full p-2 bg-dark-700 border border-dark-600 rounded text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Duration (minutes)</label>
                <input
                  type="number"
                  value={formData.duration}
                  onChange={(e) => handleInputChange('duration', parseInt(e.target.value))}
                  className="w-full p-2 bg-dark-700 border border-dark-600 rounded text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Session Type</label>
                <select
                  value={formData.sessionType}
                  onChange={(e) => handleInputChange('sessionType', e.target.value)}
                  className="w-full p-2 bg-dark-700 border border-dark-600 rounded text-white"
                >
                  <option value="regular_session">Regular Session</option>
                  <option value="strategy_session">Strategy Session</option>
                  <option value="check_in">Check-in</option>
                  <option value="breakthrough_session">Breakthrough Session</option>
                  <option value="goal_setting">Goal Setting</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Raw Transcript</label>
                <textarea
                  value={formData.rawText}
                  onChange={(e) => handleInputChange('rawText', e.target.value)}
                  placeholder="Paste the full transcript here..."
                  rows="8"
                  className="w-full p-2 bg-dark-700 border border-dark-600 rounded text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Coach Notes</label>
                <textarea
                  value={formData.manualCoachNotes}
                  onChange={(e) => handleInputChange('manualCoachNotes', e.target.value)}
                  placeholder="Manual coach observations and notes..."
                  rows="3"
                  className="w-full p-2 bg-dark-700 border border-dark-600 rounded text-white"
                />
              </div>
            </div>
          )}

          {/* Survey Form */}
          {activeForm === 'survey' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Survey Date</label>
                <input
                  type="date"
                  value={formData.surveyDate}
                  onChange={(e) => handleInputChange('surveyDate', e.target.value)}
                  className="w-full p-2 bg-dark-700 border border-dark-600 rounded text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Survey Type</label>
                <select
                  value={formData.surveyType}
                  onChange={(e) => handleInputChange('surveyType', e.target.value)}
                  className="w-full p-2 bg-dark-700 border border-dark-600 rounded text-white"
                >
                  <option value="flow_readiness_assessment">Flow Readiness Assessment</option>
                  <option value="leadership_leverage_assessment">Leadership Leverage Assessment</option>
                  <option value="comprehensive_flow_assessment">Comprehensive Flow Assessment</option>
                </select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Sleep Hours</label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.responses?.sleepHours || 7.5}
                    onChange={(e) => handleInputChange('responses.sleepHours', parseFloat(e.target.value))}
                    className="w-full p-2 bg-dark-700 border border-dark-600 rounded text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Sleep Quality (1-10)</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={formData.responses?.sleepQuality || 8}
                    onChange={(e) => handleInputChange('responses.sleepQuality', parseInt(e.target.value))}
                    className="w-full p-2 bg-dark-700 border border-dark-600 rounded text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Deep Work Hours/Day</label>
                  <input
                    type="number"
                    step="0.5"
                    value={formData.responses?.deepWorkHours || 3}
                    onChange={(e) => handleInputChange('responses.deepWorkHours', parseFloat(e.target.value))}
                    className="w-full p-2 bg-dark-700 border border-dark-600 rounded text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Flow Frequency/Week</label>
                  <input
                    type="number"
                    min="0"
                    max="7"
                    value={formData.responses?.flowFrequency || 4}
                    onChange={(e) => handleInputChange('responses.flowFrequency', parseInt(e.target.value))}
                    className="w-full p-2 bg-dark-700 border border-dark-600 rounded text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Mission Clarity (1-10)</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={formData.responses?.missionClarity || 8}
                    onChange={(e) => handleInputChange('responses.missionClarity', parseInt(e.target.value))}
                    className="w-full p-2 bg-dark-700 border border-dark-600 rounded text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Stress Level (1-10)</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={formData.responses?.stressLevel || 4}
                    onChange={(e) => handleInputChange('responses.stressLevel', parseInt(e.target.value))}
                    className="w-full p-2 bg-dark-700 border border-dark-600 rounded text-white"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Weekly Check-in Form */}
          {activeForm === 'weekly' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Week Date</label>
                <input
                  type="date"
                  value={formData.weekDate}
                  onChange={(e) => handleInputChange('weekDate', e.target.value)}
                  className="w-full p-2 bg-dark-700 border border-dark-600 rounded text-white"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Mission Alignment</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={formData.missionAlignment}
                    onChange={(e) => handleInputChange('missionAlignment', parseInt(e.target.value))}
                    className="w-full p-2 bg-dark-700 border border-dark-600 rounded text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Flow Readiness</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={formData.flowReadiness}
                    onChange={(e) => handleInputChange('flowReadiness', parseInt(e.target.value))}
                    className="w-full p-2 bg-dark-700 border border-dark-600 rounded text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Flow Leadership</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={formData.flowLeadership}
                    onChange={(e) => handleInputChange('flowLeadership', parseInt(e.target.value))}
                    className="w-full p-2 bg-dark-700 border border-dark-600 rounded text-white"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Notes</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  placeholder="Week summary and observations..."
                  rows="3"
                  className="w-full p-2 bg-dark-700 border border-dark-600 rounded text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Challenges (comma-separated)</label>
                <input
                  type="text"
                  value={Array.isArray(formData.challenges) ? formData.challenges.join(', ') : formData.challenges}
                  onChange={(e) => handleInputChange('challenges', e.target.value.split(', '))}
                  className="w-full p-2 bg-dark-700 border border-dark-600 rounded text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Wins (comma-separated)</label>
                <input
                  type="text"
                  value={Array.isArray(formData.wins) ? formData.wins.join(', ') : formData.wins}
                  onChange={(e) => handleInputChange('wins', e.target.value.split(', '))}
                  className="w-full p-2 bg-dark-700 border border-dark-600 rounded text-white"
                />
              </div>
            </div>
          )}

          <button
            onClick={generateDataStructure}
            className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded transition-colors"
          >
            Generate Data Structure
          </button>
        </div>

        {/* Output */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-primary-100">Generated Data Structure</h2>
            {output && (
              <button
                onClick={copyToClipboard}
                className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded text-sm transition-colors"
              >
                Copy to Clipboard
              </button>
            )}
          </div>
          
          <pre className="bg-dark-900 p-4 rounded text-sm text-gray-300 overflow-auto max-h-96 border border-dark-600">
            {output || 'Click "Generate Data Structure" to see the formatted data...'}
          </pre>
          
          {output && (
            <div className="bg-blue-900 p-3 rounded text-sm text-blue-100">
              <p className="font-medium mb-2">Next Steps:</p>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>Copy the generated data structure above</li>
                <li>Add it to your enhanced client data file</li>
                <li>Review and adjust any auto-generated fields</li>
                <li>Test the integration in the dashboard</li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}