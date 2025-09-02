# The Alliance Flow Mastermind Dashboard

A comprehensive performance tracking dashboard for high-performing individuals participating in The Alliance's flow mastermind program.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone [repository-url]
cd The_Alliance

# Install dependencies
npm install

# Start development server
npm start
```

The application will open at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
```bash
# Build the project
npm run build

# Deploy to Netlify (if netlify-cli is installed)
netlify deploy --prod
```

## 📁 Project Structure

```
The_Alliance/
├── public/                          # Static assets
│   └── index.html                   # Main HTML file
├── src/                             # Source code
│   ├── components/                  # React components
│   │   ├── LandingPage.js          # Marketing landing page
│   │   ├── FlowDashboard.js        # Main client overview dashboard
│   │   ├── RickDashboard.js        # Individual client dashboard
│   │   ├── BrianDashboard.js       # Individual client dashboard
│   │   └── [13 other client dashboards]
│   ├── App.js                       # Main application component
│   ├── index.js                     # Application entry point
│   └── index.css                    # Global styles
├── package.json                     # Dependencies and scripts
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
└── netlify.toml                    # Netlify deployment configuration
```

## 🎯 Key Features

### 1. Landing Page
- Professional program introduction
- Client success stories and testimonials
- Call-to-action for program applications

### 2. Main Dashboard
- Overview of all 15 clients
- Performance metrics tracking
- Color-coded scoring system
- Trend indicators and progress tracking

### 3. Individual Client Dashboards
- Personalized performance metrics
- 4-week trend visualization
- Detailed breakdowns of composite scores
- Action plans and coach recommendations

## 📊 Performance Metrics

The dashboard tracks three core performance areas:

### Mission Alignment
- Percentage of daily activities aligned with client's mission
- Can be split between business and personal focus
- Tracked via weekly check-ins and surveys

### Flow Readiness Index
Composite score calculated from:
- **Sleep Hours (30%)**: Target 7-8 hours per night
- **Recovery Practices (30%)**: Play, meditation, relaxation
- **Daily Deep Work (20%)**: Structured focus blocks
- **Trigger Integration (20%)**: Flow trigger implementation

### Flow Leadership Leverage
- How well clients model flow principles for their teams
- Assessment areas: autonomy, focus, recovery, creativity
- Tracked via team feedback and coach observations

## 🎨 Design System

### Color Coding
- 🟢 **Green (75-100)**: Excellent performance
- 🟡 **Yellow (50-74)**: Good performance
- 🔴 **Red (0-49)**: Needs improvement

### Trend Indicators
- ↗️ **Improving**: Positive progress
- → **Steady**: Maintaining current level
- ↘️ **Declining**: Negative trend

### Responsive Design
- Mobile-first approach
- Breakpoints: `md:` (768px), `lg:` (1024px), `xl:` (1280px)
- Grid layouts: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

## 🔧 Development

### Available Scripts
```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm run eject      # Eject from Create React App (not recommended)
```

### Adding New Clients

1. **Create Dashboard Component**
```bash
# Create new component file
touch src/components/NewClientDashboard.js
```

2. **Follow Component Pattern**
```javascript
import React from 'react';

export default function NewClientDashboard() {
  // Weekly data for trend charts
  const weeklyData = {
    missionAlignment: [60, 62, 65, 68],
    flowReadiness: [55, 58, 60, 62],
    flowLeadership: [50, 52, 55, 58]
  };

  // Component implementation following existing pattern
  // ... rest of component
}
```

3. **Update App.js**
```javascript
// Add import
import NewClientDashboard from './components/NewClientDashboard';

// Add to client selection switch
case 'newclient':
  setCurrentPage('newclient');
  break;

// Add to renderPage switch
case 'newclient':
  return (
    <div>
      <ClientDashboardHeader clientName="New Client" />
      <NewClientDashboard />
    </div>
  );
```

4. **Update FlowDashboard.js**
```javascript
// Add to clients array
{
  id: 'newclient',
  name: 'New Client Name',
  missionAlignment: '65 (Focus Area)',
  flowReadiness: 62,
  flowLeadershipLeverage: 58,
  topStrengths: 'Key strengths description',
  keyRisks: 'Identified risks',
  nextAction: 'Recommended next steps',
  trend: {
    missionAlignment: 'improving',
    flowReadiness: 'improving',
    flowLeadership: 'improving'
  }
}
```

### Component Architecture

Each client dashboard follows this structure:
1. **Header**: Client name and last updated timestamp
2. **Summary Cards**: Three key metrics with trend indicators
3. **Detailed Metrics**: Breakdown of composite scores
4. **Strengths & Risks**: Assessment and identification
5. **Action Plan**: Next steps and coach recommendations

### Shared Components

- **TrendIndicator**: Renders trend arrows with notes
- **MetricScore**: Displays scores with color coding
- **Sparkline**: Simple trend visualization
- **Navigation**: Top navigation bar
- **ClientDashboardHeader**: Header with back button

## 🚀 Deployment

### Netlify Configuration
```toml
[build]
  command = "npm run build"
  publish = "build"

[dev]
  command = "npm start"
  port = 3000

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Automatic Deployment
- Connect Git repository to Netlify
- Automatic builds on commits to main branch
- Preview deployments for pull requests

### Manual Deployment
```bash
# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=build
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] Landing page loads correctly
- [ ] Navigation between pages works
- [ ] Client selection from main dashboard
- [ ] Individual client dashboards display correctly
- [ ] Responsive design on mobile devices
- [ ] All trend indicators display properly
- [ ] Color coding works for all score ranges

### Browser Testing
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Design

### Breakpoints
- **Mobile**: Base styles (default)
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)
- **Large Desktop**: `xl:` (1280px+)

### Grid Layouts
```javascript
// Responsive grid examples
"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"  // 1 → 2 → 3 columns
"grid grid-cols-1 md:grid-cols-2"                  // 1 → 2 columns
```

## 🔍 Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear build cache
npm run build -- --reset-cache
```

#### Styling Issues
```bash
# Rebuild Tailwind CSS
npm run build

# Check Tailwind configuration
npx tailwindcss --help
```

#### Development Server Issues
```bash
# Kill existing processes on port 3000
lsof -ti:3000 | xargs kill -9

# Restart development server
npm start
```

### Performance Issues
- Check for unnecessary re-renders
- Optimize component memoization
- Review bundle size with `npm run build`
- Use React DevTools for performance analysis

## 📚 Additional Resources

### Documentation
- [Full Project Documentation](./PROJECT_DOCUMENTATION.md)
- [Technical Architecture](./TECHNICAL_ARCHITECTURE.md)
- [Project Summary](./PROJECT_SUMMARY.md)

### External Resources
- [React Documentation](https://reactjs.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Create React App Documentation](https://create-react-app.dev/)
- [Netlify Documentation](https://docs.netlify.com/)

## 🤝 Contributing

### Development Guidelines
1. Follow existing component patterns
2. Maintain consistent styling with Tailwind CSS
3. Test responsive design on multiple devices
4. Update documentation for new features
5. Follow React best practices

### Code Style
- Use functional components with hooks
- Maintain consistent naming conventions
- Add meaningful comments for complex logic
- Keep components focused and single-purpose

## 📄 License

[Add license information here]

## 📞 Support

For technical support or questions about the project:
- **Project Owner**: [Contact information]
- **Technical Lead**: [Contact information]
- **Repository**: [Git repository URL]

---

*Built with React, Tailwind CSS, and deployed on Netlify*
