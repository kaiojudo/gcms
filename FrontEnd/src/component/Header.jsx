import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [dataTheLoai, setDataTheLoai] = useState({});
  const url = "http://localhost:3030/theloai/list";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDataTheLoai(data);
      });
  }, []);
  const url2 = "http://localhost:3030/childtheloai/child/2";
  const [dataChildTheLoai, setDataChildTheLoai] = useState({});
  useEffect(() => {
    fetch(url2)
      .then((response) => response.json())
      .then((data) => {
        setDataChildTheLoai(data);
      });
  }, []);
  function ShowMenu() {
    const modal = document.querySelector(".modal-menu");
    var style = modal.style.display;
    if (style === "none") {
      modal.style.display = "block";
    } else {
      modal.style.display = "none";
    }
  }
  return (
    <div id="header" className="w-100">
      <div id="header-top" className="w-80 d-flex header-top-mobile">
        <ul className="header-menu d-flex left-menu-top">
          <li className="logo">
            <Link to={"/"}>
              <img src="../logo.png" alt="" />
            </Link>
          </li>
          {dataTheLoai?.result?.map((e) => (
            <li key={e.idTheLoai} className="menu-category">
              <a href={e.url}>{e.tenTheLoai}</a>
              <ul className="menu-sub-cat">
                {dataChildTheLoai?.result?.map((e) => (
                  <li key={e.ID_child_theloai}>{e.ten_child_theloai}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="right-menu-top">
          <span className="log-in">
            <i className="fa-solid fa-user" />
            <div className="modal-log">
              <Link to={"/login"}>Sign in</Link>
              <Link to={"/admin"}>Register</Link>
            </div>
          </span>
          <div className="sub-bar js-header-mobile-bar" onClick={ShowMenu}>
            <i className="fa-solid fa-bars fa-xl" />
          </div>
          <div className="modal-menu">
            <div className="input-search-modal">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bd-bt" />
      <div id="sub-header" className="w-80 d-flex">
        <div id="search">
          <input type="text" name="search" placeholder="Tìm kiếm" />
        </div>
      </div>
      <div className="bd-bt" />
    </div>
  );
}
