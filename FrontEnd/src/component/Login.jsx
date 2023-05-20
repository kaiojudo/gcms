import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const refresh = () => window.location.reload(true);
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  function handleData(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .get(
        `http://localhost:3030/account/${data.username}/password/${data.password}`
      )
      .then((res) => {
        // console.log(res.data.result);
        if (res.data.result) {
          localStorage.setItem("AccessToken", true);
          localStorage.setItem("UserName", res.data.result.hoten);
          localStorage.setItem("AccessLevel", res.data.result.accesslevel);
          localStorage.setItem("TacGia", res.data.result.id_thanhvien);
          alert("Đăng nhập thành công !")
          navigate("/", { replace: false });
          refresh();
          

        } else {
          alert("Login failed");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {/* GCMS */}
      <form id="log-in" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="" className="login-logo">
          GCMS
        </label>
        {/* Email input */}
        <div className="form-outline ">
          <label className="form-label" htmlFor="username">
            Tên tài khoản
          </label>
          <input
            type="text"
            id="username"
            className="form-control"
            placeholder="Username..."
            onChange={handleData}
          />
        </div>
        {/* Password input */}
        <div className="form-outline ">
          <label className="form-label" htmlFor="password">
            Mật khẩu
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Password..."
            onChange={handleData}
          />
        </div>
        {/* Submit button */}
        <br />
        <button className="btn btn-primary btn-block mb-4 ">Sign in</button>
      </form>
    </>
  );
}
