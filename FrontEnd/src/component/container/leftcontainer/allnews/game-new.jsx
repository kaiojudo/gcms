import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function GameNew(props) {
  const [datapost, setDataPost] = useState({});
  const url = "http://localhost:3030/page/1/limit/5";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDataPost(data);
      });
  }, []);
  
  return (
    <>
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
          {datapost?.result?.map((e) => (
            <li className="news d-flex bd-bt" key={e.idtintuc}>
              <Link to={`/post/${e.idtintuc}`} className="img-tieude">
                <img
                  src={"../" + e.hinhtrichdan.split("C:fakepath")[1]}
                  alt=""
                />
              </Link>
              <div>
                <Link to={`/post/${e.idtintuc}`} className="news-title">
                  {e.tieudetin}
                </Link>
                <p className="news-date">
                  Ngày sửa đổi: {e.ngaycapnhat?.split("T17:00:00.000Z")[0]}
                </p>
                <p className="news-decscript">{e.trichdantin}</p>
              </div>
            </li>
          ))}
          <div className="clear" />
        </ul>
      </div>
      
    </>
  );
}
