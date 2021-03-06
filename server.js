var express = require('express'),
  cors = require('cors'),
  path = require('path');
var app = express();

app.use(cors());

var port = process.env.PORT || '8005';
app.listen(port, function () {
  console.log('Example app listening on port 8005!');
});

app.use('/', express.static(path.join(__dirname, '/www_backbone/')));
