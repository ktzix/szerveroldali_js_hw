var renderMW = require('../middleware/common/renderMW.js');

var delDogMW = require('../middleware/dog/delDogMW.js');
var saveDogMw = require('../middleware/dog/saveDogMW.js');
var getDogListMW = require('../middleware/dog/getDogListMW.js');
var getDogMW = require('../middleware/dog/getDogMW.js');

var getTrainerListMW = require('../middleware/trainer/getTrainerListMW.js');
var getTrainerMW = require('../middleware/trainer/getTrainerMW.js');
var delTrainerMW = require('../middleware/trainer/delTrainerMW.js');
var saveTrainerMW = require('../middleware/trainer/saveTrainerMW.js');

const dogModel =require('../models/dog');
const trainerModel =require('../models/trainer');



module.exports = function (app) {

    const objRepo = {
        dogModel: dogModel,
        trainerModel: trainerModel
    };




    app.use('/dogs/add',
        saveDogMw(objRepo),
        renderMW(objRepo, 'dog_edit')
    );



    app.use('/dogs/delete/:dogid',
        getDogMW(objRepo),
        delDogMW(objRepo),
        function (req, res, next) {
            return res.redirect('/dogs');
        }
    );


    app.use('/dogs/new',
        saveDogMw(objRepo),
        renderMW(objRepo, 'dog_edit')
    );


    /**
     * delete dog, will redirect to dogs)
     */
    app.use('/dogs/edit/:dogid',
        getDogMW(objRepo),
        saveDogMw(objRepo),
        renderMW(objRepo)
    );

    app.use('/dogs',
            getDogListMW(objRepo),
            renderMW(objRepo, 'dogs')
        );



    app.use('/trainers/add',
            saveDogMw(objRepo),
            renderMW(objRepo, 'trainer_edit')

        );


    app.use('/trainers/delete/:trainerid',
            getTrainerMW(objRepo),
            delTrainerMW(objRepo),
        function (req, res, next) {
            return res.redirect('/trainers');
                                 }
        );


    app.use('/trainers/edit/:trainerid',

            getTrainerMW(objRepo),
            saveTrainerMW(objRepo),
            renderMW(objRepo, 'trainer_edit')

    );



    /**
     *  list all trainers
     */
    app.use('/trainers',
        getTrainerListMW(objRepo),
        renderMW(objRepo, 'trainers'));


    app.use('/',
        renderMW(objRepo, 'index'));

};

