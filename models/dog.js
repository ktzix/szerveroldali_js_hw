var Schema = require('mongoose').Schema;
var db = require('../config/db');


var Dog = db.model('Dog', {
    name: String,
    size: String,
    breed: String,
    colour: Number,
    age : Number
});



module.exports = Dog;
