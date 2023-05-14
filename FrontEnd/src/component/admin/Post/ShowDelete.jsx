import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export const ShowDelete = () => {
  const [posts, setDataPost] = useState([]);
  const url = "http://localhost:3030/postbyadmin/showlistdelete";
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
      const res = await axios.delete(
        `http://localhost:3030/deletebyadmin/` + e.target.id.split("delete")[1]
      );
      return res;
    };
    deletePosts();
    alert("Xoá thành công !");
    refresh();
  };
  return (
    <>
      <label htmlFor="list-group" className="lable-admin">
       Thùng rác
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
              <button
                type="button"
                className="btn btn-danger"
                id={`delete${post.idtintuc}`}
                onClick={handleDelete}
              >
                Xoá hoàn toàn
              </button>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};
