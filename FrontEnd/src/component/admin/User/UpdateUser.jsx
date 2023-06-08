import React from "react";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";

function UpdateUser() {
  const cookies = new Cookies();
  const id = cookies.get("id");
  // console.log(id);
  const [tinhadmin, setDatatinhadmin] = useState({});
  const [data, setData] = useState({});
  const urltinh = "http://localhost:3030/tinh/showlist";
  const url = `http://localhost:3030/user/findbyid/${id}`;
  const [tinh, setDataTinh] = useState({});
  useEffect(() => {
    fetch(urltinh)
      .then((response) => response.json())
      .then((data) => {
        setDataTinh(data);
      });
  }, []);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        // console.log(data?.result?.accesslevel);
        fetch(`http://localhost:3030/tinh/${data?.result?.id_nguyenquan}`)
          .then((response) => response.json())
          .then((data) => {
            setDatatinhadmin(data);
          });
      }); // eslint-disable-next-line
  }, []);
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  return (
    <div className="container update-user">
      {" "}
      <div className="sub-info">
        <table className="table table-hover">
          <tbody>
            <tr>
              <th scope="row">Tên</th>
              <td>
                <input
                  type="text"
                  defaultValue={data?.result?.hoten}
                  onChange={(e) => handle(e)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Giới tính</th>
              <td>
                <select onChange={(e) => handle(e)} id="sex">
                  <option value={1} disabled="">
                    Giới tính
                  </option>
                  <option value={"Nam"}>Nam</option>
                  <option value={"Nữ"}>Nữ</option>
                </select>
              </td>
            </tr>
            <tr>
              <th scope="row">Quê quán</th>
              <td>
                <select
                  onChange={(e) => handle(e)}
                  id="id_nguyenquan"
                  // className="select form-control-lg w-100"
                >
                  <option value={-1} disabled="">
                    {tinhadmin?.result?.tentinh}
                  </option>
                  {tinh?.result?.map((e) => (
                    <option key={e.idtinh} value={e.idtinh}>
                      {e.tentinh}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <th scope="row">Địa chỉ</th>
              <td>
                <input
                  type="text"
                  defaultValue={data?.result?.address}
                  onChange={(e) => handle(e)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Số điện thoại</th>
              <td>
                <input
                  type="text"
                  defaultValue={data?.result?.phone}
                  onChange={(e) => handle(e)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Email</th>
              <td>
                <input
                  type="text"
                  defaultValue={data?.result?.email}
                  onChange={(e) => handle(e)}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UpdateUser;
