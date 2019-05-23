var requireOption = require('../common/requireOption').requireOption;



module.exports = function (objectrepository) {
    return function (req, res, next) {

        if (typeof res.tpl.dog === 'undefined') {
            console.log("error: undefined");
            return next();
        }

        res.tpl.dog.remove(function (err) {
            if (err) {
                return next(err);
            }

            return res.redirect(`/dogs/${res.tpl.trainer._id}`);
        });

    };
};