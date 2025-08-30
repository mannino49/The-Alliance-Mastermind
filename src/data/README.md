# Client Profile Data Structure

This directory contains the unified client profile data structure that combines authentication data with performance metrics.

## Files

- `clientProfiles.js` - Main data file with unified client profiles
- `clientProfile.ts` - TypeScript interfaces and types
- `clientProfileUtils.js` - Utility functions for working with profiles
- `README.md` - This documentation file

## Data Structure

Each client profile follows this structure:

```javascript
{
  name: string;                    // Client full name
  archetype: string;              // Flow archetype (e.g., "The Visionary")
  mission: string;                // Client's primary mission/focus
  flowReadinessScore: number;     // Flow readiness score (0-100)
  leadershipLeverageScore: number; // Leadership leverage score (0-100)
  topStrengths: string[];         // Array of key strengths
  keyRisks: string[];            // Array of identified risks
}
```

## Usage Examples

### Basic Import
```javascript
import { clientProfiles } from './data/clientProfiles.js';
import { findClientProfileByName, getTopPerformers } from './utils/clientProfileUtils.js';
```

### Find Specific Client
```javascript
const rickProfile = findClientProfileByName('Rick Watkin');
console.log(rickProfile.archetype); // "The Visionary"
```

### Get Top Performers
```javascript
const topFlowReadiness = getTopPerformers('flowReadinessScore', 3);
const topLeadership = getTopPerformers('leadershipLeverageScore', 3);
```

### Filter by Score Range
```javascript
const highPerformers = filterByScoreRange(70, 100, 'flowReadinessScore');
const needsAttention = filterByScoreRange(0, 49, 'leadershipLeverageScore');
```

### Search Profiles
```javascript
const aiFocus = searchClientProfiles('AI');
const visionaryProfiles = filterByArchetype('The Visionary');
```

### Get Client Insights
```javascript
import { getClientInsights, getClientRecommendations } from './utils/clientProfileUtils.js';

const insights = getClientInsights(rickProfile);
const recommendations = getClientRecommendations(rickProfile);
```

## Score Levels

- **High**: 75-100 (Green)
- **Medium**: 50-74 (Yellow)  
- **Low**: 0-49 (Red)

## Archetypes

- The Visionary
- The Creator
- The Orchestrator
- The MTP Driver
- The Leader
- The System Builder
- The Community Builder
- The Innovator
- The Systems Thinker
- The Scientist
- The Inventor
- The Transformer
- The Transitioner
- The Disruptor

## Utility Functions

### Analysis Functions
- `getClientInsights(profile)` - Get performance insights and priority level
- `getClientRecommendations(profile)` - Get personalized recommendations
- `getArchetypeAnalysis()` - Get statistics by archetype
- `getPerformanceTrends()` - Get overall performance trends

### Search & Filter Functions
- `searchClientProfiles(query)` - Search across all profile fields
- `filterByScoreRange(min, max, scoreType)` - Filter by score range
- `filterByArchetype(archetype)` - Filter by specific archetype

### Helper Functions
- `getScoreLevel(score)` - Convert score to level (low/medium/high)
- `getScoreColor(score)` - Get Tailwind CSS color class for score
- `getScoreBackgroundColor(score)` - Get Tailwind CSS background color class

## Integration

This structure can be easily integrated with:
- React components for displaying client data
- Dashboard analytics and reporting
- Client management systems
- Performance tracking tools
- Archetype-based coaching recommendations
