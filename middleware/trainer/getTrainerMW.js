var requireOption = require('../common/requireOption').requireOption;

/**
 * Get the team matching teamid param
 *  - if there is no such team, redirect to /teams
 *  - if there is one, put it on res.tpl.team
 */

module.exports = function (objectrepository) {

    var trainerModel = requireOption(objectrepository, 'trainerModel');

    return function (req, res, next) {

        console.log(req.params);
        trainerModel.findOne({

            _id: req.param('trainerid')
        }).populate().exec(function (err, result) {
            if ((err) || (!result)) {
                return res.redirect('/trainers');
            }

            res.tpl.trainer = result;
            return next();
        });
    };

};