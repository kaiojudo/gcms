import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function Ide() {
    const params = useParams();
  const [posts, setDataPost] = useState();
  const url = `http://192.168.0.103:3030/getnew/${params.id}`;
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(url);
      setDataPost(res.data);
    };
    fetchPosts();// eslint-disable-next-line
  }, []);
  return (
    <>
    <label htmlFor="" className="lable-admin">Tin mới cập nhật</label>
    <ul className="news-list">
      {posts?.result?.map((e) => (
        <li className="news d-flex bd-bt" key={e.idtintuc}>
          <a href={`/post/${e.idtintuc}`} className="img-tieude">
            <img src={"../" + e.hinhtrichdan.split("C:fakepath")[1]} alt="" />
          </a>
          <div>
            <a href={`/post/${e.idtintuc}`} className="news-title">
              {e.tieudetin}
            </a>
            <p className="news-date">
              Ngày sửa đổi: {e.ngaycapnhat?.split("T17:00:00.000Z")[0]}
            </p>
            <p className="news-decscript">{e.trichdantin}</p>
          </div>
        </li>
      ))}
      <div className="clear" />
    </ul>
    </>
  );
}
