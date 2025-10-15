export async function GET() {
  const { getCollection } = await import('astro:content');
  const all = await getCollection('posts');
  const posts = all
    .filter(p => p.data.lang === 'es')
    .sort((a, b) => new Date((b.data.updated ?? b.data.date)).getTime() - new Date((a.data.updated ?? a.data.date)).getTime())
    .map(p => ({
      slug: p.slug,
      title: p.data.title,
      description: p.data.description,
      author: p.data.author,
      tags: p.data.tags || [],
      date: p.data.date instanceof Date ? p.data.date.toISOString() : p.data.date,
      updated: (p.data.updated instanceof Date ? p.data.updated.toISOString() : (p.data.updated || (p.data.date instanceof Date ? p.data.date.toISOString() : p.data.date))),
      image: p.data.image || null
    }));

  return new Response(JSON.stringify({ posts }), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=31536000, immutable'
    }
  });
}


