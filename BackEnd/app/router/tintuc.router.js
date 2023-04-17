module.exports = function (router) {
    var postcontroller = require('../controller/tintuc.controller');
    router.post('/post/add',postcontroller.addTintuc);
    router.get('/post/showlist',postcontroller.showAllTintuc);
    router.get('/post/:id',postcontroller.getbyId);
    router.get('/post/teyvat/teyvatnews',postcontroller.showAllTeyvat);



};