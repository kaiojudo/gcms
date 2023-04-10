var Tintuc = require('../model/tintuc.model');

exports.addTintuc = function (req, res) {
    var data = req.body;
    User.add_new(data, function (response) {
        res.send({
            result: response
        });
    })
}
exports.showTintuc = function (req, res) {
    User.get_by_id(function (data) {
        res.send({
            result: data
        });
    })
}
