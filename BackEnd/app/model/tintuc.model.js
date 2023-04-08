var db = require('../common/connect');

const Tintuc = function (tintuc) {
    this.idtintuc = tintuc.idtintuc;
    this.tieudetin = tintuc.tieudetin;
    this.hinhtrichdan = tintuc.hinhtrichdan;
    this.trichdantin = tintuc.trichdantin;
    this.noidungtin = tintuc.noidungtin;
    this.idTheLoai = tintuc.idTheLoai;
    this.ID_child_theloai = tintuc.ID_child_theloai;
    this.id_nhomtin = tintuc.id_nhomtin;
    this.id_phanloaitin = tintuc.id_phanloaitin;
    this.id_tacgia = tintuc.id_tacgia;
    this.ngaycapnhat = tintuc.ngaycapnhat;
    this.solandoc = tintuc.solandoc;
    this.kiemduyet = tintuc.kiemduyet;
}
Tintuc.get_by_id = function(id,result){
    db.query(`SELECT * FROM tintuc WHERE idtintuc = ? `,id, function (err, child) {
        if (err) {
            result(err);
        } else {
            result(child);
        }
    });
};