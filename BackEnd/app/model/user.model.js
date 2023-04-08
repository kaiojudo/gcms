var db = require('../common/connect');

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
}
User.register = function (data, result) {
    db.query(`INSERT INTO thanhvien SET ? `, data, function (err, res) {
        if (err) {
            result(err)
        } else {
            result({
                id_thanhvien: res.insertId,
                ...data
            })
        }
    });
}
User.get_all = function (result) {
    db.query(`SELECT * FROM thanhvien `, function (err, data) {
        if (err) {
            result(err);
        } else {
            result(data);
        }
    });
}
module.exports = User;