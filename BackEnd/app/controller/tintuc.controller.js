var Tintuc = require('../model/tintuc.model');

exports.addTintuc = function (req, res) {
    var data = req.body;
    Tintuc.add_new(data, function (response) {
        res.send({
            result: response
        });
    })
}
exports.showAllTintuc = function (req, res) {
    Tintuc.get_all(function (data) {
        res.send({
            result: data
        });
    })
}

exports.getbyId = function (req, res) {
    Tintuc.get_by_id(req.params.id, function (tintuc) {
        res.send({
            result: tintuc
        });
    })
}