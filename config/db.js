const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/i4zjud', { useNewUrlParser: true });

module.exports = mongoose;