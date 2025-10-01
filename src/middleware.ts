import type { MiddlewareHandler } from 'astro';

const IGNORED_PREFIXES = [
  '/_astro',
  '/assets',
  '/public',
  '/theme-preview',
  '/wallpapers',
  '/content-images',
  '/favicon',
  '/manifest',
  '/sitemap.xml',
];

// Map English paths to Spanish paths
const PATH_TRANSLATIONS: Record<string, string> = {
  '/about/': '/es/nosotros/',
  '/about': '/es/nosotros/',
  '/credits/': '/es/creditos/',
  '/credits': '/es/creditos/',
  '/legal/': '/es/legal/',
  '/legal': '/es/legal/',
  '/thank-you/': '/es/thank-you/',
  '/thank-you': '/es/thank-you/',
  '/posts/': '/es/posts/',
  '/posts': '/es/posts/',
};

function isBot(userAgent: string | null): boolean {
  if (!userAgent) return false;
  const ua = userAgent.toLowerCase();
  return ua.includes('bot') || ua.includes('spider') || ua.includes('crawl');
}

function parseAcceptLanguage(header: string | null): 'en' | 'es' | null {
  if (!header) return null;
  
  // Parse Accept-Language header more thoroughly
  const languages = header.split(',').map(lang => {
    const [language, quality = '1'] = lang.trim().split(';q=');
    return { language: language.toLowerCase(), quality: parseFloat(quality) };
  });
  
  // Sort by quality (highest first)
  languages.sort((a, b) => b.quality - a.quality);
  
  // Check for Spanish first (es, es-ES, es-MX, etc.)
  for (const { language } of languages) {
    if (language.startsWith('es')) return 'es';
  }
  
  // Check for English
  for (const { language } of languages) {
    if (language.startsWith('en')) return 'en';
  }
  
  return null;
}

function translatePathToSpanish(pathname: string): string | null {
  // Exact match in translation table
  if (PATH_TRANSLATIONS[pathname]) {
    return PATH_TRANSLATIONS[pathname];
  }
  
  // Handle blog post URLs: /posts/slug/ → /es/posts/
  if (pathname.startsWith('/posts/') && pathname !== '/posts/' && pathname !== '/posts') {
    // For individual posts, redirect to Spanish blog archive
    // (since post slugs may differ between languages)
    return '/es/posts/';
  }
  
  // Handle pagination: /posts/page/2/ → /es/posts/
  if (pathname.match(/^\/posts\/page\/\d+\/?$/)) {
    return '/es/posts/';
  }
  
  return null;
}

export const onRequest: MiddlewareHandler = async (context, next) => {
  const { request } = context;
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Skip non-GET requests
  if (request.method !== 'GET') return next();

  // Skip bots
  if (isBot(request.headers.get('user-agent'))) return next();

  // Skip asset and non-page routes
  if (IGNORED_PREFIXES.some((p) => pathname.startsWith(p))) return next();

  const cookie = request.headers.get('cookie') || '';
  const cookieLang = /(?:^|;\s*)lang=(en|es)/.exec(cookie)?.[1] as 'en' | 'es' | undefined;
  const acceptLanguage = request.headers.get('accept-language');

  // Persist cookie when already on a localized page
  if (pathname.startsWith('/es')) {
    // Ensure cookie is set to es
    if (cookieLang !== 'es') {
      const res = await next();
      res.headers.append('Set-Cookie', 'lang=es; Path=/; Max-Age=31536000; SameSite=Lax');
      return res;
    }
    return next();
  }

  // For English pages, check if we should redirect to Spanish
  const preferred = cookieLang || parseAcceptLanguage(acceptLanguage) || 'en';

  if (preferred === 'es') {
    // User prefers Spanish - redirect to Spanish version
    let spanishPath: string | null = null;

    if (pathname === '/') {
      spanishPath = '/es/';
    } else {
      spanishPath = translatePathToSpanish(pathname);
    }

    if (spanishPath) {
      return new Response(null, {
        status: 302,
        headers: new Headers({
          Location: spanishPath,
          'Set-Cookie': 'lang=es; Path=/; Max-Age=31536000; SameSite=Lax',
        }),
      });
    }
  }

  // User prefers English or no Spanish translation available
  // Ensure we remember English preference
  if (cookieLang !== 'en') {
    const res = await next();
    res.headers.append('Set-Cookie', 'lang=en; Path=/; Max-Age=31536000; SameSite=Lax');
    return res;
  }

  return next();
};
