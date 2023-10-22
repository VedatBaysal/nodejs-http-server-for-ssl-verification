const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 80;
const domain = "localhost";

const sendResponse = (res, status, contentType, data) => {
  res.writeHead(status, { 'Content-Type': contentType });
  res.end(data);
};

const server = http.createServer((req, res) => {
  const requestedUrl = req.url;
  let filePath = path.join(__dirname, requestedUrl);

  if (requestedUrl === '/' || requestedUrl === '/index.html') {
    filePath = path.join(__dirname, 'index.html');
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        sendResponse(res, 404, 'text/plain', 'Not Found');
      } else {
        sendResponse(res, 500, 'text/plain', 'Internal Server Error');
      }
    } else {
      let contentType = 'text/plain';
      if (filePath.endsWith('.html')) {
        contentType = 'text/html';
      }
      sendResponse(res, 200, contentType, data);
    }
  });
});

server.listen(port, domain, () => {
  console.log(`Server listening on port ${port}`);
});