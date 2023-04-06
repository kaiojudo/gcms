import Pagi from "./allnews/pagi";
import GameNew from "./allnews/game-new";
import HotNews from "./allnews/hot-news";
import HotNewsGame from "./allnews/hot-news-game";

export default function AllNews() {
  return (
    <>
      <HotNews />  
      <HotNewsGame />
      <GameNew />
      <Pagi />
    </>
  );
}
