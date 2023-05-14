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
Tinh.get_by_id = function (id, result) {
    db.query(
      `SELECT * from tinh WHERE idtinh = ? `,
      id,
      function (err, tinh) {
        if (err) {
          result(err);
        } else {
          result(tinh[0]);
        }
      }
    );
  };
module.exports = Tinh;