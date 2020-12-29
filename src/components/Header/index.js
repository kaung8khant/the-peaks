import React from "react";
import "./index.scss";
import Logo from "assets/images/logo.png";
import HeaderSearch from "components/HeaderSearch";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="header__logo" />
      <div className="header__menu-bar">
        <ul className="header__menu">
          <li className="header__menu-item">NEWS TODAY</li>
          <li className="header__menu-item">SPORTS</li>
          <li className="header__menu-item">CULTURE</li>
          <li className="header__menu-item">LIFESTYLE</li>
        </ul>
        <HeaderSearch />
      </div>
    </div>
  );
};

export default Header;
