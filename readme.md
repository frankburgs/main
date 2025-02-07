- This repository is for front-end development.
- When complete, $ run build creates a "dist" or "build" folder which is then pushed to the pages repo for publication.

# Table of contents
- To-do
- Setup
- Notes
- Routes

# To-do
- Build welding safety list with React.
## Steps



- Push React build to GH pages.
- Populate other routes.

# Notes
- To syle links, add a style block below the html block in index.

``` xml
<!-- camera -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16">
  <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
  <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>
</svg>
<!-- printer -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
  <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1"/>
  <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
</svg>
```

# Setup

- "From scratch"

``` shell
$ npm create vite # Follow cmd instructions for React option.
$ npm i react-router
# Follow the TailwindCSS documentation for the Vite framework.
$ npm i tailwindcss @tailwindcss/vite
```


``` js vite.config.ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```


``` css add to css file and ensure it's referenced in app.
@import "tailwindcss";
```


## Setup from repo

- Try the following since package is not gitignored.

``` shell
$ git clone repoUrl.git
$ npm i
```


# Routes
- shelver
- schedule
- mousetrap
- inventory (msds, manuals, etc.)
- wi (work instruction, T-handle)
- plumbing
- electrical
- roofing
- web
- auto
- road
- wheelbarrow