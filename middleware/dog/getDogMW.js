const requireOption = require('../common/requireOption');

/**
 *      lists all the dogs to a specific trainer
 */
module.exports = function (objectrepository) {

    const DogModel = requireOption(objectrepository, 'DogModel');

    return function (req, res, next) {
        DogModel.findOne({
            _id: req.params.dogid
        }, function (err, result) {
            if ((err) || (!result)) {
                return res.redirect('/dogs/' + req.param('dogid'));
            }

            res.locals.dog = result;
            return next();
        });
    };

};