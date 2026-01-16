# HAL149 Sanity CMS Migration Guide

This document describes the architecture and usage of the Sanity CMS integration for the HAL149 blog.

## Architecture Overview

The HAL149 website uses a **hybrid Astro + Sanity CMS** architecture:

- **Marketing pages**: Pre-rendered (static) for optimal performance
- **Blog pages**: Server-side rendered (SSR) via Netlify Functions
- **Content management**: Sanity CMS with web-based Studio

### Benefits

- **Instant publishing**: Content changes appear in 2-3 seconds (no rebuild needed)
- **No rebuild costs**: Netlify build minutes not consumed for content updates
- **Web-based editing**: Edit content from any browser via Sanity Studio
- **API-ready**: Content can be accessed via API for future integrations

## Setup Instructions

### 1. Create a Sanity Project

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Create a new project (use free tier)
3. Note your **Project ID** and **Dataset** name

### 2. Configure Environment Variables

Create a `.env` file in the project root:

```env
# Required: Your Sanity project ID
PUBLIC_SANITY_PROJECT_ID=your-project-id

# Required: Dataset name (default is 'production')
PUBLIC_SANITY_DATASET=production

# Required for write operations: API token with Editor permissions
SANITY_API_TOKEN=your-api-token
```

### 3. Add Environment Variables to Netlify

1. Go to your Netlify site dashboard
2. Navigate to **Site settings** > **Environment variables**
3. Add the same variables:
   - `PUBLIC_SANITY_PROJECT_ID`
   - `PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN`

### 4. Run the Migration Script

```bash
# Install dependencies
npm install

# Run migration (reads markdown files, uploads to Sanity)
npm run migrate
```

### 5. Deploy Sanity Studio

Option A: Use Sanity's hosted studio (recommended)
```bash
npx sanity deploy
```

Option B: Use local development
```bash
npx sanity dev
```

## Content Schema

### Blog Post Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| title | string | Yes | Post title |
| slug | slug | Yes | URL-friendly identifier |
| description | text | Yes | SEO meta description |
| body | Portable Text | Yes | Main content |
| publishDate | datetime | Yes | Original publish date |
| updatedDate | datetime | No | Last update date |
| author | string | Yes | Author name |
| tags | array[string] | No | Categorization tags |
| featured | boolean | No | Show on homepage |
| lang | string | Yes | Language: 'en' or 'es' |
| enSlug | string | No | English version slug (for ES posts) |
| esSlug | string | No | Spanish version slug (for EN posts) |
| image | image | No | Featured image |
| legacyImagePath | string | No | Path from markdown migration |

## How to Use the CMS

### Accessing Sanity Studio

1. Visit `/studio` on your site
2. Or go directly to `https://your-project-id.sanity.studio`
3. Log in with your Sanity account

### Creating a New Post

1. Click **+ Create** in the Studio
2. Select **Blog Post**
3. Fill in required fields:
   - Title
   - Slug (auto-generated from title)
   - Description
   - Body content
   - Publish date
   - Author
   - Language (en/es)
4. Click **Publish**

### Creating Bilingual Posts

1. Create the English version first
2. Note the slug (e.g., `my-new-post`)
3. Create Spanish version
4. In the Spanish version, set `enSlug` to `my-new-post`
5. In the English version, set `esSlug` to the Spanish slug

### Updating Existing Content

1. Find the post in the Studio
2. Make your changes
3. Click **Publish**
4. Changes appear on site within seconds

## File Structure

```
hal149com/
├── sanity/
│   └── schemas/
│       ├── index.ts          # Schema exports
│       └── post.ts           # Blog post schema
├── src/
│   ├── lib/
│   │   └── sanity.ts         # Sanity client & queries
│   ├── assets/               # Static assets (fonts, images, CSS)
│   ├── pages/
│   │   ├── posts/
│   │   │   ├── [slug].astro  # SSR individual post (EN)
│   │   │   └── index.astro   # SSR blog index (EN)
│   │   ├── es/posts/
│   │   │   ├── [slug].astro  # SSR individual post (ES)
│   │   │   └── index.astro   # SSR blog index (ES)
│   │   └── studio/
│   │       └── [...path].astro # Studio entry point
│   └── components/
│       ├── LatestPostsSection.astro    # Homepage posts (EN)
│       └── LatestPostsSection.es.astro # Homepage posts (ES)
├── scripts/
│   └── migrate-to-sanity.js  # Migration script
├── markdown-backup/          # Original markdown posts (for migration)
├── sanity.config.ts          # Sanity configuration
├── sanity.cli.ts             # Sanity CLI config
├── .env.example              # Environment template
└── netlify.toml              # Netlify configuration
```

## GROQ Queries

### Get All Posts (by language)
```groq
*[_type == "post" && lang == $lang] | order(publishDate desc)
```

### Get Single Post (by slug)
```groq
*[_type == "post" && slug.current == $slug && lang == $lang][0]
```

### Get Featured Posts
```groq
*[_type == "post" && lang == $lang && featured == true] | order(publishDate desc)
```

### Get Posts by Tag
```groq
*[_type == "post" && lang == $lang && $tag in tags] | order(publishDate desc)
```

## Troubleshooting

### Posts not showing up

1. Check Sanity Studio to verify posts were created
2. Verify `lang` field is set correctly ('en' or 'es')
3. Check `publishDate` is set and in the past
4. Clear Netlify cache and redeploy if needed

### Images not loading

- Legacy images from markdown use the `legacyImagePath` field
- New images uploaded to Sanity use the `image` field
- Ensure images are in `/public/blog-images/` for legacy paths

### Studio access issues

1. Verify `PUBLIC_SANITY_PROJECT_ID` is set correctly
2. Check your Sanity account has access to the project
3. Try accessing the hosted studio directly

### Build failures

1. Check all environment variables are set in Netlify
2. Verify `SANITY_API_TOKEN` has correct permissions
3. Check Node.js version is 20+

## API Integration

The Sanity client is available at `src/lib/sanity.ts`:

```typescript
import { sanityClient, getPostBySlug, getAllPosts } from '../lib/sanity';

// Fetch single post
const post = await getPostBySlug('my-post', 'en');

// Fetch all posts
const posts = await getAllPosts('en');

// Direct GROQ query
const result = await sanityClient.fetch('*[_type == "post"]');
```

## Future Enhancements

- [ ] Browser extension for quick publishing
- [ ] Webhook for cache invalidation
- [ ] Preview mode for draft content
- [ ] Custom image optimization pipeline
- [ ] RSS feed from Sanity

## Support

For issues or questions:
- Check Sanity documentation: [sanity.io/docs](https://www.sanity.io/docs)
- Astro Sanity integration: [docs.astro.build](https://docs.astro.build/en/guides/cms/sanity/)
