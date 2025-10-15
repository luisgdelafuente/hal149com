import { getCollection } from 'astro:content';

export async function GET({ request }) {
  const baseUrl = new URL(request.url).origin;
  
  // Get all blog posts
  const posts = await getCollection('posts');
  
  // Define static pages
  const staticPages = [
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
      changefreq: 'daily',
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
    },
    {
      url: '/thank-you',
      lastmod: new Date().toISOString(),
      changefreq: 'yearly',
      priority: 0.3,
      hreflang: [
        { lang: 'en', url: '/thank-you', hreflang: 'en' },
        { lang: 'es', url: '/es/thank-you', hreflang: 'es' }
      ]
    }
  ];
  
  // Generate blog post entries
  const blogPages = [];
  posts.forEach(post => {
    const slug = post.slug;
    const isSpanish = post.data.lang === 'es';
    const enSlug = isSpanish ? post.data.enSlug : slug;
    const esSlug = isSpanish ? slug : post.data.esSlug;
    
    // Add English post entry
    if (!isSpanish && enSlug) {
      blogPages.push({
        url: `/posts/${enSlug}`,
        lastmod: (post.data.updated ?? post.data.date) ? new Date(post.data.updated ?? post.data.date).toISOString() : new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.7,
        hreflang: esSlug ? [
          { lang: 'en', url: `/posts/${enSlug}`, hreflang: 'en' },
          { lang: 'es', url: `/es/posts/${esSlug}`, hreflang: 'es' }
        ] : [
          { lang: 'en', url: `/posts/${enSlug}`, hreflang: 'en' }
        ]
      });
    }
    
    // Add Spanish post entry
    if (isSpanish && esSlug) {
      blogPages.push({
        url: `/es/posts/${esSlug}`,
        lastmod: (post.data.updated ?? post.data.date) ? new Date(post.data.updated ?? post.data.date).toISOString() : new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.7,
        hreflang: enSlug ? [
          { lang: 'en', url: `/posts/${enSlug}`, hreflang: 'en' },
          { lang: 'es', url: `/es/posts/${esSlug}`, hreflang: 'es' }
        ] : [
          { lang: 'es', url: `/es/posts/${esSlug}`, hreflang: 'es' }
        ]
      });
    }
  });
  
  // Combine all pages
  const pages = [...staticPages, ...blogPages];

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
