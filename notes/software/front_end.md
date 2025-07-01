

# Javascript

## Modal
- Using TWCSS

``` html
<button class="open-modal-btn">Open Modal</button>
<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 hidden" id="modal">
    <div class="bg-white p-6 rounded shadow-lg w-1/3">
    <h2 class="text-2xl font-bold mb-4">Modal Title</h2>
    <p class="mb-4">This is the content of the modal.</p>
    <button class="close-modal-btn bg-blue-500 text-white px-4 py-2 rounded">Close</button>
    </div>
</div>
<script>
document.querySelector('.open-modal-btn').addEventListener('click', () => {
  document.getElementById('modal').classList.remove('hidden');
});

document.querySelector('.close-modal-btn').addEventListener('click', () => {
  document.getElementById('modal').classList.add('hidden');
});

// Close the modal when clicking outside of it
document.getElementById('modal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('modal')) {
    document.getElementById('modal').classList.add('hidden');
  }
});
</script>
```

## td with linked text

``` js
function myFun(something){ // receives observations, recommendations, or references (objects?)

    let newArray = [];

    for ( let obj of something ) {

        if ( obj.link ){
            let newAnchor = document.createElement("a");

            newAnchor.href = obj.link; // Set href attribute.
            newAnchor.innerHTML = obj.text; // Set inner text.

            let anchorStr = newAnchor.outerHTML; // Convert to string.
            newArray.push(anchorStr); // Add to array.
        }

        else newArray.push(obj.text); // Just add text element
    }

    let newStr = newArray.join("<br/>");
    let newCell = document.createElement("td");
    newCell.innerHTML = newStr;
    return newCell;
};
```

## Create row then populate then append

``` js
const root = document.getElementById("root");
let newRow = document.createElement("tr");

let counter = 1; // Begin counter.
let counterCell = document.createElement("td");
counterCell.innerHTML = counter;
newRow.appendChild(counterCell); // End counter.

newRow.appendChild(myFun(thing.references));

newRow.appendChild(myFun(thing.observations));

newRow.appendChild(myFun(thing.recommendations));

root.appendChild(newRow);
```

## Timer to keep track of elapsed time in seconds

``` js
let inc = 0;
let intervalId;
let someBool = false;
function starter(){
    someBool = true;
    counterStarter();
}
function stopper(){
    clearInterval(intervalId);
}
function counterStarter(){
    if(someBool){
        intervalId = setInterval(counting, 1000);
    }
}
function counting() {
    let cont = document.getElementById("root");
    inc++;
    cont.innerHTML = inc;
}
```

## Importing & exporting
- Images in React may need to be imported as default imports ❔
``` js
// Named import, multiple exports in one file
import { moduleScopedVariable } from './exampleModule.js';

// Default import, single default export
import exampleFunction from './exampleModule.js';
```


# SVG

- -> Edit - Preferences - Interface (main)
- User Interface handle size to max.
- -> Toolbars
- 2x icon sizes to max.
- Resize page to selection @ end of editing.
- Using a default font size 9 and matching to drawing with units of pixels (px) may work.

## Dark mode
- -> File - Document Properties - Display.
- Both Page & Desk -> choose black (L) from HSL.
- File -> Save Template & set as default.

## First shape
- Select text and a shape, -> Text -> Flow into frame.
- Set a fill color and an opacity to zero to make it clickable.
- C&P the SVG element into your HTML, no img, or object, etc.

## FX
- Stack multiple differently blurred lines with center white top for neon.

``` css
filter: blur(5px);
```

## Editor
- Right click anywhere : menu options
- Right click tool icon : more options
- Hold shift + click tools : alternate function
- Click object twice : swap manipulation tool

## Notes
- Write svg delimiter line locations at bottom of files if unable to reference externally.
- Trace simpler images to convert to svg or use tools.
- Modifying width, height, and stroke may change the other values as well.
- Use smallest font size and build from there.
- Go for the simplest visual interpretation with the fewest lines and build.

## Print
- Tailwind has a stroke-width utility, try to convert color of all items in the svg to black for printing, as well as reducing stroke-width to reduce ink usage.
- Use print-none for legend.

## Sanitization
- Delete ?xml element before the svg element.
- Delete sodipodi:nameview element.

## To-do
- Use svg in jsx
- mousetrap
- Cat in worn flowing robes (console)
- elbow tendon extension stretch


# Babel & Webpack build

``` css
$ npm i react react-dom @babel/cli @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli
```

# Package
``` json
{
  "scripts": {
    "build": "webpack",
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@babel/cli": "^7.26.4",
    "@babel/core": "^7.26.9",
    "@babel/preset-env": "^7.26.9",
    "@babel/preset-react": "^7.26.3",
    "babel-loader": "^8.4.1",
    "webpack": "^5.98.0",
    "webpack-cli": "^6.0.1"
  }
}
```

``` json
{
    "scripts": {
    "build": "webpack"
  },
  "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": {
    "@babel/cli": "^7.27.0",
    "@babel/core": "^7.26.10",
    "@babel/preset-env": "^7.26.9",
    "@babel/preset-react": "^7.26.3",
    "babel-loader": "^10.0.0",
    "webpack": "^5.99.5",
    "webpack-cli": "^6.0.1"
  }
}
```

# Create webpack.config.js in root directory.
``` js 
const path = require('path');

module.exports = {
  entry: './src/main.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};

```


# Setup Vite/React/TWCSS

``` shell
npm create vite@latest # Follow Vite setup for React.
npm i # Install dependencies.
npm run dev # Check.
npm install tailwindcss @tailwindcss/vite # Follow TWCSS steps for Vite.
```

- Add following to existing .js

``` js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

- Add @import "tailwindcss"; to an imported .css file.

- Create folder /config and move eslint & vite config files, update scripts as below.

``` js
{
  "scripts": {
    "dev": "vite --config ./config/vite.config.js",
    "build": "vite build --config ./config/vite.config.js",
    "lint": "eslint --config ./config/eslint.config.js .",
  }
}
```