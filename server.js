// import { read } from 'fs';
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const PORT = 8080;

const server = http.createServer((req, res) => {
  let url = req.url;
  if (url === '/') {
    url += 'index.html';
  }
  url = 'public' + url;
  console.log(url);

  // case for GET
  if (req.method === `GET`) {
    getHandler(url, res)

  } else if (req.method === 'POST') { //case for POST
    req.on('data', (data) => {
      let elementChunk = querystring.parse(data.toString());
      console.log(elementChunk);

    });

  } else { //case for neither
    res.writeHead(405, 'Unsupported method')
    res.end()
  }


}); //closing for server.on

server.listen(PORT, () => {
  console.log('Server listening on ' + PORT);
}); //closing for listen

function getHandler(url, res) {
  fs.readFile(url, (err, data) => {
    if (err) throw err;
    console.log(data.toString());
    res.writeHead()
    res.write(data.toString());
    res.end();

  })
}

// function setSuccessHeader(res) {
//   res.se
// }