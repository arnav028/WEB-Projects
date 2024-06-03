const express = require('express'); // Express framework ka import
const path = require('path'); // path module ka import
const app = express(); // Express ka ek instance create kiya gaya
const PORT = 4444; // Server ka PORT number define kiya gaya

// '/' route ke liye ek GET request handler define kiya gaya
app.get('/', (req, res) => {
    // index.html file ko send karne ke liye path.join ka upyog kiya gaya
    res.sendFile(path.join(__dirname,'index.html'));
})

// '/style.css' route ke liye ek GET request handler define kiya gaya
app.get('/style.css',(req,res)=>{
    // style.css file ko send karne ke liye path.join ka upyog kiya gaya
    res.sendFile(path.join(__dirname,'style.css'));
})

/*
// Commented out code se ek aur tarika hai HTML content ko direct send karne ka,
// par abhi yeh upyog nahi ho raha hai.
app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1 style="background-color: orange;">Hello World</h1>
    
        <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, consequatur.
        </div>
    </body>
    </html>
    `);
})
*/

// Server ko PORT par listen karne ke liye
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`); // Server ka URL console par print kiya gaya
});
