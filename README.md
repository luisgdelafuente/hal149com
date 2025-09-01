# Frontier Agency Website

A complete, best-in-class Astro website for a business agency with all the features needed to present the company, offerings, news, git-hosted images, ultra-optimized for SEO, and more.

## HOW TO USE THIS DOCUMENT 

**IMPORTANT: This file contains instructions and context for AI to work on the website. It must always be taken into account when making changes or additions to the codebase.**

**DEVELOPMENT RULE: All phases must use numbered tasks (e.g., 4.1, 4.2, etc.) and each task must produce specific and measurable changes so we can track progress effectively.**

AI AGENTS ARE NEVER running install or builld commands by themselves. Always ask the user to run the commands when needed. 

This README serves as the primary reference for understanding the project structure, deployment process, and development roadmap. All AI assistants should consult this document before making modifications.

## Project Description

This is our complete business agency website built on the [BlackSpike Astro Landing Page theme](https://astro.build/themes/details/blackspike-astro-landing-page/). We've customized it for Frontier Agency's specific business needs while maintaining the modern design and performance optimizations of the original theme, and enhanced it with comprehensive features for a professional agency presence.

## Roadmap

## VERSION 1 🚀
**All basic functionalities and optimizations to get a functional website for our AI Agency including company pages, contact forms, posts, etc.**

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

### Phase 2.1: Complete Language Functionality ✅ **COMPLETED**
- [x] **2.1.1** Basic language switcher component implementation
- [x] **2.1.2** Homepage language switching (English ↔ Spanish)
- [x] **2.1.3** Static pages language switching (about, credits, thank-you)
- [x] **2.1.4** Blog archive pages language switching (/posts/ ↔ /es/posts/)
- [x] **2.1.5** Individual blog post language switching using enSlug/esSlug fields
- [x] **2.1.6** Navigation menu language-aware URL generation
- [x] **2.1.7** Internal link translation (all href attributes)
- [x] **2.1.8** Breadcrumb navigation language switching
- [x] **2.1.9** Search functionality language switching
- [ ] **2.1.10** Pagination language switching (will implement when >10 posts)
- [ ] **2.1.11** Tag pages language switching (will implement when tags are added)
- [x] **2.1.12** RSS feed language switching
- [ ] **2.1.13** 404 page language switching (will implement when 404 page is added)
- [x] **2.1.14** Language switcher fallback handling (when translation not available)

### Phase 3: Form Management ✅ COMPLETED
- [x] Contact form component implementation (enhanced existing DialogModal.astro)
- [x] Form validation and error handling (client-side validation with multilingual messages)
- [x] Netlify Forms integration (netlify attributes and hidden static form for detection)
- [x] Email notification setup (configured in Netlify dashboard)
- [x] Spam protection (honeypot field implemented)
- [x] Form submission success/error states (thank you message in modal)
- [x] Mobile-responsive form design (existing responsive design maintained)
- [x] Form accessibility improvements (proper labels, ARIA attributes, focus management)
- [x] Multilingual form labels and messages (English/Spanish support)
- [x] Language-specific form validation messages (localized error messages)
 - [x] Newsletter subscription form integration (distinct Netlify form: `newsletter`)
 - [x] Hidden static `newsletter` form added in layout for Netlify detection
 - [x] AJAX submission with inline success message for newsletter form

### Phase 4: Blog Post Implementation 📝 IN PROGRESS
- [x] **4.1** Configure content collections in astro.config.mjs with type-safe schema for posts
- [x] **4.2** Create src/content/posts/ directory structure with proper organization
- [x] **4.3** Define frontmatter schema with all required metadata fields (title, description, date, author, tags, image, lang, enSlug, esSlug)
- [x] **4.4** Create posts archive page (/posts/) with responsive grid layout and pagination (10 posts per page)
- [x] **4.5** Create Spanish posts archive page (/es/posts/) with same functionality as English version
- [x] **4.6** Create individual post page template (/posts/[slug]/) with full Markdown content rendering
- [x] **4.7** Create Spanish individual post page template (/es/posts/[slug]/) with same functionality
- [x] **4.8** ~~Implement tag filtering pages~~ - **MOVED TO PHASE 5** - Basic tag functionality removed for now
- [x] **4.9** Create LatestPostsSection.astro component with latest 3 posts display
- [x] **4.10** Integrate LatestPostsSection into homepage with responsive design
- [x] **4.11** Generate RSS feeds for both languages (/rss.xml and /es/rss.xml)
- [x] **4.12** Implement client-side search functionality with debounced input and results highlighting
- [x] **4.14** Implement structured data (JSON-LD) for posts and archive pages
- [x] **4.15** Add Open Graph and Twitter Card meta tags to all post pages
- [x] **4.16** Configure image optimization for post images using existing Sharp setup
- [x] **4.17** Ensure all post components are fully responsive (mobile, tablet, desktop)
- [x] **4.18** Add proper meta title and description to all post pages and archive pages
- [x] **4.19** Create 6 dummy AI-related posts (3 English + 3 Spanish pairs) with full Markdown features for testing
- [x] **4.20** Test all blog functionality with dummy posts (separate testing session)
- [x] **4.21** Fix Homepage Posts Section Design - Apply theme's dark background, typography classes (bs-h2, bs-h3, bs-body-text), container utilities, and surface styling
- [x] **4.22** Fix Posts Archive Pages Design - Apply theme background, surface colors, typography classes, and button styling for both English and Spanish versions
- [x] **4.23** Fix Individual Post Content Styling - Replace custom prose styles with theme-consistent typography, colors, and surface styling
- [x] **4.24** Apply Consistent Button Styling - Replace custom button classes with bs-btn theme class across all post-related components
- [x] **4.25** Update README Phase 4 with design consistency fixes tasks
- [x] **4.26** Improve prose content formatting - Fix spacing, typography, and layout for all markdown elements in post content
- [x] **4.27** Fix critical prose formatting issues - Poor contrast, broken code blocks, bad readability
- [x] **4.28** Fix missing bullet points in lists - Add proper list styling with visible bullets and markers
- [x] **4.29** Image management strategy for git-hosted images in posts - **COMPLETED** - Implemented single gallery approach with `featured` field in schema, updated all posts to use `/blog-images/` paths, created comprehensive documentation, optimized image display with responsive heights for individual posts and centered cropping for archives

### Phase 5: Content Customization 📋 PARTIAL
- [ ] Company information and branding updates
- [ ] Service offerings content
- [ ] Team member profiles
- [ ] Case studies and portfolio items
- [ ] Testimonials and client reviews
- [ ] Legal pages (Privacy Policy, Terms of Service)
- [ ] Custom imagery and graphics
- [ ] Content SEO optimization
- [ ] Multilingual content management
- [x] Content management strategy for posts (markdown files in git workflow)
- [ ] Author profiles and author pages implementation
- [ ] Content organization strategy (categories vs tags system)
- [ ] Draft posts functionality for unpublished content
- [ ] Post scheduling system for future publications
- [ ] Comments system integration (external like Disqus or built-in)
- [ ] Enhanced social sharing integration for posts
- [ ] **Tag functionality enhancement**   - Advanced tag management system with filtering, search, and related posts
- [ ] **Related posts system** - Implement alternative related posts logic (not tag-based)

### Phase 6: Final Configurations ✅ COMPLETED
- [x] **6.1** Robots.txt configuration
  - ✅ Created simple robots.txt file allowing all crawling
  - ✅ Added sitemap reference for better SEO indexing
  - ✅ File located at `public/robots.txt`

### Phase 7: Performance Optimization & Go Live 🎯 PENDING

**Critical performance optimizations required before launch to achieve optimal Core Web Vitals scores and user experience.**

#### 7.1: Responsive Image Optimization 🖼️ ✅ **COMPLETED**
- [x] **7.1.1** Implement dynamic image sizing solution for blog post images
  - **Problem**: Mobile devices receive 800px images when displaying at 379px (90KB+ waste)
  - **Root Cause**: Astro Image component doesn't work with dynamic `/public/` paths from frontmatter
  - **Solution Implemented**: Custom ResponsivePostImage component with asset mapping
    - [x] **Step 1**: Moved blog images from `/public/blog-images/` to `/src/assets/blog-images/`
    - [x] **Step 2**: Created ResponsivePostImage.astro component with image path mapping
    - [x] **Step 3**: Updated all blog components to use the new responsive component
    - [x] **Step 4**: Implemented responsive widths and sizes attributes for optimal delivery
  - **Results Achieved**: 
    - ✅ 60-82% image size reduction across all blog post images
    - ✅ Multiple responsive sizes generated (400px, 600px, 800px, 1200px)
    - ✅ Proper srcset and sizes attributes for optimal device delivery
    - ✅ WebP format optimization with fallback support
    - ✅ 90KB+ bandwidth savings achieved as expected
- [ ] **7.1.2** Optimize hero and content images for responsive delivery
  - [ ] Implement proper `sizes` attributes for all responsive images
  - [ ] Add WebP/AVIF format support with fallbacks
  - [ ] Implement lazy loading for below-the-fold images
  - [ ] Optimize image compression ratios for different screen sizes
- [ ] **7.1.3** Complete image migration from `/public/` to `/src/assets/` for Astro optimization
  - [ ] Move remaining content images following `IMAGE_MIGRATION_INSTRUCTIONS.md`
  - [ ] Update all component references to use optimized image paths
  - [ ] Verify Sharp processing is working for all migrated images
  - [ ] Test responsive behavior across all device sizes

#### 7.2: CSS Render-Blocking Optimization ⚡ **PENDING**
- [ ] **7.2.1** Implement critical CSS inlining strategy
  - **Problem**: 430ms render-blocking CSS delays affecting Core Web Vitals
  - **Current Status**: Optimization attempts broke layout, changes reverted
  - **Solution Approach**:
    - [ ] **Step 1**: Identify critical above-the-fold CSS classes
    - [ ] **Step 2**: Create inline critical CSS for immediate rendering
    - [ ] **Step 3**: Defer non-critical CSS loading with preload
    - [ ] **Step 4**: Test layout integrity across all pages
- [ ] **7.2.2** Optimize CSS delivery and loading
  - [ ] Implement CSS code splitting for page-specific styles
  - [ ] Add preconnect hints for critical origins
  - [ ] Optimize font loading with `font-display: swap`
  - [ ] Minimize CSS bundle size through tree-shaking
- [ ] **7.2.3** Implement progressive CSS loading
  - [ ] Load essential styles inline for immediate rendering
  - [ ] Defer non-critical styles with `media="print"` and JavaScript
  - [ ] Implement CSS loading state management
  - [ ] Add fallback styles for progressive enhancement

#### 7.3: Core Web Vitals Optimization 📊 **PENDING**
- [ ] **7.3.1** Optimize Largest Contentful Paint (LCP)
  - [ ] Prioritize hero image loading and optimization
  - [ ] Implement resource hints (preload, prefetch) for critical resources
  - [ ] Optimize server response times and TTFB
  - [ ] Minimize render-blocking resources
- [ ] **7.3.2** Optimize First Input Delay (FID) and Interaction to Next Paint (INP)
  - [ ] Reduce JavaScript bundle size and execution time
  - [ ] Implement code splitting for non-critical JavaScript
  - [ ] Optimize event handlers and interaction responsiveness
  - [ ] Add loading states for interactive elements
- [ ] **7.3.3** Optimize Cumulative Layout Shift (CLS)
  - [ ] Set explicit dimensions for all images and media
  - [ ] Reserve space for dynamic content (ads, embeds)
  - [ ] Optimize font loading to prevent layout shifts
  - [ ] Implement skeleton loading states

#### 7.4: Bundle and Asset Optimization 📦 **PENDING**
- [ ] **7.4.1** JavaScript optimization
  - [ ] Implement tree-shaking for unused code elimination
  - [ ] Add code splitting for route-based chunks
  - [ ] Optimize third-party script loading
  - [ ] Implement service worker for caching strategy
- [ ] **7.4.2** Asset delivery optimization
  - [ ] Configure proper cache headers for static assets
  - [ ] Implement CDN optimization for global delivery
  - [ ] Add compression (gzip/brotli) for all text assets
  - [ ] Optimize favicon and app icon delivery

#### 7.5: Performance Testing and Validation 🧪 **PENDING**
- [ ] **7.5.1** Comprehensive performance testing
  - [ ] Run Lighthouse audits on all major pages
  - [ ] Test performance across different devices and networks
  - [ ] Validate Core Web Vitals scores meet targets
  - [ ] Test performance under load and stress conditions
- [ ] **7.5.2** Performance monitoring setup
  - [ ] Implement Real User Monitoring (RUM) for performance tracking
  - [ ] Set up performance budgets and alerts
  - [ ] Configure automated performance testing in CI/CD
  - [ ] Monitor performance metrics post-launch

#### 7.6: Final Launch Preparation 🚀 **PENDING**
- [ ] **7.6.1** Pre-launch checklist
  - [ ] Verify all performance optimizations are working
  - [ ] Test all functionality across browsers and devices
  - [ ] Validate SEO meta tags and structured data
  - [ ] Confirm analytics and tracking are properly configured
- [ ] **7.6.2** Go-live deployment
  - [ ] Deploy to production with all optimizations
  - [ ] Monitor performance metrics immediately post-launch
  - [ ] Set up ongoing performance monitoring
  - [ ] Document performance optimization results and learnings

---

## VERSION 2 🔮
**Optimization updates, automatisms to improve V1 functionalities, connection to social media, admin pane, etc.**

### Phase 8: Content Management System Implementation 📝 FUTURE
- [ ] **8.1** Decap CMS (formerly Netlify CMS) integration setup
  - Git-based content management that works with existing markdown workflow
  - Admin interface accessible at `/admin/` route
  - Seamless integration with current Netlify deployment
  - Maintains version control benefits of git-based content
- [ ] **8.2** Admin panel configuration for posts CRUD operations
  - Create, read, update, delete functionality for blog posts
  - Rich text editor with markdown support
  - Image upload and management through admin interface
  - Draft/publish workflow management
- [ ] **8.3** Bilingual content management setup
  - English/Spanish content editing support
  - Cross-reference management (enSlug/esSlug) through admin UI
  - Language-specific content organization
  - Multilingual preview capabilities
- [ ] **8.4** User authentication and role management
  - Admin user setup and authentication
  - Role-based access control (admin, editor, contributor)
  - Secure admin access with proper authentication flow
  - Multi-user collaboration features
- [ ] **8.5** Content workflow optimization
  - Auto-deployment triggers on content changes
  - Content preview before publishing
  - Bulk content operations and management
  - SEO metadata management through admin interface

### Phase 9: Advanced Performance Optimization 🎯 FUTURE
- [ ] Render-blocking CSS optimization
- [ ] Critical CSS inlining
- [ ] Image delivery optimization (responsive images)
- [ ] Preconnect hints for critical origins
- [ ] Core Web Vitals improvement
- [ ] Bundle size optimization
- [ ] Lazy loading enhancements

### Phase 9: Social Media & External Integrations 🌐 FUTURE
- [ ] Social media API connections
- [ ] Automated social sharing
- [ ] Instagram/LinkedIn feed integration
- [ ] Analytics dashboard integration
- [ ] Third-party CRM integration
- [ ] Email marketing automation
- [ ] Social login functionality

### Phase 10: Content Management & Automation 🤖 FUTURE
- [ ] Admin panel implementation
- [ ] Content management interface
- [ ] Automated content scheduling
- [ ] Draft management system
- [ ] Multi-author workflows
- [ ] Content approval processes
- [ ] Automated SEO optimization
- [ ] Bulk content operations

### Phase 11: Advanced Features & Enhancements 🚀 FUTURE
- [ ] Advanced search functionality
- [ ] User accounts and profiles
- [ ] Comment system with moderation
- [ ] Newsletter automation
- [ ] Lead scoring system
- [ ] A/B testing framework
- [ ] Advanced analytics tracking
- [ ] Customer portal functionality

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

## Challenges & Solutions

### Render-Blocking CSS Performance Issue ❌ **NOT SOLVED**
**Problem**: 430ms render-blocking CSS delays affecting Core Web Vitals scores.
**Status**: Optimization attempts broke website layout, changes reverted.

### Language Switcher Functionality ✅ **RESOLVED**
**Problem**: Language switcher only worked on homepage.
**Solution**: Implemented comprehensive URL generation utilities for all page types.
**Status**: Works across all pages (homepage, blog posts, archives, navigation).

### Netlify Forms Integration ✅ **RESOLVED**
**Problem**: Dynamic modal forms not detected by Netlify.
**Solution**: Dual-form approach with hidden static form + dynamic modal.
**Status**: Forms working with multilingual support and spam protection.

### Blog Post Content Formatting ✅ **RESOLVED**
**Problem**: Poor code block contrast, missing list bullets, CSS conflicts.
**Solution**: High-specificity CSS selectors with global styling.
**Status**: Magazine-quality typography with proper code highlighting.

### Responsive Image Optimization ✅ **RESOLVED**
**Problem**: Google PageSpeed reports 90KB+ savings possible on blog post images. Mobile devices receive full-size (800px) images when displaying at 379px, causing unnecessary bandwidth usage and poor LCP scores.
**Root Cause**: Astro's Image component with responsive features (widths, sizes, srcset) only works with imported assets from `/src/assets/`, not with dynamic string paths from `/public/` folder used in blog post frontmatter.
**Solution Implemented**: Custom ResponsivePostImage component with asset mapping
- Moved blog images from `/public/blog-images/` to `/src/assets/blog-images/`
- Created ResponsivePostImage.astro component that maps string paths to imported assets
- Updated all blog components to use the new responsive component
- Implemented responsive widths and sizes attributes for optimal delivery
**Results Achieved**: 
- ✅ 60-82% image size reduction across all blog post images
- ✅ Multiple responsive sizes generated (400px, 600px, 800px, 1200px)
- ✅ Proper srcset and sizes attributes for optimal device delivery
- ✅ WebP format optimization with fallback support
- ✅ 90KB+ bandwidth savings achieved as expected
**Status**: Fully optimized responsive images working across all blog pages

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

**Last Updated:** Phase 2.1 core functionality completed - Language switcher now works perfectly on ALL page types including individual blog posts, navigation menus, breadcrumbs, search functionality, and RSS feeds. Only 3 minor tasks remain for future implementation (pagination, tags, 404 page). Language switcher button design and behavior unchanged - only the logic behind it has been improved.

