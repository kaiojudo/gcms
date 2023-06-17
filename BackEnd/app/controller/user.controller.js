var User = require("../model/user.model");

exports.addUser = function (req, res) {
  var data = req.body;
  User.register(data, function (response) {
    res.send({
      result: response,
    });
  });
};
exports.showUser = function (req, res) {
  User.get_all(function (data) {
    res.send({
      result: data,
    });
  });
};
exports.showDuyet = function (req, res) {
  User.get_user_chuaduyet(function (data) {
    res.send({
      result: data,
    });
  });
};
exports.getUserByAccount = function (req, res) {
  const data = req.params;
  User.getUser(data, function (respond) {
    res.send({ result: respond });
  });
};
exports.findbyID = function (req, res) {
  User.get_by_id(req.params.id, function (data) {
    res.send({
      result: data,
    });
  });
};
exports.deleteItem = function (req, res) {
  User.delete(req.params.id, function (data) {
    res.send({
      result: data,
    });
  });
};
exports.remove = function (req, res) {
  User.remove(req.params.id, function (data) {
    res.send({
      result: data,
    });
  });
};
exports.levelUp = function (req, res) {
  User.levelUp(req.params.id, function (data) {
    res.send({
      result: data,
    });
  });
};
exports.accept = function (req, res) {
  User.accept(req.params.id, function (data) {
    res.send({
      result: data,
    });
  });
};
exports.update = function (req, res) {
  const data = req.body;
  User.update(data, function (data) {
    res.send({ result: data });
  });
};
exports.changepass = function (req, res) {
  const data = req.body;
  User.changepass(data, function (data) {
    res.send({ result: data });
  });
};
exports.checkpass = function (req, res) {
  const data = req.body;
  User.checkpass(data, function (data) {
    res.send({ result: data });
  });
};