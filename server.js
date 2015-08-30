var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/api', function (req, res, next){
  res.json([
      { title: 'Field of Dreams', year: 1989},
      { title: 'Moneyball', year: 2004},
      { title: 'The Rookie', year: 2002},
      { title: 'Angels in the Outfield', year: 1994},
      { title: 'A League of their Own', year: 1992},
      { title: '42', year: 2013},
      { title: 'Major League', year: 1989},
    ]);
});


var server = app.listen(8080, function (){
  var host = server.address().address;
  var port = server.address().port;

  console.log('buggah workin at http://%s%s', host, port);
});