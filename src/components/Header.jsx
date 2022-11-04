import Logo from "../icons/logo.svg";
import iconHome from "../icons/icon-nav-home.svg";
import iconMovies from "../icons/icon-nav-movies.svg";
import iconsTv from "../icons/icon-nav-tv-series.svg";
import iconBookmark from "../icons/icon-nav-bookmark.svg";
import avatar from "../icons/image-avatar.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="logo" className="main-logo" />
      <nav className="navbar">
        <ul className="navbar-ul">
          <li className="navbar-li">
            <NavLink
              to="/"
              end
              style={({ isActive }) =>
                isActive ? { filter: "brightness(0) invert(1)" } : undefined
              }
            >
              <img src={iconHome} alt="logo" />
            </NavLink>
          </li>
          <li className="navbar-li">
            <NavLink
              to="/movies"
              style={({ isActive }) =>
                isActive ? { filter: "brightness(0) invert(1)" } : undefined
              }
            >
              <img src={iconMovies} alt="logo" />
            </NavLink>
          </li>
          <li className="navbar-li">
            <NavLink
              to="/tv"
              style={({ isActive }) =>
                isActive ? { filter: "brightness(0) invert(1)" } : undefined
              }
            >
              <img src={iconsTv} alt="logo" />
            </NavLink>
          </li>
          <li className="navbar-li">
            <NavLink
              to="/bookmark"
              style={({ isActive }) =>
                isActive ? { filter: "brightness(0) invert(1)" } : undefined
              }
            >
              <img src={iconBookmark} alt="logo" />
            </NavLink>
          </li>
        </ul>
      </nav>
      <img src={avatar} alt="avatar" className="avatar" />
    </header>
  );
};

export default Header;
