import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
  const posts = await getCollection('posts');
  const englishPosts = posts
    .filter(post => post.data.lang === 'en')
    .sort((a, b) => new Date((b.data.updated ?? b.data.date)).getTime() - new Date((a.data.updated ?? a.data.date)).getTime());

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: englishPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.updated ?? post.data.date,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
  });
}
