import Footer from "./layout/Footer";
import Header from "./layout/Header";
import LeftContainer from "./container/LeftContainer";
import RightContainer from "./container/RightContainer";
import Login from "./container/Login";

export default function Layout() {
  return (
    <>
      <Header />
      <div id="container" className="w-80 d-flex">
        {/* <Login/> */}
        <LeftContainer />
        <RightContainer />
      </div>
      <Footer />
    </>
  );
}
