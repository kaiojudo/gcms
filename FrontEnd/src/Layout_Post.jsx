import RightContainer from "./component/container/rightcontainer/RightContainer";
import News from "./component/container/leftcontainer/news";
import Ide from "./component/container/leftcontainer/Ide";
export default function Layout_Post() {
  return (
    <>
      <div id="container" className="w-80 d-flex layout_post">
        <div id="left-container">
          <News />
          <Ide/>
        </div>
        <RightContainer />
      </div>
    </>
  );
}
