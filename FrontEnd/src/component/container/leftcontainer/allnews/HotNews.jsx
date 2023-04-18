import Giftcode from "./hotnews/Giftcode";
import SuperHotNews from "./hotnews/Superhotnews";


export default function HotNews() {

  return (
    <div id="hot-news" className="d-flex">
      <SuperHotNews/>
      <Giftcode/>
    </div>
  );
}
