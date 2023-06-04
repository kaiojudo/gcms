import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../../Loading";
export default function TopGameReview() {
  const [review, setReview] = useState({});
  const [loading, setLoading] = useState(true);

  const url = "http://localhost:3030/post/review/showall";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setReview(data);
        setLoading(false);
      });
  }, []);
  return (
    <div id="top-game-review" className="right-list">
      <label htmlFor="" className="label label-top-review">
        Đánh giá game
      </label>
      {loading === true && <Loading />}

      <ul className="right-content-news-list">
        {review?.result?.map((e) => (
          <li className="right-content-news review bd-bt" key={e.idtintuc}>
            <Link to={`/post/${e.idtintuc}`}>
              <span className="tieudetin">{e.tieudetin}</span>
              <div className="img-review">
                <img src={"../" + e.hinhtrichdan} alt="" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
