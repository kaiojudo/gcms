import RightContainer from "./component/container/rightcontainer/RightContainer";

import News from "./component/container/leftcontainer/news";
export default function Layout_Post(id) {
  return (
    <>
      <div id="container" className="w-80 d-flex">
        <div id="left-container">
          <News />
        </div>
        <RightContainer />
      </div>
    </>
  );
}
