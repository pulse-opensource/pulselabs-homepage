const http2 = require('http2');
const fs = require('fs');
const path = require('path');

const options = {
  key: fs.readFileSync(`${__dirname}/keys/server.key`),
  cert: fs.readFileSync(`${__dirname}/keys/server.crt`),
};


const indexHTML = fs.readFileSync(path.join(__dirname, '/dist/index.html'));

const FILES = [
  {
    headers: 'application/javascript',
    relPath: '/main.chunk.js',
    absPath: '/dist/main.chunk.js',
  },
  {
    headers: 'text/css',
    relPath: '/style.css',
    absPath: '/dist/style.css',
  },
];

const onRequest = (request, response) => {
  if (!response.push) return;
  // if (request.url !== '/') return;

  FILES.forEach(file => {
    const push = response.push(file.relPath);

    push.stream.on('end', () => {
      push.stream.removeAllListeners();
    });

    push.stream.on('error', err => {
      push.stream.removeAllListeners();
    });

    push.writeHead(200, file.headers);

    fs.createReadStream(path.join(__dirname, file.absPath))
      .pipe(push);
  });
  
  response.end(indexHTML);
};


const server = http2.createServer(options, onRequest);
server.listen(3000);
