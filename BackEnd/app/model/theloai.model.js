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
    db.query(`SELECT * from theloai WHERE sapxep <= 6`, function (err, theloai) {
        if (err) {
            result(err);
        } else {
            result(theloai);
        }
    });
}
Theloai.details = function (idTheloai, result) {
    db.query(`SELECT * from theloai WHERE idTheloai = ?`, idTheloai, function (err, theloai) {
        if (err) {
            result(err);
        } else {
            result(theloai[0]);
        }
    });
}

module.exports = Theloai;