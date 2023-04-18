import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Giftcode() {
  const [dataGiftcode, setDataGiftcode] = useState({});
  const urlgiftcode = "http://localhost:3030/post/giftcode/showall";
  useEffect(() => {
    fetch(urlgiftcode)
      .then((response) => response.json())
      .then((data) => {
        setDataGiftcode(data);
      });
  }, []);
  return (
    <div id="giftcode">
      <label htmlFor="" className="label">
        Giftcode
      </label>
      <ul className="giftcode-category">
        {dataGiftcode?.result?.map((e) => (
          <Link to={`/post/${e.idtintuc}`} key={e.idtintuc}>
            <li className="giftcode-item">
              <img
                src={"../" + e.hinhtrichdan?.split("\\fakepath")[1]}
                alt=""
              />
              <div className="giftcode-info">
                <div className="giftcode-name">
                  <p>{e.tieudetin}</p>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
