// init project
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const angular = require('angular');
const app = express();


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('views'));
app.use(bodyParser.json());
app.use(cors());

// app.use(express.static(__dirname + '/public'));

app.get('/new/:urlToShorten(*)', function(req,res,next){
var urlToShorten = req.params.urlToShorten;
  

});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("This is working");
})
