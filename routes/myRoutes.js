var renderMW = require('../middleware/common/render.js');

var delDogMW = require('../middleware/dog/delDog.js');
var editDogMW = require('../middleware/dog/editDog.js');
var getDogListMW = require('../middleware/dog/getDogList.js');
var getDogMW = require('../middleware/dog/getDog.js');

var getTrainerListMW = require('../middleware/trainer/getTrainerList.js');

module.exports = function (app) {

    const objRepo = {};


    /**
     *  List all dogs
     */

    app.use('/dogs',
        getDogListMW(objRepo),
        renderMW(objRepo, 'dogs')
    );


    /**
     *      Edit a dog
     */

    app.use('/dogs/:dogid/edit',
        getDogMW(objRepo),
        editDogMW(objRepo),
        renderMW(objRepo, 'newdog')
    );


    /**
     *      Add a new dog
     */

    app.use('/dogs/new',
        editDogMW(objRepo),
        renderMW(objRepo, 'newdog')
    );


    /**
     * delete dog, will redirect to dogs)
     */
    app.use('/dogs/:dogid/delete',
        getDogMW(objRepo),
        delDogMW(objRepo),
        function (req, res, next) {
            return res.redirect('/dogs');
        }
    );


    /**
     *  list all trainers
     */
    app.use('/trainers',
        getTrainerListMW(objRepo),
        renderMW(objRepo, 'Oktatok'));

    app.use('/',
        renderMW(objRepo, 'index'));

};

