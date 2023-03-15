import { useContext } from "react";

import Card from "../ui/card";
import "./meetItems.css";
import FavContext from "../../store/fav-context";

export const MeetItem = (props) => {
  const favCtx = useContext(FavContext);

  const itemIsFav = favCtx.itemIsFav(props.id);

  const toggleFavStatusHandler = () => {
    if (itemIsFav) {
      favCtx.removeFav(props.id);
    } else {
      favCtx.addFav({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.descripition,
      });
    }
  };

  return (
    <li className="item">
      <Card>
        <div className="image">
          <img src={props.image} alt={props.title} />
        </div>

        <div className="content">
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>

        <div className="actions">
          <button onClick={toggleFavStatusHandler}>
            {itemIsFav ? "Remove From Favorites" : "Add To Favorite"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetItem;
