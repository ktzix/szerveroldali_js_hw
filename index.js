var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static('static'));


app.get('/', function(req, res) {
    res.render('/views/index');
});

var server = app.listen(3000, function () {
    console.log("listening on 3000");
});


