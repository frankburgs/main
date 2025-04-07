[Notes](#notes)
[Setup](#setup)
[Snippets](#snippets)

# Notes
- fcc min 25

# Setup
## Setup from repo
``` she
$ git clone repoName
$ npm i
$ npm run build
$ node server
```


## Setup from 'scratch'
- Webpack consolidates .js, babel transpiles .jsx to .js
``` sh
$ npm i react react-dom
$ npm install --save-dev @babel/core @babel/preset-env @babel/preset-react @babel/cli
$ npm install --save-dev webpack webpack-cli
$ npm install --save-dev babel-loader
```


## Package
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


## Create .babelrc in root directory.
``` js
{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```


## Create webpack.config.js in root directory.
``` js 
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  mode: 'development'
};
```