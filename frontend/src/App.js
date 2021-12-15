import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import StackOverflow from "./components/StackOverflow";
import Header from "./components/Header";
import AddQuestion from "./components/AddQuestion";
import ViewQuestion from "./components/ViewQuestion";
import Auth from "./components/Auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./feature/userSlice";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
      // console.log(authUser);
    });
  }, [dispatch]);

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/auth" component={Auth} />
          <PrivateRoute exact path="/" component={StackOverflow} />
          <PrivateRoute exact path="/add-question" component={AddQuestion} />
          <PrivateRoute exact path="/question" component={ViewQuestion} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
