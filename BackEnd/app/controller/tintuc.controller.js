var Tintuc = require('../model/tintuc.model');

exports.addTintuc = function (req, res) {
    var data = req.body;
    Tintuc.add_new(data, function (response) {
        res.send({
            result: response
        });
    })
}
exports.showTintuc = function (req, res) {
    Tintuc.get_all(function (data) {
        res.send({
            result: data
        });
    })
}
