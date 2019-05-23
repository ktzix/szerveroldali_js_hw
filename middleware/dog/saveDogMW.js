var requireOption = require('../common/requireOption').requireOption;



module.exports = function (objectrepository) {

    var dogModel = requireOption(objectrepository, 'dogModel');

    return function (req, res, next) {

        if ((typeof req.body.name === 'undefined') ||
            (typeof req.body._trainer === 'undefined') ||
            (typeof req.body.size === 'undefined') ||
            (typeof req.body.age === 'undefined') ||
            (typeof req.body.colour === 'undefined') ||
            (typeof req.body.breed === 'undefined')){

            return next();
        }

        var dog = undefined;
        if (typeof res.tpl.dog !== 'undefined') {
            dog = res.tpl.dog;
        } else {
            dog = new dogModel();
        }
        dog.name = req.body.name;
        dog.size = req.body.size;
        dog.age = req.body.age;
        dog.colour =req.body.colour;
        dog.breed = req.body.breed;
        dog._trainer = req.body._trainer;

        dog.save(function (err, result) {
            if (err) {
                return next(err);
            }

            return res.redirect('/dogs');
        });

    };

};