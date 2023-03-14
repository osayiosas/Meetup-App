import Card from '../ui/card';
import "./meetItems.css";

export const MeetItem = (props) => {
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
          <button>To Favorites</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetItem;
