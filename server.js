const http2 = require('http2');
const fs = require('fs');
const path = require('path');

const options = {
  key: fs.readFileSync(`${__dirname}/keys/server.key`),
  cert: fs.readFileSync(`${__dirname}/keys/server.crt`),
};


// const appJs = fs.readFileSync(`${__dirname}/../dist/main.chunk.js`);
const indexHTML = fs.readFileSync(path.join(__dirname, '/dist/index.html'));

const FILES = [
  {
    headers: 'application/javascript',
    relPath: '/main.chunk.js',
    absPath: '/dist/main.chunk.js',
  },
];

const onRequest = (request, response) => {
  if (!response.push) return;

  FILES.forEach(file => {
    const push = response.push(file.relPath);

    push.writeHead(200, file.headers);

    fs.createReadStream(path.join(__dirname, file.absPath)).pipe(push);
  });
  
  response.end(indexHTML);
};


// const server = spdy.createServer(options, (request, response) => {
//   const headers = {
//     'content-type': 'application/javascript',
//   };

//   response.push('/main.chunk.js', headers, (err, stream) => {
//     if (err) return;

//     stream.end(appJs);
//   });

//   response.writeHead(200, {
//     'content-type': 'text/html',
//   });

//   response.end(indexHTML);
// });


const server = http2.createServer(options, onRequest);
server.listen(3000);
