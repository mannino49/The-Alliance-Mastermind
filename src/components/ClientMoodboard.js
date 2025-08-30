import React from 'react';

interface ClientProfile {
  name: string;
  archetype: string;
  mission: string;
  flowReadinessScore: number;
  leadershipLeverageScore: number;
  topStrengths: string[];
  keyRisks: string[];
}

interface ClientMoodboardProps {
  clientProfile: ClientProfile;
}

// Theme generation helper function
const generateThemeClass = (archetype: string) => {
  const themeMap: { [key: string]: any } = {
    'The Visionary': {
      colors: 'from-blue-600 to-purple-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-purple-50',
      textColor: 'text-blue-900',
      accentColor: 'text-purple-600',
      borderColor: 'border-blue-200',
      cardBg: 'bg-white/80 backdrop-blur-sm',
      pattern: 'bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1)_0%,transparent_50%)]'
    },
    'The Creator': {
      colors: 'from-pink-500 to-orange-500',
      bgColor: 'bg-gradient-to-br from-pink-50 to-orange-50',
      textColor: 'text-pink-900',
      accentColor: 'text-orange-600',
      borderColor: 'border-pink-200',
      cardBg: 'bg-white/80 backdrop-blur-sm',
      pattern: 'bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1)_0%,transparent_50%)]'
    },
    'The Orchestrator': {
      colors: 'from-emerald-600 to-teal-600',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-teal-50',
      textColor: 'text-emerald-900',
      accentColor: 'text-teal-600',
      borderColor: 'border-emerald-200',
      cardBg: 'bg-white/80 backdrop-blur-sm',
      pattern: 'bg-[radial-gradient(circle_at_20%_50%,rgba(5,150,105,0.1)_0%,transparent_50%)]'
    },
    'The MTP Driver': {
      colors: 'from-violet-600 to-fuchsia-600',
      bgColor: 'bg-gradient-to-br from-violet-50 to-fuchsia-50',
      textColor: 'text-violet-900',
      accentColor: 'text-fuchsia-600',
      borderColor: 'border-violet-200',
      cardBg: 'bg-white/80 backdrop-blur-sm',
      pattern: 'bg-[radial-gradient(circle_at_80%_30%,rgba(139,92,246,0.1)_0%,transparent_50%)]'
    },
    'The Leader': {
      colors: 'from-red-600 to-amber-600',
      bgColor: 'bg-gradient-to-br from-red-50 to-amber-50',
      textColor: 'text-red-900',
      accentColor: 'text-amber-600',
      borderColor: 'border-red-200',
      cardBg: 'bg-white/80 backdrop-blur-sm',
      pattern: 'bg-[radial-gradient(circle_at_50%_20%,rgba(220,38,38,0.1)_0%,transparent_50%)]'
    },
    'The System Builder': {
      colors: 'from-slate-600 to-gray-600',
      bgColor: 'bg-gradient-to-br from-slate-50 to-gray-50',
      textColor: 'text-slate-900',
      accentColor: 'text-gray-600',
      borderColor: 'border-slate-200',
      cardBg: 'bg-white/80 backdrop-blur-sm',
      pattern: 'bg-[radial-gradient(circle_at_30%_70%,rgba(71,85,105,0.1)_0%,transparent_50%)]'
    },
    'The Community Builder': {
      colors: 'from-green-600 to-blue-600',
      bgColor: 'bg-gradient-to-br from-green-50 to-blue-50',
      textColor: 'text-green-900',
      accentColor: 'text-blue-600',
      borderColor: 'border-green-200',
      cardBg: 'bg-white/80 backdrop-blur-sm',
      pattern: 'bg-[radial-gradient(circle_at_70%_50%,rgba(22,163,74,0.1)_0%,transparent_50%)]'
    },
    'The Innovator': {
      colors: 'from-cyan-500 to-blue-600',
      bgColor: 'bg-gradient-to-br from-cyan-50 to-blue-50',
      textColor: 'text-cyan-900',
      accentColor: 'text-blue-600',
      borderColor: 'border-cyan-200',
      cardBg: 'bg-white/80 backdrop-blur-sm',
      pattern: 'bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1)_0%,transparent_50%)]'
    },
    'The Systems Thinker': {
      colors: 'from-indigo-600 to-purple-600',
      bgColor: 'bg-gradient-to-br from-indigo-50 to-purple-50',
      textColor: 'text-indigo-900',
      accentColor: 'text-purple-600',
      borderColor: 'border-indigo-200',
      cardBg: 'bg-white/80 backdrop-blur-sm',
      pattern: 'bg-[radial-gradient(circle_at_80%_20%,rgba(79,70,229,0.1)_0%,transparent_50%)]'
    },
    'The Scientist': {
      colors: 'from-blue-600 to-cyan-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      textColor: 'text-blue-900',
      accentColor: 'text-cyan-600',
      borderColor: 'border-blue-200',
      cardBg: 'bg-white/80 backdrop-blur-sm',
      pattern: 'bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_50%)]'
    },
    'The Inventor': {
      colors: 'from-orange-500 to-red-600',
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-50',
      textColor: 'text-orange-900',
      accentColor: 'text-red-600',
      borderColor: 'border-orange-200',
      cardBg: 'bg-white/80 backdrop-blur-sm',
      pattern: 'bg-[radial-gradient(circle_at_30%_30%,rgba(249,115,22,0.1)_0%,transparent_50%)]'
    },
    'The Transformer': {
      colors: 'from-purple-600 to-pink-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
      textColor: 'text-purple-900',
      accentColor: 'text-pink-600',
      borderColor: 'border-purple-200',
      cardBg: 'bg-white/80 backdrop-blur-sm',
      pattern: 'bg-[radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.1)_0%,transparent_50%)]'
    },
    'The Transitioner': {
      colors: 'from-teal-500 to-green-600',
      bgColor: 'bg-gradient-to-br from-teal-50 to-green-50',
      textColor: 'text-teal-900',
      accentColor: 'text-green-600',
      borderColor: 'border-teal-200',
      cardBg: 'bg-white/80 backdrop-blur-sm',
      pattern: 'bg-[radial-gradient(circle_at_20%_80%,rgba(20,184,166,0.1)_0%,transparent_50%)]'
    },
    'The Disruptor': {
      colors: 'from-red-600 to-purple-600',
      bgColor: 'bg-gradient-to-br from-red-50 to-purple-50',
      textColor: 'text-red-900',
      accentColor: 'text-purple-600',
      borderColor: 'border-red-200',
      cardBg: 'bg-white/80 backdrop-blur-sm',
      pattern: 'bg-[radial-gradient(circle_at_80%_80%,rgba(220,38,38,0.1)_0%,transparent_50%)]'
    }
  };

  return themeMap[archetype] || themeMap['The Visionary'];
};

