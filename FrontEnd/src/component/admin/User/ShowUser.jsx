import React from "react";

export const ShowUser = () => {
  return (
    <div className="your-info">
      <h2 className="lable-admin">Thông tin cá nhân</h2>
      <div className="user-img">
        <img src="../avatar.jpg" alt="Bạn không có ảnh đại diện" />
      </div>

      <div className="info-user">
        <h4 className="info-name">Vũ Trung Hiếu</h4>
        <p className="info-id">#000</p>
        <h5 className="info-level">Cộng tác viên</h5>
        <div className="sub-info d-flex">
          <div className="title">
            <p>Giới tính</p>
            <p>Nguyên quán</p>
            <p>Địa chỉ</p>
            <p>Email</p>
          </div>
          <div className="data">
            <p>Nam</p>
            <p>Hải Dương</p>
            <p>Hà Lội</p>
            <p>hieukka912@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
