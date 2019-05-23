var requireOption = require('../common/requireOption').requireOption;

/**
 * Delete the team object
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {

        if (typeof res.tpl.trainer === 'undefined') {
            console.log("error: undefined");
            return next();
        }

        res.tpl.trainer.remove(function (err) {
            if (err) {
                return next(err);
            }

            return next();
        });

    };

};