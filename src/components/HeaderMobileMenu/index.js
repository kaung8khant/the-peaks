import React, { useState } from "react";
import MenuIcon from "assets/images/menu_icon.jpg";
import CloseIcon from "assets/images/close_icon.png";
import "./index.scss";
import { Link } from "react-router-dom";

const HeaderMobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <img
        src={MenuIcon}
        alt="menu"
        className="header__mobile-menu-icon"
        onClick={() => setShowMenu(true)}
      />
      {showMenu && (
        <div className="header__mobile-menu">
          <img
            src={CloseIcon}
            alt="close"
            className="header__mobile-close"
            onClick={() => setShowMenu(false)}
          />
          <ul className="header__mobile-menu-list">
            <li>
              <Link to="/">NEWS TODAY</Link>
            </li>
            <li>
              <Link to="/category/sport">SPORTS</Link>
            </li>
            <li>
              <Link to="/category/culture">CULTURE</Link>
            </li>
            <li>
              <Link to="/category/lifeandstyle">LIFESTYLEY</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default HeaderMobileMenu;
