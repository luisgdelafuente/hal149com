import { createClient, type ClientConfig } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { toHTML } from '@portabletext/to-html'

// Sanity client configuration
const config: ClientConfig = {
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: import.meta.env.PROD, // Use CDN in production for faster reads
}

// Create the Sanity client
export const sanityClient = createClient(config)

// Create a preview client (uses token, bypasses CDN)
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: import.meta.env.SANITY_API_TOKEN,
})

// Image URL builder
const builder: ImageUrlBuilder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Types for blog posts from Sanity
export interface SanityPost {
  _id: string
  _createdAt: string
  _updatedAt: string
  title: string
  slug: { current: string }
  description: string
  body: any[] // Portable Text content
  publishDate: string
  updatedDate?: string
  author: string
  tags?: string[]
  featured?: boolean
  lang: 'en' | 'es'
  enSlug?: string
  esSlug?: string
  image?: {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }
  legacyImagePath?: string
  seoTitle?: string
  seoDescription?: string
}

// Helper to get image URL (handles both Sanity images and legacy paths)
export function getImageUrl(post: SanityPost, width = 1200): string {
  if (post.image?.asset) {
    return urlFor(post.image).width(width).auto('format').url()
  }
  if (post.legacyImagePath) {
    return post.legacyImagePath
  }
  return '/blog-images/default.webp'
}

// Helper to get image alt text
export function getImageAlt(post: SanityPost): string {
  return post.image?.alt || post.title
}

// Convert Portable Text to HTML
export function portableTextToHtml(blocks: any[]): string {
  if (!blocks || blocks.length === 0) {
    return ''
  }

  return toHTML(blocks, {
    components: {
      types: {
        image: ({ value }) => {
          const imageUrl = urlFor(value).width(800).auto('format').url()
          const alt = value.alt || ''
          const caption = value.caption || ''
          return `<figure class="blog-image">
            <img src="${imageUrl}" alt="${alt}" loading="lazy" />
            ${caption ? `<figcaption>${caption}</figcaption>` : ''}
          </figure>`
        },
        code: ({ value }) => {
          const language = value.language || 'text'
          const filename = value.filename || ''
          return `<pre class="code-block" data-language="${language}">
            ${filename ? `<div class="code-filename">${filename}</div>` : ''}
            <code class="language-${language}">${escapeHtml(value.code)}</code>
          </pre>`
        },
      },
      marks: {
        link: ({ value, children }) => {
          const { href, blank } = value
          const target = blank ? ' target="_blank" rel="noopener noreferrer"' : ''
          return `<a href="${href}"${target}>${children}</a>`
        },
        code: ({ children }) => `<code>${children}</code>`,
      },
      block: {
        h1: ({ children }) => `<h1>${children}</h1>`,
        h2: ({ children }) => `<h2>${children}</h2>`,
        h3: ({ children }) => `<h3>${children}</h3>`,
        h4: ({ children }) => `<h4>${children}</h4>`,
        blockquote: ({ children }) => `<blockquote>${children}</blockquote>`,
        normal: ({ children }) => `<p>${children}</p>`,
      },
      list: {
        bullet: ({ children }) => `<ul>${children}</ul>`,
        number: ({ children }) => `<ol>${children}</ol>`,
      },
      listItem: {
        bullet: ({ children }) => `<li>${children}</li>`,
        number: ({ children }) => `<li>${children}</li>`,
      },
    },
  })
}

// Helper to escape HTML entities
function escapeHtml(text: string): string {
  const escapeMap: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (char) => escapeMap[char])
}

// GROQ Queries for blog posts

// Get all posts for a specific language
export async function getAllPosts(lang: 'en' | 'es'): Promise<SanityPost[]> {
  const query = `*[_type == "post" && lang == $lang] | order(publishDate desc) {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    description,
    publishDate,
    updatedDate,
    author,
    tags,
    featured,
    lang,
    enSlug,
    esSlug,
    image,
    legacyImagePath,
    seoTitle,
    seoDescription
  }`
  return sanityClient.fetch<SanityPost[]>(query, { lang })
}

