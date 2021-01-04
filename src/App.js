import "./App.scss";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "pages/Home.js";
import Search from "pages/Search";
import Category from "pages/Category";
import Article from "pages/Article";
import BookmarkList from "pages/BookmarkList";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search/:query" component={Search} />
        <Route exact path="/category/:type" component={Category} />
        <Route exact path="/article/:url" component={Article} />
        <Route exact path="/bookmark" component={BookmarkList} />
      </Switch>
    </Router>
  );
}

export default App;
