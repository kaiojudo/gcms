import { Link, Outlet } from "react-router-dom";

export default function Layout_Admin() {
  return (
    <>
      <div id="container-admin" className="w-80 d-flex">
        <div className="select-form">
          <Link to={"/admin"}>Home</Link>
       
          <Link to={"/admin/theloai"}>Quản lý thể loại</Link>
          <Link to={"/admin/childtheloai"}>Quản lý thể loại con</Link>


        </div>
        <div className="form-add">
          <Outlet />
        </div>
      </div>
    </>
  );
}
