# PROJECT POLICIES

The following rules must be always followed to work in this project and keep this document updated:

1) Roadmap must always be clean, with clear steps and brief names for versions, phases and tasks. NO detailed descriptions here.
2) Details about challenges and complex tasks** will be included in the corresponding chapter "CHALLENGES & SOLUTIONS"
3) AI Never launches commands on the console, the user will do it manually at the request of the AI, or to proceed with the testing of the development.
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
- [x] 1.1 Project initialization with Astro 5
- [x] 1.2 Tailwind CSS 4 integration
- [x] 1.3 Sharp image optimization installation
- [x] 1.4 Netlify deployment configuration
- [x] 1.5 GitHub integration for automatic deployments
- [x] 1.6 Build process optimization
- [x] 1.7 Static site generation setup

### Phase 2: Language Management ✅ COMPLETED
- [x] 2.1 Astro i18n integration setup
- [x] 2.2 Language detection and routing configuration
- [x] 2.3 URL structure setup
- [x] 2.4 Translation files structure
- [x] 2.5 Component internationalization
- [x] 2.6 Language switcher component
- [x] 2.7 SEO-friendly language URLs
- [x] 2.8 Meta tags for multiple languages
- [x] 2.9 Font loading optimization
- [x] 2.10 Content translation
- [x] 2.11 Date and number formatting per locale
- [x] 2.12 RTL support preparation
- [x] 2.13 Language-specific sitemap generation
- [x] 2.14 hreflang tags implementation
- [x] 2.15 Language detection middleware

### Phase 2.1: Complete Language Functionality ✅ COMPLETED
- [x] 2.1.1 Basic language switcher component implementation
- [x] 2.1.2 Homepage language switching
- [x] 2.1.3 Static pages language switching
- [x] 2.1.4 Blog archive pages language switching
- [x] 2.1.5 Individual blog post language switching
- [x] 2.1.6 Navigation menu language-aware URL generation
- [x] 2.1.7 Internal link translation
- [x] 2.1.8 Breadcrumb navigation language switching
- [x] 2.1.9 Search functionality language switching
- [ ] 2.1.10 Pagination language switching
- [ ] 2.1.11 Tag pages language switching
- [x] 2.1.12 RSS feed language switching
- [ ] 2.1.13 404 page language switching
- [x] 2.1.14 Language switcher fallback handling

### Phase 3: Form Management ✅ COMPLETED
- [x] Contact form component implementation
- [x] Form validation and error handling
- [x] Netlify Forms integration
- [x] Email notification setup
- [x] Spam protection
- [x] Form submission success/error states
- [x] Mobile-responsive form design
- [x] Form accessibility improvements
- [x] Multilingual form labels and messages
- [x] Language-specific form validation messages
- [x] Newsletter subscription form integration
- [x] Hidden static newsletter form added in layout
- [x] AJAX submission with inline success message

### Phase 4: Blog Post Implementation ✅ **COMPLETED**
- [x] 4.1 Configure content collections
- [x] 4.2 Create posts directory structure
- [x] 4.3 Define frontmatter schema
- [x] 4.4 Create English posts archive page
- [x] 4.5 Create Spanish posts archive page
- [x] 4.6 Create English individual post template
- [x] 4.7 Create Spanish individual post template
- [x] 4.8 Tag filtering pages (moved to Phase 5)
- [x] 4.9 Create LatestPostsSection component
- [x] 4.10 Integrate LatestPostsSection into homepage
- [x] 4.11 Generate RSS feeds for both languages
- [x] 4.12 Implement client-side search functionality
- [x] 4.14 Implement structured data (JSON-LD)
- [x] 4.15 Add Open Graph and Twitter Card meta tags
- [x] 4.16 Configure image optimization
- [x] 4.17 Ensure responsive design
- [x] 4.18 Add proper meta titles and descriptions
- [x] 4.19 Create 6 dummy AI-related posts
- [x] 4.20 Test all blog functionality
- [x] 4.21 Fix Homepage Posts Section Design
- [x] 4.22 Fix Posts Archive Pages Design
- [x] 4.23 Fix Individual Post Content Styling
- [x] 4.24 Apply Consistent Button Styling
- [x] 4.25 Update README Phase 4
- [x] 4.26 Improve prose content formatting
- [x] 4.27 Fix critical prose formatting issues
- [x] 4.28 Fix missing bullet points in lists
- [x] 4.29 Image management strategy for git-hosted images
- [x] 4.30 Implement Astro Image optimization for blog post images
- [x] 4.31 Astro's glob imports to automate img optimization
- [x] 4.32 Blog and home posts archive thumbs 
- [ ] 4.33 Responsive images optimization 

