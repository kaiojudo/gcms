var ChildTheloai = require('../model/child_theloai.model')

exports.get_listchild = function (req, res) {
    ChildTheloai.getbyID(req.params.id, function (child) {
        res.send({
            result: child
        });
    });
}
exports.get_all = function (req, res) {
    ChildTheloai.getAll(function (child) {
        res.send({
            result: child
        });
    });
}