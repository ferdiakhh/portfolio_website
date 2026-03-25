# Portfolio Website - Development Guide (CLAUDE.md)

> Comprehensive guide for developing and maintaining this modern interactive portfolio website for Ferdi Akhdan (Mobile Developer & Backend Engineer).

---

## 📋 Quick Start

```bash
npm install          # Install dependencies (Vite, GSAP, Lenis)
npm run dev          # Start dev server → http://localhost:5173
npm run build        # Production build → /dist folder
npm run preview      # Preview production build locally
```

**Development Environment:** Node.js + Vite with Hot Module Replacement (HMR)

---

## 🎯 Project Overview

**What is this?**
A modern, interactive portfolio website showcasing mobile development and backend engineering projects. Features smooth scrolling animations, bilingual interface (Indonesian/English), and performance-optimized multi-page architecture.

**Key Features:**
- ✨ Professional animations (GSAP + ScrollTrigger)
- 🎯 Smooth scrolling experience (Lenis)
- 🌐 Bilingual support (ID/EN with instant switching)
- 📱 Fully responsive design (mobile-first)
- ⚡ Lightning-fast builds (Vite)
- 🎨 Custom cursor & interactive UI elements
- 🎬 Scroll-triggered reveals & parallax effects
- 📦 Code splitting per page (optimal performance)

**Project Owner:** Muhammad Ferdi Akhdan

---

## 🏗️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Vite** | ^6.2.0 | Build tool, dev server, multi-page bundler |
| **GSAP** | ^3.12.2 | Professional animations & ScrollTrigger plugin |
| **Lenis** | ^1.0.29 | High-performance smooth scrolling |
| **Vanilla JS** | ES6+ | Lightweight, modular architecture (no framework) |
| **CSS3** | - | Responsive styling with CSS variables & Grid/Flexbox |

**No external frameworks.** Everything is custom vanilla JavaScript with professional animation libraries.

---

## 📁 Project Structure

### Directory Layout

```
portfolio_fix/
├── src/                              # Source code
│   ├── js/
│   │   ├── home.js                  # Homepage with hero animations
│   │   ├── projects.js              # Projects grid & filtering
│   │   ├── project-detail.js        # Individual project detail page
│   │   ├── about.js                 # About page content
│   │   ├── smooth-scroll.js         # Lenis scroll integration
│   │   ├── cursor.js                # Custom cursor animation
│   │   ├── loader.js                # Page preloader animation
│   │   ├── nav-toggle.js            # Navigation menu toggle
│   │   ├── i18n.js                  # Internationalization (translate function)
│   │   ├── utils.js                 # Utility functions (parallax, query params)
│   │   └── data/
│   │       ├── projects-data.js     # Projects metadata & content
│   │       └── translations.js      # ID/EN translation strings
│   └── styles/
│       ├── main.css                 # Global styles & CSS variables (445 lines)
│       └── components.css           # Component-specific styles
├── public/                           # Static assets
│   ├── images/
│   │   ├── parallax-bg.png         # Background images
│   │   ├── company_logo/           # Client company logos
│   │   └── projects/               # Project showcase images
│   └── file/                        # Downloadable files (CV/Resume)
├── dist/                            # Build output (git-ignored)
├── index.html                       # Home page entry point
├── projects.html                    # Projects listing page
├── project-detail.html              # Project detail page
├── about.html                       # About page
├── package.json                     # Dependencies & npm scripts
├── vite.config.js                   # Vite multi-page configuration
└── .gitignore                       # Git ignore rules

```

### Critical Files & Their Purpose

| File | Purpose | Dependencies |
|------|---------|--------------|
| `vite.config.js` | Multi-page build config | - |
| `index.html` | Home page entry point | `src/js/home.js` |
| `projects.html` | Projects listing page | `src/js/projects.js` |
| `project-detail.html` | Individual project display | `src/js/project-detail.js` |
| `about.html` | About page | `src/js/about.js` |
| `src/js/i18n.js` | Translation engine | `src/js/data/translations.js` |
| `src/js/smooth-scroll.js` | Lenis setup & GSAP sync | Lenis, GSAP |
| `src/js/data/projects-data.js` | Projects metadata | `src/js/i18n.js` |
| `src/js/data/translations.js` | All translation strings | - |
| `src/styles/main.css` | Global styles & variables | - |

