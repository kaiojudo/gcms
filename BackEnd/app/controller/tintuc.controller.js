var Tintuc = require("../model/tintuc.model");

exports.addTintuc = function (req, res) {
  var data = req.body;
  console.log(data);
  Tintuc.add_new(data, function (response) {
    res.send({
      result: response,
    });
  });
};
exports.showAllTintuc = function (req, res) {
  Tintuc.get_all(function (data) {
    res.send({
      result: data,
    });
  });
};

exports.getbyId = function (req, res) {
  Tintuc.get_by_id(req.params.id, function (tintuc) {
    res.send({
      result: tintuc,
    });
  });
};
exports.getPagi = function (req, res) {
  Tintuc.get_page(req.params, function (tintuc) {
    res.send({
      result: tintuc,
    });
  });
};
exports.showAllTeyvat = function (req, res) {
  Tintuc.teyvat(function (datatv) {
    res.send({
      result: datatv,
    });
  });
};
exports.showReview = function (req, res) {
  Tintuc.review(function (datarv) {
    res.send({
      result: datarv,
    });
  });
};
exports.showNewGame = function (req, res) {
  Tintuc.newgame(function (datarv) {
    res.send({
      result: datarv,
    });
  });
};
exports.showGiftcode = function (req, res) {
  Tintuc.giftcode(function (datagc) {
    res.send({
      result: datagc,
    });
  });
};
exports.showSlide = function (req, res) {
  Tintuc.slideNews(function (slideitem) {
    res.send({
      result: slideitem,
    });
  });
};
exports.showbtSlide = function (req, res) {
  Tintuc.bottom_Slide(function (btslideitem) {
    res.send({
      result: btslideitem,
    });
  });
};
exports.showGuild = function (req, res) {
  Tintuc.newbieGuild(function (guilditem) {
    res.send({
      result: guilditem,
    });
  });
};
exports.delete = function (req, res) {
  Tintuc.delete(req.params.id, function (deleteItem) {
    res.send({
      result: deleteItem,
    });
  });
};
exports.get_by_idtheloai = function (req, res) {
  Tintuc.get_by_idtheloai(req.params.id, function (item) {
    res.send({
      result: item,
    });
  });
};


