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
  db.query(`SELECT * FROM tintuc WHERE kiemduyet = 1`, function (err, data) {
    if (err) {
      result(err);
    } else {
      result(data);
    }
  });
};
Tintuc.get_page = function (data, result) {
  db.query(
    `SELECT * FROM tintuc Where kiemduyet = 1 limit ${data.limit} offset ${
      (data.offset - 1) * data.limit
    } `,
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
    `SELECT * from tintuc WHERE ID_child_theloai = 24 AND kiemduyet = 1 order by ngaycapnhat LIMIT 4 `,
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
    where child_theloai.idTheLoai = 2 AND tintuc.kiemduyet = 1 order by ngaycapnhat limit 6`,
    function (err, giftcode) {
      if (err) {
        result(err);
      } else {
        result(giftcode);
      }
    }
  );
};
Tintuc.review = function (result) {
  db.query(
    `SELECT * FROM tintuc
    INNER JOIN child_theloai ON tintuc.ID_child_theloai = child_theloai.ID_child_theloai 
    where child_theloai.idTheLoai = 10 AND tintuc.kiemduyet = 1 order by ngaycapnhat limit 6`,
    function (err, review) {
      if (err) {
        result(err);
      } else {
        result(review);
      }
    }
  );
};
Tintuc.newgame = function (result) {
  db.query(
    `SELECT * FROM tintuc
    INNER JOIN child_theloai ON tintuc.ID_child_theloai = child_theloai.ID_child_theloai 
    where child_theloai.idTheLoai = 4 AND tintuc.kiemduyet = 1 order by ngaycapnhat`,
    function (err, review) {
      if (err) {
        result(err);
      } else {
        result(review);
      }
    }
  );
};
Tintuc.slideNews = function (result) {
  db.query(
    `SELECT * FROM tintuc where id_phanloaitin = 4 AND kiemduyet = 1 limit 3 `,
    function (err, slidenews) {
      if (err) {
        result(err);
      } else {
        result(slidenews);
      }
    }
  );
};
Tintuc.bottom_Slide = function (result) {
  db.query(
    `SELECT * FROM tintuc where id_phanloaitin = 4 AND kiemduyet = 1 limit 4 offset 4 `,
    function (err, btslidenews) {
      if (err) {
        result(err);
      } else {
        result(btslidenews);
      }
    }
  );
};
Tintuc.newbieGuild = function (result) {
  db.query(
    `SELECT * FROM gcms.tintuc
    INNER JOIN child_theloai ON tintuc.ID_child_theloai = child_theloai.ID_child_theloai 
    where child_theloai.idTheLoai = 7 AND tintuc.kiemduyet = 1 limit 4 `,
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

Tintuc.delete = function (idtintuc, result) {
  db.query(
    `UPDATE gcms.tintuc SET kiemduyet = 0 WHERE idtintuc = ? `,
    idtintuc,
    function (err, data) {
      if (err) {
        result(null);
      } else {
        result(data);
      }
    }
  );
};
Tintuc.get_by_idtheloai = function (idtheloai,result) {
  db.query(
    `SELECT * FROM gcms.tintuc
    INNER JOIN child_theloai ON tintuc.ID_child_theloai = child_theloai.ID_child_theloai 
    where child_theloai.idTheLoai = ? AND tintuc.kiemduyet = 1 `,
    idtheloai,
    function (err, tintuc) {
      if (err) {
        result(err);
      } else {
        result(tintuc);
      }
    }
  );
};
module.exports = Tintuc;
