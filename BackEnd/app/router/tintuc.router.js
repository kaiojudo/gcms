module.exports = function (router) {
    var postcontroller = require('../controller/tintuc.controller');
    router.post('/post/add',usercontroller.addTintuc);
    router.get('/post/showlist',usercontroller.showTintuc);

};