export async function GET({ url }) {
  // Only allow indexing on the production domain https://hal149.com
  const isProduction = url.hostname === 'hal149.com';
  
  const body = isProduction
    ? `User-agent: *
Allow: /

Sitemap: https://hal149.com/sitemap.xml`
    : `User-agent: *
Disallow: /`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
