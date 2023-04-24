import GameNew from "./allnews/game-new";
import HotNews from "./allnews/HotNews";
import HotNewsGame from "./allnews/NewGame";

export default function AllNews() {
  return (
    <>
      <HotNews />
      <HotNewsGame />
      <GameNew />
    </>
  );
}
