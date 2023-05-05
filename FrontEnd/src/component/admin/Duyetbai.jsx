import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export const DuyetBai = () => {
  const [posts, setDataPost] = useState([]);
  const url = "http://localhost:3030/post/showlistchuaduyet";
  const refresh = () => window.location.reload(true)
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(url);
      setDataPost(res.data);
    };
    fetchPosts();
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
  return (
    <>
      <label htmlFor="list-group" className="lable-admin">Duyệt bài</label>
      <ul className="list-group">
        {posts?.result?.map((post) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={post.idtintuc}
          >
            {post.tieudetin}
            <span className="badge">
              <button type="button" className="btn btn-success">
                <Link to={`/post/${post.idtintuc}`}> <i className="fa-solid fa-eye"></i></Link>
              </button>
              <button
                type="button"
                className="btn btn-danger"
                id={`duyet${post.idtintuc}`}
                onClick={handleDuyet}
              >
                Duyệt nè
              </button>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};
