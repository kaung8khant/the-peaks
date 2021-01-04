import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { string_excerpt } from "utils/js/string";

const SingleNewsItem = ({ id, image, title, subText = "" }) => {
  return (
    <div className="news-item">
      <Link to={`/article/${encodeURIComponent(id)}`}>
        <img src={image} alt="news" className="news-image" />
        <div className="news-content">
          <span className="news-title">{title}</span>
          {subText !== "" && (
            <>
              <br />
              <span className="news-para">{string_excerpt(subText, 50)}</span>
            </>
          )}
        </div>
      </Link>
    </div>
  );
};
export default SingleNewsItem;
