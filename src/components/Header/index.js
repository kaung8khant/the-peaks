import React from "react";
import "./index.scss";
import Logo from "assets/images/logo.png";
import HeaderSearch from "components/HeaderSearch";
import HeaderMobileMenu from "components/HeaderMobileMenu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="logo" className="header__logo" />
      </Link>
      <div className="header__menu-bar">
        <ul className="header__menu">
          <li className="header__menu-item">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              NEWS TODAY
            </Link>
          </li>

          <li className="header__menu-item">
            <Link
              to="/category/sport"
              style={{ textDecoration: "none", color: "white" }}
            >
              SPORTS
            </Link>
          </li>

          <li className="header__menu-item">
            <Link
              to="/category/culture"
              style={{ textDecoration: "none", color: "white" }}
            >
              CULTURE
            </Link>
          </li>

          <li className="header__menu-item">
            <Link
              to="/category/lifeandstyle"
              style={{ textDecoration: "none", color: "white" }}
            >
              LIFESTYLE
            </Link>
          </li>
        </ul>
        <HeaderSearch />
        <HeaderMobileMenu />
      </div>
    </div>
  );
};

export default Header;
