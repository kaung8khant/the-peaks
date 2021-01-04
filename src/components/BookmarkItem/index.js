import React, { useEffect, useState } from "react";
import { article } from "api/article";
import SingleNewsItem from "components/SingleNewsItem";

const BookmarkItem = ({ id }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    article(id).then((response) => {
      setData(response);
    });
  }, []);
  if (data.length === 0) {
    return <div></div>;
  }
  return (
    <SingleNewsItem
      image={data.fields.thumbnail}
      title={data.fields.headline}
      id={data.id}
    />
  );
};

export default BookmarkItem;
