const express = require('express')
const app = express();
const axios = require('axios')
app.get("/", (req, res) => {
    res.send("Hello World!");
  });
    
  axios.get('https://6c592392ea70.ngrok.io/').then(response =>{
    console.log("yes the axios is working");

  });

const PORT = process.env.PORT||8000;
app.listen(PORT,()=>console.log('yes the server is working'))











