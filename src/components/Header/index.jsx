import "./index.scss";
import { headerLogo } from "../../assets/";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserAlt,
  faUserAltSlash,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <img src={headerLogo} alt="" className="header-logo" />
      <div className="profile-icon">
        <FontAwesomeIcon icon={faUser} className="profile-logo" />
      </div>
    </div>
  );
};

export default Header;
