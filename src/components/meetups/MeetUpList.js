import MeetUpItem from "./MeetItem";
import "./MeetUpList.css";

export const MeetUpList = (props) =>
{
  return (
    <ul className="list">

      {props.meetups.map((meetup) => (

        <MeetUpItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          descripition={meetup.descripition}

        />
      ))}

    </ul>
  );
};

export default MeetUpList;
