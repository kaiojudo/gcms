import { Outlet } from "react-router-dom";

export default function Layout_Login() {
  return (
      <div className="w-80 d-flex">
        <Outlet/>
      </div>
  );
}
