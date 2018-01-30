// import { read } from 'fs';
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const PORT = 8080;





// console.log(hydrogen);
// debugger

// const css = require('./css/styles.css');
// const {
//   _404,
//   index,
//   helium,
//   hydrogen
// } = require('./pages');


const server = http.createServer((req, res) => {
  let url = req.url;
    if (url === '/'){
      url += 'index.html';
    }
    url = 'public' + url;
    console.log(url);

  // case  for GET
  if(req.method === `GET`) {
    
    
  
  
  
  
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