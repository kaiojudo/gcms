import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../../../../Loading";

export default function SuperHotNews() {
  const [dataSlide, setDataSlide] = useState({});
  const [loading, setLoading] = useState(true);

  const urlSlide = "http://localhost:3030/post/slide/showall";
  useEffect(() => {
    fetch(urlSlide)
      .then((response) => response.json())
      .then((data) => {
        setDataSlide(data);
      });
  }, []);
  const [databtSlide, setDatabtSlide] = useState({});
  const urlbtSlide = "http://localhost:3030/post/btslide/showall";
  useEffect(() => {
    fetch(urlbtSlide)
      .then((response) => response.json())
      .then((data) => {
        setDatabtSlide(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div id="hot-new-news">
        <label htmlFor="" className="label">
          Hot News
        </label>
        {loading === true && <Loading />}
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            {dataSlide?.result?.map((e) => (
              <Link
                to={`/post/${e.idtintuc}`}
                key={e.idtintuc}
                className={"carousel-item slide-main " + e?.isActive}
              >
                <img
                  className="d-block w-100"
                  src={"../" + e?.hinhtrichdan}
                  alt="First slide"
                />
                <div className="description">
                  <h2>
                    <span>{e.tieudetin}</span>
                  </h2>
                </div>
              </Link>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="hot-new-news-2">
          
          {databtSlide?.result?.map((e) => (
            <div className="hot-new-news-2-item" key={e.idtintuc}>
              <Link to={`/post/${e.idtintuc}`} key={e.idtintuc}>
                <div className="hot-2-img">
                  <img src={"../" + e?.hinhtrichdan} alt="Err" />
                </div>
                <p>{e.tieudetin}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
