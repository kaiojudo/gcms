var db = require("../common/connect");
const Tintuc = function (tintuc) {
  this.idtintuc = tintuc.idtintuc;
  this.tieudetin = tintuc.tieudetin;
  this.hinhtrichdan = tintuc.hinhtrichdan;
  this.trichdantin = tintuc.trichdantin;
  this.ID_child_theloai = tintuc.ID_child_theloai;
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
Tintuc.get_post_chuaduyet = function (idtacgia, result) {
  db.query(
    `SELECT * from tintuc WHERE kiemduyet = 0 and id_tacgia = ? AND isNull = 1`,
    idtacgia,
    function (err, tintuc) {
      if (err) {
        result(err);
      } else {
        result(tintuc);
      }
    }
  );
};
Tintuc.get_by_id_admin = function (idtintuc, result) {
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
    `SELECT * from tintuc WHERE ID_child_theloai = 1 AND kiemduyet = 1 AND isNull = 1 order by ngaycapnhat LIMIT 5 `,
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
    where child_theloai.idTheLoai = 8 AND tintuc.kiemduyet = 1 AND tintuc.isNull = 1 order by ngaycapnhat limit 6`,
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
    where child_theloai.idTheLoai = 7 AND tintuc.kiemduyet = 1 AND tintuc.isNull = 1 order by ngaycapnhat limit 6`,
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
    where child_theloai.idTheLoai = 9 AND tintuc.kiemduyet = 1 AND tintuc.isNull = 1 order by ngaycapnhat`,
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
    `SELECT * FROM tintuc where id_phanloaitin = 3 AND kiemduyet = 1 AND isNull = 1 order by isActive limit 3 `,
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
    `SELECT * FROM tintuc where id_phanloaitin = 2 AND kiemduyet = 1 AND isNull = 1 order by solandoc desc limit 4 `,
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
    where child_theloai.idTheLoai = 6 AND tintuc.kiemduyet = 1 AND tintuc.isNull = 1 limit 5 `,
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
  const sql = `call AddPost('${data.tieudetin}','${data.hinhtrichdan}','${
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
Tintuc.updatePost = function (data, result) {
  var content = { blocks: data.blocks };

  const sql = `call UpdatePost(${data.idtintuc},'${data.tieudetin}','${
    data.hinhtrichdan
  }','${data.trichdantin}',${data.ID_child_theloai},${data.id_phanloaitin},'${
    data.ngaycapnhat
  }','${JSON.stringify(content)}',0);`;
  db.query(sql, function (err) {
    if (err) {
      result(0);
    } else {
      result(1);
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
Tintuc.return = function (idtintuc, result) {
  db.query(
    `UPDATE gcms.tintuc SET isNull = 1 WHERE idtintuc = ? `,
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
Tintuc.get_by_idtheloai = function (idtheloai, limit, offset, result) {
  db.query(
    `SELECT * FROM gcms.tintuc
    INNER JOIN child_theloai ON tintuc.ID_child_theloai = child_theloai.ID_child_theloai 
    where child_theloai.idTheLoai = ? AND tintuc.kiemduyet = 1 AND tintuc.isNull = 1 limit ${limit} offset ${offset}`,
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
Tintuc.get_by_tacgia = function (id, result) {
  db.query(
    `SELECT * FROM gcms.tintuc
    Where id_tacgia = ? and kiemduyet = 1 and isnull = 1`,
    id,
    function (err, tintuc) {
      if (err) {
        result(err);
      } else {
        result(tintuc);
      }
    }
  );
};
Tintuc.get_admin_delete = function (result) {
  db.query(`SELECT * FROM gcms.tintuc where isNull = 0`, function (err, data) {
    if (err) {
      result(err);
    } else {
      result(data);
    }
  });
};
Tintuc.remove = function (id, result) {
  db.query(`DELETE from tintuc where idtintuc = ${id}`, function (err, data) {
    if (err) {
      result(err);
    } else {
      result("Xoá thành công");
    }
  });
};
Tintuc.search = function (search, result) {
  const sql = `SELECT * FROM gcms.tintuc where kiemduyet = 1 and isNull = 1 and tieudetin like "%${search}%";`;
  db.query(sql, function (err, tintuc) {
    if (err) {
      result(err);
    } else {
      result(tintuc);
    }
  });
};
Tintuc.searchchuaduyet = function (search, result) {
  const sql = `SELECT * FROM gcms.tintuc where kiemduyet = 0 and tieudetin like "%${search}%";`;
  db.query(sql, function (err, tintuc) {
    if (err) {
      result(err);
    } else {
      result(tintuc);
    }
  });
};
Tintuc.pagination = function (limit, offset, result) {
  const sql = `SELECT * FROM gcms.tintuc where kiemduyet = 1 and isNull = 1 order by solandoc desc limit ${limit} offset ${offset}`;
  db.query(sql, function (err, tintuc) {
    if (err) {
      result(err);
    } else {
      result(tintuc);
    }
  });
};
Tintuc.paginationsearch = function (search, limit, offset, result) {
  const sql = `SELECT * FROM gcms.tintuc where kiemduyet = 1 and isNull = 1 and tieudetin like "%${search}%" limit ${limit} offset ${offset};`;
  db.query(sql, function (err, tintuc) {
    if (err) {
      result(err);
    } else {
      result(tintuc);
    }
  });
};
Tintuc.gettotalpost = function (result) {
  db.query(
    `SELECT COUNT(idtintuc) AS soluong from tintuc where isNull = 1 and kiemduyet = 1;`,
    function (err, data) {
      if (err) {
        result(err);
      } else {
        result(data[0]);
      }
    }
  );
};
Tintuc.paginationbychild = function (limit, offset, idchild, result) {
  const sql = `SELECT * FROM gcms.tintuc where kiemduyet = 1 and isNull = 1 and ID_child_theloai = ${idchild} limit ${limit} offset ${offset} `;
  db.query(sql, function (err, tintuc) {
    if (err) {
      result(err);
    } else {
      result(tintuc);
    }
  });
};
Tintuc.gettotalpostbychild = function (id, result) {
  db.query(
    `SELECT COUNT(idtintuc) AS soluong from tintuc where isNull = 1 and kiemduyet = 1 and ID_child_theloai = ?;`,
    id,
    function (err, data) {
      if (err) {
        result(err);
      } else {
        result(data[0]);
      }
    }
  );
};
Tintuc.gettotalpostbytheloai = function (id, result) {
  db.query(
    `SELECT COUNT(idtintuc) AS soluong from tintuc inner join child_theloai on tintuc.ID_child_theloai = child_theloai.ID_child_theloai where isNull = 1 and kiemduyet = 1 and child_theloai.idTheLoai = ?;`,
    id,
    function (err, data) {
      if (err) {
        result(err);
      } else {
        result(data[0]);
      }
    }
  );
};
Tintuc.gettotalpostbysearch = function (search, result) {
  db.query(
    `SELECT COUNT(idtintuc) AS soluong from tintuc where isNull = 1 and kiemduyet = 1 and tieudetin like "%${search}%";`,
    function (err, data) {
      if (err) {
        result(err);
      } else {
        result(data[0]);
      }
    }
  );
};
Tintuc.getActive = function (result) {
  db.query(
    `select idtintuc as idActive from gcms.tintuc where isActive = "active";`,
    function (err, data) {
      if (err) {
        result(err);
      } else {
        result(data[0]);
      }
    }
  );
};
Tintuc.setNoActive = function (idtintuc, result) {
  db.query(
    `UPDATE gcms.tintuc SET isActive = 'none' WHERE idtintuc = ?`,
    idtintuc,
    function (err) {
      if (err) {
        result(err);
      } else {
        result(1);
      }
    }
  );
};
Tintuc.getbychildandtacgia = function (child, tacgia, result) {
  db.query(`SELECT * FROM gcms.tintuc where ID_child_theloai = ${child} and id_tacgia = ${tacgia}`, function (err, tintuc) {
    if (err) {
      result(err);
    } else {
      result(tintuc);
    }
  });
};
Tintuc.gettotalpostbytacgia = function (tacgia, result) {
  db.query(`select count(id_tacgia) as slbaiviet from gcms.tintuc where id_tacgia = ${tacgia}`, function (err, data) {
    if (err) {
      result(err);
    } else {
      result(data[0]);
    }
  });
};

module.exports = Tintuc;
