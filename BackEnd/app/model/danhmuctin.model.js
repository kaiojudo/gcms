var db = require('../common/connect');

const Danhmuc = function (danhmuc) {
    this.id_phanloaitin = danhmuc.id_phanloaitin;
    this.ten_phanloaitin = danhmuc.ten_phanloaitin;
    this.ngaycapnhat = danhmuc.ngaycapnhat;
}

Danhmuc.get_all = function (result) {
    db.query(`SELECT * from danhmuctin`, function (err, theloai) {
        if (err) {
            result(err);
        } else {
            result(theloai);
        }
    });
}
module.exports =Danhmuc;