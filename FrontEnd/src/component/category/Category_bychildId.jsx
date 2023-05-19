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
        `http://192.168.0.103:3030/childcategory/${params.id}`
      );
      setDataPost(res.data);
      setLoading(false);
    };
    fetchPosts();
    const fetchtheloais = async () => {
      const res = await axios.get(
        `http://192.168.0.103:3030/childtheloai/child/${params.id}`
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
  return (
    <>
      <div id="container" className="w-80 d-flex layout_post">
        <div id="left-container">
          <div id="game-news">
            <label className="label label-hot-news">
              {theloai?.result?.ten_child_theloai}
            </label>
            <Posts posts={currentPosts} loading={loading} />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts?.result?.length}
              paginate={paginate}
            />
          </div>
        </div>
        <RightContainer />
      </div>
    </>
  );
}
