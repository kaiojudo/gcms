import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

export const DuyetBai = () => {
  const [posts, setDataPost] = useState([]);
  const cookies = new Cookies();
  var url;

  const refresh = () => window.location.reload(true);
  const level = cookies.get("level");
  const idtacgia = cookies.get("id");

  if (level === "1") {
    url = "http://localhost:3030/post/showlistchuaduyet";
  } else {
    url = `http://localhost:3030/postchuaduyet/${idtacgia}`;
  }
  // console.log(url);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(url);
      setDataPost(res.data);
    };
    fetchPosts();
    // eslint-disable-next-line
  }, []);

  const handleDuyet = async (e) => {
    const duyetPosts = async () => {
      const res = await axios.patch(
        `http://localhost:3030/post/duyet/` + e.target.id.split("duyet")[1]
      );
      return res;
    };
    duyetPosts();
    alert("Duyệt thành công !");
    refresh();
  };
  const handleDelete = async (e) => {
    const deletePosts = async () => {
      const res = await axios.delete(
        `http://localhost:3030/deletebyadmin/` + e.target.id.split("delete")[1]
      );
      return res;
    };
    deletePosts();
    alert("Xoá thành công !");
    refresh();
  };
  function handleSearch(e) {
    const fetchPosts = async () => {
      var res;
      if (e.target.value !== "") {
        res = await axios.get(
          `http://localhost:3030/searchitemchuaduyet/${e.target.value}`
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
        Duyệt bài
      </label>
      <div className="post-selection">
        <Link to={"/admin/addpost"}>
          <i className="fa-solid fa-plus fa-2xl"></i>
          <span className="link-des">Thêm mới</span>
        </Link>
        <Link to={"/admin"}>
          <i className="fa-solid fa-house fa-2xl"></i>
          <span className="link-des">Home</span>
        </Link>

        {level === "1" && (
          <>
            <Link to={"/admin/admindelete"}>
              <i className="fa-solid fa-trash fa-2xl"></i>
              <span className="link-des">Bài đã xoá</span>
            </Link>
          </>
        )}
      </div>
      <ul className="list-group">
        <div className="input-admin">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => handleSearch(e)}
          />
        </div>
        {posts?.result?.map((post) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={post.idtintuc}
          >
            {post.tieudetin}
            <span className="badge">
              <button type="button" className="btn btn-success">
                <Link to={`/post/${post.idtintuc}`}>
                  {" "}
                  <i className="fa-solid fa-eye"></i>
                </Link>
              </button>
              {level === "1" && (
                <button
                  type="button"
                  className="btn btn-primary"
                  id={`duyet${post.idtintuc}`}
                  onClick={handleDuyet}
                >
                  Duyệt
                </button>
              )}
              {level === "2" && (
                <button type="button" className="btn btn-primary">
                  <Link to={`/updatepost/${post.idtintuc}`}>Sửa</Link>
                </button>
              )}
              <button
                type="button"
                className="btn btn-danger"
                id={`delete${post.idtintuc}`}
                onClick={handleDelete}
              >
                Xoá
              </button>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};
