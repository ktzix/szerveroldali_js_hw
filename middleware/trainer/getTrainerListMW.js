var requireOption = require('../common/render.js').requireOption;

/**
 *  List all the trainers
 */
module.exports = function (objectrepository) {

    var trainerModel = requireOption(objectrepository, 'trainerModel');

    return function (req, res, next) {

        trainerModel.find({}, function (err, results) {
            if (err) {
                return next(err);
            }

            res.dogs = results;

            return next();
        });

        return next();
    };

};