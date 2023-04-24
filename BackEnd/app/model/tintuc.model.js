var db = require("../common/connect");

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
  this.blocks = tintuc.blocks;
};
Tintuc.get_by_id = function (idtintuc, result) {
  db.query(
    `SELECT * from tintuc WHERE idtintuc = ?`,
    idtintuc,
    function (err, tintuc) {
      if (err) {
        result(err);
      } else {
        result(tintuc[0]);
      }
    }
  );
};

Tintuc.get_all = function (result) {
  db.query(`SELECT * FROM tintuc`, function (err, data) {
    if (err) {
      result(err);
    } else {
      result(data);
    }
  });
};
Tintuc.get_8_page = function (id, result) {
  db.query(
    `SELECT * FROM tintuc limit 5 offset ${id}`,
    function (err, tintuc) {
      if (err) {
        result(err);
      } else {
        result(tintuc);
      }
    }
  );
};
Tintuc.teyvat = function (result) {
  db.query(
    `SELECT * from tintuc WHERE ID_child_theloai = 24 order by ngaycapnhat LIMIT 4 `,
    function (err, teyvat) {
      if (err) {
        result(err);
      } else {
        result(teyvat);
      }
    }
  );
};
Tintuc.giftcode = function (result) {
  db.query(
    `SELECT * FROM tintuc
    INNER JOIN child_theloai ON tintuc.ID_child_theloai = child_theloai.ID_child_theloai 
    where child_theloai.idTheLoai = 2 order by ngaycapnhat limit 6`,
    function (err, giftcode) {
      if (err) {
        result(err);
      } else {
        result(giftcode);
      }
    }
  );
};
Tintuc.slideNews = function (result) {
  db.query(
    `SELECT * FROM tintuc where id_phanloaitin = 4 limit 3 `,
    function (err, slidenews) {
      if (err) {
        result(err);
      } else {
        result(slidenews);
      }
    }
  );
};

Tintuc.newbieGuild = function (result) {
  db.query(
    `SELECT * FROM gcms.tintuc
    INNER JOIN child_theloai ON tintuc.ID_child_theloai = child_theloai.ID_child_theloai 
    where child_theloai.idTheLoai = 7 limit 4 `,
    function (err, newbieGuild) {
      if (err) {
        result(err);
      } else {
        result(newbieGuild);
      }
    }
  );
};
Tintuc.add_new = function (data, result) {
  var content = { blocks: data.blocks };

  // console.log(typeof data.blocks);
  const sql = `call SP_addPosts('${data.tieudetin}','${data.hinhtrichdan}','${
    data.trichdantin
  }',${data.ID_child_theloai},${data.id_phanloaitin},${data.id_tacgia},'${
    data.ngaycapnhat
  }','${JSON.stringify(content)}',0,1,'none');`;
  db.query(sql, function (err) {
    if (err) {
      // throw err;
      result(0); // nếu thực hiện truy vấn KHÔNG thành công
    } else {
      result(1); //nếu thực hiện truy vấn thành công
    }
  });
};
module.exports = Tintuc;
