import { Routes, Route } from "react-router-dom";
import AllNews from "./leftcontainer/allnews";
import News from "./leftcontainer/news";

export default function LeftContainer(props) {
  return (
    <div id="left-container">
     <AllNews/>
    </div>
  );
}
