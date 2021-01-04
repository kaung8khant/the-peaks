import React from "react";
import Glass from "assets/images/glass_icon.png";
import "./index.scss";
import ClickAwayListener from "react-click-away-listener";
import { Redirect } from "react-router-dom";

class HeaderSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      showInput: false,
      redirect: false,
    };
  }
  componentDidMount() {
    this.setState({ search: "", showInput: false, redirect: false });
  }
  render() {
    const { redirect, showInput, search } = this.state;
    if (redirect) {
      return <Redirect from="/search" to={`/search/${search}`} />;
    }

    return (
      <>
        {!showInput ? (
          <div
            className="header__search"
            onClick={() => this.setState({ showInput: true })}
          >
            <img src={Glass} alt="test" style={{ width: "20px" }} />
          </div>
        ) : (
          <div style={{ display: "inline-block" }}>
            <ClickAwayListener
              onClickAway={() => this.setState({ showInput: false })}
            >
              <div className="header__search-box">
                <input
                  type="text"
                  className="header__search-input"
                  placeholder="Search all news"
                  onChange={(e) => {
                    this.setState({ search: e.target.value });
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      this.setState({ redirect: true });
                    }
                  }}
                />
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
  }
}

export default HeaderSearch;