---

## 🔄 Core Systems

### 1. **Internationalization (i18n)**

**Location:** `src/js/i18n.js` and `src/js/data/translations.js`

**How It Works:**
- Custom implementation (no external i18n library)
- Language preference stored in `localStorage`
- Activated via language toggle buttons (ID/EN)
- Instantly updates all text on page
- Recalculates GSAP ScrollTrigger for text wrapping changes

**Translation Structure:**
```javascript
// src/js/data/translations.js
const translations = {
  id: {
    home: {
      title: "Beranda",
      hero: "Muhammad Ferdi Akhdan",
      // ... more ID translations
    },
    about: { /* ... */ }
  },
  en: {
    home: {
      title: "Home",
      hero: "Muhammad Ferdi Akhdan",
      // ... more EN translations
    }
  }
};
```

**Usage:**
```javascript
// In any JS file:
import { translate } from './i18n.js';

const title = translate('home.title');  // Returns translated text
// Result: "Beranda" (if language is 'id') or "Home" (if language is 'en')

// In HTML (updated dynamically):
<h1 id="pageTitle">Beranda</h1>
// On language switch → pageTitle.textContent = translate('home.title')
```

**Key Points:**
- Use dot notation for nested translations: `'section.key'`
- Translations support HTML-safe content
- Always add new translations to BOTH `id` and `en` objects
- On language switch, all dynamic text updates + ScrollTrigger recalculates

---

### 2. **Animation Architecture**

**Primary Libraries:** GSAP 3.12.2 + ScrollTrigger plugin, custom Lenis integration

**Pattern:**
- Each page (home.js, projects.js, about.js) manages its own GSAP setup
- GSAP Timelines for sequential animations
- ScrollTrigger for scroll-based reveals
- Lenis listener syncs smooth scroll with ScrollTrigger calculations

**Common Animation Patterns:**

**A. Timeline Animations (Sequential)**
```javascript
// src/js/home.js example
const tl = gsap.timeline();
tl.from('.hero-title', { opacity: 0, y: 50, duration: 1 })
  .from('.hero-subtitle', { opacity: 0, y: 30, duration: 0.8 }, '-=0.5');
```

**B. Scroll-Triggered Reveals**
```javascript
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.section').forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 100,
    duration: 0.8
  });
});
```

**C. Parallax Effects**
```javascript
// Mouse-based or scroll-based parallax
document.addEventListener('mousemove', (e) => {
  const parallax = document.querySelector('.parallax-bg');
  const moveX = (e.clientX - window.innerWidth / 2) * 0.05;
  gsap.to(parallax, { x: moveX, duration: 0.5 });
});
```

**C. Staggered Animations**
```javascript
gsap.from('.project-card', {
  stagger: 0.1,  // 100ms delay between each element
  opacity: 0,
  y: 50,
  duration: 0.8
});
```

**Key Pattern:** Always initialize GSAP after DOM is fully loaded. On language change, call `ScrollTrigger.refresh()` to recalculate trigger positions.

---

### 3. **Smooth Scrolling**

**Location:** `src/js/smooth-scroll.js`
**Library:** Lenis 1.0.29

**How It Works:**
```javascript
// src/js/smooth-scroll.js
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';

const lenis = new Lenis({
  duration: 1.2,
  easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Sync with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add(() => lenis.raf(performance.now()));
```

**Features:**
- Smooth, physics-based scrolling (not jerky)
- Synced with GSAP ScrollTrigger animations
- Gesture support (touch, trackpad)
- Optional: Auto-hide navigation on scroll

**Navigation Auto-Hide Example:**
```javascript
let lastScrollY = 0;
lenis.on('scroll', (e) => {
  const nav = document.querySelector('nav');
  if (e.velocity > 0.5) {
    // Scrolling down → hide nav
    gsap.to(nav, { y: -100, duration: 0.3 });
  } else if (e.velocity < -0.5) {
    // Scrolling up → show nav
    gsap.to(nav, { y: 0, duration: 0.3 });
  }
});
```

