var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var data = [{
  name: "Janna",
  photoLink: "https://www.google.com/search?q=image&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjMsavx3frTAhXkxlQKHUWoBJgQ_AUICigB&biw=893&bih=503#imgrc=lAHthDF3S1ACoM:",
  q1: 1,
  q2: 2,
  q3: 2,
  q4: 2,
  q5: 2,
  q6: 2,
  q7: 2,
  q8: 2,
  q9: 2,
  q10: 2
}];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});


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


app.listen(PORT, function() {
  console.log("Server listening on port " + PORT);
});
