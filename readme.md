- This repository is for front-end development that is then pushed to pages publication repo.


# Current task breakdown - Convert welding safety list to React
- Add buttons that show images.
- Currently using index.html to contain modal code.

# To-do
- Push React build to GH pages.
- Add SVG icons.
- Add a sort & filter option.
- Build a main menu.
- Add corner menu in weld list with nav to a main menu.
- Print option for weld list.
- Populate main menu route with hex & avatar.


# Notes
- To syle links, add a CSS style element below html element in index ❔


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
$ npm run dev
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
- infantry


# History
- ✅ Create React sandbox (Use repo Fabrication)