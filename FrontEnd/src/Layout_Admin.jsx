import { Link, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";


export default function Layout_Admin() {
  const cookies = new Cookies();
  const level = cookies.get('level');
  return (
    <>
      <div id="container-admin" className="w-80 d-flex">
        <div className="select-form">
          <Link to={"/admin"}>Home</Link>

          {level === "1" && (
            <>
              <Link to={"/admin/theloai"}>Quản lý thể loại</Link>
              <Link to={"/admin/childtheloai"}>Quản lý thể loại con</Link>
              <Link to={"/admin/showalluser"}>Quản lý CTV</Link>
            </>
          )}
        </div>
        <div className="form-add admin-container">
          <Outlet />
        </div>
      </div>
    </>
  );
}