---

### 4. **Module Architecture**

**Pattern:**
- **Page-Specific Modules:** Each page (home.js, projects.js, about.js, about.js) has its own entry point
- **Shared Utilities:** smooth-scroll.js, i18n.js, utils.js used across all pages
- **Data Separation:** projects-data.js and translations.js are separate from logic
- **Vite Code Splitting:** Each page gets its own bundle, shared code is in a common chunk

**Entry Points:**
```
index.html → src/js/home.js
projects.html → src/js/projects.js
project-detail.html → src/js/project-detail.js
about.html → src/js/about.js
```

**Import Pattern:**
```javascript
// src/js/home.js
import { initSmoothScroll } from './smooth-scroll.js';
import { translate } from './i18n.js';
import { calculateParallax } from './utils.js';

initSmoothScroll();

// ... rest of home.js
```

---

## 📝 Coding Conventions

### JavaScript

- **Module System:** ES6+ `import`/`export`
- **Naming:**
  - Variables & functions: `camelCase` → `translateKey()`, `scrollPosition`
  - Classes: `PascalCase` → `SmoothScroller`
  - Constants: `SCREAMING_SNAKE_CASE` → `MAX_PROJECTS = 12`
- **Function Description:** Use descriptive names
  - ✅ Good: `calculateParallaxOffset()`, `initializeScrollTrigger()`
  - ❌ Bad: `calc()`, `init()`
- **Functions:** Keep focused and small (single responsibility)
- **Comments:** Only for complex logic, animation timing, or non-obvious intent
  - ✅ Good: `// Recalculate ScrollTrigger on language change to account for text wrapping`
  - ❌ Bad: `// Get the title` (obvious from code)
- **Code Style:**
  - Semicolons at end of statements
  - Use `const` by default, `let` if value changes
  - Avoid `var`
  - Use arrow functions `() => {}`
  - Use template literals for string interpolation: `` `Hello ${name}` ``

### CSS

- **CSS Variables:** Define themes and repeated values
  ```css
  :root {
    --color-primary: #ff6b6b;
    --color-secondary: #4ecdc4;
    --spacing-base: 16px;
    --spacing-large: 32px;
    --font-family-main: 'Inter', -apple-system, sans-serif;
  }

  /* Usage */
  .button {
    color: var(--color-primary);
    padding: var(--spacing-base);
  }
  ```

- **Layout:** Flexbox for components, Grid for page layouts
- **Mobile First:** Start with mobile styles, then add `@media (min-width: 768px)` for larger screens
- **Naming Convention:** kebab-case for classes
  ```css
  .project-card { /* component */ }
  .project-card__title { /* element, BEM-like */ }
  .project-card--featured { /* modifier */ }
  .is-active { /* state */ }
  ```

- **Organization:**
  - Global styles → `src/styles/main.css`
  - Component-specific → `src/styles/components.css`
  - No inline styles in HTML

### HTML Files

- **File Naming:** kebab-case → `project-detail.html`, `about.html`
- **IDs for JS Hooks:** Use for DOM manipulation
  ```html
  <h1 id="pageTitle">Beranda</h1> <!-- JS updates this on language switch -->
  <button id="langToggle">EN</button>
  ```
- **Semantic HTML:** Use `<header>`, `<main>`, `<section>`, `<footer>` appropriately
- **Accessibility:** Include `alt` text for images, `aria-label` for icons

### File Naming

| File Type | Convention | Example |
|-----------|-----------|---------|
| HTML | kebab-case | `project-detail.html`, `about.html` |
| JavaScript | camelCase | `projectDetail.js`, `smoothScroll.js` |
| CSS | kebab-case (classes) | `.project-card`, `.nav-toggle` |
| Images | kebab-case | `parallax-bg.png`, `company-logo.png` |
| Variables (CSS) | kebab-case | `--color-primary`, `--spacing-large` |

---

