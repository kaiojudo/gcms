var Tintuc = require("../model/tintuc.model");

exports.addTintuc = function (req, res) {
  var data = req.body;
  console.log(data);
  Tintuc.add_new(data, function (response) {
    res.send({
      result: response,
    });
  });
};
exports.showAllTintuc = function (req, res) {
  Tintuc.get_all(function (data) {
    res.send({
      result: data,
    });
  });
};
exports.showchuaduyet = function (req, res) {
  Tintuc.getchuaduyet(function (data) {
    res.send({
      result: data,
    });
  });
};
exports.getbyId = function (req, res) {
  Tintuc.get_by_id(req.params.id, function (tintuc) {
    res.send({
      result: tintuc,
    });
  });
};
exports.getchuaduyet = function (req, res) {
  Tintuc.get_post_chuaduyet(req.params.id, function (tintuc) {
    res.send({
      result: tintuc,
    });
  });
};
exports.getbyId_admin = function (req, res) {
  Tintuc.get_by_id_admin(req.params.id, function (tintuc) {
    res.send({
      result: tintuc,
    });
  });
};
exports.showAllTeyvat = function (req, res) {
  Tintuc.teyvat(function (datatv) {
    res.send({
      result: datatv,
    });
  });
};
exports.showReview = function (req, res) {
  Tintuc.review(function (datarv) {
    res.send({
      result: datarv,
    });
  });
};
exports.showNewGame = function (req, res) {
  Tintuc.newgame(function (datarv) {
    res.send({
      result: datarv,
    });
  });
};
exports.showGiftcode = function (req, res) {
  Tintuc.giftcode(function (datagc) {
    res.send({
      result: datagc,
    });
  });
};
exports.showSlide = function (req, res) {
  Tintuc.slideNews(function (slideitem) {
    res.send({
      result: slideitem,
    });
  });
};
exports.showbtSlide = function (req, res) {
  Tintuc.bottom_Slide(function (btslideitem) {
    res.send({
      result: btslideitem,
    });
  });
};
exports.showGuild = function (req, res) {
  Tintuc.newbieGuild(function (guilditem) {
    res.send({
      result: guilditem,
    });
  });
};
exports.delete = function (req, res) {
  Tintuc.delete(req.params.id, function (deleteItem) {
    res.send({
      result: deleteItem,
    });
  });
};
exports.return = function (req, res) {
  Tintuc.return(req.params.id, function (deleteItem) {
    res.send({
      result: deleteItem,
    });
  });
};
exports.duyet = function (req, res) {
  Tintuc.duyet(req.params.id, function (data) {
    res.send({
      result: data,
    });
  });
};
exports.get_by_idtheloai = function (req, res) {
  Tintuc.get_by_idtheloai(
    req.params.id,
    req.params.limit,
    req.params.offset,
    function (item) {
      res.send({
        result: item,
      });
    }
  );
};
exports.luotdoc = function (req, res) {
  Tintuc.solandoc(req.params.id, function (DOC) {
    res.send({
      result: DOC,
    });
  });
};
exports.shownew = function (req, res) {
  Tintuc.getnew(req.params.id, function (item) {
    res.send({
      result: item,
    });
  });
};
exports.setActive = function (req, res) {
  Tintuc.setActive(req.params.id, function (data) {
    res.send({
      result: data,
    });
  });
};
exports.setnoActive = function (req, res) {
  Tintuc.setnoActive(req.params.id, function (data) {
    res.send({
      result: data,
    });
  });
};
exports.setAfterD = function (req, res) {
  Tintuc.setAfterDelete(function (guilditem) {
    res.send({
      result: guilditem,
    });
  });
};
exports.setAfterR = function (req, res) {
  Tintuc.setReturn(req.params.id, function (guilditem) {
    res.send({
      result: guilditem,
    });
  });
};
exports.setAfterDC = function (req, res) {
  Tintuc.setAfterDeleteC(function (guilditem) {
    res.send({
      result: guilditem,
    });
  });
};
exports.setAfterRC = function (req, res) {
  Tintuc.setReturnC(req.params.id, function (guilditem) {
    res.send({
      result: guilditem,
    });
  });
};
exports.tacgia = function (req, res) {
  Tintuc.get_by_tacgia(req.params.id, function (item) {
    res.send({
      result: item,
    });
  });
};
exports.admindelete = function (req, res) {
  Tintuc.get_admin_delete(function (data) {
    res.send({
      result: data,
    });
  });
};
exports.deleteItem = function (req, res) {
  Tintuc.remove(req.params.id, function (data) {
    res.send({
      result: data,
    });
  });
};
exports.search = function (req, res) {
  Tintuc.search(req.params.search, function (item) {
    res.send({
      result: item,
    });
  });
};
exports.searchchuaduyet = function (req, res) {
  Tintuc.search(req.params.search, function (item) {
    res.send({
      result: item,
    });
  });
};
exports.updatePost = function (req, res) {
  const data = req.body;
  Tintuc.updatePost(data, function (data) {
    res.send({ result: data });
  });
};
exports.pagination = function (req, res) {
  Tintuc.pagination(req.params.limit, req.params.offset, function (data) {
    res.send({
      result: data,
    });
  });
};
exports.paginationbychild = function (req, res) {
  Tintuc.paginationbychild(
    req.params.limit,
    req.params.offset,
    req.params.id,
    function (data) {
      res.send({
        result: data,
      });
    }
  );
};
exports.paginationsearch = function (req, res) {
  Tintuc.paginationsearch(
    req.params.search,
    req.params.limit,
    req.params.offset,
    function (item) {
      res.send({
        result: item,
      });
    }
  );
};
exports.gettoltalpost = function (req, res) {
  Tintuc.gettotalpost(function (tintuc) {
    res.send({
      result: tintuc,
    });
  });
};
exports.gettoltalpostbychild = function (req, res) {
  Tintuc.gettotalpostbychild(req.params.id, function (tintuc) {
    res.send({
      result: tintuc,
    });
  });
};
exports.gettoltalpostbytheloai = function (req, res) {
  Tintuc.gettotalpostbytheloai(req.params.id, function (tintuc) {
    res.send({
      result: tintuc,
    });
  });
};
exports.gettoltalpostbysearch = function (req, res) {
  Tintuc.gettotalpostbysearch(req.params.search, function (tintuc) {
    res.send({
      result: tintuc,
    });
  });
};
exports.getActive = function (req, res) {
  Tintuc.getActive(function (tintuc) {
    res.send({
      result: tintuc,
    });
  });
};
exports.setnoActive = function (req, res) {
  Tintuc.setNoActive(req.params.id, function (tintuc) {
    res.send({
      result: tintuc,
    });
  });
};
exports.getbychildandtacgia = function (req, res) {
  Tintuc.getbychildandtacgia(
    req.params.child,
    req.params.tacgia,
    function (data) {
      res.send({
        result: data,
      });
    }
  );
};
exports.gettotalpostbytacgia = function (req, res) {
  Tintuc.gettotalpostbytacgia(
    req.params.tacgia,
    function (data) {
      res.send({
        result: data,
      });
    }
  );
};