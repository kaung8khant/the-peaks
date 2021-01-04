import React, { useEffect, useState } from "react";
import Header from "components/Header";
import "assets/css/home.scss";
import { search } from "api/search";
import NewsItem from "components/NewsItem";
import { useParams } from "react-router-dom";
import Loader from "react-loader-spinner";

const Search = () => {
  const [data, setData] = useState([]);
  let { query } = useParams();

  useEffect(() => {
    setData([]);
    search(query).then((response) => {
      setData(response);
    });
  }, [query]);

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
      <Header query={query} />
      <div className="home">
        <h1 className="home__title">Search Result</h1>

        <NewsItem data={data} />
      </div>
    </>
  );
};

export default Search;
