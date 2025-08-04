# Development Setup Guide

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

3. **Open in browser:**
   Visit `http://localhost:3000`

## 📁 Project Structure

```
harrison-showcase/
├── src/                          # React source code
│   ├── components/               # React components
│   ├── hooks/                    # Custom hooks
│   ├── App.tsx                   # Main app
│   ├── App.css                   # Component styles
│   ├── style.css                 # Global styles
│   └── index.css                 # Base styles
├── public/                       # Static assets
├── old-version/                  # Previous HTML version (backup)
├── index.html                    # Main entry point
├── package.json                  # Dependencies
└── README.md                     # Documentation
```

## 🔧 Development Commands

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 🎨 Customization

### Adding Content
- **Home page**: Edit `src/components/Home.tsx`
- **Explore CS**: Edit `src/components/ExploreCS.tsx`
- **Portfolio**: Edit `src/components/Portfolio.tsx`
- **Profile**: Edit `src/components/Profile.tsx`

### Styling
- **Global styles**: Edit `src/style.css`
- **Component styles**: Edit `src/App.css`
- **Colors**: Update CSS variables in `src/style.css`

### Animations
- **Splash screen**: Edit `src/components/SplashScreen.tsx`
- **Component animations**: Use Framer Motion in components

## 🚀 Deployment

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Deploy options:**
   - **GitHub Pages**: Push to GitHub and enable Pages
   - **Netlify**: Connect GitHub repo
   - **Vercel**: Connect GitHub repo
   - **Traditional hosting**: Upload `build` folder

## 📱 Features

- ✅ SPA navigation with React Router
- ✅ Splash screen transitions
- ✅ Dark/light mode toggle
- ✅ Responsive design
- ✅ TypeScript support
- ✅ Framer Motion animations
- ✅ Purple/blue theme

## 🔄 Migration Notes

- Old HTML version is preserved in `old-version/` folder
- All original functionality has been preserved
- Enhanced with modern React features
- Better performance and maintainability 