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

function App(props) {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Index />} />
        <Route path="post/:id" element={<Post />} />
        <Route path="admin" element={<Admin />}>
          <Route path="post" element={<AdminPost />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
