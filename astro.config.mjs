import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  output: 'static',
  site: 'https://your-domain.com', // Replace with your actual domain
  build: {
    // Optimize CSS bundling and reduce render-blocking
    cssCodeSplit: false, // Bundle all CSS into single file to reduce requests
    inlineStylesheets: 'auto', // Inline critical CSS automatically
  },
  vite: {
    plugins: [tailwindcss()],
    css: {
      // Optimize CSS processing
      devSourcemap: false, // Disable sourcemaps in production
    },
    build: {
      // Optimize build output
      cssMinify: true, // Minify CSS
      rollupOptions: {
        output: {
          // Optimize CSS chunking - now using consolidated main.css
          manualChunks: {
            // Bundle all CSS together in single chunk
            styles: ['src/assets/css/main.css']
          }
        }
      }
    }
  },
  content: {
    collections: {
      posts: {
        schema: {
          type: 'content',
          fields: {
            title: { type: 'string', required: true },
            description: { type: 'string', required: true },
            date: { type: 'date', required: true },
            author: { type: 'string', required: true },
            tags: { type: 'array', of: { type: 'string' }, required: true },
            image: { type: 'string', required: false },
            lang: { type: 'string', required: true },
            enSlug: { type: 'string', required: false },
            esSlug: { type: 'string', required: false }
          }
        }
      }
    }
  },
  experimental: {
    fonts: [{
      provider: "local",
      name: "InterLocal",
      cssVariable: "--font-inter",
      variants: [
        {
          weight: 400,
          style: "normal",
          src: ["./src/assets/fonts/Inter-Regular.woff2"]
        },
        {
          weight: 600,
          style: "normal",
          src: ["./src/assets/fonts/Inter-SemiBold.woff2"]
        },
        {
          weight: 700,
          style: "normal",
          src: ["./src/assets/fonts/Inter-Bold.woff2"]
        }
      ]
    },
    {
      provider: "local",
      name: "InterLocalDisplay",
      cssVariable: "--font-inter-display",
      variants: [
        {
          weight: 400,
          style: "normal",
          src: ["./src/assets/fonts/InterDisplay-Regular.woff2"]
        },
        {
          weight: 500,
          style: "normal",
          src: ["./src/assets/fonts/InterDisplay-Medium.woff2"]
        },
        {
          weight: 600,
          style: "normal",
          src: ["./src/assets/fonts/InterDisplay-SemiBold.woff2"]
        }
      ]
    }]
  }
})