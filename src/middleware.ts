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
  '/robots.txt',
  '/sitemap.xml',
];

function isBot(userAgent: string | null): boolean {
  if (!userAgent) return false;
  const ua = userAgent.toLowerCase();
  return ua.includes('bot') || ua.includes('spider') || ua.includes('crawl');
}

function parseAcceptLanguage(header: string | null): 'en' | 'es' | null {
  if (!header) return null;
  // Simple parse: prioritize first language
  const first = header.split(',')[0]?.trim().toLowerCase();
  if (!first) return null;
  if (first.startsWith('es')) return 'es';
  if (first.startsWith('en')) return 'en';
  return null;
}

export const onRequest: MiddlewareHandler = async (context, next) => {
  const { request, redirect } = context;
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

  // Only consider redirecting from the root path '/'
  if (pathname === '/') {
    const preferred = cookieLang || parseAcceptLanguage(request.headers.get('accept-language')) || 'en';

    if (preferred === 'es') {
      // Set cookie and redirect to Spanish home
      const location = '/es/';
      return new Response(null, {
        status: 302,
        headers: new Headers({
          Location: location,
          'Set-Cookie': 'lang=es; Path=/; Max-Age=31536000; SameSite=Lax',
        }),
      });
    } else {
      // Ensure we remember English preference without redirecting (canonical '/')
      if (cookieLang !== 'en') {
        const res = await next();
        res.headers.append('Set-Cookie', 'lang=en; Path=/; Max-Age=31536000; SameSite=Lax');
        return res;
      }
      return next();
    }
  }

  // For other non-/ paths under default locale, do nothing (keep canonical structure)
  return next();
};
