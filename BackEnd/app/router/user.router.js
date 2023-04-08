module.exports = function (router) {
    var usercontroller = require('../controller/user.controller');
    router.post('/user/add',usercontroller.addUser);
};