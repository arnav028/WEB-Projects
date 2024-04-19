// server.js

// Express.js import karein
const express = require('express');

// Express application initialize karein
const app = express();

// GET request ke liye '/' endpoint create karein
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.get('/chup*', (req, res) => {
    res.send('pagal admi');
  });

// Server ko 3000 port par listen karein
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
