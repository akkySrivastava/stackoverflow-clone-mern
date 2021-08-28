import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StackOverflow from "./components/StackOverflow";
import Header from "./components/Header";
import AddQuestion from "./components/AddQuestion";
import ViewQuestion from "./components/ViewQuestion";
import Auth from "./components/Auth";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/" component={StackOverflow} />
          <Route exact path="/add-question" component={AddQuestion} />
          <Route exact path="/question" component={ViewQuestion} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
