import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Giftcode from "./hotnews/Giftcode";
import SuperHotNews from "./hotnews/Superhotnews";


export default function HotNews() {
  const [dataGiftcode, setDataGiftcode] = useState({});
  const urlgiftcode = "http://localhost:3030/post/giftcode/showall";
  useEffect(() => {
    fetch(urlgiftcode)
      .then((response) => response.json())
      .then((data) => {
        setDataGiftcode(data);
      });
  }, []);
  return (
    <div id="hot-news" className="d-flex">
      <SuperHotNews/>
      <Giftcode/>
    </div>
  );
}