### Phase 5: Content Customization ✅ **COMPLETED**
- [x] 5.1 Filter home page sections
- [x] 5.3 Navigation Menu Order Fix
- [x] 5.4 Service offerings content
- [x] 5.5 FAQs customization
- [x] 5.6 Content management strategy for posts
- [x] 5.6 Responsive Menu Implementation
- [x] 5.7 Company Logo Implementation
- [x] 5.8 Sections names & IDs
- [x] 5.9 Final menu
- [x] 5.10 Customize long testimonial home page
- [x] 5.11 Customize and translate contact form
- [x] 5.12 Customize and translate registration form
- [x] 5.13 Customize About Us page
- [x] 5.14 Customize Credits page
- [x] 5.15 Customize Legal page
- [x] 5.16 Footer Customizing
- [x] 5.17 Offer and pricing customizing
- [ ] 5.18 Customize Projects section images
- [ ] 5.19 Customize Services section images 
- [x] 5.20 Remove CTA buttons from Projects provisionally
- [x] 5.21 Customize hero section image

### Phase 6: Final Configurations
- [x] 6.1 Robots.txt configuration
- [x] 6.2 Sitemap.xml configuration
- [x] 6.3 Global metadata for seo, og 
- [x] 6.4 Posts metadata: og, seo
- [x] 6.5 Whatsapp and social media image thumb fix 
- [x] 6.6 Blog pagination fixed

## VERSION 2

### Phase 2.1: Content intelligence layer
Objective: add a layer of interactivity in order for the user to customize web´s content as custom recommendations for his business. 
- [x] 2.1.1 Content update date 

### Phase 2.2: Optimization
Objetive: Google Test 100% mobile+desktop and fix style issues
- [] 2.2.1 Table fonts sizes fix 



## FUTURE FUNCTIONALITIES 

### Content functionalities 
- Case studies and portfolio items
- Legal pages (Privacy Policy, Terms of Service)
- Team member profiles
- Testimonials and client reviews
- Author profiles and author pages implementation
- Content organization strategy (categories vs tags system)
- Draft posts functionality for unpublished content
- Post scheduling system for future publications
- Comments system integration (external like Disqus or built-in)
- Enhanced social sharing integration for posts
- Tag functionality enhancement - Advanced tag management system with - - filtering, search, and related posts
- Related posts system - Implement alternative related posts logic (not tag-based)

### Content Management System Implementation
- Leads management system
- Decap CMS (formerly Netlify CMS) integration setup
- Git-based content management that works with existing markdown workflow
- Admin interface accessible at `/admin/` route
- Seamless integration with current Netlify deployment
- Maintains version control benefits of git-based content
- Admin panel configuration for posts CRUD operations
- Create, read, update, delete functionality for blog posts
- Rich text editor with markdown support
- Image upload and management through admin interface
- Draft/publish workflow management
- Bilingual content management setup
- English/Spanish content editing support
- Cross-reference management (enSlug/esSlug) through admin UI
- Language-specific content organization
- Multilingual preview capabilities
- User authentication and role management
- Admin user setup and authentication
- Role-based access control (admin, editor, contributor)
- Secure admin access with proper authentication flow
- Multi-user collaboration features
- Content workflow optimization
- Auto-deployment triggers on content changes
- Content preview before publishing
- Bulk content operations and management
- SEO metadata management through admin interface

### Social Media & External Integrations 🌐 FUTURE
- [ ] Social media API connections
- [ ] Automated social sharing
- [ ] Instagram/LinkedIn feed integration
- [ ] Analytics dashboard integration
- [ ] Third-party CRM integration
- [ ] Email marketing automation
- [ ] Social login functionality



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

### Automatic Language Detection ✅ **RESOLVED**
**Problem**: Middleware-based language detection didn't work in production because the site uses static output mode, where middleware only runs during development.
**Solution**: Implemented client-side JavaScript detection using `navigator.language` on homepage. Spanish speakers are automatically redirected to `/es/` on first visit, with cookie persistence for returning users.

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

