import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../../Loading";

export default function NewbieGuild() {
  const [dataguild, setDataGuild] = useState({});
  const [loading, setLoading] = useState(true);

  const url = "http://localhost:3030/post/newbieguild/showall";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDataGuild(data);
        setLoading(false);
      });
  }, []);
  return (
    <div id="newbie-guild" className="right-list">
      <label htmlFor="" className="label label-newbie-guild">
        Newbie-guild
      </label>
      {loading === true && <Loading />}

      <ul className="right-content-news-list">
        {dataguild?.result?.map((e) => (
          <li className="right-content-news bd-bt" key={e.idtintuc}>
            <Link to={`/post/${e.idtintuc}`}>{e.tieudetin}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
