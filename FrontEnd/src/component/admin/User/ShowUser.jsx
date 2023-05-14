import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const ShowUser = () => {
  const [data, setData] = useState({});
  const params = useParams();
  const [tinh, setDatatinh] = useState({});
  var level = localStorage.getItem("AccessLevel");
  if (level === "2") {
    var url = `http://localhost:3030/user/findbyid/${localStorage.getItem(
      "TacGia"
    )}`;
  }
  if (level === "1") {
    url = `http://localhost:3030/user/findbyid/${params.id}`;
    };
  
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data?.result?.accesslevel);
        fetch(`http://localhost:3030/tinh/${data.result.id_nguyenquan}`)
          .then((response) => response.json())
          .then((data) => {
            setDatatinh(data);
          });
      }); // eslint-disable-next-line
  }, []);
  return (
    <div className="your-info container">
      <h2 className="lable-admin">Thông tin cá nhân</h2>
      <div className="user-img">
        <img srcSet="../unknown.jpg" src="../unknown.jpg" alt="errerrerrerrerrerrerrerr" />
      </div>

      <div className="info-user">
        <h4 className="info-name">{data?.result?.hoten}</h4>
        <p className="info-id">#{localStorage.getItem("TacGia")}</p>
        {data?.result?.accesslevel === 2 && <h5 className="info-level">Cộng tác viên</h5>}
        {data?.result?.accesslevel === 1 && <h5 className="info-level">Quản trị viên</h5>}
        <div className="sub-info d-flex">
          <div className="title">
            <p>Giới tính</p>
            <p>Nguyên quán</p>
            <p>Địa chỉ</p>
            <p>Email</p>
            <p>Số điện thoại</p>
          </div>
          <div className="data">
            <p>{data?.result?.sex}</p>
            <p>{tinh?.result?.tentinh}</p>
            <p>{data?.result?.address}</p>
            <p>{data?.result?.email}</p>
            <p>{data?.result?.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
