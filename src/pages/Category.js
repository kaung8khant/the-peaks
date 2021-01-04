import React from "react";
import Header from "components/Header";
import "assets/css/home.scss";
import { category, categoryPeginate } from "api/category";
import NewsItem from "components/NewsItem";
import Loader from "react-loader-spinner";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 0,
      type: props.match.params.type,
      loading: true,
      bottomLoading: false,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.infiniteScroll);
    this.getItem(this.state.type);
  }
  getItem = (type) => {
    category(type).then((response) => {
      this.setState({ data: response, loading: false });
    });
  };
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.type !== this.props.match.params.type) {
      this.getItem(this.props.match.params.type);
    }
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.infiniteScroll);
  }
  infiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      this.setState({ bottomLoading: true });
      const { type, page, data } = this.state;
      categoryPeginate(type, page + 1).then((response) => {
        this.setState({
          data: [...data, ...response],
          page: page + 1,
          bottomLoading: false,
        });
      });
    }
  };

  render() {
    if (this.state.loading) {
      return (
        <>
          <Header />
          <div className="loading-fullscreen">
            <Loader type="Rings" color="#00BFFF" height={100} width={100} />
          </div>
        </>
      );
    }
    let title = "";
    switch (this.props.match.params.type) {
      case "sport":
        title = "Sports";
        break;
      case "culture":
        title = "Culture";
        break;
      case "lifeandstyle":
        title = "Lifestyle";
        break;
      default:
        title = "Top Stories";
        break;
    }
    return (
      <>
        <Header />
        <div className="home">
          <h1 className="home__title">{title}</h1>

          <NewsItem data={this.state.data} />
          {this.state.bottomLoading && (
            <div className="loading">
              <Loader type="Rings" color="#00BFFF" height={100} width={100} />
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Category;
