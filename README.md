# 🚀 SYSTEM_CORE: Anish Kumar Gupta - Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2.3-blue?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-3b82f6?logo=tailwindcss)](https://tailwindcss.com)

<div align=\"center\">

**Uplink Established**  
*Full-Stack Engineer & AI Architect*  
Crafting immersive digital ecosystems with React/Next.js, FastAPI, and neural architectures.

[![Demo](https://img.shields.io/badge/Live_Demo-000000?logo=vercel&logoColor=white)](http://localhost:3000)

</div>

## 🎯 Quick Start

```bash
# Clone & Install Dependencies
cd portfolio
npm install

# Execute Development Server
npm run dev

# Access System Interface
# http://localhost:3000
```

**Production Build:**
```bash
npm run build
npm start
```

## 🌌 Core Features

- **Immersive 3D Engine**: @react-three/fiber, drei, three.js - Scrollable3DObject, FloatingTechCircle, ThreeImage/Background
- **Advanced Motion Systems**: framer-motion - ParallaxImage/Background, MouseTilt, HoverPhotoReveal
- **Cyberpunk HUD Interface**: Dynamic glassmorphism cards, real-time HUD metadata, system-core theming
- **Smooth Scrolling**: Lenis integration via SmoothScroll component
- **Theme Synchronization**: next-themes with ThemeProvider/Toggle (Dark/Light/System)
- **API Integration**: `/api/resume` route for PDF generation (@react-pdf/renderer)
- **Real-Time Contact Uplink**: EmailJS form with submission states
- **Responsive Matrix**: Mobile-first with TailwindCSS v4, custom fonts (Orbitron, Rajdhani, JetBrains Mono)

## 🛠 Tech Arsenal

### Frontend Logic
```
Next.js 16.1.6 (App Router) • React 19.2.3 • TypeScript 5
TailwindCSS 4 • framer-motion 12.34.3 • lucide-react
next-themes • clsx • tailwind-merge
```

### 3D/Rendering Engine
```
three.js 0.183.1 • @react-three/fiber 9.5.0 • @react-three/drei 10.7.7
```

### Backend/AI Modules
```
FastAPI • Node.js • Prisma/PostgreSQL • Python ML
LangChain/LLMs • TensorFlow • @react-pdf/renderer
```

### Utilities
```
EmailJS • Lenis (smooth-scroll) • CustomCursor • FallingStars
```

## 📁 System Structure

```
portfolio/
├── src/app/
│   ├── page.tsx           # Hero: SYSTEM_CORE, FloatingTechCircle, 3D hero
│   ├── about/page.tsx     # Profile: Skills matrix, HoverPhotoReveal
│   ├── projects/page.tsx  # Archive: Trading Hand, Dhruv Tara, AI Risk Analyzer
│   ├── skills/page.tsx    # Arsenal: 4x categorized skill modules
│   ├── experience/page.tsx# Timeline: Achievements, certifications
│   ├── contact/page.tsx   # Uplink: EmailJS form terminal
│   └── api/resume/route.ts # PDF generation endpoint
├── src/components/        # Custom modules (27+)
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ParallaxBackground/Image.tsx
│   ├── ThreeBackground/Image.tsx
│   ├── MouseTilt.tsx
│   ├── Scrollable3DObject.tsx
│   └── ... (FallingStars, ThemeProvider, etc.)
└── public/                # Assets (globe.svg, universe-bg.png, etc.)
```

## 🎮 Key Modules

| Component | Description | Tech |
|-----------|-------------|------|
| **Scrollable3DObject** | Fixed 3D background with scroll parallax | three.js |
| **FloatingTechCircle** | Orbiting tech stack visualization | Canvas/SVG |
| **MouseTilt** | 3D tilt hover effects | framer-motion |
| **ParallaxImage/Background** | Multi-layer depth scrolling | CSS/JS |
| **HoverPhotoReveal** | Dual-image reveal on hover | CSS clip-path |
| **CustomCursor** | Dynamic tracking cursor | JS mouse events |

## 🚀 Deployment Matrix

### Vercel (Recommended - One-Click)
```
1. Push to GitHub
2. Import to vercel.com
3. Configure EmailJS env vars:
   - VITE_EMAILJS_SERVICE_ID
   - VITE_EMAILJS_TEMPLATE_ID  
   - VITE_EMAILJS_PUBLIC_KEY
4. Deploy → Live URL
```

**Environment Variables** (EmailJS):
```
EMAILJS_SERVICE_ID=service_2s31y3j
EMAILJS_TEMPLATE_ID=template_hrv8bxw
EMAILJS_PUBLIC_KEY=Z02mX_1sQOWwpSwl4
```

## 🔧 Development Protocol

```bash
# Code Quality
npm run lint

# Production Build
npm run build

# Type Checking
npx tsc --noEmit
```

**Tailwind Config**: PostCSS v4 integration (`postcss.config.mjs`, `@tailwindcss/postcss`)
**ESLint**: Next.js 16 config (`eslint.config.mjs`)

## 📸 Screenshots

<!-- Add demo GIF/video here -->
```
public/screenshots/hero.gif    # SYSTEM_CORE hero
public/screenshots/about.png   # Profile & skills
public/screenshots/projects.mp4 # Project reel
```

## 📄 License

MIT License - See [LICENSE](LICENSE) for details.

<div align=\"center\">

**Anish Kumar Gupta**  
[GitHub](https://github.com/anish2753) • [LinkedIn](https://www.linkedin.com/in/anish-kumar-gupta-0382022b7/) • [Resume](/api/resume)

```
[ID] ANISH_SYSTEM_001
[AUTH] LEVEL_9_CLEARANCE  
[STATUS] OPTIMAL
```

</div>
