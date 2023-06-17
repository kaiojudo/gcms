import React from "react";

export default function ChangePassword() {
  return (
    <>
      <div className="container w-80 change-pass">
        <label htmlFor="" className="lable-admin">
          Đổi mật khẩu
        </label>
        <form action="" className="change-password">
          <div>
            <label htmlFor="old-password">Mật khẩu cũ</label>
            <input type="password" id="old-password" />
          </div>
          <div>
            <label htmlFor="old-password">Mật khẩu mới</label>
            <input type="password" id="new-password" />
          </div>

          <div>
            <label htmlFor="old-password">Nhập lại</label>
            <input type="password" id="renew-password" />
          </div>
        </form>
      </div>
    </>
  );
}
