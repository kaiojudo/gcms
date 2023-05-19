import React, { useState, useEffect } from "react";

import Posts from "../container/leftcontainer/allnews/gamenew/Posts";
import { Pagination } from "../container/leftcontainer/allnews/gamenew/Pagination";
import axios from "axios";
import RightContainer from "../container/rightcontainer/RightContainer";
export default function Layout_Category() {
  const [posts, setDataPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  console.log(
    `http://192.168.0.103:3030/searchitem/${localStorage.getItem("Search")}`
  );
  const search = localStorage.getItem("Search");
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      var res;
      if (search !== "") {
        res = await axios.get(`http://192.168.0.103:3030/searchitem/${search}`);
      } else {
        res = await axios.get(`http://192.168.0.103:3030/post/showlist`);
      }
      setDataPost(res.data);
      setLoading(false);
    };
    fetchPosts();
    // eslint-disable-next-line
  }, []);
  const lastIndexofPosts = currentPage * postsPerPage;
  const firstIndexOfPosts = lastIndexofPosts - postsPerPage;
  const currentPosts = posts?.result?.slice(
    firstIndexOfPosts,
    lastIndexofPosts
  );
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
      <div id="container" className="w-80 d-flex layout_post">
        <div id="left-container">
          <div id="game-news">
            <label className="label label-hot-news">
              Kết quả tìm kiếm: {search}
            </label>
            <Posts posts={currentPosts} loading={loading} />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts?.result?.length}
              paginate={paginate}
              next = {next}
              previous = {previous}
              currentPage={currentPage}
            />
          </div>
        </div>
        <RightContainer />
      </div>
    </>
  );
}
