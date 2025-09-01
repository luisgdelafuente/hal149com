# PROJECT POLICIES

The following rules must be always followed to work in this project and keep this document updated:

1) **Roadmap must always be clean**, with clear steps and brief names for versions, phases and tasks. NO detailed descriptions here.
2) **Details about challenges and complex tasks** will be included in the corresponding chapter "CHALLENGES & SOLUTIONS"
3) **AI Never launches commands on the console**, the user will do it manually at the request of the AI, or to proceed with the testing of the development.
4) I don´t always need a complete description of the work done, only when it has implied a significant amount of work, trials or errors. You can finish each task with a small briefing and ask me to test it. 

This README serves as the primary reference for understanding the project structure, deployment process, and development roadmap. All AI assistants should consult this document before making modifications.

# Project Description

Official name of the project HAL149

A complete, best-in-class Astro website for a business agency with all the features needed to present the company, offerings, news, git-hosted images, ultra-optimized for SEO, and more.

This is our complete business agency website built on the [BlackSpike Astro Landing Page theme](https://astro.build/themes/details/blackspike-astro-landing-page/). We've customized it for Frontier Agency's specific business needs while maintaining the modern design and performance optimizations of the original theme, and enhanced it with comprehensive features for a professional agency presence.

# Roadmap

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

### Phase 4: Blog Post Implementation 📝 ✅ **COMPLETED**
- [x] **4.1** Configure content collections
- [x] **4.2** Create posts directory structure
- [x] **4.3** Define frontmatter schema
- [x] **4.4** Create English posts archive page
- [x] **4.5** Create Spanish posts archive page
- [x] **4.6** Create English individual post template
- [x] **4.7** Create Spanish individual post template
- [x] **4.8** ~~Tag filtering pages~~ - **MOVED TO PHASE 5**
- [x] **4.9** Create LatestPostsSection component
- [x] **4.10** Integrate LatestPostsSection into homepage
- [x] **4.11** Generate RSS feeds for both languages
- [x] **4.12** Implement client-side search functionality
- [x] **4.14** Implement structured data (JSON-LD)
- [x] **4.15** Add Open Graph and Twitter Card meta tags
- [x] **4.16** Configure image optimization
- [x] **4.17** Ensure responsive design
- [x] **4.18** Add proper meta titles and descriptions
- [x] **4.19** Create 6 dummy AI-related posts
- [x] **4.20** Test all blog functionality
- [x] **4.21** Fix Homepage Posts Section Design
- [x] **4.22** Fix Posts Archive Pages Design
- [x] **4.23** Fix Individual Post Content Styling
- [x] **4.24** Apply Consistent Button Styling
- [x] **4.25** Update README Phase 4
- [x] **4.26** Improve prose content formatting
- [x] **4.27** Fix critical prose formatting issues
- [x] **4.28** Fix missing bullet points in lists
- [x] **4.29** Image management strategy for git-hosted images

### Phase 5: Content Customization 📋 PARTIAL
- [x] 5.1 Filter home page sections ✅ COMPLETED - Configuration-based section filtering system implemented. "Trusted by some great companies" and "Clients ♥ us" sections hidden while preserving all code for easy reactivation
- [ ] 5.2 Company meta data for social and seo
- [ ] 5.3 Navigation Menu Order Fix ❌ NOT SOLVED - Menu items displaying in wrong order despite correct JSON data 
- [ ] 5.4 Service offerings content
- [x] 5.5 Content management strategy for posts (markdown files in git workflow)
- [x] 5.6 Responsive Menu Implementation ✅ COMPLETED - Fully responsive mobile menu with hamburger navigation, language switcher integration, and accessibility features
- [x] 5.7 Company Logo Implementation ✅ COMPLETED - HAL149 logo implemented with responsive sizing, favicon system updated with PNG icons, header button changed to "Contact"/"Contacto"
- [ ] 5.8 Home sections names and placeholders - Define proper section names and IDs for menu navigation references
- [ ] 5.9 Final menu contents - Implement proper menu links and navigation structure for Frontier Agency

### Phase 6: Final Configurations ✅ COMPLETED
- [x] **6.1** Robots.txt configuration
  - ✅ Created simple robots.txt file allowing all crawling
  - ✅ Added sitemap reference for better SEO indexing
  - ✅ File located at `public/robots.txt`

### Phase 7: Performance Optimization & Go Live 🎯 PENDING

**Critical performance optimizations required before launch to achieve optimal Core Web Vitals scores and user experience.**

#### 7.1: Responsive Image Optimization 🖼️ ❌ **REVERTED**
- [ ] **7.1.1** Implement responsive image optimization for blog posts
- [ ] **7.1.2** Optimize hero and content images
- [ ] **7.1.3** Complete image migration to assets folder

#### 7.2: CSS Render-Blocking Optimization ⚡ **PENDING**
- [ ] **7.2.1** Implement critical CSS inlining
- [ ] **7.2.2** Optimize CSS delivery and loading
- [ ] **7.2.3** Implement progressive CSS loading

#### 7.3: Core Web Vitals Optimization 📊 **PENDING**
- [ ] **7.3.1** Optimize Largest Contentful Paint (LCP)
- [ ] **7.3.2** Optimize First Input Delay (FID) and Interaction to Next Paint (INP)
- [ ] **7.3.3** Optimize Cumulative Layout Shift (CLS)

#### 7.4: Bundle and Asset Optimization 📦 **PENDING**
- [ ] **7.4.1** JavaScript optimization
- [ ] **7.4.2** Asset delivery optimization

#### 7.5: Performance Testing and Validation 🧪 **PENDING**
- [ ] **7.5.1** Comprehensive performance testing
- [ ] **7.5.2** Performance monitoring setup

#### 7.6: Final Launch Preparation 🚀 **PENDING**
- [ ] **7.6.1** Pre-launch checklist
- [ ] **7.6.2** Go-live deployment

#### 7.7: LCP Request Discovery 🔍 **PENDING**
- [ ] **7.7.1** Make LCP image discoverable from HTML immediately
- [ ] **7.7.2** Avoid lazy-loading LCP images

#### 7.8: Network Dependency Tree Optimization 🌐 **PENDING**
- [ ] **7.8.1** Reduce critical request chains length
- [ ] **7.8.2** Reduce download size of critical resources
- [ ] **7.8.3** Defer download of unnecessary resources

---

## VERSION 2 🔮
**Optimization updates, automatisms to improve V1 functionalities, connection to social media, admin pane, etc.**

### Phase 7.5: Advanced Content Features 📝 FUTURE
- [ ] **7.5.1** Case studies and portfolio items
- [ ] **7.5.2** Legal pages (Privacy Policy, Terms of Service)
- [ ] **7.5.3** Content SEO optimization
- [ ] **7.5.4** Team member profiles
- [ ] **7.5.5** Testimonials and client reviews
- [ ] **7.5.6** Custom imagery and graphics
- [ ] **7.5.7** Multilingual content management
- [ ] **7.5.8** Author profiles and author pages implementation
- [ ] **7.5.9** Content organization strategy (categories vs tags system)
- [ ] **7.5.10** Draft posts functionality for unpublished content
- [ ] **7.5.11** Post scheduling system for future publications
- [ ] **7.5.12** Comments system integration (external like Disqus or built-in)
- [ ] **7.5.13** Enhanced social sharing integration for posts
- [ ] **7.5.14** Tag functionality enhancement - Advanced tag management system with filtering, search, and related posts
- [ ] **7.5.15** Related posts system - Implement alternative related posts logic (not tag-based)

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

# Tech Stack

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

# Challenges & Solutions

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

### Responsive Image Optimization ❌ **REVERTED**
**Problem**: Google PageSpeed reports 90KB+ savings possible on blog post images. Mobile devices receive full-size (800px) images when displaying at 379px, causing unnecessary bandwidth usage and poor LCP scores.
**Previous Solution Attempt**: Custom ResponsivePostImage component with asset mapping was implemented but reverted due to user request.
**Current Status**: ❌ **REVERTED** - All image optimization changes have been undone. Images are back to using regular `<img>` tags from `/public/` folder. Performance optimization priority moved to CSS render-blocking issues.

### CSS Render-Blocking Optimization ❌ **NOT SOLVED**
**Problem**: 430ms render-blocking CSS delays affecting Core Web Vitals scores.
**Current Status**: Optimization attempts broke website layout, changes reverted.
**Solution Approach**:
- **Step 1**: Identify critical above-the-fold CSS classes
- **Step 2**: Create inline critical CSS for immediate rendering
- **Step 3**: Defer non-critical CSS loading with preload
- **Step 4**: Test layout integrity across all pages
**Status**: Pending implementation in Phase 7.2

### LCP Request Discovery ❌ **NOT SOLVED**
**Problem**: Google Speed Test reports LCP image not discoverable from HTML immediately, affecting Largest Contentful Paint performance.
**Solution Approach**:
- **Step 1**: Identify the LCP element (likely hero image)
- **Step 2**: Ensure LCP image is loaded without lazy-loading
- **Step 3**: Optimize image loading priority and preloading
**Status**: Pending implementation in Phase 7.7

### Network Dependency Tree Optimization ❌ **NOT SOLVED**
**Problem**: Critical request chains are too long, affecting page load performance and LCP scores.
**Solution Approach**:
- **Step 1**: Analyze critical request chains
- **Step 2**: Reduce chain length by optimizing resource loading order
- **Step 3**: Defer non-critical resources
- **Step 4**: Optimize resource sizes
**Status**: Pending implementation in Phase 7.8

### Responsive Menu Implementation ✅ **COMPLETED**
**Problem**: Mobile menu was not fully responsive - only contact and language buttons visible on smartphones, missing navigation menu.
**Solution**: Implemented comprehensive mobile menu system with:
- **Mobile Menu Component**: Full-screen overlay with navigation links and language switcher
- **Hamburger Button**: Accessible hamburger menu button with proper ARIA attributes
- **Responsive Layout**: Desktop shows full navigation, mobile shows contact + hamburger
- **Language Integration**: Mobile menu includes language switcher with proper translations
- **Accessibility Features**: Keyboard navigation, focus management, screen reader support
- **Smooth Animations**: CSS transitions for menu open/close with backdrop blur
- **Body Scroll Lock**: Prevents background scrolling when menu is open
- **Header Language Switcher**: Language switcher remains in header for both desktop and mobile for better accessibility
**Status**: ✅ **COMPLETED** - Fully functional responsive menu with multilingual support

### Language Switcher Multiple Instance Fix ✅ **COMPLETED**
**Problem**: Language switcher not working in responsive mode due to static IDs causing conflicts between desktop and mobile instances.
**Solution**: Implemented event delegation approach:
- **Event Delegation**: Single document-level event listeners handle all language switcher instances
- **Class-based targeting**: Replaced static IDs with classes to avoid conflicts
- **Robust element finding**: Used `closest()` method for reliable element targeting
- **Automatic cleanup**: Closes other menus when opening a new one
- **Independent functionality**: Each instance works independently without interference
**Status**: ✅ **COMPLETED** - Language switcher now works perfectly in both desktop and mobile modes

### Navigation Menu Order Issue ❌ **NOT SOLVED**
**Problem**: Navigation menu displaying in wrong order (Blog, Pricing, Projects, Register, Services) instead of desired order (Services, Projects, Blog, Pricing, Register).
**Attempted Solutions**:
- **CSS Flexbox Fix**: Removed conflicting CSS classes (`col-span-6`, `self-stretch`) and simplified navigation layout
- **Data Source Verification**: Confirmed JSON files have correct order in both English and Spanish
- **Debug Output**: Added debug logging showing data arrives in wrong order despite correct JSON
- **Hardcoded Test**: Temporarily hardcoded navigation array to verify rendering works correctly
- **Layout Debug**: Added console logging to trace data flow from JSON to component
**Root Cause**: Unknown - Data appears correct in JSON files but arrives at component in wrong order
**Status**: ❌ **NOT SOLVED** - Menu order remains incorrect despite all attempted fixes

# Deployment Instructions

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

**Last Updated:** Image optimization changes reverted. All components now use regular `<img>` tags from `/public/` folder. Performance optimization priority moved to CSS render-blocking issues (7.2), LCP request discovery (7.7), and Network dependency tree (7.8).

