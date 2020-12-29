import React, { useState } from "react";
import Glass from "assets/images/glass_icon.png";
import "./index.scss";
import ClickAwayListener from "react-click-away-listener";

const HeaderSearch = () => {
  const [search, setSearch] = useState("");
  const [showInput, setShowInput] = useState(false);
  return (
    <>
      {!showInput && (
        <div
          className="header__search"
          onClick={() => setShowInput(!showInput)}
        >
          <img src={Glass} alt="test" style={{ width: "20px" }} />
        </div>
      )}
      {showInput && (
        <div style={{ display: "inline-block" }}>
          <ClickAwayListener onClickAway={() => setShowInput(false)}>
            <div className="header__search-box">
              <input type="text" className="header__search-input" />
              <img
                src={Glass}
                alt="test"
                className="header__search-input-icon"
              />
            </div>
          </ClickAwayListener>
        </div>
      )}
    </>
  );
};

export default HeaderSearch;
