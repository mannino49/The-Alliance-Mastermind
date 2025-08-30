// TypeScript interface for ClientProfile
export interface ClientProfile {
  name: string;
  archetype: string;
  mission: string;
  flowReadinessScore: number;
  leadershipLeverageScore: number;
  topStrengths: string[];
  keyRisks: string[];
}

// Extended interface with additional optional properties
export interface ExtendedClientProfile extends ClientProfile {
  id?: string;
  email?: string;
  nextAction?: string;
  trend?: {
    missionAlignment: 'improving' | 'steady' | 'declining';
    flowReadiness: 'improving' | 'steady' | 'declining';
    flowLeadership: 'improving' | 'steady' | 'declining';
  };
  lastLogin?: Date | null;
}

// Score ranges for different performance levels
export enum ScoreLevel {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high'
}

// Archetype categories
export enum ArchetypeCategory {
  VISIONARY = 'The Visionary',
  CREATOR = 'The Creator',
  ORCHESTRATOR = 'The Orchestrator',
  MTP_DRIVER = 'The MTP Driver',
  LEADER = 'The Leader',
  SYSTEM_BUILDER = 'The System Builder',
  COMMUNITY_BUILDER = 'The Community Builder',
  INNOVATOR = 'The Innovator',
  SYSTEMS_THINKER = 'The Systems Thinker',
  SCIENTIST = 'The Scientist',
  INVENTOR = 'The Inventor',
  TRANSFORMER = 'The Transformer',
  TRANSITIONER = 'The Transitioner',
  DISRUPTOR = 'The Disruptor'
}

// Utility types
export type ScoreType = 'flowReadinessScore' | 'leadershipLeverageScore';
export type TrendDirection = 'improving' | 'steady' | 'declining';
