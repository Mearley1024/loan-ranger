//  var db= require("../models")


module.exports = {
    findAll: function(req, res) {
        db.User
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res)
    }
}