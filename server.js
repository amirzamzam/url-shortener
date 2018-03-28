// init project
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const shortURL = require('./model/shortURL');
const app = express();


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

//connect to database
mongoose.connect("mongodb://<dbuser>:<dbpassword>@ds127129.mlab.com:27129/url-shortener");

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})

app.get('/new/:urlToShorten(*)', function(req,res,next){
var urlToShorten = req.params.urlToShorten;
  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = expression;
  
  if(regex.test(urlToShorten)===true){
    var short = Math.floor(Math.random()*100000).toString();
    
    var data = new shortURL(
      {
        originalURL: urlToShorten,
        shorterURL : short  
      });
    
    data.save(function(err){
      if(err){
      return res.send("Error saving to database");
      }
    });
    
    
  return res.json(data);
  }else{
  return res.json({urlToShorten : 'Failed'});
  }
  
  var data = ({
  originalURL: urlToShorten,
  shorterURL : 'Invalid URL'  
  });
  
  return res.json(data);
  
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("This is working");
})
