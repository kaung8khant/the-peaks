import React from "react";
import BookmarkIcon from "assets/images/bookmark_icon.png";
import "./index.scss";
import { Link } from "react-router-dom";

const BookmarkButton = ({ id, type = "default" }) => {
  return (
    <>
      {type === "default" ? (
        <div
          className="bookmark"
          onClick={() => {
            let list = [];
            if (localStorage.getItem("bookmark") !== "") {
              list = JSON.parse(localStorage.getItem("bookmark"));
            }
            if (!list.find((item) => item === id)) {
              localStorage.setItem("bookmark", JSON.stringify([id, ...list]));
            }
          }}
        >
          <div className="bookmark-text">ADD BOOKMARK</div>
          <img src={BookmarkIcon} alt="bookmark" className="bookmark-icon" />
        </div>
      ) : (
        <Link to="/bookmark" style={{ textDecoration: "none" }}>
          <div className="bookmark">
            <div className="bookmark-text">VIEW BOOKMARK</div>
            <img src={BookmarkIcon} alt="bookmark" className="bookmark-icon" />
          </div>
        </Link>
      )}
    </>
  );
};

export default BookmarkButton;
