import React from "react";
import { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
  const cookie = new Cookies();
  let navigate = useNavigate();

  const id = Number(cookie.get("id"));
  const [oldpass, setOldPass] = useState({
    id_thanhvien: id,
  });
  const [data, setData] = useState({
    id_thanhvien: id,
  });
  function getPass(e) {
    const newdata = { ...oldpass };
    newdata.password = e.target.value;
    setOldPass(newdata);
    console.log(newdata);
  }
  function handleChange(e) {
    const newdata = { ...data };
    newdata.password = e.target.value;
    setData(newdata);
  }
  const urlget = `http://localhost:3030/checkpass/${id}/${oldpass.password}`;
  const urlchange = `http://localhost:3030/changepass`;
  function submit(e) {
    e.preventDefault();
    axios({
      method: "get",
      url: urlget,
    }).then((e) => {
      // console.log(e.data.result);
      var pass1 = document.getElementById("new-password").value;
      var pass2 = document.getElementById("review-password").value;
      // console.log(pass1,pass2);
      if (e.data.result) {
        if (pass1 !== pass2) {
          alert("Vui lòng lại cẩn thận !");
        } else if (!pass1 || !pass2) {
          alert("Chưa điền mật khẩu mới");
        } else if (pass1.length < 8) {
          alert("Mật khẩu quá ngắn, không an toàn!");
        } else {
          axios({
            method: "put",
            url: urlchange,
            data: data,
          }).then((e) => {
            alert("Đổi mật khẩu thành công");
            navigate("/admin", { replace: false });
          });
        }
      } else {
        alert("Sai mật khẩu");
      }
    });
  }
  return (
    <>
      <div className="container w-80 change-pass">
        <label htmlFor="" className="lable-admin">
          Đổi mật khẩu
        </label>
        <form action="" className="change-password" onSubmit={(e) => submit(e)}>
          <div>
            <label htmlFor="old-password">Mật khẩu cũ</label>
            <input type="password" id="password" onChange={(e) => getPass(e)} />
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
            <input type="password" id="review-password" />
          </div>
          <button type="submit" className="btn btn-success">
            Xác nhận
          </button>
        </form>
      </div>
    </>
  );
}
