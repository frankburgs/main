- This repo holds general /notes and is a work in progress for converting the safety observations list to React.


# Current task breakdown - Convert welding safety list to React
- Convert array of observations to arrays/objects.
``` jsx
return (
  <li className="item">
    {isPacked ? name + ' ✅' : name}
  </li>
);
```

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

``` js Receives either observations, recommendations, or references, and returns a td element.

function myFun(something){

    let newArray = [];

    for ( let obj of something ) {

        if ( obj.link ){
            let newAnchor = document.createElement("a");

            newAnchor.href = obj.link; // Set href attribute.
            newAnchor.innerHTML = obj.text; // Set inner text.

            let anchorStr = newAnchor.outerHTML; // Convert to string.
            newArray.push(anchorStr); // Add to array.
        }

        else newArray.push(obj.text); // Just add the text element
    }

    let newStr = newArray.join("<br/>");
    let newCell = document.createElement("td");
    newCell.innerHTML = newStr;
    return newCell;
};
```

# To-do
- Add buttons that show images (Currently using weld readme to contain modal code)
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


# Stretch
- PC
- Mv Shd
- Cld shwr
- 90 day no wheat.