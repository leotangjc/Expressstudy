var http = require("http");
var express = require("express");
var fs = require("fs");
var ejs2 = require("ejs2");

var.app = express();
http.createServer(app);

var templateObj = {
  title:"第一个ejs Demo",
  str:"HELLO ejs today is good DAY",
  copyright:"xiaoxiao @ pingan",
  data:{
    name:"XiaoMing",
    age:12,
    htone:"123145444"
  },
  array:['bbb','aaaa','eeee','dddd','cccc'],
  objArray:[
    {
      price:42.5,
      bookname:'java'
    },
    {
      price:22.5,
      bookname:'ejs'
    },
    {
      price:32.5,
      bookname:'node'
    }
  ]
}



app.use(express.static(___dirname+"/public"));

//设置express视图所在目录
app.set("views",["./public/views","./views"]);
//设置express视图编译是否缓存
app.set("view cache",false);
//设置express视图引擎为ejs
app.set("view engine","ejs");


app.get("/ejs1",function(req,res) {
  res.render("ejs1.ejs",{templateObj:templateObj})
})


app.get("/ejs2",function(req,res) {
  ejs2.delimiter = '$';


})