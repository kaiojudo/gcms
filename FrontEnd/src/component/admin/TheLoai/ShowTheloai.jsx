import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export default function ShowTheloai() {
  const [theloais, setDataTheloai] = useState([]);
  const level = localStorage.getItem("AccessLevel");
  const url = "http://localhost:3030/theloai/all";
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
        `http://localhost:3030/theloai/delete/` + e.target.id.split("delete")[1]
      );
      return res;
    };
    deletePosts();
    alert("Xoá thành công !");
    refresh();
  };
  function handleSearch(e) {
    const fetchTheloais = async () => {
      var res;
      if (e.target.value !== "") {
        res = await axios.get(
          `http://localhost:3030/searchtheloai/${e.target.value}`
        );
      } else {
        res = await axios.get(url);
      }

      setDataTheloai(res.data);
    };
    fetchTheloais();
  }
  return (
    <>
      <label htmlFor="list-group" className="lable-admin">
        All Thể Loại
      </label>
      <div className="input-admin">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => handleSearch(e)}
        />
      </div>
      <div className="post-selection">
        <Link to={"/admin/addtheloai"}>
          <i className="fa-solid fa-plus fa-2xl"></i>
          <span className="link-des">Thêm mới</span>
        </Link>
        {level === "1" && (
          <>
            <Link to={"/admin/theloaideleted"}>
              <i className="fa-solid fa-trash fa-2xl"></i>
              <span className="link-des">Đã xoá</span>
            </Link>
          </>
        )}
      </div>
      <ul className="list-group">
        {theloais?.result?.map((e) => (
          <li
            className="list-group-item d-flex align-items-center justify-content-between"
            key={e.idTheLoai}
          >
            {e.tenTheLoai}
            <span className="badge">
              <span>Vị trí số : {e.sapxep}</span>
              <button type="button" className="btn btn-warning">
                Sửa
              </button>
              <button
                type="button"
                className="btn btn-danger"
                id={`delete${e.idTheLoai}`}
                onClick={handleDelete}
              >
                Xoá nè
              </button>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
