import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Posts from "../container/leftcontainer/allnews/gamenew/Posts";
import { Pagination } from "../container/leftcontainer/allnews/gamenew/Pagination";
import axios from "axios";
import RightContainer from "../container/rightcontainer/RightContainer";
export default function Layout_Category() {
  const params = useParams();
  const [posts, setDataPost] = useState([]);
  const [theloai, setTheloai] = useState();

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  var currentPage = 1;

  const [postsPerPage] = useState(8);
  const [soluong, setSoluong] = useState();
  const urlsl = `http://localhost:3030/totalpostbytheloai/${params.id}`;
  useEffect(() => {
    const fetchSoluong = async () => {
      const res = await axios.get(urlsl);
      setSoluong(res.data);
    };
    fetchSoluong();
    fetchPosts();
    const fetchtheloais = async () => {
      const res = await axios.get(
        `http://localhost:3030/theloai/details/${params.id}`
      );
      setTheloai(res.data);
    };
    fetchtheloais();
    // eslint-disable-next-line
  }, []);
  // console.log(currentPage);
  const fetchPosts = async () => {
    setLoading(true);
    const res = await axios.get(
      `http://localhost:3030/category/${params.id}/${postsPerPage}/${
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
  return (
    <>
      <div id="container" className="w-80 d-flex layout_post">
        <div id="left-container">
          <div id="game-news">
            <label className="label label-hot-news">
              {theloai?.result?.tenTheLoai}
            </label>
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
