var renderMW = require('../middleware/common/render.js');

var delDogMW = require('../middleware/dog/delDog.js');
var editDogMW = require('../middleware/dog/editDog.js');
var getDogListMW = require('../middleware/dog/getDogList.js');
var newDogMW = require('../middleware/dog/newDog.js');
var getDogMW = require('../middleware/dog/getDog.js');

var getTrainerListMW = require('../middleware/trainer/getTrainerList.js');

module.exports = function (app) {
    var objectRepository = {
        dogModel: dogModel,
        trainerModel: trainermodell
    };


    /**
     *  List all dogs
     */

    app.use('/dogs',
        getDogListMW(objectRepository),
        renderMW(objectRepository, 'dogs')
    );


    /**
     *      Edit a dog
     */

    app.use('/dogs/:dogid/edit',
        getDogMW(objectRepository),
        editDogMW(objectRepository),
        renderMW(objectRepository, 'newdog')
    );


    /**
     *      Add a new dog
     */

    app.use('/dogs/new',
        newDogMW(objectRepository),
        renderMW(objectRepository, 'newdog')
    );


    /**
     * Delete dog (will redirect to dog after finish)
     */
    app.use('/dogs/:dogid/delete',
        getDogMW(objectRepository),
        delDogMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/dogs');
        }
    );


    /**
     *  list all trainers
     */
    app.use('/trainers',
        getTrainerListMW(objectRepository),
        renderMW());



};