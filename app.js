var express = require('express');
var path = require('path');
var app = express();

// static file serve
app.use(express.static(__dirname));

// not found in static files, so default to index.html
app.use(function(req, res) {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

var port = 4711;
app.listen(port, function () {
  console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});
