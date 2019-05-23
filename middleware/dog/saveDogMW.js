const requireOption = require('../common/requireOption');
var ObjectId = require('mongoose').Schema.Types.ObjectId;

/**
 *      edits the infos about a dog
 */
module.exports = function (objectrepository) {

    var dogModel = requireOption(objectrepository, 'dogModel');

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

};