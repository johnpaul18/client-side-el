import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import Map from "./pages/Map";
import Lesson from "./pages/Lesson";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        {user && <Route path="/map" exact component={Map} />}
        {user && <Route path="/lesson/:id" exact component={Lesson} />}
        <Route path="/login" exact>
          {user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/Register" exact component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
