import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function News(props) {
  const params = useParams();
  const [datapost, setDataPost] = useState({});
  const [dataTacgia, setDataTacgia] = useState({});
  const [dataChild, setDataChild] = useState({});
  const [dataTheLoai, setDataTheLoai] = useState({});
  const urlPost = `http://localhost:3030/post/${params.id}`;
  useEffect(() => {
    fetch(urlPost)
      .then((response) => response.json())
      .then((e) => {
        const content = JSON.parse(e.result.content);
        e.content = content;
        setDataPost(e);
        console.log(e);
        
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
        case 'image':
            return (
                <img
                    src={block.data.file.url}
                    height='80%'
                    alt="Err"
                />
            )

        case 'paragraph':
            return (
                <p>{block.data.text}</p>
            )
        case 'list': {
            let list = ``;
            block.data.items.map((item, index) => (
                list += `<p classname='content-list'>${index + 1}: ${item.content}</p>`
            ))
            return (
                <div className="content-list-container" dangerouslySetInnerHTML={{ __html: list }} />
            );
        }



        default:
            break;
    }}
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
        <label htmlFor="" id="preshow-name">
          {datapost?.result?.tieudetin}
        </label>
        <img
          src={"../" + datapost?.result?.hinhtrichdan?.split("\\fakepath")[1]}
          alt=""
          id="prehinhtrichdan"
        ></img>
        <p id="trichdantin">{datapost?.result?.trichdantin}</p>
        {
                    datapost?.content?.blocks?.map(block => (
                        <div className="col-12 block-content" key={block.id}>
                            {handleRenderPostData(block)}
                        </div>
                    ))
                }
        <p id="tacgia">
          Tác giả:
          <i>{dataTacgia?.result?.hoten}</i>
        </p>
      </div>
    </>
  );
  
}
