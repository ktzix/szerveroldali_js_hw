var requireOption = require('../common/render.js').requireOption;

/**
 *
 *  removes dog from traineddog list
 *
 */
module.exports = function (objectrepository) {

    var trainerModel = requireOption(objectrepository, 'trainerModel');

    return function (req, res, next) {

        if (typeof res.dogs === 'undefined') {
            return next();
        }

        res.task.remove(function (err) {
            if (err) {
                return next(err);
            }

            //redirect to all tasks
            res.redirect('/dogs/');
        });
    };

};