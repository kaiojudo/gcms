import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../../../Loading";

export default function TeyvatNews() {
  const [teyvatNews, setDataTeyvatNews] = useState({});
  const [loading, setLoading] = useState(true);

  const url = "http://localhost:3030/post/teyvat/teyvatnews";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDataTeyvatNews(data);
        setLoading(false);
      });
  }, []);

  return (
    <div id="right-content-news" className="right-list">
      <label htmlFor="" className="label label-right-content-news">
        Bản tin teyvat
      </label>
      <img src="../teyvatlogo.jpg" alt="" />
      {loading === true && <Loading />}

      <ul className="right-content-news-list">
        {teyvatNews?.result?.map((e) => (
          <li className="right-content-news bd-bt" key={e.tieudetin}>
            <Link to={`/post/${e.idtintuc}`}>{e.tieudetin}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
