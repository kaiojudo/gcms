import { Link } from "react-router-dom";
const Posts = ({ posts }) => {
  return (
    <ul className="news-list">
      {posts?.map((e) => (
        <li className="news d-flex bd-bt" key={e.idtintuc}>
          <Link to={`/post/${e.idtintuc}`} className="img-tieude">
            <img src={"../" + e.hinhtrichdan.split("C:fakepath")[1]} alt="" />
          </Link>
          <div>
            <Link to={`/post/${e.idtintuc}`} className="news-title">
              {e.tieudetin}
            </Link>
            <p className="news-date">
              Ngày sửa đổi: {e.ngaycapnhat?.split("T17:00:00.000Z")[0]}
            </p>
            <p className="news-decscript">{e.trichdantin}</p>
          </div>
        </li>
      ))}
      <div className="clear" />
    </ul>
  );
};
export default Posts;
