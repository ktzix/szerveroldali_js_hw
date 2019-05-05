
var indexRouter = require('./routes/myRoutes');
var express = require('express');
var app = express();
var path = require('path');
var  engine = require('ejs-mate');

// use ejs-locals for all ejs templates:
app.engine('ejs', engine);


app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('static'));
app.use('/', indexRouter);

require('./routes/myRoutes')(app);

var server = app.listen(3002, function () {
    console.log("listening on 3002");
});


module.exports = app;
