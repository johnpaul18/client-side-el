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

// let originalElements = {
//   nodes: [
//     {
//       data: { id: "61b48657aafa351ff4be3081", name: "Hello World!" },
//       position: { x: 243, y: 382 },
//     },
//     {
//       data: { id: "61b4866caafa351ff4be3085", name: "Hello World1!" },
//       position: { x: 259, y: 327 },
//     },
//   ],
//   edges: [
//     {
//       data: {
//         source: "61b48657aafa351ff4be3081",
//         target: "61b4866caafa351ff4be3085",
//       },
//     },
//   ],
// };

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        {user && (
          <Route path="/map" exact>
            <Map />
          </Route>
        )}
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
