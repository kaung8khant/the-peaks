import React, { useEffect, useState } from "react";
import Header from "components/Header";
import "assets/css/home.scss";
import { string_excerpt } from "utils/js/string";
import { home } from "api/home";
import { category } from "api/category";
import NewsItem from "components/NewsItem";
import { Link } from "react-router-dom";
import Select from "react-select";
import Loader from "react-loader-spinner";
import BookmarkButton from "components/BookmarkButton";

const options = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "", label: "Most Popular" },
];

const Home = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [sport, setSport] = useState([]);
  const [order, setOrder] = useState(null);
  useEffect(() => {
    home(order).then((response) => {
      category("sport", 3).then((response2) => {
        setData(response.slice(0, 5));
        setData2(response.slice(5, 8));
        setSport(response2);
      });
    });
  }, [order]);

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
      <div className="home">
        <div>
          <div className="home__title-div">
            <h1 className="home__title">Top Stories</h1>
          </div>

          <div className="home__filter">
            <Select
              options={options}
              defaultValue={options[2]}
              onChange={(v) => setOrder(v.value)}
            />
          </div>
          <div className="home__bookmark-btn">
            <BookmarkButton type="view" />
          </div>
        </div>
        <div className="home__news">
          {data.map((item, index) => {
            return (
              <div className="home__news-item" key={index}>
                <Link to={`/article/${encodeURIComponent(item.id)}`}>
                  <img
                    src={item.fields.thumbnail}
                    alt="news"
                    className="home__news-img"
                  />
                  <div className="home__news-content">
                    <div>
                      <span
                        className={
                          index === 0 ? "home__news-title1" : "home__news-title"
                        }
                      >
                        {index === 0
                          ? string_excerpt(item.fields.headline)
                          : string_excerpt(item.fields.headline, 70)}
                      </span>
                    </div>
                    {index === 0 && (
                      <div>
                        <span className="home__news-para">
                          {string_excerpt(item.fields.bodyText, 150)}
                        </span>
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <NewsItem data={data2} subText={true} />
        <div style={{ marginBottom: "20px" }}>
          <div className="home__title-div">
            <h1 className="home__title">Sprots</h1>
          </div>
          <div className="home__filter">
            <Link to="/category/sport">See all</Link>
          </div>
        </div>
        <NewsItem data={sport} />
      </div>
      <div className="footer"></div>
    </>
  );
};

export default Home;
