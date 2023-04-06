import NewbieGuild from "./newbie-guild";
import RightContentNews from "./right-content-news";
import TopGameReview from "./top-game-review";

export default function RightContainer() {
  return (
    <div id="right-container">
      <RightContentNews/>
      <NewbieGuild/>
      <TopGameReview/>
    </div>
  );
}