## 🚀 Development Workflow

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   # Runs on http://localhost:5173 (typical Vite default)
   # HMR enabled: changes update instantly without page reload
   ```

3. **Build for production:**
   ```bash
   npm run build
   # Creates optimized /dist folder with code splitting
   # Each page gets its own bundle, shared code in common chunk
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   # Runs the production build locally to test
   ```

### Development Practices

**During Development:**
- Use `npm run dev` for instant feedback with HMR
- Check all page variants: home, projects, about, individual project
- Test responsive behavior: mobile (375px), tablet (768px), desktop (1440px)
- Verify language switching (ID ↔ EN) on each page
- Check animations in DevTools (throttle to see them better)

**Before Pushing Changes:**
- Run `npm run build` to verify production build succeeds
- Test the `/dist` folder with `npm run preview`
- Check bundle sizes (Vite shows them on build)
- Ensure no console errors in DevTools
- Verify i18n: All new text has both ID and EN translations
- Test on actual mobile device if possible

**Performance Profiling:**
```bash
# Build and check bundle size
npm run build
# Look for warnings about large chunks

# Use Chrome DevTools → Lighthouse for performance audit
# Use Chrome DevTools → Performance tab to profile animations
```

---

## 🎯 Important Patterns & Best Practices

### Animation Patterns

✅ **DO:**
- Initialize ScrollTrigger after DOM is ready: `document.addEventListener('DOMContentLoaded', ...)`
- Call `ScrollTrigger.refresh()` after language change (text wrapping affects scroll positions)
- Use GSAP timelines for complex, multi-step animations
- Use stagger delays for multiple element animations
- Keep animation durations reasonable (0.6s-1.2s typically)
- Test animations by throttling DevTools (simulate slow network)

❌ **DON'T:**
- Create blocking animations that prevent page interaction
- Animate too many elements simultaneously (impacts performance)
- Forget to register GSAP plugins: `gsap.registerPlugin(ScrollTrigger)`

### Data Management

- **Projects Metadata:** Keep in `src/js/data/projects-data.js`
  ```javascript
  export const projects = [
    { id: 1, title: 'Project Name', description: '...', image: '...' },
    // ... more projects
  ];
  ```

- **Translations:** Keep in `src/js/data/translations.js`
  ```javascript
  export const translations = {
    id: { /* all Indonesian text */ },
    en: { /* all English text */ }
  };
  ```

- **Query Parameters:** Use utilities from `src/js/utils.js`
  ```javascript
  // Get project ID from URL: ?id=123
  const projectId = new URLSearchParams(window.location.search).get('id');
  ```

- **User Preferences:** Store in localStorage
  ```javascript
  // Language preference
  localStorage.setItem('language', 'en');
  const lang = localStorage.getItem('language') || 'id';

  // Scroll position
  localStorage.setItem('lastScroll', window.scrollY);
  ```

### Styling Patterns

**Responsive Breakpoints:**
```css
/* Mobile First Approach */
.project-grid {
  display: grid;
  grid-template-columns: 1fr;  /* 1 column on mobile */
  gap: var(--spacing-large);
}

@media (min-width: 768px) {
  .project-grid {
    grid-template-columns: repeat(2, 1fr);  /* 2 columns on tablet */
  }
}

