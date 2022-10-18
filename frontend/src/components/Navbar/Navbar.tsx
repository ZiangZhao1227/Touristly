import "./Navbar.css";
import { Link } from "react-router-dom";

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
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/places">Places</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/activities">Activities</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
