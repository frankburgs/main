How to to use React with babel and webpack.

- /dist contains an index.html with a script to bundle.js
- I don't know why the index.js is in there also.
- Try using server.js to avoid downloading server programs.
``` shell
$ npm i react react-dom
$ npm install --save-dev @babel/core @babel/preset-env @babel/preset-react @babel/cli
npm install --save-dev webpack webpack-cli
npm install --save-dev babel-loader
```

``` json
{
  "scripts": {
    "build": "webpack",
    // "start": "http-server ./dist"
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
    // "http-server": "^14.1.1",
    "webpack": "^5.98.0",
    "webpack-cli": "^6.0.1"
  }
}
```

``` js Create .babelrc in root directory.
{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```


``` js Create webpack.config.js in root directory.
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

``` js Create server.js in root and open with node to avoid having to download server programs.
const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;
const distPath = path.join(__dirname, 'dist');

const server = http.createServer((req, res) => {
  let filePath = path.join(distPath, req.url === '/' ? 'index.html' : req.url);
  const ext = path.extname(filePath);

  // MIME types for different file extensions
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml'
  };

  // Set default content type to HTML
  let contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

```