// Get a single post by slug and language
export async function getPostBySlug(slug: string, lang: 'en' | 'es'): Promise<SanityPost | null> {
  const query = `*[_type == "post" && slug.current == $slug && lang == $lang][0] {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    description,
    body,
    publishDate,
    updatedDate,
    author,
    tags,
    featured,
    lang,
    enSlug,
    esSlug,
    image,
    legacyImagePath,
    seoTitle,
    seoDescription
  }`
  return sanityClient.fetch<SanityPost | null>(query, { slug, lang })
}

// Get latest posts for homepage (limited)
export async function getLatestPosts(limit: number, lang: 'en' | 'es'): Promise<SanityPost[]> {
  const query = `*[_type == "post" && lang == $lang] | order(publishDate desc)[0...$limit] {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    description,
    publishDate,
    updatedDate,
    author,
    tags,
    featured,
    lang,
    enSlug,
    esSlug,
    image,
    legacyImagePath,
    seoTitle,
    seoDescription
  }`
  return sanityClient.fetch<SanityPost[]>(query, { lang, limit: limit - 1 })
}

// Get featured posts
export async function getFeaturedPosts(lang: 'en' | 'es'): Promise<SanityPost[]> {
  const query = `*[_type == "post" && lang == $lang && featured == true] | order(publishDate desc) {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    description,
    publishDate,
    updatedDate,
    author,
    tags,
    featured,
    lang,
    enSlug,
    esSlug,
    image,
    legacyImagePath,
    seoTitle,
    seoDescription
  }`
  return sanityClient.fetch<SanityPost[]>(query, { lang })
}

// Get posts by tag
export async function getPostsByTag(tag: string, lang: 'en' | 'es'): Promise<SanityPost[]> {
  const query = `*[_type == "post" && lang == $lang && $tag in tags] | order(publishDate desc) {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    description,
    publishDate,
    updatedDate,
    author,
    tags,
    featured,
    lang,
    enSlug,
    esSlug,
    image,
    legacyImagePath,
    seoTitle,
    seoDescription
  }`
  return sanityClient.fetch<SanityPost[]>(query, { lang, tag })
}

// Get all posts for sitemap (both languages)
export async function getAllPostsForSitemap(): Promise<SanityPost[]> {
  const query = `*[_type == "post"] | order(publishDate desc) {
    _id,
    slug,
    lang,
    publishDate,
    updatedDate
  }`
  return sanityClient.fetch<SanityPost[]>(query)
}

// Get posts with pagination
export async function getPostsPaginated(
  lang: 'en' | 'es',
  page: number,
  perPage: number = 9
): Promise<{ posts: SanityPost[]; total: number }> {
  const start = (page - 1) * perPage
  const end = start + perPage

  const postsQuery = `*[_type == "post" && lang == $lang] | order(publishDate desc)[$start...$end] {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    description,
    publishDate,
    updatedDate,
    author,
    tags,
    featured,
    lang,
    enSlug,
    esSlug,
    image,
    legacyImagePath,
    seoTitle,
    seoDescription
  }`

  const countQuery = `count(*[_type == "post" && lang == $lang])`

  const [posts, total] = await Promise.all([
    sanityClient.fetch<SanityPost[]>(postsQuery, { lang, start, end: end - 1 }),
    sanityClient.fetch<number>(countQuery, { lang }),
  ])

  return { posts, total }
}

// Get total post count for a language
export async function getPostCount(lang: 'en' | 'es'): Promise<number> {
  const query = `count(*[_type == "post" && lang == $lang])`
  return sanityClient.fetch<number>(query, { lang })
}

// Search posts by title/description
export async function searchPosts(searchTerm: string, lang: 'en' | 'es'): Promise<SanityPost[]> {
  const query = `*[_type == "post" && lang == $lang && (
    title match $searchTerm ||
    description match $searchTerm ||
    $searchTerm in tags
  )] | order(publishDate desc) {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    description,
    publishDate,
    updatedDate,
    author,
    tags,
    featured,
    lang,
    enSlug,
    esSlug,
    image,
    legacyImagePath,
    seoTitle,
    seoDescription
  }`
  return sanityClient.fetch<SanityPost[]>(query, { lang, searchTerm: `*${searchTerm}*` })
}
