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
  this.isNull = tintuc.isNull;
};
Tintuc.get_by_id = function (idtintuc, result) {
  db.query(
    `SELECT * from tintuc WHERE idtintuc = ? AND kiemduyet = 1 AND isNull = 1`,
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
  db.query(
    `SELECT * FROM tintuc WHERE kiemduyet = 1 AND isNull = 1 order by solandoc desc`,
    function (err, data) {
      if (err) {
        result(err);
      } else {
        result(data);
      }
    }
  );
};
Tintuc.getchuaduyet = function (result) {
  db.query(
    `SELECT * FROM tintuc WHERE kiemduyet = 0 AND isNull = 1`,
    function (err, data) {
      if (err) {
        result(err);
      } else {
        result(data);
      }
    }
  );
};
Tintuc.teyvat = function (result) {
  db.query(
    `SELECT * from tintuc WHERE ID_child_theloai = 24 AND kiemduyet = 1 AND isNull = 1 order by ngaycapnhat LIMIT 4 `,
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
    where child_theloai.idTheLoai = 2 AND tintuc.kiemduyet = 1 AND tintuc.isNull = 1 order by ngaycapnhat limit 6`,
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
    where child_theloai.idTheLoai = 10 AND tintuc.kiemduyet = 1 AND tintuc.isNull = 1 order by ngaycapnhat limit 6`,
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
    where child_theloai.idTheLoai = 4 AND tintuc.kiemduyet = 1 AND tintuc.isNull = 1 order by ngaycapnhat`,
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
    `SELECT * FROM tintuc where id_phanloaitin = 4 AND kiemduyet = 1 AND isNull = 1 order by isActive limit 3 `,
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
    `SELECT * FROM tintuc where id_phanloaitin = 4 AND kiemduyet = 1 AND isNull = 1 limit 4 offset 3 `,
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
    where child_theloai.idTheLoai = 7 AND tintuc.kiemduyet = 1 AND tintuc.isNull = 1 limit 4 `,
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
  }','${JSON.stringify(content)}',0,0,'none',1);`;
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
    `UPDATE gcms.tintuc SET isNull = 0 WHERE idtintuc = ? `,
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
Tintuc.duyet = function (idtintuc, result) {
  db.query(
    `UPDATE gcms.tintuc SET kiemduyet = 1 WHERE idtintuc = ? `,
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
Tintuc.solandoc = function (idtintuc, result) {
  db.query(
    `UPDATE gcms.tintuc SET solandoc = solandoc + 1 WHERE idtintuc = ?`,
    idtintuc,
    function (err, data) {
      if (err) {
        result(err);
        console.log(idtintuc);
      } else {
        result(data);
      }
    }
  );
};
Tintuc.get_by_idtheloai = function (idtheloai, result) {
  db.query(
    `SELECT * FROM gcms.tintuc
    INNER JOIN child_theloai ON tintuc.ID_child_theloai = child_theloai.ID_child_theloai 
    where child_theloai.idTheLoai = ? AND tintuc.kiemduyet = 1 AND tintuc.isNull = 1`,
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
Tintuc.get_by_idchildtheloai = function (idtheloai, result) {
  db.query(
    `SELECT * FROM gcms.tintuc
    where ID_child_theloai = ? AND tintuc.kiemduyet = 1 AND tintuc.isNull = 1`,
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
Tintuc.getnew = function (idtheloai, result) {
  db.query(
    `SELECT * FROM tintuc WHERE kiemduyet = 1 AND isNull = 1 AND id_phanloaitin != 1 AND idtintuc != ? order by ngaycapnhat desc limit 4 `,
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
Tintuc.setActive = function (idtintuc, result) {
  db.query(
    `UPDATE gcms.tintuc SET isActive = "active" WHERE idtintuc = ? `,
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
Tintuc.setnoActive = function (idtintuc, result) {
  db.query(
    `UPDATE gcms.tintuc SET isActive = "none" WHERE idtintuc = ? `,
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
Tintuc.setAfterDelete = function (result) {
  db.query(
    `UPDATE gcms.tintuc  INNER JOIN child_theloai ON tintuc.ID_child_theloai = child_theloai.ID_child_theloai inner join theloai on theloai.idTheLoai = child_theloai.idTheLoai 
    SET tintuc.isNull = 0  where theloai.isNull = 0; `,
    function (err, data) {
      if (err) {
        result(null);
      } else {
        result(data);
      }
    }
  );
};
Tintuc.setReturn = function (id, result) {
  db.query(
    `UPDATE gcms.tintuc  INNER JOIN child_theloai ON tintuc.ID_child_theloai = child_theloai.ID_child_theloai inner join theloai on theloai.idTheLoai = child_theloai.idTheLoai 
    SET tintuc.isNull = 1  where theloai.idTheLoai = ?; `,
    id,
    function (err, data) {
      if (err) {
        result(null);
      } else {
        result(data);
      }
    }
  );
};
Tintuc.setAfterDeleteC = function (result) {
  db.query(
    `UPDATE gcms.tintuc  INNER JOIN child_theloai ON tintuc.ID_child_theloai = child_theloai.ID_child_theloai 
    SET tintuc.isNull = 0  where child_theloai.isNull_child_theloai = 0; `,
    function (err, data) {
      if (err) {
        result(null);
      } else {
        result(data);
      }
    }
  );
};
Tintuc.setReturnC = function (id, result) {
  db.query(
    `UPDATE gcms.tintuc  INNER JOIN child_theloai ON tintuc.ID_child_theloai = child_theloai.ID_child_theloai 
    SET tintuc.isNull = 1 where child_theloai.ID_child_theloai = ?; `,
    id,
    function (err, data) {
      if (err) {
        result(err);
      } else {
        result(data);
      }
    }
  );
};
module.exports = Tintuc;
