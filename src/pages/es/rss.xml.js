import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE_ES, SITE_DESCRIPTION_ES } from '../../consts';

export async function GET(context) {
  const posts = await getCollection('posts');
  const spanishPosts = posts
    .filter(post => post.data.lang === 'es')
    .sort((a, b) => new Date((b.data.updated ?? b.data.date)).getTime() - new Date((a.data.updated ?? a.data.date)).getTime());

  return rss({
    title: SITE_TITLE_ES,
    description: SITE_DESCRIPTION_ES,
    site: context.site,
    items: spanishPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.updated ?? post.data.date,
      description: post.data.description,
      link: `/es/posts/${post.slug}/`,
    })),
  });
}
