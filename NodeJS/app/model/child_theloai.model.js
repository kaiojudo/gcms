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
    console.log(idTheloai);
    db.query(`SELECT * FROM child_theloai WHERE idTheLoai = ? `,idTheloai, function (err, child) {
        if (err) {
            result(err);
        } else {
            result(child);
        }
    });
};
module.exports = ChildTheLoai;