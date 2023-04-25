import React, { useState, useEffect } from "react";
import Posts from "./gamenew/Posts";
import { Pagination } from "./gamenew/Pagination";
import axios from "axios";
export default function GameNew(props) {
  const [posts, setDataPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const url = "http://localhost:3030/post/showlist";
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(url);
      setDataPost(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  // Get current posts
  const lastIndexofPosts = currentPage * postsPerPage;
  const firstIndexOfPosts = lastIndexofPosts - postsPerPage;
  const currentPosts = posts?.result?.slice(firstIndexOfPosts,lastIndexofPosts);
  // Change Page
  const paginate = (pageNumber)=>setCurrentPage(pageNumber)
  return (
    <>
      <div id="game-news">
        <label className="label label-hot-news"> Tin tức về game</label>
        <ul className="tab-game d-flex bd-t-green bd-bt">
          <li>
            <a href="demo.vn">Game mới</a>
          </li>
          <li>
            <a href="demo.vn">Mobile</a>
          </li>
          <li>
            <a href="demo.vn">Game Online</a>
          </li>
          <li>
            <a href="demo.vn">PC/Console</a>
          </li>
        </ul>
        <Posts posts = {currentPosts} loading={loading}/>
        <Pagination postsPerPage={postsPerPage} totalPosts={posts?.result?.length} paginate={paginate}/>
      </div>
    </>
  );
}
