import React from "react";
import "./index.scss";
import SingleNewsItem from "components/SingleNewsItem";

const NewsItem = ({ data, subText = false }) => {
  const rows = [...Array(Math.ceil(data.length / 3))];

  const newsRow = rows.map((row, idx) => data.slice(idx * 3, idx * 3 + 3));

  const content = newsRow.map((row, idx) => (
    <div className="news-row" key={idx}>
      {row.map((item, idx2) => {
        return (
          <SingleNewsItem
            key={idx2}
            image={item.fields.thumbnail}
            title={item.fields.headline}
            id={item.id}
            subText={subText ? item.fields.bodyText : ""}
          />
        );
      })}
    </div>
  ));

  return content;
};

export default NewsItem;
