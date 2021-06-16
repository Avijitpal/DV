const express = require('express')
const app = express();
//const axios = require('axios')
const port = 8000;
app.get("/", (req, res) => {
    res.send("Hello World!");
  });
    
app.listen(port,()=>{
  console.log("yes this is working")
})









