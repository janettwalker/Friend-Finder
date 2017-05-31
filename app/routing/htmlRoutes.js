// Dependencies
var path = require("path");


module.exports = function(app) {
// Route connection for HTML

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/survey.html"));
});

// default to home
app.use(function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/home.html"));
});



};


