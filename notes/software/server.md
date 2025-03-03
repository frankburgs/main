``` js
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
        
      } 
      else {

        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);

      }
    } 

    else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

``` js
import http from 'node:http';
import { myFunction } from './qty.js'; // Returns an array containing quantities of each item #.

const hostname = '127.0.0.1';
const port = 3000;

const fileCount = myFunction();

console.log("Again file count is " + fileCount);

const server = http.createServer((req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*'); // Or else CORS error.
  
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  res.end('75');// Send the response body.
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```