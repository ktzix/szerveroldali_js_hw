var requireOption = require('../common/requireOption').requireOption;

/**
 * Get the employee for the playerid param
 *  - if there is no such player, redirect to /players
 *  - if there is one, put it on res.tpl.player
 */

module.exports = function (objectrepository) {

    var dogModel = requireOption(objectrepository, 'dogModel');

    return function (req, res, next) {
        dogModel.findOne(
            {
                _id: req.params.dogid
            },
            (err, dog) => {
                if (err || !dog) {
                    return next(err);
                }

                res.tpl.dog = dog;
                return next();
            }
        );
    };
};