var requireOption = require('../common/render.js').requireOption;

/**
 *      lists all the dogs to a specific trainer
 */
module.exports = function (objectrepository) {

    var dogModel = requireOption(objectrepository, 'dogModel');

    return function (req, res, next) {
        dogModel.findOne({
            _id: req.param('dogid')
        }, function (err, result) {
            if ((err) || (!result)) {
                return res.redirect('/dogs/' + req.param('dogid'));
            }

            res.dog = result;
            return next();
        });
    };

};