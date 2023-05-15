import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
export default function AcceptUser() {
  const [data, setData] = useState({});
  const refresh = () => window.location.reload(true);
  const url = "http://localhost:3030/user/showlistchuaduyet";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  const handleDelete = async (e) => {
    const deletePosts = async () => {
      const res = await axios.delete(
        `http://localhost:3030/user/delete/` + e.target.id.split("delete")[1]
      );
      return res;
    };
    deletePosts();
    alert("Xoá thành công !");
    refresh();
  };
  const handleAccept = async (e) => {
    const accept = async () => {
      const res = await axios.patch(
        `http://localhost:3030/user/accept/` + e.target.id.split("delete")[1]
      );
      return res;
    };
    accept();
    alert("Duyệt thành công !");
    refresh();
  };
  return (
    <>
      <label htmlFor="list-group" className="lable-admin">
        Duyệt tài khoản
      </label>
      <ul className="list-group">
        {data?.result?.map((data) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={data.id_thanhvien}
          >
            {data.hoten}
            <span className="badge">
              <button type="button" className="btn btn-success">
                <Link to={`/yourinfo/${data.id_thanhvien}`}>
                  <i className="fa-solid fa-eye"></i>
                </Link>
              </button>
              <button
                type="button"
                className="btn btn-primary"
                id={`delete${data.id_thanhvien}`}
                onClick={handleAccept}
              >
                Duyệt
              </button>
              <button
                type="button"
                className="btn btn-danger"
                id={`delete${data.id_thanhvien}`}
                onClick={handleDelete}
              >
                Không duyệt
              </button>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
