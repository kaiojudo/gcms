import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

export default function Header() {
  const refresh = () => window.location.reload(true);
  const [dataTheLoai, setDataTheLoai] = useState({});
  const url = "http://localhost:3030/theloai/list";
  const cookies = new Cookies();
  const level = cookies.get("level");
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
  function Search(e) {
    navigate("/catebysearch", { replace: true });
  }
  function getSearch(e) {
    cookies.set("search", e.target.value, { path: "/" });
  }
  const [dataChildTheLoai, setDataChildTheLoai] = useState({});
  let navigate = useNavigate();
  function LogOut() {
    cookies.remove('hoten')
    cookies.remove('level')
    cookies.remove('username')
    cookies.remove('id')
    navigate("/", { replace: true });
    refresh();
  }
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
              <a
                href={`/category/${e.idTheLoai}`}
                id={e.idTheLoai}
                onMouseOver={HoverFa}
              >
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
                {cookies.get("hoten") && <p>{cookies.get("hoten")}</p>}
                {!level && <img src="../ayaka.ico" alt="" />}
                {level === "1" && (
                  <Link to={`/yourinfo/${localStorage.getItem("TacGia")}`}>
                    {" "}
                    <img src="../ayaka.ico" alt="" />
                  </Link>
                )}

                {level === "2" && (
                  <Link to={`/yourinfo`}>
                    {" "}
                    <img src="../ayaka.ico" alt="" />
                  </Link>
                )}
              </div>
              <div className="d-flex">
                {!level && (
                  <>
                    <Link to={"/logsign/register"}>Register</Link>
                    <Link to={"/logsign/login"}>Sign in</Link>
                  </>
                )}
                {level && (
                  <>
                    <Link to={"/admin"}>Admin</Link>{" "}
                    <Link onClick={LogOut}>Log Out</Link>{" "}
                  </>
                )}
              </div>
            </div>
          </span>
          <div className="sub-bar js-header-mobile-bar" onClick={ShowMenu}>
            <i className="fa-solid fa-bars fa-xl" />
          </div>
          <div className="modal-menu">
            <form className="input-search-modal" onSubmit={(e) => Search(e)}>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                onChange={(e) => getSearch(e)}
              />
              {dataTheLoai?.result?.map((e) => (
                <li key={e.idTheLoai} className="menu-category">
                  <a href={`/category/${e.idTheLoai}`} id={e.idTheLoai}>
                    {e.tenTheLoai}
                  </a>
                </li>
              ))}
            </form>
          </div>
        </div>
      </div>
      <div className="bd-bt" />
      <div id="sub-header" className="w-80 d-flex">
        <ul className="menu-sub-cat">
          {dataChildTheLoai?.result?.map((e) => (
            <li key={e.ID_child_theloai} id={e.ID_child_theloai}>
              <a href={`/categorybychild/${e.ID_child_theloai}`}>
                {e.ten_child_theloai}
              </a>
            </li>
          ))}
        </ul>
        <form id="search" onSubmit={(e) => Search(e)}>
          <input
            type="text"
            name="search"
            placeholder="Tìm kiếm"
            onChange={(e) => getSearch(e)}
          />
        </form>
      </div>
      <div className="bd-bt" />
    </div>
  );
}
