import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export default function ChildTheLoaiDeleted() {
  const [theloais, setDataTheloai] = useState([]);
  const level = localStorage.getItem("AccessLevel");

  const url = "http://localhost:3030/childtheloai/getdeleted";
  const refresh = () => window.location.reload(true);
  useEffect(() => {
    const fetchTheloais = async () => {
      const res = await axios.get(url);
      setDataTheloai(res.data);
    };
    fetchTheloais();
  }, []);
  const handleReturn = async (e) => {
    const returnTheloai = async () => {
      const res = await axios.patch(
        `http://localhost:3030/childtheloai/return/` +
          e.target.id.split("delete")[1]
      );
      return res;
    };
    returnTheloai();
    const returnPost = async () => {
      const res = await axios.patch(
        `http://localhost:3030/post/returnc/` + e.target.id.split("delete")[1]
      );
      return res;
    };
    returnPost();
    alert("Khôi phục thành công !");
    refresh();
  };
  return (
    <>
      <label htmlFor="list-group" className="lable-admin">
        Đã Xoá
      </label>
      <div className="post-selection">
        <Link to={"/admin/addtheloai"}>
          <i className="fa-solid fa-plus fa-2xl"></i>
          <span className="link-des">Thêm mới</span>
        </Link>
        {level === "1" && (
          <>
            <Link to={"/admin/returnchildtheloai"}>
              <i className="fa-solid fa-trash fa-2xl"></i>
              <span className="link-des">Đã xoá</span>
            </Link>
          </>
        )}
      </div>
      <ul className="list-group">
        {theloais?.result?.map((e) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={e.ID_child_theloai}
          >
            {e.ten_child_theloai}
            <span className="badge">
              <button type="button" className="btn btn-warning">
                Sửa
              </button>
              <button
                type="button"
                className="btn btn-danger"
                id={`delete${e.ID_child_theloai}`}
                onClick={handleReturn}
              >
                Khôi phục
              </button>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
