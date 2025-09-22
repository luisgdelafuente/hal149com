export async function GET() {
  const disallow = import.meta.env.DISALLOW_INDEXING === 'true';
  
  const body = disallow
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
