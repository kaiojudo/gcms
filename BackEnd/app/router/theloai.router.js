module.exports = function (router) {
  var theloaiController = require("../controller/theloai.controller");
  router.post("/theloai/add", theloaiController.addTheLoai);

  router.get("/theloai/all", theloaiController.get_all);
  router.get("/theloai/list", theloaiController.get_header);
  router.get("/theloai/details/:id", theloaiController.details);
  router.patch("/theloai/delete/:id", theloaiController.delete);
};
