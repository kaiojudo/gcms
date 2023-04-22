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
exports.getUserByAccount = function(req, res) {
    const data = req.params;
    User.getUser(data, function (respond) {
        res.send({ result: respond });
    });
}
exports.findbyID = function (req, res) {
    User.get_by_id(req.params.id,function (data) {
        res.send({
            result: data
        });
    });
}