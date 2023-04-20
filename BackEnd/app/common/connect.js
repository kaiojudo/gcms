var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'test_db'
});

connection.connect(function(err) {
    if (err) {
        console.log(err);
    }

})

module.exports = connection;