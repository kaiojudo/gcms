module.exports = function (router) {
    var theloaiController = require('../controller/theloai.controller');
    router.get("/theloai/list", theloaiController.get_list);
    router.get("/theloai/details/:id", theloaiController.details);
};