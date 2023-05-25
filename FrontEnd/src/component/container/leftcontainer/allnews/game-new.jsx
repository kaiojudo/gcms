import React, { useState, useEffect } from "react";
import Posts from "./gamenew/Posts";
import { Pagination } from "./gamenew/Pagination";
import axios from "axios";
export default function GameNew(props) {
  const [posts, setDataPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  var currentPage = 1;

  const [postsPerPage] = useState(5);
  const [soluong, setSoluong] = useState();
  const urlsl = `http://localhost:3030/totalpost`;
  useEffect(() => {
    const fetchSoluong = async () => {
      const res = await axios.get(urlsl);
      setSoluong(res.data);
    };
    fetchSoluong();
    fetchPosts();
  }, []);
  // console.log(currentPage);
  const fetchPosts = async () => {
    setLoading(true);
    const res = await axios.get(
      `http://localhost:3030/limit/${postsPerPage}/offset/${
        (currentPage - 1) * postsPerPage
      }`
    );
    setDataPost(res.data);
    setLoading(false);
  };
  const currentPosts = posts?.result;
  // console.log(currentPosts);
  // Change Page
  const paginate = (pageNumber) => {
    currentPage = pageNumber;
    setPage(currentPage);
    fetchPosts();
  };
  // console.log(page);
  const totalPosts = soluong?.result?.soluong;
  const next = () => {
    if (page < totalPosts / postsPerPage) {
      currentPage = page + 1;
      setPage(currentPage);
      // console.log(currentPage);
      fetchPosts();
    }
  };
  const previous = () => {
    if (page > 1) {
      currentPage = page - 1;
      setPage(currentPage);
      fetchPosts();
    }
  };
  // console.log(page);
  return (
    <>
      <div id="game-news">
        <label className="label label-hot-news"> Tin tức</label>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={totalPosts}
          paginate={paginate}
          currentPage={page}
          next={next}
          previous={previous}
        />
      </div>
    </>
  );
}
