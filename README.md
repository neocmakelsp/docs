# Documentation Site

This repository contains the source code for our documentation site, built with
[`rspress`](https://rspress.dev).

## Prerequisites

- [`deno`](https://deno.land/)

## Local Development

Follow these steps to run the documentation locally on your machine.

1. **Install dependencies**

   ```bash
   deno install
   ```

2. **Start the development server**

   ```bash
   deno run dev
   ```

   The site should now be running at `http://localhost:3000`.

3. **Build for production**
   To preview the production build locally:

   ```bash
   deno run build
   deno run preview
   ```

## Adding Content

### Adding a New Page

1. **Create the file**: Add a new Markdown file in the `docs` directory.
   - Example: `docs/my-new-feature.md`

2. **Add content**: Write your documentation using standard Markdown. You can
also use MDX-specific features like custom containers and `rspress` components.

   ```mdx
   # My New Feature

   This is the documentation for the new feature.
   ```

### Adding to the Sidebar

To make your new page visible in the sidebar navigation, you need to add a meta
entry.

1. Open or create a file `_meta.json` next to the markdown file.
2. Add the page name to the list of pages.

#### Example: Adding a Page to an Existing Section

```json5
// docs/_meta.json
["installation", "...", "my-new-feature"]
```

For a more complete guide see the [routing guide](https://rspress.rs/guide/basic/conventional-route)
in the `rspress` documentation.

## Deployment

This repository is configured to build automatically. Merging to the `master`
branch will trigger a deployment.
