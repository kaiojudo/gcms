import LeftContainer from "./component/container/LeftContainer";
import RightContainer from "./component/container/RightContainer";
import Header from "./component/Header";
import Footer from "./component/Footer";

export default function LayoutIndex() {
  return (
    <>
    <Header />
      <div id="container" className="w-80 d-flex">
        <LeftContainer />
        <RightContainer />
      </div>
      <Footer/>
    </>
  );
}
