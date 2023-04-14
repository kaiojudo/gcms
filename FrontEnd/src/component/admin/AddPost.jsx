import { useState, useEffect } from "react";
import Axios from "axios";

export default function AddPost() {
  const url = "http://localhost:3030/post/add";
  const [data, setData] = useState({
    tieudetin: "",
    hinhtrichdan: "",
    trichdantin: "",
    ID_child_theloai: "",
    id_phanloaitin: "",
    id_tacgia: "",
    ngaycapnhat: "",
    solandoc: "",
    kiemduyet: "",
    anh1: "",
    anh2: "",
    anh3: "",
    doan1: "",
    doan2: "",
    doan3: "",
    doan4: "",
  });
  const [dataChildTheLoai, setDataChildTheLoai] = useState({});
  const urlchild = "http://localhost:3030/childtheloai/showlist";
  useEffect(() => {
    fetch(urlchild)
      .then((response) => response.json())
      .then((data) => {
        setDataChildTheLoai(data);
      });
  }, []);

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    // console.log(newdata);
  }
  function submit(e) {
    // e.preventDefault();
    Axios.post(url, {
      tieudetin: data.tieudetin,
      hinhtrichdan: data.hinhtrichdan,
      trichdantin: data.trichdantin,
      ID_child_theloai: data.ID_child_theloai,
      id_phanloaitin: data.id_phanloaitin,
      id_tacgia: data.id_tacgia,
      ngaycapnhat: data.ngaycapnhat,
      solandoc: 0,
      kiemduyet: 1,
      anh1: data.anh1,
      anh2: data.anh2,
      anh3: data.anh3,
      doan1: data.doan1,
      doan2: data.doan2,
      doan3: data.doan3,
      doan4: data.doan4,
    }).then((res) => {
      console.log(res.data);
    });
  }
  return (
    <form className="form-baiviet" onSubmit={(e) => submit(e)}>
      <h2>Bài viết</h2>
      <div className="form-group">
        <label htmlFor="tieudetin">Nhập tên bài viết</label>
        <input
          onChange={(e) => handle(e)}
          type="text"
          className="form-control"
          id="tieudetin"
          placeholder="Tên bài viết ..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="hinhtrichdan">Chọn ảnh đại diện cho bài viết</label>
        <input
          onChange={(e) => handle(e)}
          type="file"
          className="form-control-file"
          id="hinhtrichdan"
        />
      </div>
      <div className="form-group">
        <label htmlFor="trichdantin">Nhập trích dẫn bài viết</label>
        <input
          onChange={(e) => handle(e)}
          type="text"
          className="form-control"
          id="trichdantin"
          placeholder="Trích dẫn ..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="ID_child_theloai">Lựa chọn thể loại Con</label>
        <select
          className="form-control"
          id="ID_child_theloai"
          onChange={(e) => handle(e)}
        >
          {dataChildTheLoai?.result?.map((e) => (
            <option key={e.id_phanloaitin} value={e.id_phanloaitin}>
              {e.ten_phanloaitin}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="id_phanloaitin">Lựa chọn phân loại tin</label>
        <select
          onChange={(e) => handle(e)}
          multiple=""
          className="form-control"
          id="id_phanloaitin"
        >
          <option value={1}>Tin mới</option>
          <option value={2}>PC/Console</option>
          <option value={3}>Mobile</option>
          <option value={4}>Cosplay</option>
          <option value={5}>Độc lạ Teyvat</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="id_tacgia">Tên của bạn</label>
        <select
          onChange={(e) => handle(e)}
          multiple=""
          className="form-control"
          id="id_tacgia"
        >
          <option value={1}>Hiếu</option>
          <option value={2}>Kaos</option>
          <option value={3}>Linh</option>
          <option value={4}>Demo 4</option>
          <option value={5}>Hiếu 5</option>
          <option value={6}>Hiếu 6</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="ngaycapnhat">Ngày cập nhật</label>
        <input
          onChange={(e) => handle(e)}
          type="datetime"
          className="form-control"
          id="ngaycapnhat"
          placeholder="Trích dẫn ..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="doan1">Nhập nội dung đoạn 1</label>
        <textarea
          onChange={(e) => handle(e)}
          placeholder="Nội dung đoạn 1..."
          rows={4}
          className="form-control-file"
          id="doan1"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="anh1">Chọn ảnh số 1</label>
        <input
          onChange={(e) => handle(e)}
          type="file"
          className="form-control-file"
          id="anh1"
        />
      </div>
      <div className="form-group">
        <label htmlFor="doan2">Nhập nội dung đoạn 2</label>
        <textarea
          onChange={(e) => handle(e)}
          placeholder="Nội dung đoạn 2..."
          rows={4}
          className="form-control-file"
          id="doan2"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="anh2">Chọn ảnh số 2</label>
        <input
          onChange={(e) => handle(e)}
          type="file"
          className="form-control-file"
          id="anh2"
        />
      </div>
      <div className="form-group">
        <label htmlFor="doan3">Nhập nội dung đoạn 3</label>
        <textarea
          onChange={(e) => handle(e)}
          placeholder="Nội dung đoạn 3..."
          rows={4}
          className="form-control-file"
          id="doan3"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="anh3">Chọn ảnh số 3</label>
        <input
          onChange={(e) => handle(e)}
          type="file"
          className="form-control-file"
          id="anh3"
        />
      </div>
      <div className="form-group">
        <label htmlFor="doan4">Nhập nội dung đoạn 4</label>
        <textarea
          onChange={(e) => handle(e)}
          placeholder="Nội dung đoạn 4..."
          rows={4}
          className="form-control-file"
          id="doan4"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Đăng bài
      </button>
    </form>
  );
}
