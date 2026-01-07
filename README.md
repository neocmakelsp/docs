# Documentation Site

This repository contains the source code for our documentation site, built with [VitePress](https://vitepress.dev/).

## Prerequisites

- [Bun](https://bun.sh/) (v1.0 or higher)

## Local Development

Follow these steps to run the documentation locally on your machine.

1. **Install dependencies**

   ```bash
   bun install
   ```

2. **Start the development server**

   ```bash
   bun run docs:dev
   ```

   The site should now be running at `http://localhost:5173`.

3. **Build for production**
   To preview the production build locally:

   ```bash
   bun run docs:build
   bun run docs:preview
   ```

## Adding Content

### Adding a New Page

1. **Create the file**: Add a new Markdown file in the `docs` directory.
   - Example: `docs/guides/my-new-feature.md`

2. **Add content**: Write your documentation using standard Markdown. You can also use VitePress-specific features like custom containers and Vue components.

   ```markdown
   # My New Feature

   This is the documentation for the new feature.
   ```

### Adding to the Sidebar

To make your new page visible in the sidebar navigation, you need to update the VitePress configuration.

1. Open the config file at `.vitepress/config.mts`.
2. Locate the `themeConfig.sidebar` object.
3. Add your new page to an existing section, or create a new section.

**Example: Adding a page to an existing section**

```typescript
// .vitepress/config.mts
export default defineConfig({
  themeConfig: {
    sidebar: [
      {
        text: 'Guides',
        items: [
          { text: 'Getting Started', link: '/guides/getting-started' },
          // Add your new page here:
          { text: 'My New Feature', link: '/guides/my-new-feature' } 
        ]
      }
    ]
  }
})
```

**Example: Adding a completely new section**

```typescript
// .vitepress/config.mts
export default defineConfig({
  themeConfig: {
    sidebar: [
      {
        text: 'Guides',
        items: [
          { text: 'Getting Started', link: '/guides/getting-started' }
        ]
      },
      // New Section
      {
        text: 'API Reference',
        items: [
          { text: 'Endpoints', link: '/api/endpoints' },
          { text: 'Authentication', link: '/api/auth' }
        ]
      }
    ]
  }
})
```

## Deployment

This repository is configured to build automatically. Merging to the `master` branch will trigger a deployment.
