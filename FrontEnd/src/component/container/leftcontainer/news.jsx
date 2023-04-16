import { useEffect, useState } from "react";

export default function News() {
  const [datapost, setDataPost] = useState({});
  const urlPost = "http://localhost:3030/post/7";
  useEffect(() => {
    fetch(urlPost)
      .then((response) => response.json())
      .then((data) => {
        setDataPost(data);
      });
  }, []);
  console.log(datapost?.result?.tieudetin);
  return (
    <>
      <div className="linkfrom">
        <i className="fa-solid fa-house"></i>
        <i className="fa-solid fa-caret-right"></i>
        <span>Game</span>
      </div>

      <div className="post-details">
        <label htmlFor="" id="preshow-name">
          {datapost?.result?.tieudetin}
        </label>
        <img
          src={datapost?.result?.hinhtrichdan}
          alt=""
          id="prehinhtrichdan"
        ></img>
        <p id="preshow-1">{datapost?.result?.doan1}</p>
        <img src={datapost?.result?.anh1} alt="" id="img1" />
        <p id="preshow-2">{datapost?.result?.doan2}</p>
        <img src={datapost?.result?.anh2} alt="" id="img2" />
        <p id="preshow-3">{datapost?.result?.doan3}</p>
        <img src={datapost?.result?.anh3} alt="" id="img3" />
        <p id="preshow-4">{datapost?.result?.doan4}</p>
        <p id="tacgia">
          Tác giả:
          <i></i>
        </p>
      </div>
    </>
  );
}
