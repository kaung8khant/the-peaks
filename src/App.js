import "./App.scss";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "pages/Home.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
