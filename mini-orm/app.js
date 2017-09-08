var express = require('express');
var bodyParser = require('body-parser');

var project = require('./router/project');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.use('/project', project);

app.listen(3000, function () {
  console.log('live code week 3 on port 3000!')
})
