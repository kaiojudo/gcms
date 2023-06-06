module.exports = function (router) {
  var postcontroller = require("../controller/tintuc.controller");
  router.post("/post/add", postcontroller.addTintuc);
  router.get("/post/showlist", postcontroller.showAllTintuc);
  router.get("/post/showlistchuaduyet", postcontroller.showchuaduyet);
  router.get("/post/:id", postcontroller.getbyId);
  router.get("/postchuaduyet/:id", postcontroller.getchuaduyet);

  router.get("/postforrv/:id", postcontroller.getbyId_admin);
  router.get("/postbywriter/:id", postcontroller.tacgia);
  router.get("/post/teyvat/teyvatnews", postcontroller.showAllTeyvat);
  router.get("/post/giftcode/showall", postcontroller.showGiftcode);
  router.get("/post/slide/showall", postcontroller.showSlide);
  router.get("/post/btslide/showall", postcontroller.showbtSlide);
  router.get("/post/newbieguild/showall", postcontroller.showGuild);
  router.get("/post/review/showall", postcontroller.showReview);
  router.get("/post/newgames/showall", postcontroller.showNewGame);
  router.patch("/post/delete/:id", postcontroller.delete);
  router.patch("/post/returnpost/:id", postcontroller.return);

  router.patch("/post/solandoc/:id", postcontroller.luotdoc);
  router.patch("/post/duyet/:id", postcontroller.duyet);
  router.patch("/post/setactive/:id", postcontroller.setActive);
  router.patch("/post/setnoactive/:id", postcontroller.setnoActive);
  router.patch("/post/setafterdelete", postcontroller.setAfterD);
  router.patch("/post/return/:id", postcontroller.setAfterR);
  router.patch("/post/setafterc", postcontroller.setAfterDC);
  router.patch("/post/returnc/:id", postcontroller.setAfterRC);
  router.get("/category/:id/:limit/:offset", postcontroller.get_by_idtheloai);
  // router.get("/childcategory/:id", postcontroller.get_by_idchildtheloai);
  router.get("/post/showlist", postcontroller.showAllTintuc);
  router.get("/postbyadmin/showlistdelete", postcontroller.admindelete);
  router.get("/getnew/:id", postcontroller.shownew);
  router.get(`/searchitem/:search`, postcontroller.search);
  router.get(`/searchitem/:search/:limit/:offset`, postcontroller.paginationsearch);
  router.get(`/searchitemchuaduyet/:search`, postcontroller.searchchuaduyet);
  router.delete("/deletebyadmin/:id", postcontroller.deleteItem);
  router.put("/post/update", postcontroller.updatePost);
  router.get(`/limit/:limit/offset/:offset`, postcontroller.pagination);
  router.get(`/totalpost`, postcontroller.gettoltalpost);
  router.get(`/child/:limit/:offset/:id`, postcontroller.paginationbychild);
  router.get(`/totalpostbychild/:id`, postcontroller.gettoltalpostbychild);
  router.get(`/totalpostbytheloai/:id`, postcontroller.gettoltalpostbytheloai);
  router.get(`/totalpostbysearch/:search`, postcontroller.gettoltalpostbysearch);
  router.get(`/getactive`, postcontroller.getActive);
  router.patch(`/setnoactive/:id`, postcontroller.setnoActive);
  router.get(`/ctv/:child/:tacgia`, postcontroller.getbychildandtacgia);
  router.get(`/totalpost/:tacgia`, postcontroller.gettotalpostbytacgia);





};
