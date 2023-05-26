import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";


import Posts from "../container/leftcontainer/allnews/gamenew/Posts";
import { Pagination } from "../container/leftcontainer/allnews/gamenew/Pagination";
import axios from "axios";
import RightContainer from "../container/rightcontainer/RightContainer";
export default function Layout_Category() {
  const cookie = new Cookies();
  var search = cookie.get("search");
  const [posts, setDataPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  var currentPage = 1;
  var urlsl;
  const [postsPerPage] = useState(8);
  const [soluong, setSoluong] = useState();
  useEffect(() => {
    const fetchSoluong = async () => {
      if (search === "") {
        // eslint-disable-next-line
        urlsl = `http://localhost:3030/totalpost`;
      } else {
        urlsl = `http://localhost:3030/totalpostbysearch/${search}`;
      }
      const res = await axios.get(urlsl);
      setSoluong(res.data);
    };
    fetchSoluong();
    fetchPosts();
    // eslint-disable-next-line
  }, []);
  // console.log(currentPage);
  const fetchPosts = async () => {
    setLoading(true);
    var res;
    if (search !== "") {
      res = await axios.get(
        `http://localhost:3030/searchitem/${search}/${postsPerPage}/${
          (currentPage - 1) * postsPerPage
        }`
      );
    } else {
      res = await axios.get(
        `http://localhost:3030/limit/${postsPerPage}/offset/${
          (currentPage - 1) * postsPerPage
        }`
      );
    }
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
  return (
    <>
      <div id="container" className="w-80 d-flex layout_post">
        <div id="left-container">
          <div id="game-news">
            <label className="label label-hot-news">
              Kết quả tìm kiếm: {search}
            </label>
            <p>Tìm thấy <span className="search-soluong">{soluong?.result?.soluong}</span> kết quả</p>
            <Posts posts={currentPosts} loading={loading} />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={totalPosts}
              paginate={paginate}
              next={next}
              previous={previous}
              currentPage={page}
            />
          </div>
        </div>
        <RightContainer />
      </div>
    </>
  );
}
