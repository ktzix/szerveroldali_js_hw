var requireOption = require('../common/requireOption').requireOption;



module.exports = function (objectrepository) {

    var trainerModel = requireOption(objectrepository, 'trainerModel');

    return function (req, res, next) {

        if ((typeof req.body.name === 'undefined') ||
            (typeof req.body.number === 'undefined')){
            return next();
        }

        var trainer = undefined;
        if (typeof res.tpl.trainer !== 'undefined') {
            trainer = res.tpl.trainer;
        } else {
            trainer = new trainerModel();
        }
        trainer.name = req.body.name;
        trainer.number = req.body.number;

        trainer.save(function (err, result) {
            if (err) {
                return next(err);
            }

            return res.redirect('/trainers');
        });

    };

};