import { Link } from "react-router-dom";

import  './Navbar.css'

export const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">MeetUps</div>

      <nav >
        <ul>
          <li>
            <Link to={"/"}>All MeetUps</Link>
          </li>

          <li>
            <Link to={"/new-meetups"}>New MeetUps</Link>
          </li>
          <li>
            <Link to={"/favourites"}>Favourite</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
