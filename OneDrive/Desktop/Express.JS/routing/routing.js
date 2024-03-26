const express = require(epress);
const app = express();

app.get('/',(req,res) => { 
res.send("abe rehnde");
})

app.listener(4444,()=>{
    console.log("http://localhost:"+4444);
})