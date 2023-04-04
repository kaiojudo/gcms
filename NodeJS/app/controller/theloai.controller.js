var Theloai = require('../model/theloai.model')

exports.get_list = function (req, res) {
    Theloai.get_all(function (data) {
        res.send({
            result: data
        });
    })
}

exports.details = function (req, res) {
    Theloai.details(req.params.id, function (child) {
        res.send({
            result: child
        });
    })
}