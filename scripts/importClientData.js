#!/usr/bin/env node

/**
 * Data Import Script for The Alliance Dashboard
 * 
 * Usage Examples:
 * 1. Import coaching transcript:
 *    node scripts/importClientData.js --type=transcript --client="Brian Camastral" --file="path/to/transcript.txt" --date="2025-01-15"
 * 
 * 2. Import survey data:
 *    node scripts/importClientData.js --type=survey --client="Brian Camastral" --file="path/to/survey.json" --survey-type="flow_readiness"
 * 
 * 3. Batch import from directory:
 *    node scripts/importClientData.js --batch --directory="path/to/data"
 */

const fs = require('fs');
const path = require('path');

// Import utilities (in a real implementation, you'd import from your built files)
const dataIntegration = require('../src/utils/dataIntegration');

// Command line argument parsing
const args = process.argv.slice(2);
const getArg = (name) => {
  const arg = args.find(arg => arg.startsWith(`--${name}=`));
  return arg ? arg.split('=')[1] : null;
};
const hasArg = (name) => args.includes(`--${name}`);

// Configuration
const DATA_DIR = path.join(__dirname, '../src/data');
const ENHANCED_DATA_FILE = path.join(DATA_DIR, 'enhancedClientData.js');

/**
 * Import coaching session transcript
 */
async function importTranscript(clientName, filePath, sessionDate, sessionType = 'regular_session') {
  try {
    console.log(`📝 Importing transcript for ${clientName}...`);
    
    // Read transcript file
    const rawText = fs.readFileSync(filePath, 'utf8');
    
    // Process transcript
    const rawTranscript = {
      sessionDate,
      clientName,
      rawText,
      sessionType
    };
    
    const processedSession = dataIntegration.processCoachingTranscript(rawTranscript);
    
    console.log('✅ Processed transcript data:');
    console.log(`   Session ID: ${processedSession.sessionId}`);
    console.log(`   Themes detected: ${processedSession.transcript.themes.join(', ')}`);
    console.log(`   Key quotes: ${processedSession.transcript.keyQuotes.length}`);
    console.log(`   Sentiment: ${processedSession.transcript.sentiment}`);
    
    // TODO: Add to client data file
    console.log('\n📋 Next steps:');
    console.log('1. Add manual coach notes and action items');
    console.log('2. Review extracted themes and quotes for accuracy');
    console.log('3. Integrate into client data file');
    
    // Output processed data for manual integration
    const outputFile = path.join(__dirname, `../data-imports/${clientName.replace(' ', '')}_${sessionDate}_processed.json`);
    fs.mkdirSync(path.dirname(outputFile), { recursive: true });
    fs.writeFileSync(outputFile, JSON.stringify(processedSession, null, 2));
    console.log(`📁 Processed data saved to: ${outputFile}`);
    
    return processedSession;
  } catch (error) {
    console.error('❌ Error importing transcript:', error.message);
    throw error;
  }
}

/**
 * Import diagnostic survey data
 */
async function importSurvey(clientName, filePath, surveyType) {
  try {
    console.log(`📊 Importing survey for ${clientName}...`);
    
    // Read survey file (expect JSON format)
    const surveyData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Process survey
    const processedSurvey = dataIntegration.processDiagnosticSurvey({
      surveyId: `${clientName.toLowerCase().replace(' ', '')}_${surveyType}_${Date.now()}`,
      surveyDate: new Date().toISOString().split('T')[0],
      surveyType,
      responses: surveyData
    });
    
    console.log('✅ Processed survey data:');
    console.log(`   Survey ID: ${processedSurvey.surveyId}`);
    console.log(`   Overall Flow Readiness: ${processedSurvey.overallFlowReadiness || 'N/A'}`);
    console.log(`   Leadership Leverage: ${processedSurvey.overallLeadershipLeverage || 'N/A'}`);
    
    // Output processed data
    const outputFile = path.join(__dirname, `../data-imports/${clientName.replace(' ', '')}_survey_${Date.now()}.json`);
    fs.mkdirSync(path.dirname(outputFile), { recursive: true });
    fs.writeFileSync(outputFile, JSON.stringify(processedSurvey, null, 2));
    console.log(`📁 Processed data saved to: ${outputFile}`);
    
    return processedSurvey;
  } catch (error) {
    console.error('❌ Error importing survey:', error.message);
    throw error;
  }
}

/**
 * Batch import from directory
 */
