# BlackSpike Company Landing Page

A modern, responsive landing page built with Astro and Tailwind CSS for our provisional company website.

## About This Document

**IMPORTANT: This file contains instructions and context for AI to work on the website. It must always be taken into account when making changes or additions to the codebase.**

This README serves as the primary reference for understanding the project structure, deployment process, and development roadmap. All AI assistants should consult this document before making modifications.

## Project Description

This is our provisional company landing page built on the [BlackSpike Astro Landing Page theme](https://astro.build/themes/details/blackspike-astro-landing-page/). We've customized it for our specific business needs while maintaining the modern design and performance optimizations of the original theme.

## Roadmap

### Phase 1: Installation & Setup ✅ COMPLETED
- [x] Project initialization with Astro 5
- [x] Tailwind CSS 4 integration
- [x] Sharp image optimization installation
- [x] Netlify deployment configuration
- [x] GitHub integration for automatic deployments
- [x] Build process optimization
- [x] Static site generation setup

### Phase 2: Language Management 🌐 COMPLETED
- [x] Astro i18n integration setup
- [x] Language detection and routing configuration
- [x] URL structure setup (/en/, /es/, /)
- [x] Translation files structure (JSON/YAML)
- [x] Component internationalization (i18n)
- [x] Language switcher component
- [x] SEO-friendly language URLs
- [x] Meta tags for multiple languages
- [x] Font loading optimization for different languages
- [x] Content translation (English/Spanish)
- [x] Date and number formatting per locale
- [x] RTL support preparation (if needed)
- [x] Language-specific sitemap generation
- [x] hreflang tags implementation
- [x] Language detection middleware

### Phase 3: Form Management 📋 PLANNED
- [ ] Contact form component implementation
- [ ] Form validation and error handling
- [ ] Netlify Forms integration
- [ ] Email notification setup
- [ ] Spam protection (reCAPTCHA/honeypot)
- [ ] Form submission success/error states
- [ ] Mobile-responsive form design
- [ ] Form accessibility improvements
- [ ] Multilingual form labels and messages
- [ ] Language-specific form validation messages

### Phase 4: Content Customization 📋 PLANNED
- [ ] Company information and branding updates
- [ ] Service offerings content
- [ ] Team member profiles
- [ ] Case studies and portfolio items
- [ ] Testimonials and client reviews
- [ ] Blog section setup (if needed)
- [ ] Legal pages (Privacy Policy, Terms of Service)
- [ ] Custom imagery and graphics
- [ ] Content SEO optimization
- [ ] Multilingual content management

### Phase 5: Refine and Go Live 🎯 FUTURE
- [ ] SEO meta tags and structured data
- [ ] Performance optimization and Core Web Vitals
- [ ] Analytics integration (Google Analytics, etc.)
- [ ] Social media meta tags
- [ ] Custom domain setup
- [ ] SSL certificate verification
- [ ] 404 page customization
- [ ] Search engine submission
- [ ] Final testing and quality assurance
- [ ] Multilingual SEO optimization

## Tech Stack

### Core Technologies
- **Astro 5** - Static site generator with JSX support
- **Tailwind CSS 4** - Utility-first CSS framework
- **Sharp** - High-performance image processing
- **Swiper.js** - Touch slider for carousels

### Development Features
- **Image Optimization** - AVIF format support with automatic optimization
- **Font Loading** - Local Inter font with CSS variables
- **Container Queries** - Modern CSS layout features
- **CSS Animations** - JS-free scroll-linked animations
- **Accordions** - Native HTML details/summary with animations
- **Internationalization** - Multi-language support (English/Spanish)

### Deployment
- **Netlify** - Static hosting with automatic deployments
- **GitHub Integration** - Continuous deployment from repository
- **Build Process** - `npm run build` generates optimized static files
- **Node.js 18** - LTS version for stability

## Deployment Instructions

### Prerequisites
- Node.js 18+ installed
- Git repository connected to GitHub
- Netlify account

### Local Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

### Netlify Deployment
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Automatic deployments on every push to main branch

### Environment Variables
No environment variables required for current setup. Form handling will require Netlify Forms configuration in Phase 3.

## File Structure
```
src/
├── components/           # Astro components
│   └── LanguageSwitcher.astro
├── data/                 # JSON content files
├── i18n/                 # Internationalization files
│   ├── content/          # Language-specific content
│   │   ├── en.json
│   │   └── es.json
│   ├── ui.ts             # UI translations (strings/labels)
│   └── utils.ts          # i18n helpers (getLangFromUrl, createHref, etc.)
├── layouts/              # Page layouts
├── pages/                # Route pages
│   └── es/               # Spanish pages
└── assets/               # CSS, fonts, images
```

## Internationalization (i18n)

The site now supports multiple languages with the following structure:

- **English (Default)**: `/` - Canonical version
- **Spanish**: `/es/` - Spanish version

### Features Implemented:
- ✅ Language detection from URL
- ✅ Language switcher component in header
- ✅ SEO-friendly URLs with proper hreflang tags
- ✅ Canonical URLs pointing to English version
- ✅ Open Graph meta tags with locale
- ✅ Content translation system
- ✅ Fallback to English content if translation missing

### URL Structure:
- Homepage (English): `https://yoursite.com/`
- Homepage (Spanish): `https://yoursite.com/es/`
- Credits (English): `https://yoursite.com/credits/`
- Credits (Spanish): `https://yoursite.com/es/credits/`

## Credits

Based on the [BlackSpike Astro Landing Page theme](https://astro.build/themes/details/blackspike-astro-landing-page/) by blackspike design. Original theme licensed under Creative Commons Attribution 4.0 International Public License.

---

**Last Updated:** Phase 2 completed - Ready for Phase 3 (Form Management) development

