var express = require('express');
var app = express();
app.use(express.static('public'));
//路由级中间件
var router = express.Router();
//
//
//
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
//
// --------------------------------------------
//
// // 没有挂载路径的中间件，应用的每个请求都会执行该中间件
// app.use(function (req, res, next) {
//   //输出每个请求的时间
//   console.log('Time:', Date.now());
//   next();
// });
//
// // 没有挂载路径的中间件，通过该路由的每个请求都会执行该中间件
// router.use(function (req, res, next) {
//   console.log('Time:', Date.now());
//   next();
// });
//
//
// --------------------------------------------
//
//
// // 一个中间件栈，对任何指向 /user/:id 的请求打印想要的信息
// app.use('/a/:id', function(req, res, next) {
//   console.log('Request URL:', req.originalUrl);
//   next();
// }, function (req, res, next) {
//   console.log('Request Type:', req.method);
//   next();
// });
//
// //这种方式将会过滤请求
// app.get('/user/:id', function (req, res, next) {
//   // 如果id为0, 跳到下一个路由
//   if (req.params.id == 0) next('route');
//   // 否则执行下一个中间件
//   else next(); //
// }, function (req, res, next) {
//   // 执行常规页面
//   res.render('regular');
// });
//
//
//
//
// app.post('/', function (req, res) {
//   res.send('获得一个POST请求');
// });
//
//
//
// app.put('/user', function (req, res) {
//   res.send('获得一个PUT请求，来自/user');
// });
//
//
//
// app.delete('/user', function (req, res) {
//   res.send('获得一个DELETE请求，来自/user');
// });
//
//
//
//

// app.route('/a')
// .all(function(req, res, next) {
//   // runs for all HTTP verbs first
// // think of it as route specific middleware!
// })
// .get(function(req, res, next) {
//   res.json(...);
// })
// .post(function(req, res, next) {
//   // maybe add a new event...
// })




// var greet = express.Router();
//
// greet.get('/jp', function (req, res) {
//   console.log(req.baseUrl); // /greet
//   res.send('Konichiwa!');
// });
//
// app.use('/greet', greet); // load the router on '/greet'



// var bodyParser = require('body-parser');
// var multer = require('multer');
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(multer());
//
// app.post('/', function(req, res) {
//   console.log(req.body);
//   res.json(req.body);
//
// });


// app.get('/', function(req, res, next){
//   console.log(req.subdomains);
//   res.send('2');
// });


// app.get('/a', function(req, res, next){
//   console.log(req.path);
//   res.send('2');
// });


// app.get('/', function(req, res, next){
//   console.log(req.protocol);
//   res.send('2');
// });


app.get('/mulu', function(req, res, next){
  console.log(req.url,req.path);
  console.log(req.query.q);
  res.send('2');
});



// app.get('/mulu', function(req, res, next){
//   console.log(req.accepts);
//   res.send('2');
// });


// app.get('/', function(req, res, next){
//   console.log(req.get('content-type'));
//   res.send('2');
// });


// app.get('/', function(req, res, next){
//   console.log(req.is('html'));
//   res.send('2');
// });


// app.get('/', function(req, res, next){
//   console.log(req.is('html'));
//   res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
//   res.send('2');
// });




var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('请访问 http://%s:%s', host, port);
});
//
//
// //中间件就是类似于过滤器的东西
// //中间件（Middleware） 是一个函数，它可以访问请求对象（request object (req)）, 响应对象（response object (res)）, 和 web 应用中处于请求-响应循环流程中的中间件，一般被命名为 next 的变量。
// // 中间件的功能包括：
// //
// // 执行任何代码。
// // 修改请求和响应对象。
// // 终结请求-响应循环。
// // 调用堆栈中的下一个中间件。
//
// //app.use用来挂载中间件函数
//
//
//
