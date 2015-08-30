var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/api', function (req, res, next){
  res.json([
      { title: 'Field of Dreams'},
      { title: 'Moneyball'},
      { title: 'The Rookie'},
      { title: 'Angels in the Outfield'},
      { title: 'A League of their Own'},
      { title: '42'},
      { title: 'Major League'}
    ]);
});


var server = app.listen(8080, function (){
  var host = server.address().address;
  var port = server.address().port;

  console.log('buggah workin at http://%s%s', host, port);
});