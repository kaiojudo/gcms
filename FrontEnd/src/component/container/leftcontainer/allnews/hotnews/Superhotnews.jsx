import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SuperHotNews() {
  const [dataSlide, setDataSlide] = useState({});
  const urlSlide = "http://localhost:3030/post/slide/showall";
  useEffect(() => {
    fetch(urlSlide)
      .then((response) => response.json())
      .then((data) => {
        setDataSlide(data);
      });
  }, []);
  const ele = document.getElementById("1")
  return (
    <>
      <div id="hot-new-news">
        <label htmlFor="" className="label">
          Hot News
        </label>
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
                className="carousel-item slide-main"
                id={e.idtintuc}
              >
                <img
                  className="d-block w-100"
                  src={"../" + e?.hinhtrichdan?.split("\\fakepath")[1]}
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
          <div className="hot-new-news-2-item">
            <a href="demo.vn">
              <img src="../batman.jpg" alt="" />
              <p>MultiVersus đóng cửa các dịch vụ trực tuyến từ tháng 6</p>
            </a>
          </div>
          <div className="hot-new-news-2-item">
            <a href="demo.vn">
              <img src="../batman.jpg" alt="" />
              <p>MultiVersus đóng cửa các dịch vụ trực tuyến từ tháng 6</p>
            </a>
          </div>
          <div className="hot-new-news-2-item">
            <a href="demo.vn">
              <img src="../batman.jpg" alt="" />
              <p>MultiVersus đóng cửa các dịch vụ trực tuyến từ tháng 6</p>
            </a>
          </div>
          <div className="hot-new-news-2-item">
            <a href="demo.vn">
              <img src="../batman.jpg" alt="" />
              <p>MultiVersus đóng cửa các dịch vụ trực tuyến từ tháng 6</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
