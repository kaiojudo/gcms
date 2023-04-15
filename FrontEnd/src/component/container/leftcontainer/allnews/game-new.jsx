import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

GameNew.propTypes = {
  post: PropTypes.array,
};
GameNew.defaultProps = {
  post: [],
};
export default function GameNew(props) {
  const { post } = props;
  return (
    <div id="game-news">
      <label className="label label-hot-news"> Tin tức về game</label>
      <ul className="tab-game d-flex bd-t-green bd-bt">
        <li>
          <a href="demo.vn">Game mới</a>
        </li>
        <li>
          <a href="demo.vn">Mobile</a>
        </li>
        <li>
          <a href="demo.vn">Game Online</a>
        </li>
        <li>
          <a href="demo.vn">PC/Console</a>
        </li>
      </ul>
      <ul className="news-list">
        <li className="news d-flex bd-bt">
          <a href="demo.vn">
            <img src="../thelastofus.jpg" alt="" />
          </a>
          <div>
            <a href="" className="news-title">
              Game thủ quay lưng với The Last of Us bản PC
            </a>
            <p className="news-date">Hôm qua, lúc 09:12</p>
            <p className="news-decscript">
              Nhiều người chơi bày tỏ thất vọng đối với phiên bản PC của The
              Last of Us Part I.
            </p>
          </div>
        </li>
        <li className="news d-flex bd-bt">
          <a href="demo.vn">
            <img src="../thelastofus.jpg" alt="" />
          </a>
          <div>
            <a href="demo.vn" className="news-title">
              Game thủ quay lưng với The Last of Us bản PC
            </a>
            <p className="news-date">Hôm qua, lúc 09:12</p>
            <p className="news-decscript">
              Nhiều người chơi bày tỏ thất vọng đối với phiên bản PC của The
              Last of Us Part I.
            </p>
          </div>
        </li>
        <li className="news d-flex bd-bt">
          <a href="demo.vn">
            <img src="../thelastofus.jpg" alt="" />
          </a>
          <div>
            <a href="demo.vn" className="news-title">
              Game thủ quay lưng với The Last of Us bản PC
            </a>
            <p className="news-date">Hôm qua, lúc 09:12</p>
            <p className="news-decscript">
              Nhiều người chơi bày tỏ thất vọng đối với phiên bản PC của The
              Last of Us Part I.
            </p>
          </div>
        </li>
        <li className="news d-flex bd-bt">
          <a href="demo.vn">
            <img src="../thelastofus.jpg" alt="" />
          </a>
          <div>
            <a href="demo.vn" className="news-title">
              Game thủ quay lưng với The Last of Us bản PC
            </a>
            <p className="news-date">Hôm qua, lúc 09:12</p>
            <p className="news-decscript">
              Nhiều người chơi bày tỏ thất vọng đối với phiên bản PC của The
              Last of Us Part I.
            </p>
          </div>
        </li>
        <li className="news d-flex bd-bt">
          <a href="demo.vn">
            <img src="../thelastofus.jpg" alt="" />
          </a>
          <div>
            <a href="demo.vn" className="news-title">
              Game thủ quay lưng với The Last of Us bản PC
            </a>
            <p className="news-date">Hôm qua, lúc 09:12</p>
            <p className="news-decscript">
              Nhiều người chơi bày tỏ thất vọng đối với phiên bản PC của The
              Last of Us Part I.
            </p>
          </div>
        </li>
        <div className="clear" />
      </ul>
    </div>
  );
}
