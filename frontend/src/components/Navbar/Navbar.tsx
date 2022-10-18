import "./Navbar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const ScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="NavBar">
      <header>
        <div className="nav-container">
          <nav className="nav-checkbox">
            <h1 onClick={ScrollToTop} className="name-nav">
              Touristly
            </h1>
            <input id="tab-nav" type="checkbox" className="tab-nav" />
            <label htmlFor="tab-nav" className="tab-nav-label">
              Menu
            </label>
            <ul className="tab-content">
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/places">Places</NavLink>
              </li>
              <li>
                <NavLink to="/events">Events</NavLink>
              </li>
              <li>
                <NavLink to="/activities">Activities</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
