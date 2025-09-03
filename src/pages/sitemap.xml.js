export async function GET() {
  const baseUrl = 'https://hal149.com';
  
  // Define your pages
  const pages = [
    {
      url: '/',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 1.0,
      hreflang: [
        { lang: 'en', url: '/', hreflang: 'en' },
        { lang: 'es', url: '/es/', hreflang: 'es' }
      ]
    },
    {
      url: '/about',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.8,
      hreflang: [
        { lang: 'en', url: '/about', hreflang: 'en' },
        { lang: 'es', url: '/es/about', hreflang: 'es' }
      ]
    },
    {
      url: '/posts',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.9,
      hreflang: [
        { lang: 'en', url: '/posts', hreflang: 'en' },
        { lang: 'es', url: '/es/posts', hreflang: 'es' }
      ]
    },
    {
      url: '/credits',
      lastmod: new Date().toISOString(),
      changefreq: 'yearly',
      priority: 0.3,
      hreflang: [
        { lang: 'en', url: '/credits', hreflang: 'en' },
        { lang: 'es', url: '/es/credits', hreflang: 'es' }
      ]
    }
  ];

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    ${page.hreflang.map(href => `
    <xhtml:link rel="alternate" hreflang="${href.hreflang}" href="${baseUrl}${href.url}" />`).join('')}
  </url>`).join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
