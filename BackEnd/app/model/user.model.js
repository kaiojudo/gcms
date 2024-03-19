var db = require("../common/connect");

const User = function (user) {
  this.id_thanhvien = user.id_thanhvien;
  this.hoten = user.hoten;
  this.sex = user.isNull;
  this.email = user.email;
  this.phone = user.phone;
  this.address = user.address;
  this.id_nguyenquan = user.id_nguyenquan;
  this.username = user.username;
  this.password = user.password;
  this.accesslevel = user.accesslevel;
  this.active = user.active;
};
User.register = function (data, result) {
  db.query(`INSERT INTO thanhvien SET ? `, data, function (err, res) {
    if (err) {
      result(err);
    } else {
      result({
        id_thanhvien: res.insertId,
        ...data,
      });
    }
  });
};
User.get_all = function (result) {
  db.query(
    `SELECT * FROM thanhvien where active = 1 and accesslevel = 2`,
    function (err, data) {
      if (err) {
        result(err);
      } else {
        result(data);
      }
    }
  );
};
User.get_user_chuaduyet = function (result) {
  db.query(`SELECT * FROM thanhvien where active = 0`, function (err, data) {
    if (err) {
      result(err);
    } else {
      result(data);
    }
  });
};
User.getUser = function (data, result) {
  var username = data.account.split(" ");
  var password = data.password.split(" ");
  const sql = `Call Login('${username}','${password}')`;
  db.query(sql, function (err, user) {
    if (err) {
      result("ERR");
    }
    if (user) {
      result(user[0]);
    }
  });
};
User.get_by_id = function (id_thanhvien, result) {
  db.query(
    `SELECT * from thanhvien WHERE id_thanhvien = ?`,
    id_thanhvien,
    function (err, thanhvien) {
      if (err) {
        result(err);
      } else {
        result(thanhvien[0]);
      }
    }
  );
};
User.delete = function (id, result) {
  db.query(
    `DELETE from thanhvien where id_thanhvien = ${id}`,
    function (err, data) {
      if (err) {
        result(err);
      } else {
        result("Xoá thành công");
      }
    }
  );
};
User.remove = function (idtintuc, result) {
  db.query(
    `UPDATE gcms.thanhvien SET  active = '0' WHERE (id_thanhvien = ?); `,
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
User.levelUp = function (idtintuc, result) {
  db.query(
    `UPDATE gcms.thanhvien SET accesslevel = '1' WHERE (id_thanhvien = ?); `,
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
User.accept = function (idtintuc, result) {
  db.query(
    `UPDATE gcms.thanhvien SET accesslevel = '2', active = '1' WHERE (id_thanhvien = ?); `,
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
User.update = function (data, result) {
  const sql = `call UpdateUser(${data.id_thanhvien},'${data.hoten}','${data.sex}',${data.id_nguyenquan},'${data.address}','${data.phone}','${data.email}')`;
  db.query(sql, function (err) {
    if (err) {
      result(0);
    } else {
      result(sql);
    }
  });
};
User.changepass = function (data, result) {
  const sql = `call ChangePass(${data.id_thanhvien},'${data.password}')`;
  db.query(sql, function (err) {
    if (err) {
      result(err);
    } else {
      result("Success");
    }
  });
};
User.checkpass = function (id,password, result) {
  const sql = `select * from gcms.thanhvien where id_thanhvien = ${id} and password = '${password}';`;
  db.query(sql, function (err, data) {
    if (err) {
      result(err);
    } else {
      result(data[0]);
    }
  });
};
User.gettotalpostbyauthor = function (id,result) {
  db.query(
    `select count(id_tacgia) as soluong from gcms.tintuc where id_tacgia = ${id} and isNull = 1 and kiemduyet = 1;`,
    function (err, data) {
      if (err) {
        result(err);
      } else {
        result(data[0]);
      }
    }
  );
};
module.exports = User;
