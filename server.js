// server.js
// where your node app starts

// init project
var express = require('express');
var emoji = require('node-emoji');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/sheriff", function(req, res) {
  var moj = emoji.random();
  var template = "⠀ ⠀ ⠀  🤠\n　   X X X\n    X　X　X\n   👇  X X  👇\n  　  X　X \n　    X　 X \n　   👢     👢     ";
  moj.sheriff = template.replace(/X/g, moj.emoji);
  moj.message = "howdy. i'm the " + moj.key.replace(/_/g, ' ') + " sheriff.";
  moj.html = moj.sheriff.replace(/\n/g, "<br>") + "<br>" + moj.message;
  res.send(moj);
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});