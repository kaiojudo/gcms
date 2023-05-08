import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export const ShowAll = () => {
  const [posts, setDataPost] = useState([]);
  const url = "http://localhost:3030/post/showlist";
  const refresh = () => window.location.reload(true);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(url);
      setDataPost(res.data);
    };
    fetchPosts();
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
  return (
    <>
      <label htmlFor="list-group" className="lable-admin">
        All Post
      </label>
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
              <button type="button" className="btn btn-warning">
                Sửa
              </button>
              {post.isActive === "active" && (
                <button
                  type="button"
                  className="btn outline btn-outline-success"
                  id={`none${post.idtintuc}`}
                  onClick={handleNone}
                >
                  Active
                </button>
              )}
              {post.isActive === "none" && (
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
