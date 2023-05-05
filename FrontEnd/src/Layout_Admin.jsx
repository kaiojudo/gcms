import { Link, Outlet } from "react-router-dom";

export default function Layout_Admin() {
  return (
    <>
      <div id="container-admin" className="w-80 d-flex">
        <div className="select-form">
          <Link to={"/admin"}>Home</Link>
          <Link to={"/admin/post"}>Đăng bài</Link>
          <Link to={"/admin/postchuaduyet"}>Duyệt bài</Link>
        </div>
        <div className="form-add">
          <Outlet />
        </div>
      </div>
    </>
  );
}
