import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";

export default function AddChildTheLoai() {
  const [theloais, setDataTheloai] = useState([]);
  const urlf = "http://localhost:3030/theloai/all";
  useEffect(() => {
    const fetchTheloais = async () => {
      const res = await axios.get(urlf);
      setDataTheloai(res.data);
    };
    fetchTheloais();
  }, []);

  const url = `http://localhost:3030/childtheloai/add`;
  const refresh = () => window.location.reload(true);
  const [data, setData] = useState({
    ten_child_theloai: "",
    isNull_child_theloai: "",
    idTheLoai: "10"
  });
  function handleData(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(data);
  }
  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        ten_child_theloai : data.ten_child_theloai,
        idTheLoai : data.idTheLoai
      })
      .then((res) => {
        console.log(res.data);
        alert("Thêm thành công!");
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
            id="ten_child_theloai"
            placeholder="Nhập tên thể loại"
            onChange={(e) => handleData(e)}
            value={data.ten_child_theloai}
          />
        </div>
        <div className="form-group">
          <label htmlFor="idTheLoai">Lựa chọn thể loại </label>
          <select
            className="form-control"
            id="idTheLoai"
            onChange={(e) => handleData(e)}
          >
            <option>Chọn thể loại</option>
            {theloais?.result?.map((e) => (
              <option key={e.idTheLoai} value={e.idTheLoai}>
                {e.tenTheLoai}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-success">
          Xác nhận
        </button>
      </form>
    </>
  );
}
