import React from "react";
import FadeLoader from "react-spinners/FadeLoader";
function Loading() {
  return (
    <div id="wrap-loading">
      <div id="spinner-loading">
        <FadeLoader />
      </div>
    </div>
  );
}
export default Loading;
