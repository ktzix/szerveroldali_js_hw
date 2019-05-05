var requireOption = require('../common/render.js').requireOption;

/**
 *
 *  get the list of the associated dogs
 *
 */
module.exports = function (objectrepository) {

    var trainerModel = requireOption(objectrepository, 'dogModel');

    return function (req, res, next) {

        dogModel.find({}, function (err, results) {
            if (err) {
                return next(err);
            }

            res.dogs = results;

            return next();
        });
    };

};