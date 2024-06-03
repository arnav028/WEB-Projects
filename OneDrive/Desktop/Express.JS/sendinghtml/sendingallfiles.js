// Importing required modules
const express = require('express');  // Express framework ka use kar rahe hain
const path = require('path');  // File paths ko handle karne ke liye 'path' module ka use kar rahe hain

// Creating an Express application
const app = express(); 

// Port number jahan server chalega
const PORT = 4444;

// Serving static files from the 'public' folder
app.use(express.static(path.join(__dirname,'public')));

// Handling GET request for the root URL
app.get('/',(req,res)=>{
    res.send("Hello From get request"); // Response mein "Hello From get request" message bhej rahe hain
})

// Server ko PORT par start karne ka command
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`); // Server start hone par console par URL print hoti hai
});
