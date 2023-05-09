import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
export default function ShowTheloai() {
  const [theloais, setDataTheloai] = useState([]);
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
  return (<>
    <label htmlFor="list-group" className="lable-admin">
      All Thể Loại
    </label>
    <ul className="list-group">
      {theloais?.result?.map((e) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={e.idTheLoai}
        >
          {e.tenTheLoai}
          <span className="badge">
            <button type="button" className="btn btn-warning">
              Sửa
            </button>
            {/* {e.isActive === "active" && (
              <button
                type="button"
                className="btn outline btn-outline-success"
      
             
              >
                Active
              </button>
            )}
            {e.isActive === "none" && (
              <button
                type="button"
                className="btn outline btn-outline-warning"
            
   
              >
                Set Active
              </button>
            )} */}

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
  </>);
}
