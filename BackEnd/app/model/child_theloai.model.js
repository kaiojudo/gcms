const db = require('../common/connect');
const ChildTheLoai = function (child) {
    this.ID_child_theloai = child.ID_child_theloai;
    this.ten_child_theloai = child.ten_child_theloai;
    this.sapxep_child_theloai = child.sapxep_child_theloai;
    this.isNull_child_theloai = child.isNull_child_theloai;
    this.isVisible_child_theloai = child.isVisible_child_theloai;
    this.url = child.url;
    this.target = child.target;
    this.linkngoai = child.linkngoai;
    this.idTheloai = child.idTheloai;
    this.img_child_theloai = child.img_child_theloai;
}
ChildTheLoai.getbyID = function (idTheloai, result) {
    db.query(`SELECT * FROM child_theloai WHERE ID_child_theloai = ? `,idTheloai, function (err, child) {
        if (err) {
            result(err);
        } else {
            result(child[0]);
        }
    });
};
ChildTheLoai.getbyIDCha = function (idTheloai, result) {
    db.query(`SELECT * FROM child_theloai WHERE idTheLoai = ? `,idTheloai, function (err, child) {
        if (err) {
            result(err);
        } else {
            result(child);
        }
    });
};
ChildTheLoai.getAll = function (result) {
    db.query(`SELECT * FROM child_theloai `, function (err, child) {
        if (err) {
            result(err);
        } else {
            result(child);
        }
    });
};
module.exports = ChildTheLoai;