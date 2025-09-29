/**
 * CSS Optimization Utilities
 * Helper functions for CSS performance optimization
 */

/**
 * Get critical CSS classes for above-the-fold content
 * These classes should be inlined for immediate rendering
 */
export function getCriticalCSSClasses() {
  return [
    // Layout and structure
    'bs-container',
    'bs-mt-lg',
    'bs-mt-md', 
    'bs-mt-sm',
    
    // Typography
    'bs-h1',
    'bs-h2', 
    'bs-h3',
    'bs-body-text',
    
    // Buttons
    'bs-btn',
    'bs-btn-mobile',
    
    // Essential Tailwind utilities
    'bg-bs-surface-1',
    'text-bs-foreground-light',
    'font-body',
    'font-display',
    
    // Navigation
    'fixed',
    'top-0',
    'w-full',
    'z-50',
    
    // Hero section
    'min-h-svh',
    'flex',
    'items-center',
    'justify-center'
  ];
}

/**
 * Get non-critical CSS classes that can be loaded asynchronously
 */
export function getNonCriticalCSSClasses() {
  return [
    // Animations and transitions
    'transition-all',
    'duration-200',
    'ease-out',
    
    // Hover effects
    'hover:before:translate-x-0',
    'hover:before:opacity-10',
    
    // Interactive states
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'active:translate-y-[1px]',
    
    // Complex animations
    'before:flex',
    'before:inset-0',
    'before:bg-white',
    'before:rounded-sm',
    'before:absolute',
    'before:opacity-0',
    'before:-translate-x-full',
    'before:transition-all',
    'before:duration-300'
  ];
}

/**
 * Check if current page is above-the-fold critical
 */
export function isCriticalPage(pathname) {
  const criticalPaths = ['/', '/es/', '/about', '/es/about'];
  return criticalPaths.includes(pathname);
}
