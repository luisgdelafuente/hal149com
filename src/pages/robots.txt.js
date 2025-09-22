export async function GET({ url, request }) {
  // Get hostname from the request
  const hostname = url.hostname;
  
  // Also check for X-Forwarded-Host header (Netlify might use this)
  const forwardedHost = request.headers.get('x-forwarded-host');
  const actualHost = forwardedHost || hostname;
  
  // Only allow indexing on the production domain
  const isProduction = actualHost === 'hal149.com' || actualHost === 'www.hal149.com';
  
  // Enhanced logging for debugging
  console.log('=== Robots.txt Debug ===');
  console.log('URL hostname:', hostname);
  console.log('X-Forwarded-Host:', forwardedHost);
  console.log('Actual host used:', actualHost);
  console.log('Is production?', isProduction);
  console.log('Full URL:', url.toString());
  console.log('All headers:', Object.fromEntries(request.headers.entries()));
  console.log('=======================');
  
  const body = isProduction
    ? `User-agent: *
Allow: /

Sitemap: https://hal149.com/sitemap.xml`
    : `User-agent: *
Disallow: /

# Blocked indexing for: ${actualHost}
# URL hostname: ${hostname}
# Forwarded host: ${forwardedHost || 'none'}`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'X-Robots-Tag': isProduction ? 'all' : 'noindex, nofollow',
    },
  });
}
