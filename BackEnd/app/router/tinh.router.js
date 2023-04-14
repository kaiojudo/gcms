module.exports = function (router) {
    var tinhcontroller = require('../controller/tinh.controller');
    router.get('/tinh/showlist',tinhcontroller.showTenTinh);arguments

};