### Responsive Image Optimization ❌ **NOT SOLVED**
**Problem**: Google PageSpeed reports that mobile devices receive 800px images when displaying at 379px, causing unnecessary bandwidth usage.
**Initial Solution Attempt**: Implemented dynamic glob imports with Astro's Image component and smaller mobile breakpoints.
**Implementation**:
- Dynamic image loading: `import.meta.glob<{ default: ImageMetadata }>('/src/assets/blog-images/*.{jpeg,jpg,png,webp}')`
- Mobile-optimized widths: `[320, 400, 600, 800, 1200]`
- Responsive sizes: `(max-width: 380px) 320px, (max-width: 480px) 400px, (max-width: 768px) 90vw, (max-width: 1200px) 70vw, 800px`
- Created OptimizedLogo component for logo images with appropriate sizing
**Recent Attempts (Failed)**:
- Updated sizes attribute in blog post templates to be more specific about mobile dimensions
- Discovered Astro won't upscale images - only generates sizes smaller than original
- Removed 1200px from widths array since original images are ~1024px wide
- Final widths configuration: `[320, 400, 600, 800]`
**Current Status**: Despite multiple attempts, responsive images still not working correctly. Astro generates only 600px and original size, not the smaller mobile sizes (320px, 400px) needed.
**Root Cause**: Unknown - Astro Image component not generating all specified widths despite correct configuration.

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

### Company Metadata & Social Sharing Issues ❌ **NOT SOLVED**
**Problem**: Multiple metadata issues detected affecting SEO and social media sharing functionality.
**Issues Identified**:
- **Non-functional WhatsApp thumbs**: WhatsApp sharing not displaying proper preview images
- **Wrong apple icons**: Apple touch icons may not be properly configured for all devices
- **Missing social metadata**: Company pages (about, credits, thank-you) lack proper Open Graph and Twitter Card meta tags
- **Incomplete SEO implementation**: Some company pages missing proper meta descriptions and keywords
- **Social image optimization**: Current 1200x630 images may not be optimal for all social platforms
**Solution Approach**:
- **Step 1**: Implement comprehensive metadata for all company pages
- **Step 2**: Add WhatsApp-specific meta tags and image optimization
- **Step 3**: Fix apple touch icon configuration and add missing icon sizes
- **Step 4**: Enhance existing blog post metadata implementation
- **Step 5**: Create platform-specific social media preview images
**Status**: Pending implementation in Phase 6A (Metadata Deployment & SEO Optimization)

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

### Navigation Menu Order Issue ✅ **RESOLVED**
**Problem**: Navigation menu displaying in wrong order (Blog, Pricing, Projects, Register, Services) instead of desired order (Services, Projects, Blog, Pricing, Register).
**Root Cause**: Conflicting data sources - i18n content files had incorrect navigation order while fallback file had correct order.
**Solution**: Fixed navigation order in both `src/i18n/content/en.json` and `src/i18n/content/es.json` to match the correct order from the fallback file.
**Status**: ✅ **RESOLVED** - Navigation menu now displays in correct order across all languages

### Desktop Header Button Height Inconsistency ✅ **RESOLVED** 
**Problem**: Language button (EN/ES) and Contact button (Contact/Contacto) display different heights on desktop viewport, creating visual inconsistency in the header.

**Root Cause**: 
- CSS specificity conflict when trying to use responsive class switching (`bs-btn-mobile md:bs-btn`)
- Tailwind's `@apply` directive compiles classes at build time into fixed CSS rules
- Responsive utility overrides (`md:px-5 md:py-4 md:text-base`) cannot properly override `@apply`-generated CSS due to specificity and cascade issues
- The mobile properties (px-3 py-2 text-sm) from `bs-btn-mobile` persisted on desktop even with responsive overrides

**Failed Attempts** (6-7 iterations):
1. Using `bs-btn-mobile md:bs-btn` pattern - classes conflict
2. Adding responsive utilities `md:px-5 md:py-4 md:text-base` - insufficient override power
3. Modifying CSS with explicit `text-base` in `.bs-btn` - didn't resolve height mismatch
4. Various combinations of responsive classes - all failed due to `@apply` directive limitations

**Nuclear Solution** (Final - Works):
- **Abandoned responsive class approach entirely**
- **Created TWO separate language switcher instances** (mirrors Contact button pattern exactly):
  - Desktop: `<div class="language-switcher hidden md:block">` with `bs-btn` class
  - Mobile: `<div class="language-switcher md:hidden">` with `bs-btn-mobile` class
- Each instance has its own button with the appropriate class - NO responsive overrides needed
- JavaScript event delegation handles both instances seamlessly

