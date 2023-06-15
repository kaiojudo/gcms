import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

export const ShowUser = () => {
  const cookies = new Cookies();

  const [data, setData] = useState({});
  // const params = useParams();
  const [tinh, setDatatinh] = useState({});
  // var level = cookies.get("level");

  var url = `http://localhost:3030/user/findbyid/${cookies.get("id")}`;

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
        <img
          srcSet="../unknown.jpg"
          src="../unknown.jpg"
          alt="errerrerrerrerrerrerrerr"
        />
      </div>

      <div className="info-user">
        <h4 className="info-name">{data?.result?.hoten}</h4>
        <p className="info-id">#{localStorage.getItem("TacGia")}</p>
        {data?.result?.accesslevel === 2 && (
          <h5 className="info-level">Cộng tác viên</h5>
        )}
        {data?.result?.accesslevel === 1 && (
          <h5 className="info-level">Quản trị viên</h5>
        )}
        <div className="sub-info">
          <table className="table table-hover">
            <tbody>
              <tr>
                <th scope="row">Tên</th>
                <td>{data?.result?.hoten}</td>
              </tr>
              <tr>
                <th scope="row">Giới tính</th>
                <td>{data?.result?.sex}</td>
              </tr>
              <tr>
                <th scope="row">Quê quán</th>
                <td>{tinh?.result?.tentinh}</td>
              </tr>
              <tr>
                <th scope="row">Địa chỉ</th>
                <td>{data?.result?.address}</td>
              </tr>
              <tr>
                <th scope="row">Số điện thoại</th>
                <td>{data?.result?.phone}</td>
              </tr>
              <tr>
                <th scope="row">Email</th>
                <td>{data?.result?.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="update-user">
          <button className="btn btn-primary">
            <Link to={`/updateuser`}>Sửa</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
