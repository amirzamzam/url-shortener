// init project
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(cors());

app.get('/new/:urlToShorten(*)', function(req,res,next){
var urlToShorten = req.params.urlToShorten;
  

});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("This is working");
})
