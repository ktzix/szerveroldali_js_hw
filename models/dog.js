const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Dog = db.model('Dog', {

    _trainer: {
        type: Schema.Types.ObjectId,
        ref: 'Trainer'

    },
    name: String,
    size: String,
    breed: String,
    colour: Number,
    age : Number

});

module.exports = Dog;
