import React from "react";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import axios from "axios";

function UpdateUser() {
  const cookies = new Cookies();
  const id = cookies.get("id");
  // console.log(id);
  const [tinhadmin, setDatatinhadmin] = useState({});
  const [data, setData] = useState();
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
  }, [1]);
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  // console.log(JSON.stringify(data.result));
  function UpdateUser(e) {
    e.preventDefault();
    const dataUpdate = { ...data.result };
    dataUpdate.hoten = document.getElementById("hoten").value;
    dataUpdate.sex = document.getElementById("sex").value;
    if (dataUpdate.sex === "1") {
      dataUpdate.sex = data.result.sex;
    }
    dataUpdate.address = document.getElementById("address").value;
    dataUpdate.id_nguyenquan = document.getElementById("id_nguyenquan").value;
    if (dataUpdate.id_nguyenquan === "-1") {
      dataUpdate.id_nguyenquan = data.result.id_nguyenquan;
    }
    dataUpdate.phone = document.getElementById("phone").value;
    dataUpdate.email = document.getElementById("email").value;
    console.log(JSON.stringify(dataUpdate));
    axios({
      method: "put",
      url: `http://localhost:3030/user/update`,
      data: dataUpdate,
    }).then((e) => {
      if (e.data.result === 0) {
        alert("Thất bại do Email hoặc Số điện thoại đã có người sử dụng");
      } else if (
        !dataUpdate.hoten ||
        !dataUpdate.address ||
        !dataUpdate.phone ||
        !dataUpdate.email
      ) {
        alert("Vui lòng điền đầy đủ thông tin");
      } else {
        alert("Xong!");
        console.log(e);
        // navigate("/admin", { replace: false })
      }
    });
  }
  return (
    <>
      <form className="container update-user" onSubmit={(e) => UpdateUser(e)}>
        <label htmlFor="" className="lable-admin">
          Cập nhật thông tin
        </label>{" "}
        <div className="sub-info">
          <table className="table table-hover">
            <tbody>
              <tr>
                <th scope="row">Tên</th>
                <td>
                  <input
                    id="hoten"
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
                      {data?.result?.sex}
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
                  <textarea
                    id="address"
                    defaultValue={data?.result?.address}
                    onChange={(e) => handle(e)}
                    cols={50}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">Số điện thoại</th>
                <td>
                  <input
                    id="phone"
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
                    id="email"
                    type="text"
                    defaultValue={data?.result?.email}
                    onChange={(e) => handle(e)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button type="submit">Cập nhật</button>
      </form>
    </>
  );
}

export default UpdateUser;
