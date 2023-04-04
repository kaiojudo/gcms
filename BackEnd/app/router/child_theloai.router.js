module.exports = function (router) {
    var childtheloaiController = require('../controller/child_theloai.controller');
    router.get('/childtheloai/child/:id', childtheloaiController.get_listchild);
};