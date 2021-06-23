const express = require('express')
var router = express.Router()
const app = express();
//this will allow us to cross origin resource sharing 
const cors = require('cors');
const axios = require('axios');
var bodyParser = require('body-parser')
var bodyParser = require('body-parser');
const { Router } = require('express');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


//const axios = require('axios')
const port = 8000;//declaring the port 
app.get("/", (req, res) => {
    res.send("Hello World!");
  });
// here we are adding the react app link to specify the path 
  app.use(
    cors({
      origin: 'http://localhost:3000/',
      credentials: true,
    })
  );
  
  //app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  
  //let books = [];
  

  
  //app.post('/print', function(req, res) {
 //   console.log("this working")
  //  const data = {
      
  //  };
  
    //console.log(data);
  //});
    
app.listen(port,()=>{})

var routes = ()=>{
   router.route('/print')
     .post(function(req,res){
           console.log('hello its me ')
           res.json('ok')
     })
     return router
}
module.exports = routes







