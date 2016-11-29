var express = require('express');
var fs = require('fs');

var app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	// res.type('text/html');
	// res.sendFile('/public/index.html');
	// res.end();
  res.render('index', function(err, html) {
  	res.send(html);
  });
}).listen(3000);