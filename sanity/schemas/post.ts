import { defineType, defineField } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fieldsets: [
    {
      name: 'seo',
      title: 'SEO & Metadata',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'translation',
      title: 'Translation Links',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    // Main content fields
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the blog post',
      validation: (Rule) => Rule.required().min(5).max(200),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly identifier for the post',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, ''),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description for SEO and post previews (150-300 chars recommended)',
      rows: 3,
      validation: (Rule) => Rule.required().min(50).max(500),
    }),
    defineField({
      name: 'body',
      title: 'Body Content',
      type: 'array',
      description: 'The main content of the blog post',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
              { title: 'Underline', value: 'underline' },
              { title: 'Strike', value: 'strike-through' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule) =>
                      Rule.uri({
                        scheme: ['http', 'https', 'mailto', 'tel'],
                      }),
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Open in new tab',
                    initialValue: false,
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              description: 'Important for SEO and accessibility',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
        {
          type: 'code',
          title: 'Code Block',
          options: {
            language: 'javascript',
            languageAlternatives: [
              { title: 'JavaScript', value: 'javascript' },
              { title: 'TypeScript', value: 'typescript' },
              { title: 'Python', value: 'python' },
              { title: 'HTML', value: 'html' },
              { title: 'CSS', value: 'css' },
              { title: 'JSON', value: 'json' },
              { title: 'Bash', value: 'bash' },
              { title: 'Markdown', value: 'markdown' },
            ],
            withFilename: true,
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),

    // Date fields
    defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'datetime',
      description: 'When the post was originally published',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'updatedDate',
      title: 'Updated Date',
      type: 'datetime',
      description: 'Last update date (optional)',
    }),

    // Author and categorization
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      description: 'Author name',
      initialValue: 'Luis García de la Fuente',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Tags for categorization and filtering',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      description: 'Show this post on the homepage featured section',
      initialValue: false,
    }),

    // Language and translation
    defineField({
      name: 'lang',
      title: 'Language',
      type: 'string',
      description: 'Post language',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Spanish', value: 'es' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'enSlug',
      title: 'English Translation Slug',
      type: 'string',
      description: 'Slug of the English version (for Spanish posts)',
      fieldset: 'translation',
      hidden: ({ document }) => document?.lang === 'en',
    }),
    defineField({
      name: 'esSlug',
      title: 'Spanish Translation Slug',
      type: 'string',
      description: 'Slug of the Spanish version (for English posts)',
      fieldset: 'translation',
      hidden: ({ document }) => document?.lang === 'es',
    }),

    // Featured image
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      description: 'Main image for the post (used in listings and social sharing)',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility',
        },
      ],
    }),

    // Legacy image path (for migrated content)
    defineField({
      name: 'legacyImagePath',
      title: 'Legacy Image Path',
      type: 'string',
      description: 'Original image path from markdown files (for backward compatibility)',
      hidden: true,
    }),

    // SEO fields
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Override title for search engines (optional, uses title if empty)',
      fieldset: 'seo',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      description: 'Override description for search engines (optional, uses description if empty)',
      rows: 2,
      fieldset: 'seo',
    }),
  ],

  // Preview configuration for the Studio
  preview: {
    select: {
      title: 'title',
      subtitle: 'lang',
      media: 'image',
      date: 'publishDate',
      featured: 'featured',
    },
    prepare({ title, subtitle, media, date, featured }) {
      const langLabel = subtitle === 'en' ? '🇬🇧 EN' : '🇪🇸 ES'
      const featuredLabel = featured ? ' ⭐' : ''
      const dateLabel = date ? new Date(date).toLocaleDateString() : ''

      return {
        title: `${title}${featuredLabel}`,
        subtitle: `${langLabel} | ${dateLabel}`,
        media,
      }
    },
  },

  // Ordering for the document list
  orderings: [
    {
      title: 'Publish Date, New',
      name: 'publishDateDesc',
      by: [{ field: 'publishDate', direction: 'desc' }],
    },
    {
      title: 'Publish Date, Old',
      name: 'publishDateAsc',
      by: [{ field: 'publishDate', direction: 'asc' }],
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
})
