import { createContext, useState } from "react";

export const FavContext = createContext({
  fav: [],
  totalfav: 0,
  addFav: (favMeetup) => {},
  removeFav: (meetupId) => {},
  itemIsFav: (meetupId) => {},
});

export const FavContextProvider = (props) => {
  const [userFavorite, setUserFavorite] = useState([]);

  const addFavHandler = (favMeetup) =>
  {
    setUserFavorite((prevUserFavorite) =>
    {
      return prevUserFavorite.concat(favMeetup)
    });
  }

  const removeFavHandler = (meetupId) =>
  {
    setUserFavorite((prevUserFavorite =>
    {
      return prevUserFavorite.filter(meetup => meetup.id !== meetupId)
    }))
  }

  const itemIsfavHandler = (meetupId) => {
    return userFavorite.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    fav: userFavorite,
    totalfav: userFavorite.length,
    addFav: addFavHandler,
    removeFav: removeFavHandler,
    itemIsFav: itemIsfavHandler,
  };

  return (
    <FavContext.Provider value={context}>
      {props.children}
    </FavContext.Provider>
  );
};

export default FavContext;