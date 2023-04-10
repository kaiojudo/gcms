var Tinh = require('../model/tinh.model');

exports.showTenTinh = function (req, res) {
    Tinh.get_all(function (data) {
        res.send({
            result: data
        });
    })
}