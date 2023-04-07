import { Routes, Route } from "react-router-dom";
import Post from "./component/admin/Post";
export default function Layout_Admin() {
  return (
    <div className="w-80">
      <h1>Hello Admin</h1>
      <Routes>
        <Route path="post" element = {<Post/>}/>
      </Routes>
    </div>
  );
}
