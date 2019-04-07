var requireOption = require('../common/render.js').requireOption;

/**
 *      lists all the dogs to a specific trainer
 */
module.exports = function (objectrepository) {

    var taskModel = requireOption(objectrepository, 'taskModel');

    return function (req, res, next) {

        //TODO

        return next();
    };

};