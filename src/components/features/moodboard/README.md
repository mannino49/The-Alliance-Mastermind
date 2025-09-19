# ClientMoodboard Component

A personalized moodboard component for high-performance clients that displays their flow profile and creative archetype with dynamic theming.

## Features

- **Archetype-Based Theming**: 14 different visual themes based on client archetype
- **Personalized Layout**: Displays client name, archetype, mission, and performance scores
- **Interactive Score Rings**: Visual representation of Flow Readiness and Leadership Leverage scores
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Hover Effects**: Smooth animations and transitions
- **Background Patterns**: Subtle radial gradients for visual depth

## Component Structure

### Props Interface
```typescript
interface ClientProfile {
  name: string;
  archetype: string;
  mission: string;
  flowReadinessScore: number;
  leadershipLeverageScore: number;
  topStrengths: string[];
  keyRisks: string[];
}
```

### Layout Sections
1. **Hero Section**: Client name and archetype title with inspirational quote
2. **Three Image Cards**: Themed cards representing Mission Focus, Flow State, and Innovation
3. **Performance Overview**: Mission description and score rings
4. **Strengths & Risks**: Two-column layout with bulleted lists

## Archetype Themes

The component automatically applies different visual themes based on the client's archetype:

- **The Visionary**: Blue to Purple gradients
- **The Creator**: Pink to Orange gradients
- **The Orchestrator**: Emerald to Teal gradients
- **The MTP Driver**: Violet to Fuchsia gradients
- **The Leader**: Red to Amber gradients
- **The System Builder**: Slate to Gray gradients
- **The Community Builder**: Green to Blue gradients
- **The Innovator**: Cyan to Blue gradients
- **The Systems Thinker**: Indigo to Purple gradients
- **The Scientist**: Blue to Cyan gradients
- **The Inventor**: Orange to Red gradients
- **The Transformer**: Purple to Pink gradients
- **The Transitioner**: Teal to Green gradients
- **The Disruptor**: Red to Purple gradients

## Usage

### Basic Usage
```tsx
import ClientMoodboard from './components/ClientMoodboard';

const clientProfile = {
  name: 'Rick Watkin',
  archetype: 'The Visionary',
  mission: 'Business/Personal Mission',
  flowReadinessScore: 45,
  leadershipLeverageScore: 60,
  topStrengths: ['Clear mission', 'High drive', 'Team-oriented'],
  keyRisks: ['Sleep deficit', 'Low recovery/play']
};

function App() {
  return <ClientMoodboard clientProfile={clientProfile} />;
}
```

### With Demo Component
```tsx
import ClientMoodboardDemo from './components/ClientMoodboardDemo';

function App() {
  return <ClientMoodboardDemo />;
}
```

## Score Visualization

The component includes a `ScoreRing` component that displays scores as circular progress indicators:

- **Green**: 75-100 (High performance)
- **Yellow**: 50-74 (Medium performance)
- **Red**: 0-49 (Low performance)

## Styling

The component uses Tailwind CSS classes and includes:

- **Gradient backgrounds** based on archetype
- **Glassmorphism effects** with backdrop blur
- **Smooth transitions** and hover animations
- **Responsive grid layouts** for different screen sizes
- **Custom radial patterns** for visual interest

## Customization

### Adding New Archetypes
To add a new archetype theme, update the `generateThemeClass` function in `ClientMoodboard.tsx`:

```typescript
'New Archetype': {
  colors: 'from-color1 to-color2',
  bgColor: 'bg-gradient-to-br from-color1-50 to-color2-50',
  textColor: 'text-color1-900',
  accentColor: 'text-color2-600',
  borderColor: 'border-color1-200',
  cardBg: 'bg-white/80 backdrop-blur-sm',
  pattern: 'bg-[radial-gradient(circle_at_30%_20%,rgba(r,g,b,0.1)_0%,transparent_50%)]'
}
```

### Modifying Score Colors
Update the `getScoreColor` and `getStrokeColor` functions in the `ScoreRing` component to change color thresholds.

## Dependencies

- React 18+
- TypeScript
- Tailwind CSS
- No external UI libraries required

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- CSS custom properties (CSS variables)
- CSS backdrop-filter (for glassmorphism effects)

## Performance

- Optimized with React.memo for performance
- CSS transitions for smooth animations
- Minimal JavaScript calculations
- Efficient re-rendering with proper prop structure