@media (min-width: 1024px) {
  .project-grid {
    grid-template-columns: repeat(3, 1fr);  /* 3 columns on desktop */
  }
}
```

**CSS Variables for Theme:**
```css
:root {
  /* Colors */
  --color-bg: #ffffff;
  --color-text: #000000;
  --color-primary: #ff6b6b;
  --color-accent: #4ecdc4;

  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-base: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;

  /* Typography */
  --font-family-main: 'Inter', sans-serif;
  --font-size-xs: 12px;
  --font-size-sm: 14px;
  --font-size-base: 16px;
  --font-size-lg: 20px;
  --font-size-xl: 32px;

  /* Animation */
  --transition-fast: 200ms ease;
  --transition-normal: 300ms ease;
}
```

### Performance Best Practices

- **Code Splitting:** Vite automatically splits per page, no manual config needed
- **Lazy Loading:** Use `loading="lazy"` for images below the fold
  ```html
  <img src="project.jpg" alt="Project" loading="lazy">
  ```

- **Intersection Observer:** Use for visibility checks instead of scroll events
  ```javascript
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.lazy-element').forEach(el => observer.observe(el));
  ```

- **Event Delegation:** Attach listeners to parent instead of each child
  ```javascript
  // ✅ Good: One listener on container
  const container = document.querySelector('.project-list');
  container.addEventListener('click', (e) => {
    if (e.target.closest('.project-card')) {
      // Handle click
    }
  });

  // ❌ Bad: Listener on each card (memory leak risk)
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => { /* ... */ });
  });
  ```

---

## 🌍 Bilingual Content Guidelines

**Important:** This is a bilingual portfolio (ID/EN). All content must support both languages.

### Adding New Text

1. **Add to translations.js** (BOTH languages):
   ```javascript
   // src/js/data/translations.js
   export const translations = {
     id: {
       projects: {
         title: 'Proyek Saya',  // Indonesian
       }
     },
     en: {
       projects: {
         title: 'My Projects',   // English
       }
     }
   };
   ```

2. **Use in HTML:**
   ```html
   <h2 id="projectsTitle">Proyek Saya</h2>
   ```

3. **Update on Language Switch:**
   ```javascript
   // In language toggle handler
   document.getElementById('projectsTitle').textContent = translate('projects.title');
   ```

### Text Wrapping Considerations

- **English text is typically longer** than Indonesian
- Always use Flexbox/Grid to accommodate different text lengths
- Avoid fixed widths for text containers
- Recalculate ScrollTrigger on language change: `ScrollTrigger.refresh()`

---

## 📦 Adding Features

### Adding a New Page

1. **Create HTML file** (e.g., `services.html`):
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Services</title>
     <link rel="stylesheet" href="./src/styles/main.css">
     <link rel="stylesheet" href="./src/styles/components.css">
   </head>
   <body>
     <main id="app"></main>
     <script type="module" src="./src/js/services.js"></script>
   </body>
   </html>
   ```

2. **Create JavaScript module** (`src/js/services.js`):
   ```javascript
   import { initSmoothScroll } from './smooth-scroll.js';
   import { translate } from './i18n.js';

   initSmoothScroll();

   // Page-specific logic here
   const title = translate('services.title');
   document.querySelector('h1').textContent = title;
   ```

3. **Update vite.config.js** to include new page:
   ```javascript
   input: {
     main: resolve(__dirname, 'index.html'),
     services: resolve(__dirname, 'services.html'),  // Add this
     // ... other pages
   }
   ```

4. **Add translations** to `src/js/data/translations.js`:
   ```javascript
   id: {
     services: {
       title: 'Layanan Kami',
       // ... more translations
     }
   }
   ```

### Adding a New Animation

1. **Use existing GSAP/ScrollTrigger pattern:**
   ```javascript
   import gsap from 'gsap';
   import { ScrollTrigger } from 'gsap/ScrollTrigger';

   gsap.registerPlugin(ScrollTrigger);

   // In your page module (e.g., home.js)
   gsap.from('.fancy-element', {
     scrollTrigger: {
       trigger: '.fancy-element',
       start: 'top 80%',
       end: 'top 50%',
     },
     opacity: 0,
     y: 50,
     duration: 0.8
   });
   ```

2. **Remember to recalculate on language change:**
   ```javascript
   window.addEventListener('languagechange', () => {
     ScrollTrigger.refresh();  // Recalculate all triggers
   });
   ```

### Adding New Project

1. **Add to `src/js/data/projects-data.js`:**
   ```javascript
   export const projects = [
     {
       id: 1,
       titleKey: 'projects.project1.title',  // Translation key
       descriptionKey: 'projects.project1.description',
       image: '/images/projects/project1.jpg',
       link: '?id=1',
       tags: ['mobile', 'react-native']
     },
     // Add new project here
   ];
   ```

2. **Add translations** to `translations.js`:
   ```javascript
   id: {
     projects: {
       project2: {
         title: 'Nama Proyek Baru',
         description: 'Deskripsi proyek...'
       }
     }
   },
   en: {
     projects: {
       project2: {
         title: 'New Project Name',
         description: 'Project description...'
       }
     }
   }
   ```

---

## 🔍 Debugging Tips

### Common Issues

