const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

// Read the certificate and key
const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};

// Create an Express application
const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Create an HTTPS server
https.createServer(options, app).listen(443, '0.0.0.0', () => {
  console.log('HTTPS Server running on port 443');
});
