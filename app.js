'use strict';

const http = require('http');
const fs = require('fs');

const port = 3000;
const server = http.createServer((request, response) => {
  const url = request.url;
  const method = request.method;
  console.log(url, method);
  if(url === '/' && method === 'GET') {
    response.end('<h1>Home Page</h1>');
  }else if(url === '/about' && method === 'GET') {
    response.end('<h1>About Page</h1>')
  }else if(url === '/file' && method === 'GET'){
    const html = fs.readFileSync('./file.html');
    response.end(html);
  }else { 
    response.end('<h1>404 | Not found :(</h1>')
  }
});

server.listen(port, () => {
  console.log(`Server running on ${port}`);
})