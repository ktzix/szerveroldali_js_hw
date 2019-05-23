var requireOption = require('../common/requireOption').requireOption;



module.exports = function (objectrepository) {

    var trainerModel = requireOption(objectrepository, 'trainerModel');

    return function (req, res, next) {

        trainerModel.find({

        }).exec(function (err, results) {
            if (err) {
                return next(new Error('Error getting trainers'));
            }

            res.tpl.trainer = results;
            return next();
        });
    };

};