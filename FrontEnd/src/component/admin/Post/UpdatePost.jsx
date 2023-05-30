import React, { useEffect, useState, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import ImageTool from "@editorjs/image";
import Table from "@editorjs/table";
import Embed from "@editorjs/embed";
import NestedList from "@editorjs/nested-list";
import LinkTool from "@editorjs/link";
import Header from "@editorjs/header";
import { useParams, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

export default function Update() {
  const url = "http://localhost:3030/post/update";
  const params = useParams();
  const cookie = new Cookies();
  let navigate = useNavigate();

  const idtacgia = cookie.get("id");
  const [data, setData] = useState({
    id_tacgia: idtacgia,
    idtintuc: params.id,
    kiemduyet: 0,
  });
  const [post, setPost] = useState({});
  const urlpost = `http://localhost:3030/post/${params.id}`;
  useEffect(() => {
    fetch(urlpost)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        let content = {};
        try {
          content = { ...JSON.parse(data?.result?.content) };
        } catch {
          console.log("ERR");
        }
        if (!editorRef.current) {
          const editor = new EditorJS({
            holder: "editorjs",
            placeholder: "Ấn vào đây để tạo nội dung",
            data: {
              blocks: content.blocks,
            },
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
    // eslint-disable-next-line
  }, []);
  // const [dataChildTheLoai, setDataChildTheLoai] = useState({});
  // const urlChild = "http://localhost:3030/childtheloai/showlist";
  // useEffect(() => {
  //   fetch(urlChild)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setDataChildTheLoai(data);
  //     });
  // }, []);
  // const [dataDanhmuc, setDataDanhmuc] = useState({});

  // const urlphanloaitin = "http://localhost:3030/danhmuc/showlist";
  // useEffect(() => {
  //   fetch(urlphanloaitin)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setDataDanhmuc(data);
  //     });
  // }, []);
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  const editorRef = useRef();
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
    const postdata = { ...data.r, ...content };

    postdata.idtintuc = params.id;
    postdata.tieudetin = document.getElementById("tieudetin")?.value;
    postdata.trichdantin = document.getElementById("trichdantin")?.value;
    if (!document.getElementById("hinhtrichdan")?.value) {
      postdata.hinhtrichdan = document.getElementById("hinhtrichdan")?.alt;
    } else {
      postdata.hinhtrichdan = document
        .getElementById("hinhtrichdan")
        ?.value.split("C:\\fakepath\\")[1];
    }
    postdata.ngaycapnhat = document
      .getElementById("ngaycapnhat")
      ?.value.split("T17:00:00.000Z")[0];
    console.log(JSON.stringify(postdata));
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postdata),
    })
      .then((e) => {
        if (!e) {
          alert(
            "Đăng bài thất bại do trong bài viết bạn có thể có ký tự đặc biệt, biểu cảm. Hoặc do bạn coppy link ( Hãy dùng thẻ link )"
          );
        } else if (!postdata.tieudetin || !postdata.ngaycapnhat) {
          alert("Vui lòng điền đầy đủ thông tin");
        } else {
          alert("Chờ duyệt nhé!");
          navigate("/admin", { replace: false });

          // console.log(e);
        }
      })
      .catch(() => {
        alert("Đăng bài thất bại do lỗi hệ thống!");
      });
  }
  return (
    <div className="container ">
      <label htmlFor="" className="lable-admin">
        Sửa bài
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
            defaultValue={post?.result?.tieudetin}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hinhtrichdan">Chọn ảnh đại diện cho bài viết</label>
          <input
            onChange={(e) => handle(e)}
            type="file"
            className="form-control-file"
            id="hinhtrichdan"
            alt={post?.result?.hinhtrichdan}
            // defaultValue=
          />
          <img
            id="default-img"
            src={"../" + post?.result?.hinhtrichdan}
            alt="Ảnh cũ"
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
            defaultValue={post?.result?.trichdantin}
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="ID_child_theloai">Lựa chọn thể loại Con</label>
          <select
            className="form-control"
            id="ID_child_theloai"
            onChange={(e) => handle(e)}
          >
            <option value={post?.result?.ID_child_theloai}>
              Chọn thể loại
            </option>
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
            <option value={post?.result?.id_phanloaitin}>
              Lựa chọn phân loại tin
            </option>
            {dataDanhmuc?.result?.map((e) => (
              <option key={e.id_phanloaitin} value={e.id_phanloaitin}>
                {e.ten_phanloaitin}
              </option>
            ))}
          </select>
        </div> */}
        <div className="form-group">
          <label htmlFor="ngaycapnhat">Ngày cập nhật</label>
          <input
            onChange={(e) => handle(e)}
            type="datetime"
            className="form-control"
            id="ngaycapnhat"
            placeholder="yyyy-mm-dd ..."
            defaultValue={post?.result?.ngaycapnhat}
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
    </div>
  );
}
