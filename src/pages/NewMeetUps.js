import { useNavigate } from "react-router-dom";

import NewMeetUpForm from "../components/meetups/NewMeetUpForm";

export const NewMeetUps = () => {
  const navigation = useNavigate();

  const addMeetupHandler = (meetupData) => {
    fetch("https://meetups-9fab1-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigation("/");
    });
  };
  return (
    <section>
      <h1>Add New MeetUp</h1>
      <NewMeetUpForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetUps;
