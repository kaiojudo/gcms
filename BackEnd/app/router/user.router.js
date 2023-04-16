module.exports = function (router) {
    var usercontroller = require('../controller/user.controller');
    router.post('/user/add', usercontroller.addUser);
    router.get('/user/showlist', usercontroller.showUser);
    router.get('/user/find', usercontroller.findUser);
    router.get('/user/findbyid/:id', usercontroller.findbyID);
};