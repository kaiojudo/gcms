import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";


export default function Login() {
  const refresh = () => window.location.reload(true);
  const cookie = new Cookies();
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
        
        if (res.data.result != 'ERR') {
          cookie.set("username", res?.data?.result[0]?.username, { path: "/" });
          cookie.set("id", res?.data?.result[0]?.id_thanhvien, { path: "/" });
          cookie.set("hoten", res?.data?.result[0]?.hoten, { path: "/" });
          cookie.set("level", res?.data?.result[0]?.accesslevel, { path: "/" });
          alert("Đăng nhập thành công !")
          console.log(`http://localhost:3030/account/${data.username}/password/${data.password}`);
          navigate("/", { replace: false });
      
          
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
