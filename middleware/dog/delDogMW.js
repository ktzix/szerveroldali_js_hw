/**
 * Delete the dog object, if its already loaded
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {

        if (typeof res.dogs === 'undefined') {
            return next();
        }

        res.task.remove(function (err) {
            if (err) {
                return next(err);
            }

            //redirect to all tasks
            res.redirect('/dogs/');
        });
    };

};
