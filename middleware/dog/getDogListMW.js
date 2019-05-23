var requireOption = require('../common/requireOption').requireOption;



module.exports = function (objectrepository) {

    var dogModel = requireOption(objectrepository, 'dogModel');

    return function (req, res, next) {
        if (typeof res.tpl.trainer === 'undefined') {
            return next();
        }


        dogModel.find({
                _trainer: res.tpl.trainer._id,
        }).exec(function (err, results) {
            if (err) {
                return next(new Error('Error getting players'));
            }

            res.tpl.dog = results;
            return next();
        });
    };

};