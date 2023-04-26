import { Outlet } from "react-router-dom";
import Login from "./component/Login";

export default function Layout_Login() {
  return (
      <div className="w-80 d-flex">
        <Login/>
      </div>
  );
}
