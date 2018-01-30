// import { read } from 'fs';
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const PORT = 8080;

const server = http.createServer((req, res) => {
  let url = req.url;
  if (url === '/') {
    url += 'index.html'; //edge case for / and index.html
  }
  url = 'public' + url;
  console.log(url);

  // case for GET
  if (req.method === `GET`) {
    getHandler(url, res)

  } else if (req.method === `POST`) { //case for POST
    req.on('data', (data) => {
      let elementChunk = querystring.parse(data.toString());
      console.log(elementChunk);

      createFile(elementChunk);
      console.log(url);
    });

  } else { //case for neither
    res.writeHead(405, 'Unsupported method')
    res.end()
  };
}); //closing for server.on

server.listen(PORT, () => {
  console.log('Server listening on ' + PORT);
}); //closing for listen

// GetHandler function 
function getHandler(url, res) {
  fs.readFile(url, (err, data) => {
    if (err) throw err;
    console.log(data.toString());
    // res.writeHead(404, 'Not found');
    res.write(data.toString());
    res.end();
  })
};

// createFile function
function createFile(post) {
  let elemBody = `<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>The Elements - ${post.elementName}</title>
    <link rel="stylesheet" href="/css/styles.css">
  </head>
  <body>
    <h1>${post.elementName}</h1>
    <h2>${post.elementSymbol}</h2>
    <h3>Atomic number ${post.elementNumber}</h3>
    <p>${post.elementDescription}</p>
    <p><a href="/">back</a></p>
  </body>
  </html>`;

  fs.writeFile(`public/${post.elementName}.html`, elemBody, (err) => {
    if (err) {
      throw err;
    };
    console.log('File posted!');
  }); //closing writeFile
};

// Success Header
function successHeader(res) {
  res.setHeader(`Content-Type`, `text/hmtl`);
  res.writeHead(200, 'OK');
}; //closing successHeader 

// Fail Header
function failHeader(res) {
  res.writeHead(404, 'Not found!');
}; //closing failHeader