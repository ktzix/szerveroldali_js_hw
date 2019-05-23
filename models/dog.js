const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Dog = db.model('Dog', {


    name: String,
    size: String,
    breed: String,
    colour: String,
    age : Number,
    _trainer: {
        type: Schema.Types.ObjectId,
        ref: 'Trainer'
    },

});

module.exports = Dog;
