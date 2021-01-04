import React from "react";
import Header from "components/Header";
import "assets/css/home.scss";
import "assets/css/article.scss";
import BookmarkItem from "components/BookmarkItem";

const BookmarkList = () => {
  let data =
    localStorage.getItem("bookmark") === ""
      ? []
      : JSON.parse(localStorage.getItem("bookmark"));

  const rows = [...Array(Math.ceil(data.length / 3))];

  const newsRow = rows.map((row, idx) => data.slice(idx * 3, idx * 3 + 3));

  const content = newsRow.map((row, idx) => (
    <div className="news-row" key={idx}>
      {row.map((item, idx2) => {
        return <BookmarkItem id={item} />;
      })}
    </div>
  ));

  return (
    <>
      <Header />
      <div className="home">{content}</div>
    </>
  );
};

export default BookmarkList;
