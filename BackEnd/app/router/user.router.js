module.exports = function (router) {
    var usercontroller = require('../controller/user.controller');
    router.post('/user/add', usercontroller.addUser);
    router.get('/user/showlist', usercontroller.showUser);
    router.get('/user/showlistchuaduyet', usercontroller.showDuyet);
    router.get('/account/:account/password/:password', usercontroller.getUserByAccount);
    router.get('/user/findbyid/:id', usercontroller.findbyID);
    router.delete('/user/delete/:id', usercontroller.deleteItem);
    router.patch('/user/accept/:id', usercontroller.accept);
};