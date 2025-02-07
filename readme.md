- This repository is for front-end development.
- When complete, create a dist or build which is then pushed to the pages repo for publication.

# To-do
- Convert welding safety list to React.
- Push React build to GH pages.
- Upload images backup elsewhere.
- Add corner menu with nav to a main menu.
- Populate main menu route with hex & avatar.

# Notes
- To syle links, add a CSS style element below html element in index.

# Setup from "scratch"

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

``` shell
$ git clone repoUrl.git
$ npm i # package.json must be present
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