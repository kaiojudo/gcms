export default function Footer() {
  return (
    <footer className="bg-dark text-center text-lg-start">
      {/* Grid container */}
      <div className="container p-4">
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Web được phát triển bởi Vũ Trung Hiếu</h5>
            <p>
              Bê lô anh em
            </p>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Đây là web đọc tin tức</h5>
            <p>
              Tin tức chỉ mang tính chất tham khảo, vui lòng không đem đi trao đổi
            </p>
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
      </div>
      {/* Grid container */}
      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright
      </div>
      {/* Copyright */}
    </footer>
  );
}
