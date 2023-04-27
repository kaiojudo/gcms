import { useState, useEffect } from "react";
import axios from "axios";
export const ShowAll = () => {
  const [posts, setDataPost] = useState([]);
  const url = "http://localhost:3030/post/showlist";
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(url);
      setDataPost(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <label htmlFor="list-groip">All Post</label>
      <ul className="list-group">
        {posts?.result?.map((post) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={post.idtintuc}>
            {post.tieudetin}
            <span className="badge">
              <button type="button" className="btn btn-success">
                <i className="fa-solid fa-eye"></i>
              </button>
              <button type="button" className="btn btn-warning">
                Sửa
              </button>
              <button type="button" className="btn btn-danger">
                Xoá
              </button>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};
