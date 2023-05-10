import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export default function ShowChildTheLoai() {
  const [theloais, setDataTheloai] = useState([]);
  const url = "http://localhost:3030/childtheloai/showlist";
  const refresh = () => window.location.reload(true);
  useEffect(() => {
    const fetchTheloais = async () => {
      const res = await axios.get(url);
      setDataTheloai(res.data);
    };
    fetchTheloais();
  }, []);
  const handleDelete = async (e) => {
    const deletePosts = async () => {
      const res = await axios.patch(
        `http://localhost:3030/childtheloai/delete/` + e.target.id.split("delete")[1]
      );
      return res;
    };
    deletePosts();
    alert("Xoá thành công !");
    refresh();
  };
  return (<>
    <label htmlFor="list-group" className="lable-admin">
      All Thể Loại Con
    </label>
    <div className="post-selection">
        <Link to={"/admin/addchildtheloai"}>
          <i className="fa-solid fa-plus fa-2xl"></i>
          <span className="link-des">Thêm mới</span>
        </Link>
        <Link to={"/admin/returnchildtheloai"}>
        <i className="fa-solid fa-trash fa-2xl"></i>
          <span className="link-des">Đã xoá</span>
        </Link>
      </div>
    <ul className="list-group">
      {theloais?.result?.map((e) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={e.ten_child_theloai}
        >
          {e.ten_child_theloai}
          <span className="badge">
            <span>Vị trí số : {e.sapxep_child_theloai}</span>
            <button type="button" className="btn btn-warning">
              Sửa
            </button>
            <button
              type="button"
              className="btn btn-danger"
              id={`delete${e.ID_child_theloai}`}
              onClick={handleDelete}
            >
              Xoá nè
            </button>
          </span>
        </li>
      ))}
    </ul>
  </>);
}