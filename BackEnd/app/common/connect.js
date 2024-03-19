var mysql = require('mysql2');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hieulinh',
    database: 'gcms'
});

connection.connect(function(err) {
    if (err) {
        console.log(err);
    }

})

module.exports = connection;