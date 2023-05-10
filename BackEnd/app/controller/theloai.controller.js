var Theloai = require("../model/theloai.model");

exports.get_header = function (req, res) {
  Theloai.get_header(function (data) {
    res.send({
      result: data,
    });
  });
};
exports.get_all = function (req, res) {
  Theloai.get_all(function (data) {
    res.send({
      result: data,
    });
  });
};
exports.get_delete = function (req, res) {
  Theloai.get_delete(function (data) {
    res.send({
      result: data,
    });
  });
};
exports.details = function (req, res) {
  Theloai.details(req.params.id, function (child) {
    res.send({
      result: child,
    });
  });
};
exports.delete = function (req, res) {
  Theloai.delete(req.params.id, function (deleteItem) {
    res.send({
      result: deleteItem,
    });
  });
};
exports.return = function (req, res) {
  Theloai.return(req.params.id, function (deleteItem) {
    res.send({
      result: deleteItem,
    });
  });
};
exports.addTheLoai = function (req, res) {
  var data = req.body;
  Theloai.add_new(data, function (response) {
    res.send({
      result: response,
    });
  });
};
