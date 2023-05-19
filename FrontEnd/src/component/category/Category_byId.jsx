import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Posts from "../container/leftcontainer/allnews/gamenew/Posts";
import { Pagination } from "../container/leftcontainer/allnews/gamenew/Pagination";
import axios from "axios";
import RightContainer from "../container/rightcontainer/RightContainer";
export default function Layout_Category() {
  const [posts, setDataPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const params = useParams();
  const [theloai, setTheloai] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:3030/category/${params.id}`
      );
      setDataPost(res.data);
      setLoading(false);
    };
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
  const lastIndexofPosts = currentPage * postsPerPage;
  const firstIndexOfPosts = lastIndexofPosts - postsPerPage;
  const currentPosts = posts?.result?.slice(
    firstIndexOfPosts,
    lastIndexofPosts
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
              {theloai?.result?.tenTheLoai}
            </label>
            <Posts posts={currentPosts} loading={loading} />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts?.result?.length}
              paginate={paginate}
              next={next}
              previous={previous}
              currentPage={currentPage}
            />
          </div>
        </div>
        <RightContainer />
      </div>
    </>
  );
}
