var ChildTheloai = require("../model/child_theloai.model");
exports.addTheLoai = function (req, res) {
  var data = req.body;
  ChildTheloai.add_new(data, function (response) {
    res.send({
      result: response,
    });
  });
};
exports.get_listchild = function (req, res) {
  ChildTheloai.getbyID(req.params.id, function (child) {
    res.send({
      result: child,
    });
  });
};
exports.get_listchildbyidcha = function (req, res) {
  ChildTheloai.getbyIDCha(req.params.id, function (child) {
    res.send({
      result: child,
    });
  });
};
exports.delete = function (req, res) {
  ChildTheloai.delete(req.params.id, function (deleteItem) {
    res.send({
      result: deleteItem,
    });
  });
};
exports.return = function (req, res) {
  ChildTheloai.return(req.params.id, function (deleteItem) {
    res.send({
      result: deleteItem,
    });
  });
};
exports.get_all = function (req, res) {
  ChildTheloai.getAll(function (child) {
    res.send({
      result: child,
    });
  });
};
exports.getdelete = function (req, res) {
  ChildTheloai.getdelete(function (child) {
    res.send({
      result: child,
    });
  });
};
