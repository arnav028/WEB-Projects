const express = require('express');
const app = express();

app.use(function(req, res, next) {
  console.log("middleware is working");
  next();
});

app.get("/profile", function(req, res) {
  res.send("Hello World");
});

app.get("/profile/:username", function(req, res) {   /* jaha par collon lag jata hai username ko params kehte hai */
  res.send(`Hello from ${req.params.username}`);  iss${} dynamic data string mai include hojayega
});

app.listen(3000);
