import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

export const ShowAll = () => {
  const [posts, setDataPost] = useState([]);
  const cookie = new Cookies();
  const level = cookie.get("level");
  const tacgia = cookie.get("id");
  const [active, setactive] = useState();
  const urlactive = `http://localhost:3030/getactive`;
  const [dataChildTheLoai, setDataChildTheLoai] = useState({});
  const urlChild = "http://localhost:3030/childtheloai/showlist";
  useEffect(() => {
    fetch(urlChild)
      .then((response) => response.json())
      .then((data) => {
        setDataChildTheLoai(data);
      });
  }, []);

  if (level === "2") {
    var url = `http://localhost:3030/postbywriter/${tacgia}`;
  } else {
    url = "http://localhost:3030/post/showlist";
  }
  const refresh = () => window.location.reload(true);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(url);
      setDataPost(res.data);
    };
    fetchPosts();
    const getActive = async () => {
      const res = await axios.get(urlactive);
      setactive(res.data);
    };
    getActive();
    // eslint-disable-next-line
  }, []);

  const handleDelete = async (e) => {
    const deletePosts = async () => {
      const res = await axios.patch(
        `http://localhost:3030/post/delete/` + e.target.id.split("delete")[1]
      );
      return res;
    };
    deletePosts();
    alert("Xoá thành công !");
    refresh();
  };
  const handleActive = async (e) => {
    const noactivePosts = async () => {
      const res = await axios.patch(
        `http://localhost:3030/setnoactive/` + active?.result?.idActive
      );
      return res;
    };
    noactivePosts();
    const activePosts = async () => {
      const res = await axios.patch(
        `http://localhost:3030/post/setactive/` + e.target.id.split("active")[1]
      );
      return res;
    };
    activePosts();
    alert("Thành công !");
    refresh();
  };
  function handleChild(e) {
    // console.log(e.target.value);
    if (e.target.value !== "none") {
      url = `http://localhost:3030/ctv/${e.target.value}/${tacgia}`;
    } else {
      url = `http://localhost:3030/postbywriter/${tacgia}`;
    }
    const fetchPosts = async () => {
      const res = await axios.get(url);
      setDataPost(res.data);
    };
    fetchPosts();
  }
  function handleSearch(e) {
    const fetchPosts = async () => {
      var res;
      if (e.target.value !== "") {
        res = await axios.get(
          `http://localhost:3030/searchitem/${e.target.value}`
        );
      } else {
        res = await axios.get(url);
      }

      setDataPost(res.data);
    };
    fetchPosts();
  }
  return (
    <>
      <label htmlFor="list-group" className="lable-admin">
        All Post
      </label>
      <div className="post-selection">
        <Link to={"/admin/addpost"}>
          <i className="fa-solid fa-plus fa-2xl"></i>
          <span className="link-des">Thêm mới</span>
        </Link>
        <Link to={"/admin/postchuaduyet"}>
          <i className="fa-solid fa-check fa-2xl"></i>
          <span className="link-des">Duyệt bài</span>
        </Link>
        {level === "1" && (
          <>
            <Link to={"/admin/admindelete"}>
              <i className="fa-solid fa-trash fa-2xl"></i>
              <span className="link-des">Bài đã xoá</span>
            </Link>
          </>
        )}
        {level === "2" && (
          <>
            <div className="form-group form-group-admin">
              <select
                className="form-control"
                id="ID_child_theloai"
                onChange={(e) => handleChild(e)}
              >
                <option value={"none"}>Chọn thể loại</option>
                {dataChildTheLoai?.result?.map((e) => (
                  <option key={e.ID_child_theloai} value={e.ID_child_theloai}>
                    {e.ten_child_theloai}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}
      </div>
      <div className="input-admin">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => handleSearch(e)}
        />
      </div>
      <ul className="list-group">
        {posts?.result?.map((post) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={post.idtintuc}
          >
            {post.tieudetin}
            <span className="badge">
              {post.isActive === "none" &&
                post.id_phanloaitin === 3 &&
                level === "1" && (
                  <button
                    type="button"
                    className="btn outline btn-outline-warning"
                    id={`active${post.idtintuc}`}
                    onClick={handleActive}
                  >
                    Set Active
                  </button>
                )}
              {post.isActive === "active" && level === "1" && (
                <button
                  type="button"
                  className="btn outline btn-outline-success"
                  id={`none${post.idtintuc}`}
                  // onClick={handleNone}
                >
                  Active
                </button>
              )}
              <button type="button" className="btn btn-success">
                <Link to={`/post/${post.idtintuc}`}>
                  <i className="fa-solid fa-eye"></i>
                </Link>
              </button>
              <button className="btn btn-warning">
                <Link to={`/updatepost/${post.idtintuc}`}> Sửa</Link>
              </button>

              <button
                type="button"
                className="btn btn-danger"
                id={`delete${post.idtintuc}`}
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
};
