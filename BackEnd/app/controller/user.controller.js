var User = require('../model/user.model');

exports.addUser = function (req, res) {
    var data = req.body;
    User.register(data, function (response) {
        res.send({
            result: response
        });
    })
}
exports.showUser = function (req, res) {
    User.get_all(function (data) {
        res.send({
            result: data
        });
    })
}