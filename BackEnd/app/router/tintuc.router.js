module.exports = function (router) {
    var postcontroller = require('../controller/tintuc.controller');
    router.post('/post/add',postcontroller.addTintuc);
    router.get('/post/showlist',postcontroller.showTintuc);

};