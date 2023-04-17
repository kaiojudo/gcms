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
      .then((data) => {
        setDataPost(data);
        const urlTacgia =
          "http://localhost:3030/user/findbyid/" + data.result.id_tacgia;
        // console.log(urlTacgia);
        fetch(urlTacgia)
          .then((response) => response.json())
          .then((dataTacgia) => {
            setDataTacgia(dataTacgia);
          });
        const urlchild =
          "http://localhost:3030/childtheloai/child/" +
          data.result.ID_child_theloai;
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
        <p id="preshow-1">{datapost?.result?.doan1}</p>
        <img src={"../" + datapost?.result?.anh1?.split("\\fakepath")[1]} alt="" id="img1" />
        <p id="preshow-2">{datapost?.result?.doan2}</p>
        <img src={"../" + datapost?.result?.anh2?.split("\\fakepath")[1]} alt="" id="img2" />
        <p id="preshow-3">{datapost?.result?.doan3}</p>
        <img src={"../" + datapost?.result?.anh3?.split("\\fakepath")[1]} alt="" id="img3" />
        <p id="preshow-4">{datapost?.result?.doan4}</p>
        <img src={"../" + datapost?.result?.anh4?.split("\\fakepath")[1]} alt="" id="img4" />
        <p id="preshow-5">{datapost?.result?.doan5}</p>
        <img src={"../" + datapost?.result?.anh5?.split("\\fakepath")[1]} alt="" id="img5" />
        <p id="preshow-6">{datapost?.result?.doan6}</p>
        <img src={"../" + datapost?.result?.anh6?.split("\\fakepath")[1]} alt="" id="img6" />
        <p id="preshow-7">{datapost?.result?.doan7}</p>
        <img src={"../" + datapost?.result?.anh7?.split("\\fakepath")[1]} alt="" id="img7" />
        <p id="preshow-8">{datapost?.result?.doan8}</p>
        <img src={"../" + datapost?.result?.anh8?.split("\\fakepath")[1]} alt="" id="img8" />
        <p id="tacgia">
          Tác giả:
          <i>{dataTacgia?.result?.hoten}</i>
        </p>
      </div>
    </>
  );
}
