// Dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var HtmlRoutes = function() {
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var data = [{
  name: "Janna",
  photoLink: "https://www.google.com/search?q=image&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjMsavx3frTAhXkxlQKHUWoBJgQ_AUICigB&biw=893&bih=503#imgrc=lAHthDF3S1ACoM:",
  q1: 1,
  q2: 2,
  q3: 4,
  q4: 5,
  q5: 5,
  q6: 1,
  q7: 3,
  q8: 4,
  q9: 5,
  q10: 1
}];

// Route connection for HTML
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});


};


// Export Module
module.exports = HtmlRoutes;