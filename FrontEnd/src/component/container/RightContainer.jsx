import NewbieGuild from "./rightcontainer/newbie-guild";
import RightContentNews from "./rightcontainer/right-content-news";
import TopGameReview from "./rightcontainer/top-game-review";

export default function RightContainer() {
  return (
    <div id="right-container">
      <RightContentNews/>
      <NewbieGuild/>
      <TopGameReview/>
    </div>
  );
}
