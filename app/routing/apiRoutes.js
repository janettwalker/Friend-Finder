var friends = require("../data/friends");

module.exports = function(app) {

app.post("/api/friendList", function(req, res) {
  res.json(friends);
  console.log(data);

  res.json({
    complete: true
  });
});

app.post("/api/friendList", function(req, res) {
  var friends = [];
  for(var i = 0; i < data.length; i++)
  {
    friends.push(data[i]);
  }
  return res.json(friends);
});

};



