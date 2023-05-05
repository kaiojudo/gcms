import React, { useEffect, useState, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import ImageTool from "@editorjs/image";
import Table from "@editorjs/table";
import Embed from "@editorjs/embed";
import NestedList from "@editorjs/nested-list";
import LinkTool from "@editorjs/link";
import Header from "@editorjs/header";
import Axios from "axios";

export default function AddPost() {
  const url = "http://localhost:3030/post/add";
  const [data, setData] = useState({});

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
    console.log(newdata);
  }
  const editorRef = useRef();
  useEffect(() => {
    if (!editorRef.current) {
      const editor = new EditorJS({
        holder: "editorjs",
        placeholder: "Ấn vào đây để tạo nội dung",
        tools: {
          table: Table,
          header: {
            class: Header,
            config: {
              placeholder: "Enter a header",
              levels: [2, 3, 4],
              defaultLevel: 3,
            },
          },
          image: {
            class: ImageTool,
            config: {
              endpoints: {
                byFile: "http://localhost:3030/upload_image_editorjs",
                byUrl: "http://localhost:3030/upload_image_editorjs",
              },

              field: "image",
              types: "image/*",
            },
          },
          list: {
            class: NestedList,
            inlineToolbar: true,
            config: {
              defaultStyle: "ordered",
            },
          },
          linkTool: {
            class: LinkTool,
            config: {
              endpoint: "http://localhost:3030/fetchUrl", // Your backend endpoint for url data fetching,
            },
          },
          embed: {
            class: Embed,
            config: {
              services: {
                youtube: true,
                coub: true,
                facebook: true,
                instagram: true,
                twitter: true,
              },
            },
          },
        },
      });

      editorRef.current = editor;
    }
    return () => {
      if (editorRef.current || editorRef.current.destroy) {
        editorRef.current.destroy();
      }
    };
  }, []);

  // submit posts
  async function submit(e) {
    e.preventDefault();
    let content = {};
    await editorRef.current
      .save()
      .then((outputData) => {
        content = { ...outputData };
      })
      .catch((error) => {
        console.log("Saving failed: ", error);
      });
    const postdata = { ...data, ...content };
    var myJsonString = JSON.stringify(postdata);
    console.log(myJsonString);
    Axios({
      method: "post",
      url: url,
      data: postdata,
    })
      .then((e) => {
        if (e.result === 0) {
          alert(
            "Đăng bài thất bại do trong bài viết bạn có thể có ký tự đặc biệt, biểu cảm. Hoặc do bạn coppy link ( Hãy dùng thẻ link )"
          );
        }
        if (!postdata.tieudetin || !postdata.ID_child_theloai || !postdata.id_phanloaitin || !postdata.id_tacgia || !postdata.ngaycapnhat){
          alert("Quên điền kìa")
        } else {
          alert("Chờ duyệt nhé!");
        }
      })
      .catch(() => {
        alert("Đăng bài thất bại do lỗi hệ thống!");
      });
  }
  return (
    <>
      <label htmlFor="" className="lable-admin">
        Đăng bài
      </label>
      <form
        id="form-baiviet"
        className="form-baiviet"
        onSubmit={(e) => submit(e)}
      >
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
        <div id="editorjs"></div>
        <div className="d-flex">
          <button type="submit" className="btn btn-primary">
            Đăng bài
          </button>
          <button className="show" type="button">
            <i className="fa-solid fa-eye"></i>
          </button>
        </div>
      </form>
    </>
  );
}
