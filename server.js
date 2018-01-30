// import { read } from 'fs';

const http = require('http');
const PORT = 8080;
// const css = require('./css/styles.css');
// const {
//   _404,
//   index,
//   helium,
//   hydrogen
// } = require('./pages');



const server = http.createServer((req, res) => {

  req.on('data', (data) => {
    console.log(data);
  //   // if (req === GET) {

  //   // }
  });




}); //closing for server.on

server.listen(PORT, () => {
  console.log('Server listening on ' + PORT);
}); //closing for listen