/**
 * Migration Script: Markdown to Sanity CMS
 *
 * This script reads all markdown blog posts from /src/content/posts/
 * and uploads them to Sanity CMS.
 *
 * Usage:
 * 1. Set up environment variables in .env:
 *    - PUBLIC_SANITY_PROJECT_ID
 *    - PUBLIC_SANITY_DATASET
 *    - SANITY_API_TOKEN (with write permissions)
 *
 * 2. Run: npm run migrate
 *
 * Note: Run this script with Node.js 18+ for native fetch support
 */

import { createClient } from '@sanity/client'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load environment variables from .env file
async function loadEnv() {
  try {
    const envPath = path.join(__dirname, '..', '.env')
    const envContent = await fs.readFile(envPath, 'utf-8')
    const lines = envContent.split('\n')

    for (const line of lines) {
      const trimmed = line.trim()
      if (trimmed && !trimmed.startsWith('#')) {
        const [key, ...valueParts] = trimmed.split('=')
        const value = valueParts.join('=')
        if (key && value) {
          process.env[key.trim()] = value.trim()
        }
      }
    }
  } catch (error) {
    console.log('No .env file found, using existing environment variables')
  }
}

// Initialize after loading env
await loadEnv()

// Sanity client configuration
const client = createClient({
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Posts directory
const POSTS_DIR = path.join(__dirname, '..', 'src', 'content', 'posts')

/**
 * Parse markdown frontmatter and content
 */
function parseMarkdown(content, filename) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
  const match = content.match(frontmatterRegex)

  if (!match) {
    throw new Error(`Invalid markdown format in ${filename}`)
  }

  const frontmatterStr = match[1]
  const body = match[2]

  // Parse YAML-like frontmatter
  const frontmatter = {}
  const lines = frontmatterStr.split('\n')

  for (const line of lines) {
    const colonIndex = line.indexOf(':')
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim()
      let value = line.substring(colonIndex + 1).trim()

      // Handle quoted strings
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1)
      }

      // Handle boolean
      if (value === 'true') value = true
      if (value === 'false') value = false

      // Handle dates (keep as string, will be processed later)
      if (key === 'date' || key === 'updated') {
        // Keep as string for now
      }

      frontmatter[key] = value
    }
  }

  return { frontmatter, body }
}

/**
 * Convert markdown text to Portable Text blocks
 */
function markdownToPortableText(markdown) {
  const blocks = []
  const lines = markdown.split('\n')

  let currentParagraph = []
  let inCodeBlock = false
  let codeBlockContent = []
  let codeBlockLanguage = ''
  let inList = false
  let listItems = []
  let listType = 'bullet'

  function flushParagraph() {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join('\n').trim()
      if (text) {
        blocks.push(createTextBlock(text, 'normal'))
      }
      currentParagraph = []
    }
  }

  function flushList() {
    if (listItems.length > 0) {
      for (const item of listItems) {
        blocks.push(createListItemBlock(item, listType))
      }
      listItems = []
      inList = false
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Handle code blocks
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        // End code block
        blocks.push(createCodeBlock(codeBlockContent.join('\n'), codeBlockLanguage))
        codeBlockContent = []
        codeBlockLanguage = ''
        inCodeBlock = false
      } else {
        // Start code block
        flushParagraph()
        flushList()
        inCodeBlock = true
        codeBlockLanguage = line.slice(3).trim() || 'text'
      }
      continue
    }

    if (inCodeBlock) {
      codeBlockContent.push(line)
      continue
    }

    // Handle headers
    const headerMatch = line.match(/^(#{1,6})\s+(.+)$/)
    if (headerMatch) {
      flushParagraph()
      flushList()
      const level = headerMatch[1].length
      const text = headerMatch[2].trim()
      blocks.push(createTextBlock(text, `h${level}`))
      continue
    }

    // Handle horizontal rules
    if (line.match(/^(\*{3,}|-{3,}|_{3,})$/)) {
      flushParagraph()
      flushList()
      // Skip horizontal rules in Portable Text, they're not needed
      continue
    }

    // Handle blockquotes
    if (line.startsWith('>')) {
      flushParagraph()
      flushList()
      const quoteText = line.replace(/^>\s*/, '').trim()
      if (quoteText) {
        blocks.push(createTextBlock(quoteText, 'blockquote'))
      }
      continue
    }

    // Handle bullet lists
    const bulletMatch = line.match(/^[-*+]\s+(.+)$/)
    if (bulletMatch) {
      flushParagraph()
      if (!inList || listType !== 'bullet') {
        flushList()
        inList = true
        listType = 'bullet'
      }
      listItems.push(bulletMatch[1].trim())
      continue
    }

    // Handle numbered lists
    const numberMatch = line.match(/^\d+\.\s+(.+)$/)
    if (numberMatch) {
      flushParagraph()
      if (!inList || listType !== 'number') {
        flushList()
        inList = true
        listType = 'number'
      }
      listItems.push(numberMatch[1].trim())
      continue
    }

    // Empty line
    if (line.trim() === '') {
      flushParagraph()
      if (inList) {
        flushList()
      }
      continue
    }

    // Regular text - add to current paragraph
    if (inList) {
      flushList()
    }
    currentParagraph.push(line)
  }

  // Flush remaining content
  flushParagraph()
  flushList()

  return blocks.length > 0 ? blocks : [createTextBlock('', 'normal')]
}

