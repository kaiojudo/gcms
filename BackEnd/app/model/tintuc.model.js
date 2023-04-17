var db = require('../common/connect');

const Tintuc = function (tintuc) {
    this.idtintuc = tintuc.idtintuc;
    this.tieudetin = tintuc.tieudetin;
    this.hinhtrichdan = tintuc.hinhtrichdan;
    this.trichdantin = tintuc.trichdantin;
    this.ID_child_theloai = tintuc.ID_child_theloai;
    this.id_nhomtin = tintuc.id_nhomtin;
    this.id_phanloaitin = tintuc.id_phanloaitin;
    this.id_tacgia = tintuc.id_tacgia;
    this.ngaycapnhat = tintuc.ngaycapnhat;
    this.solandoc = tintuc.solandoc;
    this.kiemduyet = tintuc.kiemduyet;
    this.anh1 = tintuc.anh1;
    this.anh2 = tintuc.anh2;
    this.anh3 = tintuc.anh3;
    this.doan1 = tintuc.doan1;
    this.doan2 = tintuc.doan2;
    this.doan3 = tintuc.doan3;
    this.doan4 = tintuc.doan4;
}
Tintuc.get_by_id = function (idtintuc, result) {
    db.query(`SELECT * from tintuc WHERE idtintuc = ?`, idtintuc, function (err, tintuc) {
        if (err) {
            result(err);
        } else {
            result(tintuc[0]);
        }
    });
};
Tintuc.add_new = function (data, result) {
    db.query(`INSERT INTO tintuc SET ? `, data, function (err, res) {
        if (err) {
            result(err)
        } else {
            result({
                idtintuc: res.insertId,
                ...data
            })
        }
    });
}
Tintuc.get_all = function (result) {
    db.query(`SELECT * FROM tintuc`, function (err, data) {
        if (err) {
            result(err);
        } else {
            result(data);
        }
    });
}
Tintuc.teyvat = function (result) {
    db.query(`SELECT * from tintuc WHERE ID_child_theloai = 24 order by ngaycapnhat LIMIT 4 `, function (err, teyvat) {
        if (err) {
            result(err);
        } else {
            result(teyvat);
        }
    });
};
Tintuc.giftcode = function (result) {
    db.query(`SELECT * FROM tintuc
    INNER JOIN child_theloai ON tintuc.ID_child_theloai = child_theloai.ID_child_theloai 
    where child_theloai.idTheLoai = 2 order by ngaycapnhat limit 4`, function (err, giftcode) {
        if (err) {
            result(err);
        } else {
            result(giftcode);
        }
    });
};

module.exports = Tintuc;