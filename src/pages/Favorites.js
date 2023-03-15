import { useContext } from "react";

import { FavContext } from "../store/fav-context";
import {MeetUpList} from '../components/meetups/MeetUpList'

export const Favorites = () =>
{
  
  const favCtx = useContext(FavContext);

  let content;

  if (favCtx.totalfav === 0) {
    content = <p>You got No Favorite yet. Start adding Some?</p>
  } else {
    content = <MeetUpList meetup={favCtx.favCtx} />
  }

  return (
    <section>
      <h1>My Favorite</h1>
      {content}
    </section>
  );
}

export default Favorites
