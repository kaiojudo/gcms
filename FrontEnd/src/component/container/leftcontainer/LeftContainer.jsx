import { Routes, Route } from "react-router-dom";
import AllNews from "./allnews";
import News from "./news";

export default function LeftContainer(props) {
  return (
    <div id="left-container">
     <AllNews/>
    </div>
  );
}
