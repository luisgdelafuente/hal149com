import { getCollection } from 'astro:content';
import { getLangFromUrl, useTranslations } from './ui';

export function createHref(lang: string, path: string) {
  if (lang === 'en') return path;
  return `/${lang}${path}`;
}

// NEW: Comprehensive URL generation utilities for language switching
export async function getLanguageUrls(currentUrl: URL) {
  const currentPath = currentUrl.pathname;
  const currentLang = getLangFromUrl(currentUrl);
  
  // Default URLs
  let enUrl = '/';
  let esUrl = '/es/';
  
  // Handle different page types
  if (currentPath === '/' || currentPath === '/es/') {
    // Homepage - already handled by defaults
  } else if (currentPath.startsWith('/posts/') || currentPath.startsWith('/es/posts/')) {
    // Blog posts - handle archive and individual posts
    if (currentPath.endsWith('/posts/') || currentPath.endsWith('/es/posts/')) {
      // Archive pages
      enUrl = '/posts/';
      esUrl = '/es/posts/';
    } else {
      // Individual post pages - handle with async function
      return await getPostLanguageUrls(currentUrl);
    }
  } else if (currentPath.startsWith('/about') || currentPath.startsWith('/es/about')) {
    // About page
    enUrl = '/about/';
    esUrl = '/es/about/';
  } else if (currentPath.startsWith('/credits') || currentPath.startsWith('/es/credits')) {
    // Credits page
    enUrl = '/credits/';
    esUrl = '/es/credits/';
  } else if (currentPath.startsWith('/thank-you') || currentPath.startsWith('/es/thank-you')) {
    // Thank you page
    enUrl = '/thank-you/';
    esUrl = '/es/thank-you/';
  } else if (currentPath.startsWith('/rss.xml') || currentPath.startsWith('/es/rss.xml')) {
    // RSS feeds
    enUrl = '/rss.xml';
    esUrl = '/es/rss.xml';
  } else {
    // Fallback: strip language prefix and add appropriate one
    const pathWithoutLang = currentPath.replace(/^\/es/, '');
    enUrl = pathWithoutLang;
    esUrl = `/es${pathWithoutLang}`;
  }
  
  return { enUrl, esUrl };
}

// NEW: Handle blog post language switching using enSlug/esSlug
export async function getPostLanguageUrls(currentUrl: URL) {
  const currentPath = currentUrl.pathname;
  const currentLang = getLangFromUrl(currentUrl);
  
  // Default fallback URLs
  let enUrl = '/posts/';
  let esUrl = '/es/posts/';
  
  try {
    const allPosts = await getCollection('posts');
    
    // Extract slug from current URL - fix for trailing slashes
    const pathParts = currentPath.split('/').filter(part => part !== '');
    const currentSlug = pathParts[pathParts.length - 1];
    
    // Find the current post
    const currentPost = allPosts.find(post => post.slug === currentSlug);
    
    if (currentPost) {
      if (currentPost.data.lang === 'en' && currentPost.data.esSlug) {
        // We're on English post, link to Spanish version
        enUrl = `/posts/${currentPost.slug}/`;
        esUrl = `/es/posts/${currentPost.data.esSlug}/`;
      } else if (currentPost.data.lang === 'es' && currentPost.data.enSlug) {
        // We're on Spanish post, link to English version
        enUrl = `/posts/${currentPost.data.enSlug}/`;
        esUrl = `/es/posts/${currentPost.slug}/`;
      } else {
        // No translation available, stay on current page
        if (currentLang === 'en') {
          enUrl = `/posts/${currentPost.slug}/`;
          esUrl = `/es/posts/`; // Fallback to archive
        } else {
          enUrl = `/posts/`; // Fallback to archive
          esUrl = `/es/posts/${currentPost.slug}/`;
        }
      }
    }
  } catch (error) {
    console.warn('Error getting post language URLs:', error);
  }
  
  return { enUrl, esUrl };
}

// NEW: Create language-aware navigation links
export function createNavLink(lang: string, link: string) {
  // Handle anchor links (stay on same page)
  if (link.startsWith('#')) {
    return link;
  }
  
  // Handle external links (no change)
  if (link.startsWith('http')) {
    return link;
  }
  
  // Handle internal links
  if (lang === 'en') {
    return link;
  } else {
    // Add /es/ prefix for Spanish
    return `/es${link}`;
  }
}
