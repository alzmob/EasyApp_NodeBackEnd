const Type = require('../models/type.model.js');

exports.allTypes = (req, res, next) => {
    Type.find({}, (err, allTypes) => {
        if (err) return next(err)
        return res.status(200).json({
            allTypes: allTypes
        })
    })
};
