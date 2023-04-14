module.exports = function(router){
    var danhmucController = require('../controller/danhmuctin.controller');
    router.get("/danhmuc/showlist", danhmucController.get_list);
};