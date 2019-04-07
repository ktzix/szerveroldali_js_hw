var requireOption = require('../common/render.js').requireOption;

/**
 *  List all the trainers
 */
module.exports = function (objectrepository) {

    var taskModel = requireOption(objectrepository, 'taskModel');

    return function (req, res, next) {

    //TODO

        return next();
    };

};