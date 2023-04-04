import GameNew from "./leftcontainer/game-new";
import HotNews from "./leftcontainer/hot-news";
import HotNewsGame from "./leftcontainer/hot-news-game";
import News from "./leftcontainer/news";
import Pagi from "./leftcontainer/pagi";

export default function LeftContainer() {
  return (
    <>
      <div id="left-container">
        {/* <HotNews />
        <HotNewsGame />
        <GameNew />
        <Pagi/> */}
        <News/>
      </div>
    </>
  );
}
