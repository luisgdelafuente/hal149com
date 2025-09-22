export async function GET({ url }) {
  // Only allow indexing on the production domain https://hal149.com
  const hostname = url.hostname;
  const isProduction = hostname === 'hal149.com';
  
  // Log for debugging (remove in production)
  console.log('Robots.txt request from hostname:', hostname);
  console.log('Is production?', isProduction);
  
  const body = isProduction
    ? `User-agent: *
Allow: /

Sitemap: https://hal149.com/sitemap.xml`
    : `User-agent: *
Disallow: /

# Blocked indexing for: ${hostname}`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    },
  });
}
