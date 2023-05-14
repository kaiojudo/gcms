var Tinh = require('../model/tinh.model');

exports.showTenTinh = function (req, res) {
    Tinh.get_all(function (data) {
        res.send({
            result: data
        });
    })
}
exports.getbyId = function (req, res) {
    Tinh.get_by_id(req.params.id, function (tinh) {
      res.send({
        result: tinh,
      });
    });
  };