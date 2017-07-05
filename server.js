// Dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
// var apiRoutes = require("./ApiRoutes");
// var htmlRoutes = require("./HtmlRoutes");

var app = express();
var PORT = process.env.port || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function() {
  console.log("Server listening on port " + PORT);
});
