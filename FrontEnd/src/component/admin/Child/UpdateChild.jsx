import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function UpdateChild() {
  const param = useParams();
  const urlget = `http://localhost:3030/theloai/details/` + param.id;
  const url = `http://localhost:3030/updatechildtheloai/` + param.id;
  // const refresh = () => window.location.reload(true);
  const [theloais, setDataTheloai] = useState([]);
  const [thistheloai, setDatathisTheloai] = useState([]);

  const urlf = "http://localhost:3030/theloai/all";
  useEffect(() => {
    const fetchTheloais = async () => {
      const res = await axios.get(urlf);
      setDataTheloai(res.data);
    };
    fetchTheloais();
  }, []);
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(urlget)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        const urlfn =
          `http://localhost:3030/theloai/details/` + data?.result?.idTheLoai;
        console.log(urlfn);
        fetch(urlfn)
          .then((response) => response.json())
          .then((data) => setDatathisTheloai(data));
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
    const childtheloai = {};
    childtheloai.ten_child_theloai =
      document.getElementById("ten_child_theloai").value;
    childtheloai.sapxep_child_theloai = document.getElementById(
      "sapxep_child_theloai"
    ).value;
    childtheloai.idTheLoai = document.getElementById("idTheLoai").value;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(childtheloai),
    }).then((e) => {
      if (e.result === 0) {
        alert("Lỗi");
      } else if (!childtheloai.ten_child_theloai) {
        alert("Vui lòng điền đầy đủ thông tin");
      } else {
        alert("Thành công!");
      }
    });
    console.log(JSON.stringify(childtheloai));
  }
  return (
    <>
      <div className="container">
        <form onSubmit={(e) => submit(e)}>
          <div className="form-group">
            <label htmlFor="" className="lable-admin">
              Cập nhật thể loại
            </label>
            <br />
            <label htmlFor="tenTheLoai" className="">
              Tên Thể Loại
            </label>
            <input
              type="text"
              className="form-control"
              id="ten_child_theloai"
              placeholder="Nhập tên thể loại"
              onChange={(e) => handleData(e)}
              defaultValue={data?.result?.tenTheLoai}
            />
          </div>
          <div className="form-group">
            <label htmlFor="sapxep" className="">
              Sắp xếp
            </label>
            <input
              type="number"
              className="form-control"
              id="sapxep_child_theloai"
              placeholder="Nhập vị trí sắp xếp"
              onChange={(e) => handleData(e)}
              defaultValue={data?.result?.sapxep}
            />
          </div>
          <div className="form-group">
            <label htmlFor="idTheLoai">Lựa chọn thể loại </label>
            <select
              className="form-control"
              id="idTheLoai"
              onChange={(e) => handleData(e)}
            >
              <option defaultValue={thistheloai?.result?.idTheLoai}>
                {thistheloai?.result?.tenTheLoai}
              </option>
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
      </div>
    </>
  );
}
