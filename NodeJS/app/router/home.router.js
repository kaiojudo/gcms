module.exports = function(router){
    var homeController = require('../controller/home.controller');
    router.get("/", homeController.home);
    router.get("/about", homeController.about);
};