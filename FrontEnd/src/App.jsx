import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./responsive.css";
import Index from "./Layoutindex";
import Login from "./Layout_Login";
import Post from "./Layout_Post";
import Admin from "./Layout_Admin";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="login" element={<Login />} />
        <Route path="post" element={<Post />} />
        <Route path="admin" element={<Admin />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
