import React, { useEffect, useState } from "react";
import Header from "components/Header";
import "assets/css/home.scss";
import { article } from "api/article";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import "assets/css/article.scss";
import * as moment from "moment-timezone";
import BookmarkButton from "components/BookmarkButton";
import Loader from "react-loader-spinner";

const Article = () => {
  const [data, setData] = useState([]);
  let { url } = useParams();

  useEffect(() => {
    setData([]);
    article(decodeURIComponent(url)).then((response) => {
      setData(response);
    });
  }, [url]);
  if (data.length === 0) {
    return (
      <>
        <Header />
        <div className="loading-fullscreen">
          <Loader type="Rings" color="#00BFFF" height={100} width={100} />
        </div>
      </>
    );
  }
  return (
    <>
      <Header />
      <div className="article">
        <div className="article__content">
          <BookmarkButton id={data.id} />
          <div className="article__date">
            <span>
              {moment(data.fields.firstPublicationDate)
                .tz("Asia/Bangkok")
                .format("ddd DD MMM YYYY H.m zz")}
            </span>
          </div>
          <h1 className="article__title">{data.fields.headline}</h1>
          <h1 className="article__sub-title">{data.fields.trailText}</h1>
          <hr />
          <div className="article__desc">
            {ReactHtmlParser(data.fields.body)}
          </div>
        </div>
        <div className="article__image">
          {ReactHtmlParser(data.fields.main)}
        </div>
      </div>
    </>
  );
};

export default Article;
