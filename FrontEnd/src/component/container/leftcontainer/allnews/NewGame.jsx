import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function NewGame() {
  const [newgame, setnewGame] = useState({});
  const url = "http://localhost:3030/post/newgames/showall";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setnewGame(data);
        console.log(data.result[0].tieudetin.split(" – "));
      });
  }, []);
  return (
    <div id="hot-news-game" className="bd-bt">
      <label htmlFor="" className="label">
        Game Mới
      </label>
      <ul className="d-flex tab-game-list">
        {newgame?.result?.map((e) => (
          <li className="tab-game-item" key={e.idtintuc}>
            <Link to={`/post/${e.idtintuc}`}>
              <img
                src={"../" + e?.hinhtrichdan?.split("C:fakepath")[1]}
                alt=""
              />
              <div className="gamename">{e.tieudetin.split(" - ")[0]}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
