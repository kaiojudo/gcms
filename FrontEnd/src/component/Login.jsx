import { useState } from "react";
import axios from "axios";

export default function Login() {
  const urlLogin = "localhost:3030/user/find";
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(urlLogin)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <>
      {/* GCMS */}
      <form id="log-in" onSubmit={handleSubmit}>
        <label htmlFor="" className="login-logo">
          GCMS
        </label>
        {/* Email input */}
        <div className="form-outline ">
          <label className="form-label" htmlFor="form2Example1">
            Tên tài khoản
          </label>
          <input
            type="text"
            id="form2Example1"
            className="form-control"
            placeholder="Username..."
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
        {/* Password input */}
        <div className="form-outline ">
          <label className="form-label" htmlFor="form2Example2">
            Mật khẩu
          </label>
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            placeholder="Password..."
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        {/* Submit button */}
        <br />
        <button type="submit" className="btn btn-primary btn-block mb-4 ">
          Sign in
        </button>
      </form>
    </>
  );
}
