import { NavLink } from "react-router-dom";
import { dashboard, home, law, trending, user } from "../../assets/images";
import "./index.scss";

const Sidebar = () => (
  <div className="sidebar-container">
    <div className="sidebar">
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <img src={home} alt="Home" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="trending-link"
          to="/trending"
        >
          <img src={trending} alt="Home" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="law-link"
          to="/law"
        >
          <img src={law} alt="Home" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="dashboard-link"
          to="/dashboard"
        >
          <img src={dashboard} alt="Home" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="user-link"
          to="/user"
        >
          <img src={user} alt="Home" />
        </NavLink>
      </nav>
    </div>
  </div>
);

export default Sidebar;
