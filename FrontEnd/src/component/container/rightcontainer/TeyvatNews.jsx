import { useState,useEffect } from "react"
import { Link } from "react-router-dom";

export default function TeyvatNews() {
  const [teyvatNews, setDataTeyvatNews] = useState({});
const url = "http://192.168.0.103:3030/post/teyvat/teyvatnews";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDataTeyvatNews(data);
      });
  }, []);

    return (
        <div id="right-content-news" className="right-list">
        <label htmlFor="" className="label label-right-content-news">
          Bản tin teyvat
        </label>
        <img src="../teyvatlogo.jpg" alt="" />
        <ul className="right-content-news-list">
          {teyvatNews?.result?.map((e) => (
            <li className="right-content-news bd-bt"  key={e.tieudetin}>
            <Link to={`/post/${e.idtintuc}`}>{e.tieudetin}</Link>
          </li>
          ))}
        </ul>
      </div>
    )
    
}