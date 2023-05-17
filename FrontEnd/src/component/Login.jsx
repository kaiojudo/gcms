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
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://localhost:3030/account/${data.username}/password/${data.password}`
      )
      .then((res) => {
        // console.log(res.data.result);
        if (res.data.result) {
          localStorage.setItem("AccessToken", true);
          localStorage.setItem("UserName", data.username);
          localStorage.setItem("AccessLevel", res.data.result.accesslevel);
          localStorage.setItem("TacGia", res.data.result.id_thanhvien);
          try {
            if (localStorage.getItem("AccessToken") === "true") {
            navigate("/admin", { replace: true });
            refresh();
          }
          } catch {
            console.log("hello");
          }
          
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