/**
 * Create a Portable Text block
 */
function createTextBlock(text, style) {
  const children = parseInlineMarkdown(text)

  return {
    _type: 'block',
    _key: generateKey(),
    style: style,
    children: children,
    markDefs: extractMarkDefs(text),
  }
}

/**
 * Create a list item block
 */
function createListItemBlock(text, listType) {
  const children = parseInlineMarkdown(text)

  return {
    _type: 'block',
    _key: generateKey(),
    style: 'normal',
    listItem: listType,
    level: 1,
    children: children,
    markDefs: extractMarkDefs(text),
  }
}

/**
 * Create a code block
 */
function createCodeBlock(code, language) {
  return {
    _type: 'code',
    _key: generateKey(),
    language: language || 'text',
    code: code,
  }
}

/**
 * Parse inline markdown (bold, italic, code, links)
 */
function parseInlineMarkdown(text) {
  const children = []
  let remaining = text
  let linkIndex = 0

  // Simple approach: split text and identify marks
  // This is a simplified parser - handles **bold**, *italic*, `code`, and [links](url)

  const segments = []
  let currentPos = 0

  // Find all special patterns
  const patterns = [
    { regex: /\*\*([^*]+)\*\*/g, mark: 'strong' },
    { regex: /\*([^*]+)\*/g, mark: 'em' },
    { regex: /`([^`]+)`/g, mark: 'code' },
    { regex: /\[([^\]]+)\]\(([^)]+)\)/g, mark: 'link' },
  ]

  // For simplicity, just create plain text spans for now
  // and add marks based on patterns found

  // Split by markdown patterns and create spans
  let processedText = text
  const marks = []

  // Remove markdown syntax but track positions for a simpler approach
  // Just output the text with basic inline marks

  // Handle links separately as they need markDefs
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  let linkMatch
  const linkTexts = []

  while ((linkMatch = linkRegex.exec(text)) !== null) {
    linkTexts.push({
      fullMatch: linkMatch[0],
      text: linkMatch[1],
      url: linkMatch[2],
    })
  }

  // For now, create a simple span with the text
  // Strip markdown syntax for plain text
  let plainText = text
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')

  if (plainText.trim()) {
    children.push({
      _type: 'span',
      _key: generateKey(),
      text: plainText,
      marks: [],
    })
  } else {
    // Empty block needs at least one span
    children.push({
      _type: 'span',
      _key: generateKey(),
      text: '',
      marks: [],
    })
  }

  return children
}

/**
 * Extract mark definitions (for links)
 */
function extractMarkDefs(text) {
  const markDefs = []
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  let match

  while ((match = linkRegex.exec(text)) !== null) {
    markDefs.push({
      _type: 'link',
      _key: generateKey(),
      href: match[2],
    })
  }

  return markDefs
}

/**
 * Generate a random key for Portable Text blocks
 */
function generateKey() {
  return Math.random().toString(36).substring(2, 10)
}

/**
 * Get slug from filename (remove .md extension)
 */
function getSlugFromFilename(filename) {
  return filename.replace(/\.md$/, '')
}

/**
 * Convert frontmatter date to ISO string
 */
function parseDate(dateValue) {
  if (!dateValue) return null

  // Handle ISO string (e.g., "2025-09-22T00:00:00.000Z")
  if (typeof dateValue === 'string') {
    // Try to parse the date
    const date = new Date(dateValue)
    if (!isNaN(date.getTime())) {
      return date.toISOString()
    }
  }

  return null
}

/**
 * Migrate a single post
 */
async function migratePost(filename) {
  const filePath = path.join(POSTS_DIR, filename)
  const content = await fs.readFile(filePath, 'utf-8')

  const { frontmatter, body } = parseMarkdown(content, filename)

  // Get slug from filename
  const slug = getSlugFromFilename(filename)

  // Create Sanity document
  const doc = {
    _type: 'post',
    _id: `post-${slug}`, // Use deterministic IDs for easier management
    title: frontmatter.title || 'Untitled',
    slug: {
      _type: 'slug',
      current: slug,
    },
    description: frontmatter.description || '',
    body: markdownToPortableText(body),
    publishDate: parseDate(frontmatter.date),
    updatedDate: parseDate(frontmatter.updated),
    author: frontmatter.author || 'Luis García de la Fuente',
    tags: frontmatter.tags ? (Array.isArray(frontmatter.tags) ? frontmatter.tags : [frontmatter.tags]) : [],
    featured: frontmatter.featured === true,
    lang: frontmatter.lang || 'en',
    enSlug: frontmatter.enSlug || null,
    esSlug: frontmatter.esSlug || null,
    legacyImagePath: frontmatter.image || null,
  }

  // Remove null values
  Object.keys(doc).forEach(key => {
    if (doc[key] === null) {
      delete doc[key]
    }
  })

  return doc
}

/**
 * Main migration function
 */
async function migrate() {
  console.log('🚀 Starting migration to Sanity CMS...\n')

  // Validate configuration
  if (!process.env.PUBLIC_SANITY_PROJECT_ID) {
    console.error('❌ Error: PUBLIC_SANITY_PROJECT_ID is not set')
    console.error('Please set up your .env file with Sanity credentials')
    process.exit(1)
  }

  if (!process.env.SANITY_API_TOKEN) {
    console.error('❌ Error: SANITY_API_TOKEN is not set')
    console.error('Please create an API token in sanity.io/manage with Editor permissions')
    process.exit(1)
  }

  console.log(`📋 Configuration:`)
  console.log(`   Project ID: ${process.env.PUBLIC_SANITY_PROJECT_ID}`)
  console.log(`   Dataset: ${process.env.PUBLIC_SANITY_DATASET || 'production'}\n`)

  // Read all markdown files
  const files = await fs.readdir(POSTS_DIR)
  const mdFiles = files.filter(f => f.endsWith('.md'))

  console.log(`📝 Found ${mdFiles.length} markdown files to migrate\n`)

  // Track results
  const results = {
    success: [],
    failed: [],
  }

  // Migrate each file
  for (const file of mdFiles) {
    try {
      console.log(`   Migrating: ${file}`)
      const doc = await migratePost(file)

      // Create or replace the document in Sanity
      await client.createOrReplace(doc)

      results.success.push(file)
      console.log(`   ✅ ${file} - migrated successfully`)
    } catch (error) {
      results.failed.push({ file, error: error.message })
      console.error(`   ❌ ${file} - failed: ${error.message}`)
    }
  }

  // Print summary
  console.log('\n' + '='.repeat(50))
  console.log('📊 Migration Summary')
  console.log('='.repeat(50))
  console.log(`   ✅ Successful: ${results.success.length}`)
  console.log(`   ❌ Failed: ${results.failed.length}`)

  if (results.failed.length > 0) {
    console.log('\nFailed files:')
    for (const { file, error } of results.failed) {
      console.log(`   - ${file}: ${error}`)
    }
  }

  console.log('\n🎉 Migration complete!')

  if (results.success.length > 0) {
    console.log('\n📌 Next steps:')
    console.log('   1. Visit your Sanity Studio to verify the content')
    console.log('   2. Check that all posts appear correctly')
    console.log('   3. Verify bilingual links are working (enSlug/esSlug)')
  }
}

// Run migration
migrate().catch(error => {
  console.error('Migration failed:', error)
  process.exit(1)
})
