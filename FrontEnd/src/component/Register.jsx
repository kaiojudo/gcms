import { useState, useEffect } from "react";
import Axios from "axios";
export default function Register() {
  const url = "http://192.168.0.103:3030/user/add";
  const urltinh = "http://192.168.0.103:3030/tinh/showlist";
  const [data, setData] = useState({
    id_thanhvien: "",
    hoten: "",
    sex: "",
    email: "",
    phone: "",
    address: "",
    id_nguyenquan: "",
    username: "",
    password: "",
    accesslevel: 2,
    active: 0
    ,
  });
  const [tinh, setDataTinh] = useState({});
  useEffect(() => {
    fetch(urltinh)
      .then((response) => response.json())
      .then((data) => {
        setDataTinh(data);
      });
  }, []);
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }
  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      hoten: data.hoten,
      sex: data.sex,
      email: data.email,
      phone: data.phone,
      address: data.address,
      id_nguyenquan: data.id_nguyenquan,
      username: data.username,
      password: data.password,
      accesslevel: 0,
      active: 0,
    })
    .then((res) => {
      console.log(res.data); 
      alert("Thành công")
    })
    .catch((err) => {alert("Error User: " + err.message)});
  }

  return (
    <>
      <section className="gradient-custom w-100">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="card shadow-2-strong card-registration"
                style={{ borderRadius: 15 }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className=" pb-2 pb-md-0 mb-md-5">Đăng ký</h3>
                  <form onSubmit={(e) => submit(e)}>
                    <div className="row">
                      <div className="col-md-6 ">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="username">
                            Tên tài khoản
                          </label>
                          <input
                            onChange={(e) => handle(e)}
                            type="text"
                            id="username"
                            className="form-control form-control-lg"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 ">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="hoten">
                            Tên người dùng
                          </label>
                          <input
                            onChange={(e) => handle(e)}
                            type="text"
                            id="hoten"
                            className="form-control form-control-lg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6  d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <label htmlFor="password" className="form-label">
                            Mật khẩu
                          </label>
                          <input
                            onChange={(e) => handle(e)}
                            type="password"
                            className="form-control form-control-lg"
                            id="password"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 align-items-center">
                        <div className="form-outline datepicker w-100">
                          <label className="form-label" htmlFor="sex">
                            Giới tính
                          </label>
                          <select
                            onChange={(e) => handle(e)}
                            id="sex"
                            className="select form-control-lg w-100"
                          >
                            <option value={1} disabled="">
                              Giới tính
                            </option>
                            <option value={"Nam"}>Nam</option>
                            <option value={"Nữ"}>Nữ</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6  pb-2">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="email">
                            Email
                          </label>
                          <input
                            onChange={(e) => handle(e)}
                            type="email"
                            id="email"
                            className="form-control form-control-lg"
                          />
                        </div>
                      </div>
                      <div className="col-md-6  pb-2">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="phone">
                            Phone Number
                          </label>
                          <input
                            onChange={(e) => handle(e)}
                            type="number"
                            id="phone"
                            className="form-control form-control-lg"
                          />
                        </div>
                      </div>
                      <div className="col-md-6  pb-2">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="address">
                            Địa chỉ hiện tại
                          </label>
                          <input
                            onChange={(e) => handle(e)}
                            type="tel"
                            id="address"
                            className="form-control form-control-lg"
                          />
                        </div>
                      </div>
                      <div className="col-md-6  pb-2">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="id_nguyenquan">
                            Nguyên quán
                          </label>
                          <br />
                          <select
                            onChange={(e) => handle(e)}
                            id="id_nguyenquan"
                            className="select form-control-lg w-100"
                          >
                            <option value={-1} disabled="">
                              Tỉnh
                            </option>
                            {tinh?.result?.map((e) => (
                              <option key={e.idtinh} value={e.idtinh}>
                                {e.tentinh}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <button className="btn btn-danger" type="submit">
                      Xác Nhận
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
