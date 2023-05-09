var db = require('../common/connect');

const Theloai = function (theloai) {
    this.idTheloai = theloai.idTheloai;
    this.tenTheloai = theloai.tenTheloai;
    this.isNull = theloai.isNull;
    this.isNull_Danhmuc = theloai.isNull_Danhmuc;
    this.sapxep = theloai.sapxep;
    this.linkngoai = theloai.linkngoai;
    this.target = theloai.target;
    this.url = theloai.url;
}
Theloai.get_all = function (result) {
  db.query(`SELECT * from theloai WHERE isNull = 1`, function (err, theloai) {
      if (err) {
          result(err);
      } else {
          result(theloai);
      }
  });
}
Theloai.get_header = function (result) {
    db.query(`SELECT * from theloai WHERE sapxep <= 6 AND isNull = 1`, function (err, theloai) {
        if (err) {
            result(err);
        } else {
            result(theloai);
        }
    });
}
Theloai.details = function (idTheloai, result) {
    db.query(`SELECT * from theloai WHERE idTheloai = ? `, idTheloai, function (err, theloai) {
        if (err) {
            result(err);
        } else {
            result(theloai[0]);
        }
    });
}
Theloai.delete = function (idtheloai, result) {
    db.query(
      `UPDATE gcms.theloai SET isNull = 0 WHERE idtheloai = ? ;`,
      idtheloai,
      function (err, data) {
        if (err) {
          result(null);
        } else {
          result(data);
        }
      }
    );
  };
module.exports = Theloai;