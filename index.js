const bodyParser = require('body-parser');

const express = require('express');
const app = express();
const  engine = require('ejs-mate');

// use ejs-locals for all ejs templates:
app.engine('ejs', engine);


app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./routes/myRoutes')(app);

app.use((err, req, res, next) => {
    res.end('Problem...');
    console.log(err);
});


app.use(function (req, res, next) {
    res.tpl = {};
    res.tpl.error = [];

    return next();
});


app.listen(3002, function () {
    console.log("listening on 3002");
});


module.exports = app;
