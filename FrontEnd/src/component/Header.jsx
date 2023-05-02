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
  function ShowMenu() {
    const modal = document.querySelector(".modal-menu");
    var style = modal.style.display;
    if (style === "none") {
      modal.style.display = "block";
    } else {
      modal.style.display = "none";
    }
  }
  function HoverFa(e) {
    const child = document.querySelector(".menu-sub-cat");
    child.classList.add("d-flex");
    const url2 =
      "http://localhost:3030/childtheloai/childbyfather/" + e.target.id;
    console.log(url2);
    fetch(url2)
      .then((response) => response.json())
      .then((data) => {
        setDataChildTheLoai(data);
      });
  }

  const [dataChildTheLoai, setDataChildTheLoai] = useState({});

  // function onMouseOut(e) {
  //   const child = document.querySelector(".menu-sub-cat");
  //   child.classList.remove("d-flex");
  // }
  return (
    <div id="header" className="w-100">
      <div id="header-top" className="w-80 d-flex header-top-mobile">
        <ul className="header-menu d-flex left-menu-top">
          <li className="logo">
            <a href={"/"}>
              <img src="../logo.png" alt="" />
            </a>
          </li>
          {dataTheLoai?.result?.map((e) => (
            <li key={e.idTheLoai} className="menu-category">
              <a href={`/category/${e.idTheLoai}`} id={e.idTheLoai} onMouseOver={HoverFa}>
                {e.tenTheLoai}
              </a>
            </li>
          ))}
        </ul>
        <div className="right-menu-top">
          <span className="log-in">
            <i className="fa-solid fa-user" />
            <div className="modal-log">
              <div className="login-logo">
                <img src="../ayaka.ico" alt="" />
              </div>
              <Link to={"/login/signin"}>Sign in</Link>
              <Link to={"/login/register"}>Register</Link>
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
              {dataTheLoai?.result?.map((e) => (
            <li key={e.idTheLoai} className="menu-category">
              <a href={`/category/${e.idTheLoai}`} id={e.idTheLoai} >
                {e.tenTheLoai}
              </a>
            </li>
          ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bd-bt" />
      <div id="sub-header" className="w-80 d-flex">
        <ul className="menu-sub-cat">
          {dataChildTheLoai?.result?.map((e) => (
            <li key={e.ID_child_theloai} id={e.ID_child_theloai}>
              <a href="demo.vn">{e.ten_child_theloai}</a>
            </li>
          ))}
        </ul>
        <div id="search">
          <input type="text" name="search" placeholder="Tìm kiếm" />
        </div>
      </div>
      <div className="bd-bt" />
    </div>
  );
}
