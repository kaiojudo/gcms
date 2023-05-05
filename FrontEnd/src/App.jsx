import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./responsive.css";
import Index from "./Layoutindex";
import Login from "./Layout_Login";
import Post from "./Layout_Post";
import Admin from "./Layout_Admin";
import Header from "./component/Header";
import Footer from "./component/Footer";
import AdminPost from "./component/admin/AddPost";
import FormLog from "./component/Login";
import Register from "./component/Register";
import Category from "./component/category/Category_byId";
import Categorybychild  from "./component/category/Category_bychildId";
import Notfound from "./component/Notfound";
import { ShowAll } from "./component/admin/ShowAll";
import { DuyetBai } from "./component/admin/Duyetbai";

function App(props) {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="logsign" element = {<Login/>}>
          <Route path="login" element = {<FormLog/>}/>
          <Route path="register" element = {<Register/>}/>
        </Route>
        <Route path="/" element={<Index />} />
        <Route path="post/:id" element={<Post />} />
        <Route path="admin" element={<Admin />}>
          <Route path="" element={<ShowAll />} />
          <Route path="post" element={<AdminPost />} />
          <Route path="postchuaduyet" element={<DuyetBai />} />
        </Route>
        <Route path="category/:id" element={<Category />}></Route>
        <Route path="categorybychild/:id" element={<Categorybychild />}></Route>

        <Route path='*' element={<Notfound />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
