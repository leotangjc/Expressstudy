var express = require('express');
var app = express();
var http = require("http");
app.use(express.static('public'));
var router = express.Router();



app.get('/', function(req, res, next){


//   res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
//   // consols.log(res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']));
//   res.send('2');
// });

      // res.cookie("pwd","1234",{
      //   domain:"localhost",
      //   expires:new Date(),
      //   httpOnly:true,
      //   path:"/method",
      //   maxAge:2*7*24*60*60*1000,//cookie有效时间
      //   secure:true,//加密传输https
      //   signed:false//不签署加密
      // });
      //
      // //清除指定cookie
      // res.cookie('name', 'tobi', { path: '/admin' });

      //返回指定路径下的文件
      res.download('/report-12345.pdf');



      //返回内容类型
      res.get('Content-Type');


      //两个组合使用，可以在重定向时返回到指定网址
      res.location("http://www.baidu.com/");
      res.sendStatus(302);



      //这个方法同时设置了状态码和重定向的地址
      res.redirect(301, 'http://www.baidu.com/');


      //用于传输文本数据，用于异步传输
      res.json({ user: 'tobi' });



      //这种方法可以容纳的种类比较丰富，可以是对象、数组、字符串、和状态码
      res.send(new Buffer('whoop'));
      res.send({ some: 'json' });
      res.send('<p>some html</p>');
      res.status(404).send('Sorry, we cannot find that!');
      res.status(500).send({ error: 'something blew up' });








})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('请访问 http://%s:%s', host, port);
});

