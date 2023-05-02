import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

export default function News(props) {
  const params = useParams();
  const [datapost, setDataPost] = useState({});
  const [dataTacgia, setDataTacgia] = useState({});
  const [dataChild, setDataChild] = useState({});
  const [dataTheLoai, setDataTheLoai] = useState({});
  const urlPost = `http://localhost:3030/post/${params.id}`;
  const urlView = `http://localhost:3030/post/solandoc/${params.id}`;
  useEffect(() => {
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Origin", "http://localhost:3000");
    const updateview = async () => {
      const res = await axios.patch(urlView);
      return res;
    };
    updateview();
    fetch(urlPost)
      .then((response) => response.json())
      .then((e) => {
        const content = JSON.parse(e.result.content);
        e.content = content;
        setDataPost(e);

        const urlTacgia =
          "http://localhost:3030/user/findbyid/" + e.result.id_tacgia;
        fetch(urlTacgia)
          .then((response) => response.json())
          .then((dataTacgia) => {
            setDataTacgia(dataTacgia);
          });
        const urlchild =
          "http://localhost:3030/childtheloai/child/" +
          e.result.ID_child_theloai;
        // console.log(urlchild);
        fetch(urlchild)
          .then((response) => response.json())
          .then((datachild) => {
            setDataChild(datachild);
            const urlTheLoai =
              "http://localhost:3030/theloai/details/" +
              datachild.result.idTheLoai;
            // console.log(urlTheLoai);
            fetch(urlTheLoai)
              .then((response) => response.json())
              .then((datatheloai) => {
                setDataTheLoai(datatheloai);
              });
          });
      });
    // eslint-disable-next-line
  }, [params.id]);
  function handleRenderPostData(block) {
    switch (block.type) {
      case "image":
        return <img src={block.data.file.url} alt="Err" />;
      case "header": {
        if (block.data.level === 2)
          return (
            <h2 className="text-data">
              <strong>{block.data.text}</strong>
            </h2>
          );
        if (block.data.level === 3)
          return (
            <h3 className="text-data">
              <strong>{block.data.text}</strong>
            </h3>
          );
        if (block.data.level === 4)
          return (
            <h4 className="text-data">
              <strong>{block.data.text}</strong>
              <strong></strong>
            </h4>
          );
      } // eslint-disable-next-line
      case "paragraph":
        return <p className="text-data">{block.data.text}</p>;
      case "list": {
        let list = ``;
        block.data.items.map(
          (item, index) =>
            (list += `<li classname='content-list'><strong> ${item.content}</strong></li>`)
        );
        return (
          <div
            className="content-list-container"
            dangerouslySetInnerHTML={{ __html: list }}
          />
        );
      }

      case "linkTool":
        return <Link to={block.data.link}>{block.data.link}</Link>;
      case "table": {
        let table = ``;
        block.data.content.map((e) => {
          table += `<tr>`;
          e.map((tr) => {
            table += `<td>`;
            table += `${tr}`;
            table += `</td>`;
            return 1;
          });
          table += `</tr>`;
          return 1;
        });
        return (
          <table
            className="content-table"
            dangerouslySetInnerHTML={{ __html: table }}
          />
        );
      }

      case "embed": {
        return (
          <>
            <iframe
              className="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              src={`${block.data.embed}`}
              width="100%"
              title={block.data.id}
            />
            <i className="caption-link">{block.data.caption}</i>
          </>
        );
      }
      default:
        break;
    }
  }
  return (
    <>
      <div className="linkfrom">
        <i className="fa-solid fa-house"></i>
        <i className="fa-solid fa-caret-right"></i>
        <span>{dataTheLoai?.result?.tenTheLoai}</span>
        <i className="fa-solid fa-caret-right"></i>
        <span>{dataChild?.result?.ten_child_theloai}</span>
      </div>

      <div className="post-details">
        <p id="preshow-name">{datapost?.result?.tieudetin}</p>
        <img
          src={"../" + datapost?.result?.hinhtrichdan?.split("C:fakepath")[1]}
          alt=""
          id="prehinhtrichdan"
        ></img>
        <p id="trichdantin">{datapost?.result?.trichdantin}</p>
        {datapost?.content?.blocks?.map((block) => (
          <div className="col-12 block-content" key={block.id}>
            {handleRenderPostData(block)}
          </div>
        ))}
        <p id="soluotdoc"><i className="fa-solid fa-eye"></i> {datapost?.result?.solandoc}</p>
        <p id="tacgia">
          Tác giả:
          <i>{dataTacgia?.result?.hoten}</i>
        </p>
      </div>
    </>
  );
}