// Score visualization component
const ScoreRing: React.FC<{ score: number; label: string; size?: 'sm' | 'md' | 'lg' }> = ({ 
  score, 
  label, 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-20 h-20',
    lg: 'w-24 h-24'
  };

  const strokeWidth = size === 'sm' ? 4 : size === 'md' ? 6 : 8;
  const radius = size === 'sm' ? 26 : size === 'md' ? 32 : 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const getScoreColor = (score: number) => {
    if (score >= 75) return 'text-green-600';
    if (score >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getStrokeColor = (score: number) => {
    if (score >= 75) return 'stroke-green-500';
    if (score >= 50) return 'stroke-yellow-500';
    return 'stroke-red-500';
  };

  return (
    <div className="flex flex-col items-center">
      <div className={`relative ${sizeClasses[size]}`}>
        <svg className="w-full h-full transform -rotate-90">
          {/* Background circle */}
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            className="text-gray-200"
          />
          {/* Progress circle */}
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className={`${getStrokeColor(score)} transition-all duration-1000 ease-out`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-sm font-bold ${getScoreColor(score)}`}>
            {score}
          </span>
        </div>
      </div>
      <span className="text-xs text-gray-600 mt-2 text-center">{label}</span>
    </div>
  );
};

const ClientMoodboard: React.FC<ClientMoodboardProps> = ({ clientProfile }) => {
  const theme = generateThemeClass(clientProfile.archetype);

  return (
    <div className={`min-h-screen ${theme.bgColor} relative overflow-hidden`}>
      {/* Background pattern */}
      <div className={`absolute inset-0 ${theme.pattern} opacity-50`} />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className={`text-5xl font-bold mb-4 ${theme.textColor}`}>
            {clientProfile.name}
          </h1>
          <div className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${theme.colors} text-white text-xl font-semibold mb-6`}>
            {clientProfile.archetype}
          </div>
          <p className="text-xl text-gray-600 italic">
            "Creativity is the expression of your alignment."
          </p>
        </div>

        {/* Three Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className={`${theme.cardBg} rounded-2xl p-6 shadow-lg border ${theme.borderColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className={`w-full h-48 rounded-xl bg-gradient-to-br ${theme.colors} opacity-20 mb-4 flex items-center justify-center`}>
                <span className={`text-4xl ${theme.accentColor} opacity-60`}>
                  {index === 1 ? '🎯' : index === 2 ? '🚀' : '💡'}
                </span>
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${theme.textColor}`}>
                {index === 1 ? 'Mission Focus' : index === 2 ? 'Flow State' : 'Innovation'}
              </h3>
              <p className="text-gray-600 text-sm">
                {index === 1 ? 'Your unique path forward' : 
                 index === 2 ? 'Optimal performance zone' : 'Creative breakthrough'}
              </p>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className={`${theme.cardBg} rounded-2xl p-8 shadow-lg border ${theme.borderColor} mb-12`}>
          <h2 className={`text-2xl font-bold mb-6 ${theme.textColor}`}>Performance Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div>
              <h3 className={`text-lg font-semibold mb-3 ${theme.accentColor}`}>Mission</h3>
              <p className="text-gray-700">{clientProfile.mission}</p>
            </div>

            {/* Flow Readiness Score */}
            <div className="flex justify-center">
              <ScoreRing score={clientProfile.flowReadinessScore} label="Flow Readiness" size="lg" />
            </div>

            {/* Leadership Leverage Score */}
            <div className="flex justify-center">
              <ScoreRing score={clientProfile.leadershipLeverageScore} label="Leadership Leverage" size="lg" />
            </div>
          </div>
        </div>

        {/* Two Lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Top Strengths */}
          <div className={`${theme.cardBg} rounded-2xl p-6 shadow-lg border ${theme.borderColor}`}>
            <h3 className={`text-xl font-bold mb-4 ${theme.accentColor}`}>Top Strengths</h3>
            <ul className="space-y-2">
              {clientProfile.topStrengths.map((strength, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                  {strength}
                </li>
              ))}
            </ul>
          </div>

          {/* Key Risks */}
          <div className={`${theme.cardBg} rounded-2xl p-6 shadow-lg border ${theme.borderColor}`}>
            <h3 className={`text-xl font-bold mb-4 ${theme.accentColor}`}>Key Risks</h3>
            <ul className="space-y-2">
              {clientProfile.keyRisks.map((risk, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                  {risk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientMoodboard;
