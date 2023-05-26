import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

export const ShowAll = () => {
  const [posts, setDataPost] = useState([]);
  const cookie = new Cookies();
  const level = cookie.get('level');
  const tacgia = cookie.get('id')
  
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
  const handleNone = async (e) => {
    const noactivePosts = async () => {
      const res = await axios.patch(
        `http://localhost:3030/post/setnoactive/` + e.target.id.split("none")[1]
      );
      return res;
    };
    noactivePosts();
    alert("Thành công !");
    refresh();
  };
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
        {localStorage.getItem("AccessLevel") === "1" && (
          <>
            <Link to={"/admin/postchuaduyet"}>
              <i className="fa-solid fa-check fa-2xl"></i>
              <span className="link-des">Duyệt bài</span>
            </Link>
            <Link to={"/admin/admindelete"}>
              <i className="fa-solid fa-trash fa-2xl"></i>
              <span className="link-des">Bài đã xoá</span>
            </Link>
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
              <button type="button" className="btn btn-success">
                <Link to={`/post/${post.idtintuc}`}>
                  <i className="fa-solid fa-eye"></i>
                </Link>
              </button>
              <button className="btn btn-warning">
                <Link to={`/updatepost/${post.idtintuc}`}> Sửa</Link>
              </button>
              {post.isActive === "active" && level === "1" && (
                <button
                  type="button"
                  className="btn outline btn-outline-success"
                  id={`none${post.idtintuc}`}
                  onClick={handleNone}
                >
                  Active
                </button>
              )}
              {post.isActive === "none" && level === "1" && (
                <button
                  type="button"
                  className="btn outline btn-outline-warning"
                  id={`active${post.idtintuc}`}
                  onClick={handleActive}
                >
                  Set Active
                </button>
              )}

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
