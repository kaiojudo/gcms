module.exports = function (router) {
  var postcontroller = require("../controller/tintuc.controller");
  router.post("/post/add", postcontroller.addTintuc);
  router.get("/post/showlist", postcontroller.showAllTintuc);
  router.get("/post/showlistchuaduyet", postcontroller.showchuaduyet);
  router.get("/post/:id", postcontroller.getbyId);
  router.get("/post/teyvat/teyvatnews", postcontroller.showAllTeyvat);
  router.get("/post/giftcode/showall", postcontroller.showGiftcode);
  router.get("/post/slide/showall", postcontroller.showSlide);
  router.get("/post/btslide/showall", postcontroller.showbtSlide);
  router.get("/post/newbieguild/showall", postcontroller.showGuild);
  router.get("/post/review/showall", postcontroller.showReview);
  router.get("/post/newgames/showall", postcontroller.showNewGame);
  router.patch("/post/delete/:id", postcontroller.delete);
  router.patch("/post/solandoc/:id", postcontroller.luotdoc);
  router.patch("/post/duyet/:id", postcontroller.duyet);
  router.get("/category/:id", postcontroller.get_by_idtheloai);
  router.get("/post/showlist", postcontroller.showAllTintuc);
  router.get("/getnew/:id", postcontroller.shownew);

};
