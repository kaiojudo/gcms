import LeftContainer from "./component/container/leftcontainer/LeftContainer";
import RightContainer from "./component/container/rightcontainer/RightContainer";


export default function LayoutIndex() {
  return (
      <div id="container" className="w-80 d-flex">
        <LeftContainer />
        <RightContainer />
      </div>
  );
}
