import "./App.css";
import React from "react";
import "./Components/CSS/ecommerce.css";
import "./Components/CSS/fonts.css";
import "./Components/CSS/style.css";
import "bootstrap/dist/css/bootstrap.min.css";


import { BrowserRouter as Router, Switch } from "react-router-dom";
import Authmiddlewar from "./routes/route";
import { authProtectedRoutes, publicRoutes } from "./routes/index";
import LayOut from "./Layout";



// export const baseUrl = process.env.REACT_APP_BACKEND_URL;

const App = (props) => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {publicRoutes.map((route, idx) => (
            <Authmiddlewar
              path={route.path}
              layout={LayOut}
              component={route.component}
              key={idx}
              isAuthProtected={false}
              exact
            />
          ))}

          {authProtectedRoutes.map((route, idx) => (
            <Authmiddlewar
              path={route.path}
              component={route.component}
              layout={LayOut}
              key={idx}
              isAuthProtected={false}
              exact
            />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
