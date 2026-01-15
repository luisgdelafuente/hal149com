import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

// Sanity project configuration
// Project ID and dataset are set via environment variables
const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || process.env.PUBLIC_SANITY_PROJECT_ID || ''
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || process.env.PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'hal149-blog',
  title: 'HAL149 Blog CMS',

  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Blog Posts section with language filtering
            S.listItem()
              .title('Blog Posts')
              .child(
                S.list()
                  .title('Blog Posts by Language')
                  .items([
                    S.listItem()
                      .title('All Posts')
                      .child(
                        S.documentList()
                          .title('All Blog Posts')
                          .filter('_type == "post"')
                          .defaultOrdering([{ field: 'publishDate', direction: 'desc' }])
                      ),
                    S.listItem()
                      .title('English Posts')
                      .child(
                        S.documentList()
                          .title('English Blog Posts')
                          .filter('_type == "post" && lang == "en"')
                          .defaultOrdering([{ field: 'publishDate', direction: 'desc' }])
                      ),
                    S.listItem()
                      .title('Spanish Posts')
                      .child(
                        S.documentList()
                          .title('Spanish Blog Posts')
                          .filter('_type == "post" && lang == "es"')
                          .defaultOrdering([{ field: 'publishDate', direction: 'desc' }])
                      ),
                    S.listItem()
                      .title('Featured Posts')
                      .child(
                        S.documentList()
                          .title('Featured Blog Posts')
                          .filter('_type == "post" && featured == true')
                          .defaultOrdering([{ field: 'publishDate', direction: 'desc' }])
                      ),
                  ])
              ),
            // Direct access to all documents
            ...S.documentTypeListItems().filter(
              (listItem) => !['post'].includes(listItem.getId() || '')
            ),
          ]),
    }),
    visionTool(), // GROQ playground for testing queries
  ],

  schema: {
    types: schemaTypes,
  },
})
