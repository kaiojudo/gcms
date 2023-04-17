import NewbieGuild from "./newbie-guild";
import TeyvatNews from "./TeyvatNews";
import TopGameReview from "./top-game-review";

export default function RightContainer() {
  return (
    <div id="right-container">
      <TeyvatNews/>
      <NewbieGuild/>
      <TopGameReview/>
    </div>
  );
}