async function batchImport(directory) {
  try {
    console.log(`📦 Starting batch import from: ${directory}`);
    
    const files = fs.readdirSync(directory);
    const results = {
      transcripts: [],
      surveys: [],
      errors: []
    };
    
    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isFile()) {
        try {
          // Determine file type from name/extension
          if (file.includes('transcript') && file.endsWith('.txt')) {
            // Extract client name and date from filename (assumes format: ClientName_transcript_2025-01-15.txt)
            const parts = file.split('_');
            if (parts.length >= 3) {
              const clientName = parts[0].replace(/([A-Z])/g, ' $1').trim();
              const date = parts[2].replace('.txt', '');
              const result = await importTranscript(clientName, filePath, date);
              results.transcripts.push(result);
            }
          } else if (file.includes('survey') && file.endsWith('.json')) {
            // Extract client name and survey type from filename
            const parts = file.split('_');
            if (parts.length >= 3) {
              const clientName = parts[0].replace(/([A-Z])/g, ' $1').trim();
              const surveyType = parts[1] + '_assessment';
              const result = await importSurvey(clientName, filePath, surveyType);
              results.surveys.push(result);
            }
          }
        } catch (error) {
          results.errors.push({ file, error: error.message });
        }
      }
    }
    
    console.log('\n📈 Batch import complete:');
    console.log(`   Transcripts processed: ${results.transcripts.length}`);
    console.log(`   Surveys processed: ${results.surveys.length}`);
    console.log(`   Errors: ${results.errors.length}`);
    
    if (results.errors.length > 0) {
      console.log('\n❌ Errors:');
      results.errors.forEach(({ file, error }) => {
        console.log(`   ${file}: ${error}`);
      });
    }
    
    return results;
  } catch (error) {
    console.error('❌ Error in batch import:', error.message);
    throw error;
  }
}

/**
 * Generate example data files
 */
function generateExamples() {
  console.log('📝 Generating example data files...');
  
  const exampleDir = path.join(__dirname, '../examples');
  fs.mkdirSync(exampleDir, { recursive: true });
  
  // Example transcript
  const exampleTranscript = `COACHING SESSION TRANSCRIPT
Date: January 15, 2025
Client: Brian Camastral
Coach: Steven Kotler
Duration: 60 minutes

COACH: So Brian, tell me about your progress on the curiosity/passion vector we discussed.

CLIENT: I feel like I'm getting clearer on the vision, but I keep getting stuck in the planning phase. I see the potential for orchestrating high-impact collaborative groups, but I need to move from vision to action.

COACH: That's a pattern we see often. What specific action could you take this week?

CLIENT: The endurance challenges used to give me that flow state - I need to bring those back. And I want to measure process over outcome, but I need concrete metrics to track that.

COACH: Excellent insight. Let's design those metrics...

[Rest of transcript continues...]`;

  fs.writeFileSync(path.join(exampleDir, 'BrianCamastral_transcript_2025-01-15.txt'), exampleTranscript);
  
  // Example survey data
  const exampleSurvey = {
    sleepHours: 7.2,
    sleepQuality: 6,
    recoveryActivities: ['reading', 'walking', 'meditation'],
    recoveryFrequency: 4,
    stressLevel: 5,
    deepWorkHours: 3.5,
    focusQuality: 7,
    distractionManagement: 6,
    flowFrequency: 3,
    flowDuration: 45,
    primaryFlowActivities: ['creative_problem_solving', 'endurance_exercise'],
    missionClarity: 8,
    dailyMissionAlignment: 70,
    passionLevel: 9
  };
  
  fs.writeFileSync(path.join(exampleDir, 'BrianCamastral_flow_survey.json'), JSON.stringify(exampleSurvey, null, 2));
  
  console.log(`✅ Example files created in: ${exampleDir}`);
  console.log('📋 File formats:');
  console.log('   Transcripts: ClientName_transcript_YYYY-MM-DD.txt');
  console.log('   Surveys: ClientName_surveytype_survey.json');
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Alliance Dashboard Data Import Tool\n');
  
  try {
    if (hasArg('help')) {
      console.log('Usage:');
      console.log('  --type=transcript --client="Name" --file="path" --date="YYYY-MM-DD"');
      console.log('  --type=survey --client="Name" --file="path" --survey-type="flow_readiness"');
      console.log('  --batch --directory="path"');
      console.log('  --examples (generate example files)');
      console.log('  --help (show this help)');
      return;
    }
    
    if (hasArg('examples')) {
      generateExamples();
      return;
    }
    
    if (hasArg('batch')) {
      const directory = getArg('directory');
      if (!directory) {
        throw new Error('--directory argument required for batch import');
      }
      await batchImport(directory);
      return;
    }
    
    const type = getArg('type');
    const client = getArg('client');
    const file = getArg('file');
    
    if (!type || !client || !file) {
      throw new Error('Required arguments: --type, --client, --file');
    }
    
    if (type === 'transcript') {
      const date = getArg('date') || new Date().toISOString().split('T')[0];
      const sessionType = getArg('session-type') || 'regular_session';
      await importTranscript(client, file, date, sessionType);
    } else if (type === 'survey') {
      const surveyType = getArg('survey-type') || 'flow_readiness_assessment';
      await importSurvey(client, file, surveyType);
    } else {
      throw new Error('Invalid type. Use: transcript or survey');
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\nRun with --help for usage information');
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  importTranscript,
  importSurvey,
  batchImport,
  generateExamples
};