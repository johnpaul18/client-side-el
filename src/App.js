import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";

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
        <Route path="/login" exact>
          {user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/Register" exact component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
