
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// console.log(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api', function (req, res, next) {
  console.log('6666');
  next()
  //es.status(400).send('Hello World!');
});
app.get('/api', function (req, res, next) {
  console.log('7777');
  res.status(400).send('Hello World!');
});

app.post('/api',function(req, res) {
  console.log(req.body);
  res.send('1');
});

app.delete('/api',function(req,res){
  console.log(req.query);
  res.send('2');
});

app.put('/api',function(req,res){
  console.log(req.body);
  res.send('3');
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  // console.log(server);

  console.log('Example app listening at http://%s:%s/api', host, port);
});



