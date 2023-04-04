export default function HotNews() {

    
  return (
    <div id="hot-news" className="d-flex">
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
            <a href="demo.vn" className="carousel-item active slide-main">
              <img
                className="d-block w-100"
                src="../dolphin.jpg"
                alt="First slide"
              />
              <div className="description">
                <h2>
                  <span>
                    Dolphin - Trình giả lập GameCube và Wii sắp có mặt trên
                    Steam
                  </span>
                </h2>
              </div>
            </a>
            <a href="demo.vn" className="carousel-item slide-main">
              <img
                className="d-block w-100"
                src="../trutien.jpg"
                alt="Second slide"
              />
              <div className="description">
                <h2>
                  <span>
                    Tru Tiên 3D đạt số lượt bình chọn nhiều nhất cho giải đồ họa
                    tại Vietnam Game Awards 2023
                  </span>
                </h2>
              </div>
            </a>
            <a href="demo.vn" className="carousel-item slide-main">
              <img
                className="d-block w-100"
                src="../vnv.jpg"
                alt="Third slide"
              />
              <div className="description">
                <h2>
                  <span>
                    Ngày hội Game Việt Nam 2023 - Vietnam Gameverse 2023: Beyond
                    The Imagination
                  </span>
                </h2>
              </div>
            </a>
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
      <div id="giftcode">
        <label htmlFor="" className="label">
          Giftcode
        </label>
        <ul className="giftcode-category">
          <li className="giftcode-item">
            <img src="../appimg.jpg" alt="" />
            <div className="giftcode-info">
              <div className="giftcode-name">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias quidem, iure ex hic autem architecto tempore nobis
                  repellendus rem eius reprehenderit, pariatur alias possimus
                  beatae fuga corporis reiciendis veritatis sapiente?
                </p>
              </div>
              <p className="giftcode-quantity">100/100</p>
            </div>
          </li>
          <li className="giftcode-item">
            <img src="../appimg.jpg" alt="" />
            <div className="giftcode-info">
              <div className="giftcode-name">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias quidem, iure ex hic autem architecto tempore nobis
                  repellendus rem eius reprehenderit, pariatur alias possimus
                  beatae fuga corporis reiciendis veritatis sapiente?
                </p>
              </div>
              <p className="giftcode-quantity">100/100</p>
            </div>
          </li>
          <li className="giftcode-item">
            <img src="../appimg.jpg" alt="" />
            <div className="giftcode-info">
              <div className="giftcode-name">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias quidem, iure ex hic autem architecto tempore nobis
                  repellendus rem eius reprehenderit, pariatur alias possimus
                  beatae fuga corporis reiciendis veritatis sapiente?
                </p>
              </div>
              <p className="giftcode-quantity">100/100</p>
            </div>
          </li>
          <li className="giftcode-item">
            <img src="../appimg.jpg" alt="" />
            <div className="giftcode-info">
              <div className="giftcode-name">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias quidem, iure ex hic autem architecto tempore nobis
                  repellendus rem eius reprehenderit, pariatur alias possimus
                  beatae fuga corporis reiciendis veritatis sapiente?
                </p>
              </div>
              <p className="giftcode-quantity">100/100</p>
            </div>
          </li>
          <li className="giftcode-item">
            <img src="../appimg.jpg" alt="" />
            <div className="giftcode-info">
              <div className="giftcode-name">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias quidem, iure ex hic autem architecto tempore nobis
                  repellendus rem eius reprehenderit, pariatur alias possimus
                  beatae fuga corporis reiciendis veritatis sapiente?
                </p>
              </div>
              <p className="giftcode-quantity">100/100</p>
            </div>
          </li>
          <li className="giftcode-item">
            <img src="../appimg.jpg" alt="" />
            <div className="giftcode-info">
              <div className="giftcode-name">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias quidem, iure ex hic autem architecto tempore nobis
                  repellendus rem eius reprehenderit, pariatur alias possimus
                  beatae fuga corporis reiciendis veritatis sapiente?
                </p>
              </div>
              <p className="giftcode-quantity">100/100</p>
            </div>
          </li>
          <li className="giftcode-item">
            <img src="../appimg.jpg" alt="" />
            <div className="giftcode-info">
              <div className="giftcode-name">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias quidem, iure ex hic autem architecto tempore nobis
                  repellendus rem eius reprehenderit, pariatur alias possimus
                  beatae fuga corporis reiciendis veritatis sapiente?
                </p>
              </div>
              <p className="giftcode-quantity">100/100</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
