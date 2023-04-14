var Danhmuc = require('../model/danhmuctin.model')

exports.get_list = function (req, res) {
    Danhmuc.get_all(function (data) {
        res.send({
            result: data
        });
    })
}