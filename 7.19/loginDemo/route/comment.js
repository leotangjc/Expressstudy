var express = require("express");
var comment = express.Router();
var fs = require("fs");

comment.post("/last",function(req,res) {
  fs.readFileSync("/data/comment.json","utf-8")+"";
  var jsData = JSON.parse(data);
  res.render("",);


})

mudule.exports = comment;