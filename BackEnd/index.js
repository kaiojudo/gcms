var express = require('express');
var cors = require('cors')
var app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cors());
require('./app/router/home.router')(app);
require('./app/router/theloai.router')(app);
require('./app/router/child_theloai.router')(app);
var port = 3030;
app.listen(port, function () {
    console.log("this server is listening on port " + port);
});