**Final Implementation**:
- Desktop Language button: `class="language-toggle bs-btn flex items-center justify-center"` (hidden on mobile)
- Mobile Language button: `class="language-toggle bs-btn-mobile flex items-center justify-center"` (hidden on desktop)
- Contact button Desktop: `class="bs-btn"`
- Contact button Mobile: `class="bs-btn-mobile"`
- **All buttons now match perfectly in their respective viewports**

**Files Modified**:
- `src/components/LanguageSwitcher.astro` - Split into separate desktop/mobile instances

**Status**: ✅ **RESOLVED** - Desktop language button now matches Contact button height exactly. Mobile buttons remain unchanged. Solution uses the exact same pattern as Contact button (separate instances, no responsive class hacks).

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
- Credits (Spanish): `https://yoursite.com/es/creditos/`





## Credits

Based on the [BlackSpike Astro Landing Page theme](https://astro.build/themes/details/blackspike-astro-landing-page/) by blackspike design. Original theme licensed under Creative Commons Attribution 4.0 International Public License.

---

## 🎯 NEXT SESSION: LCP Performance Action Plan

### **Current Status (as of optimization session):**
- **LCP Time**: ~2,500-2,700ms (target: <2,500ms)
- **Main Issues**: Render delay (1,570ms), CSS blocking (180ms), oversized mobile images (19.5 KiB wasted)

### **Priority Action Plan:**

#### **Priority 1: LCP Render Delay Investigation (CRITICAL)** 🔴
**Problem**: 1,570ms render delay (28% of LCP time) after image loads
**Impact**: Largest bottleneck - fixing this could save 1,000-1,500ms
**Actions**:
1. Use Chrome DevTools Performance tab to trace render delay
2. Check for JavaScript blocking render
3. Analyze CSS cascade/specificity issues
4. Look for layout thrashing or reflows
5. Consider preload hint for LCP image: `<link rel="preload" as="image" href="..." fetchpriority="high">`

#### **Priority 2: CSS Critical Path Optimization** 🟡
**Problem**: 9.5 KiB CSS still blocking render for 180ms despite consolidation
**Impact**: Moderate - 180ms delay in critical path
**Actions**:
1. Extract critical above-the-fold CSS (~2-3 KiB)
2. Inline critical CSS in `<head>`
3. Load remaining CSS asynchronously
4. Consider splitting CSS: critical (inline) + deferred (async)
5. Alternative: Use `media="print" onload="this.media='all'"` trick

#### **Priority 3: Responsive Image Sizing** 🟢
**Problem**: 800x450 image served when 379x213 displayed on mobile (19.5 KiB wasted)
**Impact**: Minor - only 19.5 KiB, but affects mobile UX
**Actions**:
1. Debug why Astro not generating 320w/400w srcset variants
2. Check if source images are large enough for Astro to downscale
3. Review Astro Image component configuration
4. Consider manual srcset generation if Astro fails
5. Test with different `widths` array configurations

#### **Priority 4: Network Dependency Chain** 🟡
**Problem**: 1,041ms critical path latency (HTML → CSS chain)
**Impact**: Moderate - CSS depends on HTML load
**Actions**:
1. Add `<link rel="preload" href="/assets/styles.css" as="style">` in head
2. Consider HTTP/2 Server Push for CSS (if supported by Netlify)
3. Optimize TTFB (currently 740ms - could be faster)
4. Review Netlify CDN configuration

---

### **Quick Wins (Low Effort, Medium Impact):**

1. **Add LCP Image Preload** (5 minutes):
   ```html
   <link rel="preload" as="image" href="{post.data.image}" fetchpriority="high">
   ```

2. **Add CSS Preload** (2 minutes):
   ```html
   <link rel="preload" href="/assets/styles.css" as="style">
   ```

3. **Reduce CSS Bundle Size** (30 minutes):
   - Review blog-post.css for unused styles
   - Remove duplicate styles between main.css and blog-post.css
   - Consider PurgeCSS for production builds

---

### **Investigation Tools:**

1. **Chrome DevTools Performance Tab**:
   - Record page load
   - Look for long tasks (>50ms)
   - Check render-blocking resources
   - Analyze main thread activity

2. **WebPageTest.org**:
   - Detailed waterfall analysis
   - Filmstrip view to see rendering timeline
   - Connection view to see dependency chains

3. **Lighthouse CI**:
   - Set up automated performance testing
   - Track performance over time
   - Catch regressions early

---

**Last Updated:** Phase 7 progress documented. Completed: LCP lazy loading fix, CSS consolidation, image quality optimization. Remaining: Render delay investigation, CSS critical path, responsive images.


