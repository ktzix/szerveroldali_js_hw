const requireOption = require('../common/requireOption');

/**
 *      lists all the dogs to a specific trainer
 */
module.exports = function (objectrepository) {

    let dogModel = requireOption(objectrepository, 'dogModel');

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