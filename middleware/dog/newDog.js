var requireOption = require('../common/render.js').requireOption;

/**
 *      adds a new dog to the list
 */
module.exports = function (objectrepository) {

    var taskModel = requireOption(objectrepository, 'taskModel');

    return function (req, res, next) {

        //TODO

        return next();
    };

};