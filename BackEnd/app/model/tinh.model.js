var db = require('../common/connect');

const Tinh = function (tinh) {
    this.idtinh = tinh.idtinh;
    this.tentinh = tinh.tentinh;
}
Tinh.get_all = function (result) {
    db.query(`SELECT * FROM tinh `, function (err, data) {
        if (err) {
            result(err);
        } else {
            result(data);
        }
    });
}
module.exports = Tinh;