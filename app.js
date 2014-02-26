var express = require('express');
var stats = require('./stats');
//var fs = require('fs');
var app = express();

app.get('/', function(req, res){
  
  // doesn't work properly yet
  var results = stats.lookup();
  
  res.render( 'index.ejs',
  {
    layout: false,
    locals: {
      title: 'Marten\'s Page'
    }
  }


  );

});


app.listen(3000);
console.log('Listening on port 3000');


