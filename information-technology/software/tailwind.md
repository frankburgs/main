
# Installation

- You can use Tailwind by saving the Javascript source file from the CDN locally and running it in your file, but this is not recommended for 'production'.

- It appears there is a different way where you can download and install something 🤔

- Most pragmatic appears to use NPM folder structure as below.

``` shell
# Creates package, package-lock, and populates node modules, states 113 packages installed
npm install -D tailwindcss 

npx tailwindcss init # Creates tailwind.config.js
```

- Create /dist/index.html
- add link to style from /dist/output.css (auto-populates with CSS when bundle is run)
- Create input.css (in root or elsewhere) and populate with :

``` css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- In package.json add

``` js
"scripts": {
    "dev": "tailwindcss -i input.css -o ./dist/output.css --watch"
}
```

- Install liveserver, run the following to have it watch for changes and update.

``` shell
npm run dev
```

- Page needs to be refreshed to reflect changes.