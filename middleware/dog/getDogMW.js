var requireOption = require('../common/requireOption').requireOption;

/**
 * Get the employee for the playerid param
 *  - if there is no such player, redirect to /players
 *  - if there is one, put it on res.tpl.player
 */

module.exports = function (objectrepository) {

    var dogModel = requireOption(objectrepository, 'dogModel');

    return function (req, res, next) {

        dogModel.findOne({
            _id: req.param('dogid')
        }).populate('_trainer').exec(function (err, result) {
            if ((err) || (!result)) {
                return res.redirect('/dogs');
            }
            res.tpl.dog = result;
            return next();
        });
    };
};