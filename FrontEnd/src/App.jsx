import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./responsive.css";
import Cookies from "universal-cookie";
import Index from "./Layoutindex";
import Login from "./Layout_Login";
import Post from "./Layout_Post";
import Admin from "./Layout_Admin";
import Header from "./component/Header";
import Footer from "./component/Footer";
import AdminPost from "./component/admin/Post/AddPost";
import FormLog from "./component/Login";
import Register from "./component/Register";
import Category from "./component/category/Category_byId";
import Categorybychild from "./component/category/Category_bychildId";
import CategorybySearch from "./component/category/Category_bySearch";
import Notfound from "./component/Notfound";
import { ShowAll } from "./component/admin/Post/ShowAll";
import { DuyetBai } from "./component/admin/Post/Duyetbai";
import axios from "axios";
import ShowTheloai from "./component/admin/TheLoai/ShowTheloai";
import AddTheLoai from "./component/admin/TheLoai/AddTheLoai";
import TheloaiDeleted from "./component/admin/TheLoai/TheloaiDeleted";
import ShowChildTheLoai from "./component/admin/Child/ShowChildTheloai";
import ChildTheLoaiDeleted from "./component/admin/Child/ChildTheloaiDeleted";
import AddChildTheLoai from "./component/admin/Child/AddChildTheLoai";
import { ShowDelete } from "./component/admin/Post/ShowDelete";
import { ShowUser } from "./component/admin/User/ShowUser";
import AcceptUser from "./component/admin/User/AcceptUser";
import Update from "./component/admin/Post/UpdatePost";
import ShowAllUser from "./component/admin/User/ShowAllUser";
import UpdateUser from "./component/admin/User/UpdateUser";
import UpdateTheLoai from "./component/admin/TheLoai/UpdateTheLoai";
import UpdateChild from "./component/admin/Child/UpdateChild";
import ButtonScollToTop from "./ButtonScrollToTop";
import ChangePassword from "./component/admin/User/ChangePassword";

function App(props) {
  const cookies = new Cookies();
  const updatePosts = async () => {
    const res = await axios.patch(`http://localhost:3030/post/setafterdelete`);
    return res;
  };
  const updatePosts2 = async () => {
    const res = await axios.patch(`http://localhost:3030/post/setafterc`);
    return res;
  };
  updatePosts();
  updatePosts2();
  console.log(localStorage);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="logsign" element={<Login />}>
          <Route path="login" element={<FormLog />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/" element={<Index />} />
        <Route path="post/:id" element={<Post />} />
        <Route path="category/:id" element={<Category />}></Route>
        <Route path="categorybychild/:id" element={<Categorybychild />}></Route>
        <Route path="catebysearch" element={<CategorybySearch />}></Route>
        {cookies.get("level") === "1" && (
          <>
            <Route path="admin" element={<Admin />}>
              <Route path="" element={<ShowAll />} />
              <Route path="addpost" element={<AdminPost />} />
              <Route path="postchuaduyet" element={<DuyetBai />} />
              <Route path="theloai" element={<ShowTheloai />} />
              <Route path="addtheloai" element={<AddTheLoai />} />
              <Route path="theloaideleted" element={<TheloaiDeleted />} />
              <Route path="childtheloai" element={<ShowChildTheLoai />} />
              <Route
                path="returnchildtheloai"
                element={<ChildTheLoaiDeleted />}
              />
              <Route path="addchildtheloai" element={<AddChildTheLoai />} />
              <Route path="admindelete" element={<ShowDelete />} />
              <Route path="showalluser" element={<ShowAllUser />} />
              <Route path="acceptuser" element={<AcceptUser />} />
            </Route>
            <Route path="updatepost/:id" element={<Update />} />
            <Route path="yourinfo/:id" element={<ShowUser />} />
            <Route path="updatetheloai/:id" element={<UpdateTheLoai />} />
            <Route path="updatechild/:id" element={<UpdateChild />} />
            <Route path="updateuser" element={<UpdateUser />} />
            <Route path="changepassword" element={<ChangePassword />} />
          </>
        )}
        {cookies.get("level") === "2" && (
          <>
            <Route path="admin" element={<Admin />}>
              <Route path="" element={<ShowAll />} />
              <Route path="addpost" element={<AdminPost />} />
              <Route path="postchuaduyet" element={<DuyetBai />} />
            </Route>{" "}
            <Route path="updatepost/:id" element={<Update />} />
            <Route path="yourinfo" element={<ShowUser />} />
            <Route path="updateuser" element={<UpdateUser />} />
            <Route path="changepassword" element={<ChangePassword />} />
          </>
        )}{" "}
        <Route path="*" element={<Notfound />} />
      </Routes>{" "}
      <ButtonScollToTop />
      <Footer />
    </div>
  );
}

export default App;
