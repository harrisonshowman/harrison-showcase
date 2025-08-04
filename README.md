# Harrison Showcase

A modern React-based portfolio website featuring interactive animations, smooth transitions, and a beautiful purple/blue color scheme.

## 🚀 Features

- **Single Page Application (SPA)** - Smooth navigation without page reloads
- **Splash Screen Transitions** - Immersive 5-piece sliding animations
- **Dark/Light Mode Toggle** - Persistent theme preference
- **Framer Motion Animations** - Smooth, performant animations
- **Responsive Design** - Works perfectly on all devices
- **TypeScript** - Type-safe development
- **Modern React Hooks** - Functional components with hooks

## 🎨 Design Features

- **Cloud Highlight** - Cartoon-style cloud behind the title
- **Floating Orbs** - Animated background elements
- **Glitch Effect** - Cyberpunk-style text animations
- **Glassmorphism** - Modern glass-like UI elements
- **Purple/Blue Theme** - Beautiful color palette

## 🛠️ Tech Stack

- **React 18** - Latest React features
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **CSS Variables** - Dynamic theming
- **Google Fonts** - Inter font family

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Home.tsx              # Main landing page
│   │   ├── ExploreCS.tsx         # Computer Science section
│   │   ├── Portfolio.tsx         # Projects showcase
│   │   ├── Profile.tsx           # About me page
│   │   ├── SplashScreen.tsx      # Transition animations
│   │   ├── ThemeToggle.tsx       # Dark/light mode
│   │   └── FloatingOrbs.tsx      # Background animations
│   ├── hooks/
│   │   └── useNavigation.ts      # Custom navigation hook
│   ├── App.tsx                   # Main app component
│   ├── App.css                   # Component styles
│   ├── style.css                 # Global styles
│   └── index.css                 # Base styles
├── public/                       # Static assets
├── old-version/                  # Previous HTML/CSS/JS version
└── index.html                    # Main entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd harrison-showcase
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 🎨 Customization

### Colors
The color scheme is defined in CSS variables in `src/style.css`:

```css
:root {
  --accent-primary: #7C3AED;    /* Purple */
  --accent-secondary: #4F8CFF;  /* Blue */
  --accent-tertiary: #A5B4FC;   /* Light purple */
}
```

### Animations
Animations are powered by Framer Motion. You can customize them in the component files.

### Content
Update the content in the respective component files:
- `src/components/Home.tsx` - Main landing page content
- `src/components/ExploreCS.tsx` - Computer science resources
- `src/components/Portfolio.tsx` - Project showcases
- `src/components/Profile.tsx` - About me information

## 🔧 Development

### Adding New Pages
1. Create a new component in `src/components/`
2. Add the route in `src/App.tsx`
3. Update the navigation hook if needed

### Styling
- Global styles: `src/style.css`
- Component-specific styles: `src/App.css`
- Use CSS variables for theming

### Animations
- Use Framer Motion for component animations
- Splash screen animations are in `src/components/SplashScreen.tsx`

## 📱 Responsive Design

The app is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🌙 Theme System

The app supports dark and light themes:
- Theme preference is saved in localStorage
- Toggle button in the top-right corner
- All colors use CSS variables for easy theming

## 🎭 Splash Screen System

The splash screen features:
- 5 sliding pieces
- Destination-specific colors
- Icon animations
- Smooth transitions

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The `build` folder will contain your production-ready site.

### Deployment Options
- **GitHub Pages** - Deploy directly from this repo
- **Netlify/Vercel** - Connect your GitHub repo
- **Traditional Hosting** - Upload the `build` folder

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

Harrison Showman - [Your contact information]

---

**Note**: This is the React version of the original static HTML/CSS/JS portfolio. All functionality has been preserved and enhanced with modern React features. The old version is preserved in the `old-version/` folder.