module.exports = function (router) {
  var childtheloaiController = require("../controller/child_theloai.controller");
  router.post("/childtheloai/add", childtheloaiController.addTheLoai);
  router.get("/childtheloai/child/:id", childtheloaiController.get_listchild);
  router.get(
    "/childtheloai/childbyfather/:id",
    childtheloaiController.get_listchildbyidcha
  );
  router.patch("/childtheloai/delete/:id", childtheloaiController.delete);
  router.patch("/childtheloai/return/:id", childtheloaiController.return);
  router.get("/childtheloai/showlist", childtheloaiController.get_all);
  router.get("/childtheloai/getdeleted", childtheloaiController.getdelete);

};
