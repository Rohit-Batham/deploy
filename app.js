// Import the http module
const http = require('http');

// Set the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create the server and define the response
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Set HTTP status to 200 OK
  res.setHeader('Content-Type', 'text/plain'); // Set the content type
  res.end('Hello, World!\n'); // Send the response text
});

// Start the server and log the message
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
