var express = require('express');
var app = express();

app.use(express.static('static'));

/**
 *  Get all the routes
 */



var server = app.listen(3002, function () {
    console.log("listening on 3002");
});


module.exports = app;
