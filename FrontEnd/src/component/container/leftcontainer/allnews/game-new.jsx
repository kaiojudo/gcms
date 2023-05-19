import React, { useState, useEffect } from "react";
import Posts from "./gamenew/Posts";
import { Pagination } from "./gamenew/Pagination";
import axios from "axios";
export default function GameNew(props) {
  const [posts, setDataPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const url = "http://192.168.0.103:3030/post/showlist";
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
  const currentPosts = posts?.result?.slice(
    firstIndexOfPosts,
    lastIndexofPosts
  );
  // Change Page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const totalPosts = posts?.result?.length;
  const next = (pageNumber) => {
    if (currentPage < totalPosts / postsPerPage) {
      setCurrentPage(pageNumber + 1);
    }
  };
  const previous = (pageNumber) => {
    if (currentPage > 1) {
      setCurrentPage(pageNumber - 1);
    }
  };
  return (
    <>
      <div id="game-news">
        <label className="label label-hot-news"> Tin tức</label>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts?.result?.length}
          paginate={paginate}
          currentPage={currentPage}
          next={next}
          previous={previous}
        />
      </div>
    </>
  );
}
