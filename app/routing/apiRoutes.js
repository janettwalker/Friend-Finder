// Dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// 
var ApiRoutes = function(){
app.post("/api/survey", function(req, res) {
  data.push(req.body);
  console.log(data);

  res.json({
    complete: true
  });
});

app.get("/api/friendList", function(req, res) {
  var friends = [];
  for(var i = 0; i < 5 && i < data.length; i++)
  {
    friends.push(data[i]);
  }
  return res.json(friends);
});

};

// Export Module
module.exports = ApiRoutes;

