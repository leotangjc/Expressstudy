
var http = require("http");
var express = require("express");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var bodyParser = require("express-parser");
var fs = require("fs");


var app = express();
http.createServer(app);

app.set("port",8080);
app.set("views","./public/views");
app.set("view cache",true);
app.ser("view engine","ejs");

app.use(express.static(__dirname+"/public"));
app.use(boyeParser.urlencoded({extendend:true}))
app.use(cookieParser());
app.use(session({
  secret:'my_login_demo',
  cookie:{ secure: false,maxAge:30*60*1000}
}))

app.use(function(req,res,next) {
  if(req,session.user){
    next();
  }else{
    var name = req.body.name;
    var pwd = req.body.password;
    var noLogin = req.body.noLogin;
    var cookies = req.cookies
    if((name==="xiaoming" && pwd==="1234") || (cookies.name==="xiaoming" && cookies.pwd==="1234")){
      if(noLogin=='on'){
        res.cookie('name',name,{maxAge:2*7*24*60*60*1000})
        res.cookie('pwd',pwd,{maxAge:2*7*24*60*60*1000})
      }
      req.session.user={name:name,pwd:pwd}
      next();
    }else{
      res.set("content-type","text/heml")
      res.status(200).sendFile(__dirname+"/public/heml/login.html");
    }
  }

})

app.listen(app.get("port"),function() {
  console.log("listen on "+app.get("port"));

})


