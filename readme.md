- This repo holds general 📁/notes and is a WIP for Reactifying & Tailwinding the pages repo.
- /config has been routed to in package.json

# To-do

- Convert array of observations to arrays/objects
- add $ git rm --cached fileName to remove file added to .gitignore
- Add buttons that show images (Currently using weld readme to contain modal code)
- Push React build to GH pages
- Add SVG icons
- Add a sort & filter option
- Build a main menu
- Add corner menu in weld list with nav to a main menu
- Print option for weld list
- Populate main menu route with hex & avatar
- Incorporate ANSI AWS PDF (page link no work)

# Setup from "scratch"

``` shell
$ npm create vite # Follow options for React.
$ npm i react-router # Follow the TWCSS documentation for framework.
$ npm i tailwindcss @tailwindcss/vite
```

## Create vite.config.ts

``` js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

## Add to css file and ensure it's href'd in app.

``` css
@import "tailwindcss";
```

# Setup from repo

``` shell
$ git clone repoUrl.git
$ npm i # package.json must be present
$ npm run dev
```