**Problem:** Animations not playing
**Solution:**
- Verify GSAP is imported: `import gsap from 'gsap'`
- Check ScrollTrigger is registered: `gsap.registerPlugin(ScrollTrigger)`
- Ensure DOM elements exist before animating

**Problem:** Language not switching
**Solution:**
- Verify translations.js has all keys in both `id` and `en`
- Check localStorage is not full (rare but possible)
- Ensure `translate()` function is imported from correct path
- Verify HTML element has correct ID that JS is targeting

**Problem:** Scroll position wrong after language change
**Solution:**
- Call `ScrollTrigger.refresh()` after updating text
- Verify no layout shift happening (measure paint/layout in DevTools)

**Problem:** Build fails
**Solution:**
- Check for syntax errors: `npm run build` gives error line numbers
- Verify all imports are correct paths
- Ensure no circular imports
- Clear `/dist` and `node_modules` and reinstall: `rm -rf dist node_modules && npm install`

### DevTools Debugging

**Chrome DevTools Tips:**
1. **Performance Tab:** Profile animations at 4x throttle
2. **Elements Tab:** Inspect CSS, check computed styles
3. **Console:** Check for errors/warnings
4. **Network Tab:** Verify all assets load correctly
5. **Animation Inspector:** See GSAP animations play/pause

**Lighthouse Audit:**
```bash
npm run build
npm run preview
# Open Chrome → DevTools → Lighthouse → Analyze page load → Check Performance score
```

---

## 📚 Project Statistics

- **HTML Files:** 4 (index, projects, project-detail, about)
- **JavaScript Modules:** 11 (home, projects, project-detail, about, smooth-scroll, cursor, loader, nav-toggle, i18n, utils, + data files)
- **CSS Files:** 2 (main ~445 lines, components)
- **Total Dependencies:** 3 (Vite, GSAP, Lenis)
- **Supported Languages:** 2 (Indonesian, English)
- **Build Tool:** Vite with automatic code splitting
- **Git Status:** Clean (node_modules in .gitignore)

---

## 🔗 Quick Reference Links

**Key File Paths:**
- Configuration: `vite.config.js`
- Home page: `index.html` → `src/js/home.js`
- Projects page: `projects.html` → `src/js/projects.js`
- Translations: `src/js/data/translations.js`
- Global styles: `src/styles/main.css`
- Animations setup: Each page's JS file (e.g., `src/js/home.js`)

**Important Functions:**
- Translate: `import { translate } from './src/js/i18n.js'`
- Smooth scroll: `import { initSmoothScroll } from './src/js/smooth-scroll.js'`
- Utilities: `import { calculateParallax, getQueryParam } from './src/js/utils.js'`

**NPM Scripts:**
- `npm run dev` — Development server with HMR
- `npm run build` — Production build
- `npm run preview` — Preview production build

---

## ✅ Checklist Before Deployment

- [ ] Run `npm run build` successfully
- [ ] No console errors in production build
- [ ] `npm run preview` works on all pages
- [ ] All pages responsive on mobile (375px), tablet (768px), desktop
- [ ] Language toggle (ID/EN) works on all pages
- [ ] All new text has translations in BOTH languages
- [ ] ScrollTrigger.refresh() called after language change
- [ ] All images load correctly (`npm run preview`)
- [ ] No unused CSS or JavaScript in bundle
- [ ] Lighthouse Performance score > 80
- [ ] Mobile usability score > 90

---

## 📖 Next Steps & Maintenance

**Regular Maintenance:**
- Keep dependencies updated: `npm update`
- Review bundle sizes after adding features
- Monitor Lighthouse scores quarterly
- Archive old projects (move to "past projects" section)

**Feature Ideas:**
- Dark mode toggle (add to i18n + CSS variables)
- Contact form (backend integration)
- Blog section (new page + dynamic content)
- Case studies (expanded project details)
- Client testimonials (new section with carousel)

**Performance Optimization Ideas:**
- Lazy load images below fold
- Compress images (WebP format)
- Generate critical CSS
- Implement service worker for PWA features

---

**Last Updated:** March 2026
**Maintained By:** Development Team
**Framework:** Vanilla JavaScript + Vite
**License:** [Your License Here]
