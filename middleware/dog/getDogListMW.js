var requireOption = require('../common/requireOption').requireOption;



module.exports = function (objectrepository) {

    var dogModel = requireOption(objectrepository, 'dogModel');

    return function (req, res, next) {

        dogModel.find({

        }).exec(function (err, results) {
            if (err) {
                return next(new Error('Error getting players'));
            }

            res.tpl.dog = results;
            return next();
        });
    };

};