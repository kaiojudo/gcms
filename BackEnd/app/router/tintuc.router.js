module.exports = function (router) {
  var postcontroller = require("../controller/tintuc.controller");
  router.post("/post/add", postcontroller.addTintuc);
  router.get("/post/showlist", postcontroller.showAllTintuc);
  router.get("/post/:id", postcontroller.getbyId);
  router.get("/post/teyvat/teyvatnews", postcontroller.showAllTeyvat);
  router.get("/post/giftcode/showall", postcontroller.showGiftcode);
  router.get("/post/slide/showall", postcontroller.showSlide);
  router.get("/post/btslide/showall", postcontroller.showbtSlide);
  router.get("/post/newbieguild/showall", postcontroller.showGuild);
  router.get("/post/review/showall", postcontroller.showReview);
  router.get("/page/:offset/limit/:limit", postcontroller.getPagi);
  router.get("/post/newgames/showall", postcontroller.showNewGame);
};
