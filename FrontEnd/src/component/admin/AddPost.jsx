import { useState, useEffect } from "react";
import Axios from "axios";
import EditorJS from "@editorjs/editorjs";
import Editor from "./EditorComponent";

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
  const urlChild = "http://localhost:3030/childtheloai/showlist";
  useEffect(() => {
    fetch(urlChild)
      .then((response) => response.json())
      .then((data) => {
        setDataChildTheLoai(data);
      });
  }, []);
  const [dataUser, setDataUser] = useState({});
  const urlUser = "http://localhost:3030/user/showlist";
  useEffect(() => {
    fetch(urlUser)
      .then((response) => response.json())
      .then((data) => {
        setDataUser(data);
      });
  }, []);
  const [dataDanhmuc, setDataDanhmuc] = useState({});

  const urlphanloaitin = "http://localhost:3030/danhmuc/showlist";
  useEffect(() => {
    fetch(urlphanloaitin)
      .then((response) => response.json())
      .then((data) => {
        setDataDanhmuc(data);
      });
  }, []);
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    // console.log(newdata);
  }
  // Xem trước
  function CheckForm() {
    const tieudetin = document.getElementById("tieudetin").value;
    const hinhtrichdan = document
      .getElementById("hinhtrichdan")
      .value.split("fakepath\\")[1];
    const anh1 = document.getElementById("anh1").value?.split("fakepath\\")[1];
    const anh2 = document.getElementById("anh2").value?.split("fakepath\\")[1];
    const anh3 = document.getElementById("anh3").value?.split("fakepath\\")[1];
    const anh4 = document.getElementById("anh4").value?.split("fakepath\\")[1];
    const anh5 = document.getElementById("anh5").value?.split("fakepath\\")[1];
    const anh6 = document.getElementById("anh6").value?.split("fakepath\\")[1];
    const anh7 = document.getElementById("anh7").value?.split("fakepath\\")[1];
    const anh8 = document.getElementById("anh8").value?.split("fakepath\\")[1];
    const doan1 = document.getElementById("doan1").value;
    const doan2 = document.getElementById("doan2").value;
    const doan3 = document.getElementById("doan3").value;
    const doan4 = document.getElementById("doan4").value;
    const doan5 = document.getElementById("doan5").value;
    const doan6 = document.getElementById("doan6").value;
    const doan7 = document.getElementById("doan7").value;
    const doan8 = document.getElementById("doan8").value;

    document.getElementById("preshow-name").innerText = tieudetin;
    document.getElementById("prehinhtrichdan").src = "../" + hinhtrichdan;
    document.getElementById("img1").src = "../" + anh1;
    document.getElementById("img2").src = "../" + anh2;
    document.getElementById("img3").src = "../" + anh3;
    document.getElementById("img4").src = "../" + anh4;
    document.getElementById("img5").src = "../" + anh5;
    document.getElementById("img6").src = "../" + anh6;
    document.getElementById("img7").src = "../" + anh7;
    document.getElementById("img8").src = "../" + anh8;
    document.getElementById("preshow-1").innerText = doan1;
    document.getElementById("preshow-2").innerText = doan2;
    document.getElementById("preshow-3").innerText = doan3;
    document.getElementById("preshow-4").innerText = doan4;
    document.getElementById("preshow-5").innerText = doan5;
    document.getElementById("preshow-6").innerText = doan6;
    document.getElementById("preshow-7").innerText = doan7;
    document.getElementById("preshow-8").innerText = doan8;
    const premenu = document.getElementById("preshow");
    const form = document.getElementById("form-baiviet");
    form.classList.add("op-5");
    premenu.classList.add("d-block");
  }
  // Đóng mở menu xem trc
  function Hiden() {
    const premenu = document.getElementById("preshow");
    premenu.classList.remove("d-block");
    const form = document.getElementById("form-baiviet");
    form.classList.remove("op-5");
  }
  function submit(e) {
    e.preventDefault();
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
      anh4: data.anh4,
      anh5: data.anh5,
      anh6: data.anh6,
      anh7: data.anh7,
      anh8: data.anh8,
      doan1: data.doan1,
      doan2: data.doan2,
      doan3: data.doan3,
      doan4: data.doan4,
      doan5: data.doan5,
      doan6: data.doan6,
      doan7: data.doan7,
      doan8: data.doan8,
    }).then((res) => {
      console.log(res.data);
    });
  }

  return (
    <>
      <form
        id="form-baiviet"
        className="form-baiviet"
        onSubmit={(e) => submit(e)}
      >
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
            <option>Chọn thể loại</option>
            {dataChildTheLoai?.result?.map((e) => (
              <option key={e.ID_child_theloai} value={e.ID_child_theloai}>
                {e.ten_child_theloai}
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
            <option>Chọn phân loại tin</option>
            {dataDanhmuc?.result?.map((e) => (
              <option key={e.id_phanloaitin} value={e.id_phanloaitin}>
                {e.ten_phanloaitin}
              </option>
            ))}
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
            <option value="Demo">Chọn tác giả</option>

            {dataUser?.result?.map((e) => (
              <option key={e.id_thanhvien} value={e.id_thanhvien}>
                {e.hoten}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="ngaycapnhat">Ngày cập nhật</label>
          <input
            onChange={(e) => handle(e)}
            type="datetime"
            className="form-control"
            id="ngaycapnhat"
            placeholder="yyyy-mm-dd ..."
          />
        </div>
        <Editor />
        <div className="d-flex">
          <button type="submit" className="btn btn-primary">
            Đăng bài
          </button>
          <button className="show" type="button" onClick={CheckForm}>
            <i className="fa-solid fa-eye"></i>
          </button>
        </div>
      </form>
      {/* <div id="preshow">
        <div className="preshow-post">
          <label htmlFor="" id="preshow-name">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            commodi? Incidunt voluptate eius eum molestiae a maiores mollitia
            esse. Non delectus facere eum exercitationem consequuntur debitis,
            repellat provident dolorem quod!
          </label>
          <img
            src="../demo.jpg"
            alt="Chưa có ảnh rồi :))"
            id="prehinhtrichdan"
          ></img>
          <p id="preshow-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            error, cupiditate praesentium quo iste ut impedit. Eveniet
            repellendus laborum ipsa error quia at exercitationem reiciendis
            consectetur qui illo. Totam, hic!
          </p>
          <img src="../demo.jpg" alt="Chưa có ảnh rồi :))" id="img1" />
          <p id="preshow-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quae
            voluptatum voluptatem tenetur reiciendis sunt sit magni ab. Ex,
            natus reprehenderit non labore ea nam nesciunt a accusamus deserunt
            aliquid.
          </p>
          <img src="../demo.jpg" alt="Chưa có ảnh rồi :))" id="img2" />
          <p id="preshow-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            aut temporibus labore dignissimos ducimus at, voluptatem nihil
            cupiditate animi repellat suscipit quisquam nostrum beatae,
            repudiandae impedit obcaecati minima necessitatibus ipsum.
          </p>
          <img src="../demo.jpg" alt="Chưa có ảnh rồi :))" id="img3" />
          <p id="preshow-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            sunt veniam aspernatur temporibus sed corporis id, deleniti officia
            optio eaque, aliquid quidem necessitatibus. Provident dolorum ad
            ipsa eum vero? Labore.
          </p>
          <img src="../demo.jpg" alt="Chưa có ảnh rồi :))" id="img4" />
          <p id="preshow-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            sunt veniam aspernatur temporibus sed corporis id, deleniti officia
            optio eaque, aliquid quidem necessitatibus. Provident dolorum ad
            ipsa eum vero? Labore.
          </p>
          <img src="../demo.jpg" alt="Chưa có ảnh rồi :))" id="img5" />
          <p id="preshow-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            sunt veniam aspernatur temporibus sed corporis id, deleniti officia
            optio eaque, aliquid quidem necessitatibus. Provident dolorum ad
            ipsa eum vero? Labore.
          </p>
          <img src="../demo.jpg" alt="Chưa có ảnh rồi :))" id="img6" />
          <p id="preshow-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            sunt veniam aspernatur temporibus sed corporis id, deleniti officia
            optio eaque, aliquid quidem necessitatibus. Provident dolorum ad
            ipsa eum vero? Labore.
          </p>
          <img src="../demo.jpg" alt="Chưa có ảnh rồi :))" id="img7" />
          <p id="preshow-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            sunt veniam aspernatur temporibus sed corporis id, deleniti officia
            optio eaque, aliquid quidem necessitatibus. Provident dolorum ad
            ipsa eum vero? Labore.
          </p>
          <img src="../demo.jpg" alt="Chưa có ảnh rồi :))" id="img8" />
          <p id="tacgia">
            Tác giả:
            <i>Hiếu tóc dài</i>
          </p>
        </div>
        <div className="close-modal" onClick={Hiden}>
          <i className="fa-solid fa-rectangle-xmark fa-xl"></i>
        </div>
      </div> */}
    </>
  );
}
