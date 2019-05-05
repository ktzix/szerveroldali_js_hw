var Schema = require('mongoose').Schema;
var db = require('../config/db');


var Trainer = db.model('Trainer', {
    name: String,
    id: String,

});


module.exports = Trainer;
