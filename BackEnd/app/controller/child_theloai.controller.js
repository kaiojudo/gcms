var ChildTheloai = require('../model/child_theloai.model')

exports.get_listchild = function (req, res) {
    ChildTheloai.getbyID(req.params.id, function (child) {
        res.send({
            result: child
        });
    });
}