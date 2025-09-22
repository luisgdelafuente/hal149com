export async function GET() {
  // Simply read the environment variable - if it's "true", block indexing
  const shouldBlock = import.meta.env.DISALLOW_INDEXING === 'true';
  
  const body = shouldBlock
    ? `User-agent: *
Disallow: /`
    : `User-agent: *
Allow: /

Sitemap: https://hal149.com/sitemap.xml`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
