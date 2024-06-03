/* const express = require('express');
const app = express();
const PORT = 4444;
// Creating path specific middlewares
// works for : /hello/..../..../..../..../
app.use('/hello',(req,res,next)=>{
    console.log("Running Extra Middleware");
    next();
})

// Creating middleware functions
app.use((req,res,next)=>{
    console.log("Inside middleware - 1");
    next(); // Yeh aapko aage proceed krne dega
});

app.use((req,res,next)=>{
    const {password} = req.query;
    console.log("Inside middleware - 2")
    next()
    // if(password === 'abcd'){
    //     next()
    // }
    // else res.send("Incorrect password");
});

app.get('/',(req,res,next)=>{
    const {password} = req.query;
    console.log(password);
    res.send("Hello!")

    // console.log("After Hello I am here");
    // res.send("Hello World!") // you cannot send two 
    // responses
});

app.get('/hello',(req,res)=>{
    res.send("Hey!!!");
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});





`app.use()` Express mein ek method hai jo middleware ko register karne ke liye istemal hota hai. Middleware ko register karne ke liye `app.use()` ka istemal hota hai kyunki yeh middleware stack mein ek naya middleware function ko add karta hai. 

Is method ke do parameter hote hain:
1. **Path**: Ye woh path hoti hai jiske liye middleware register kiya ja raha hai. Agar koi request us path par aati hai, toh middleware execute hota hai.
2. **Middleware Function**: Ye woh function hoti hai jo request ko handle karti hai. Is function ke paas usually teen parameters hote hain: `req` (request object), `res` (response object), aur `next` (next middleware function ko call karne ke liye).

Is code mein `app.use('/hello', ...)` ka istemal `'/hello'` path ke liye ek middleware function ko register karne ke liye kiya gaya hai. Yani agar koi request `/hello` path par aati hai, toh us middleware function ko execute kiya jata hai.
 */