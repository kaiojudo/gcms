import React from "react";
import { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

export default function ChangePassword() {
  const cookie = new Cookies();
  const id = cookie.get("id");
  const [oldpass, setOldPass] = useState({
    id_thanhvien: id,
  });
  const [data, setData] = useState({
    id_tacgia: id,
  });
  function getPass(e) {
    const newdata = { ...oldpass };
    newdata[e.target.id] = e.target.value;
    setOldPass(newdata);
  }
  function handleChange(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }
  const urlget = `http://localhost:3030/checkpass`;
  const urlchange = `http://localhost:3030/changepass`;
  function submit(e) {
    console.log(oldpass);
    e.preventDefault();
    const passold = JSON.stringify(oldpass)
    console.log(passold);
    axios({
      method: "get",
      url: urlget,
      data: passold,
    }).then((e) => {
      console.log(e);
    });
  }
  return (
    <>
      <div className="container w-80 change-pass">
        <label htmlFor="" className="lable-admin">
          Đổi mật khẩu
        </label>
        <form action="" className="password" onSubmit={(e) => submit(e)}>
          <div>
            <label htmlFor="old-password">Mật khẩu cũ</label>
            <input
              type="password"
              id="password"
              onChange={(e) => getPass(e)}
            />
          </div>
          <div>
            <label htmlFor="old-password">Mật khẩu mới</label>
            <input
              type="password"
              id="new-password"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <label htmlFor="old-password">Nhập lại</label>
            <input type="password" id="renew-password" />
          </div>
          <button type="submit" className="btn btn-success">
            Xác nhận
          </button>
        </form>
      </div>
    </>
  );
}
