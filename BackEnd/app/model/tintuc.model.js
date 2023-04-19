var db = require('../common/connect');

const Tintuc = function (tintuc) {
    this.idtintuc = tintuc.idtintuc;
    this.tieudetin = tintuc.tieudetin;
    this.hinhtrichdan = tintuc.hinhtrichdan;
    this.trichdantin = tintuc.trichdantin;
    this.ID_child_theloai = tintuc.ID_child_theloai;
    this.id_phanloaitin = tintuc.id_phanloaitin;
    this.id_tacgia = tintuc.id_tacgia;
    this.ngaycapnhat = tintuc.ngaycapnhat;
    this.content = tintuc.content;
    this.solandoc = tintuc.solandoc;
    this.kiemduyet = tintuc.kiemduyet;
    this.isActive = tintuc.isActive;
   
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
    const sql = `call tintuc(${data.idtintuc},${data.tieudetin},'${data.hinhtrichdan}',
    '${data.trichdantin}','${data.ID_child_theloai}','${data.ngaycapnhat}'
    ${data.id_phanloaitin},${data.id_tacgia}
     '${JSON.stringify(content)}',0,1,'${data.isActive}');`;

    database.query(sql, function (err) {
        if (err) {
            result(0);
        }
        else {
            result(1); 
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
    where child_theloai.idTheLoai = 2 order by ngaycapnhat limit 6`, function (err, giftcode) {
        if (err) {
            result(err);
        } else {
            result(giftcode);
        }
    });
};

module.exports = Tintuc;