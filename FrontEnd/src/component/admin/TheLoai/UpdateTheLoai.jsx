import React, { useEffect } from "react";
// import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function UpdateTheLoai() {
  const param = useParams();
  const urlget = `http://localhost:3030/theloai/details/` + param.id;
  const url = `http://localhost:3030/theloai/update/` + param.id;
  // const refresh = () => window.location.reload(true);
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(urlget)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
      // eslint-disable-next-line
  }, []);

  function handleData(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  console.log(data?.result);
  function submit(e) {
    e.preventDefault();
    const theloai = {};
    console.log(theloai);
    theloai.tenTheLoai = document.getElementById("tenTheLoai").value;
    theloai.sapxep = document.getElementById("sapxep").value;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(theloai),
    }).then((e) => {
      if (e.result === 0) {
        alert("Lỗi");
      } else if (!theloai.tenTheLoai) {
        alert("Vui lòng điền đầy đủ thông tin");
      } else {
        alert("Thành công!");
      }
    });
    console.log(JSON.stringify(theloai));
  }
  return (
    <>
      <div className="container">
        <form onSubmit={(e) => submit(e)}>
          <div className="form-group">
            <label htmlFor="tenTheLoai" className="lable-admin">
              Cập nhật thể loại
            </label>
            <input
              type="text"
              className="form-control"
              id="tenTheLoai"
              placeholder="Nhập tên thể loại"
              onChange={(e) => handleData(e)}
              defaultValue={data?.result?.tenTheLoai}
            />
            <input
              type="number"
              className="form-control"
              id="sapxep"
              placeholder="Nhập vị trí sắp xếp"
              onChange={(e) => handleData(e)}
              defaultValue={data?.result?.sapxep}
            />
          </div>

          <button type="submit" className="btn btn-success">
            Xác nhận
          </button>
        </form>
      </div>
    </>
  );
}
