var Schema = require('mongoose').Schema;
var db = require('../config/db');


var Trainer = db.model('Trainer', {
    name: String,
    number: String,

});


module.exports = Trainer;
