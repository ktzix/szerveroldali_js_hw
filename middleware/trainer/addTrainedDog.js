var requireOption = require('../common/render.js').requireOption;

/**
 *
 *  adds dog to traineddog list
 *
 */
module.exports = function (objectrepository) {

    var trainerModel = requireOption(objectrepository, 'trainerModel');

    return function (req, res, next) {

        var dog = undefined;
        if (typeof res.dog !== 'undefined') {
            dog = res.dog;
        } else {
            dog = new dogModel();
        }
        dog.name = req.body.name;
        dog.size = req.body.size;
        dog.colour = req.body.colour;
        dog.age = req.body.age;
        dog.breed = req.body.breed;

        dog.save(function (err, result) {
            if (err) {
                return next(err);
            }

            return res.redirect('/dog/' + result.id);
        });

};

}