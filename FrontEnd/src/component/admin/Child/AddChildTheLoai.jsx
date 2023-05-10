import React from "react";
import axios from "axios";
import { useState } from "react";

export default function AddChildTheLoai() {
  const url = `http://localhost:3030/theloai/add`;
  const refresh = () => window.location.reload(true);
  const [data, setData] = useState({
    tenTheLoai: "",
    isNull: "",
    sapxep: "",
  });
  function handleData(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        tenTheLoai: data.tenTheLoai,
      })
      .then((res) => {
        console.log(res.data);
        alert("Thêm thành công!");
        refresh();
      });
  }
  return (
    <>
      <form onSubmit={(e) => submit(e)}>
        <div className="form-group">
          <label htmlFor="tenTheLoai" className="lable-admin">
            Nhập tên thể loại mới
          </label>
          <input
            type="text"
            className="form-control"
            id="tenTheLoai"
            placeholder="Nhập tên thể loại"
            onChange={(e) => handleData(e)}
            value={data.tenTheLoai}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Xác nhận
        </button>
      </form>
    </>
  );
}
