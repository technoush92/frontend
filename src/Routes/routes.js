import React from "react";
import "../App.css";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Manageorders from "../Pages/Manageorder";
import Searchactivity from "../Pages/Searchactivity";
import Favourites from "../Pages/Favourites";
import Search from "../Pages/Search";
import Placead from "../Pages/Placead";
import Navbar from "../Components/Navbar";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import Footer from "../Components/Footer";
// import { ToastContainer } from "react-toastify";
// import { useAuth } from "../Contexts/Auth-Context";
// import "react-toastify/dist/ReactToastify.css";

export const AuthenticatedRoutes = () => {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}

        <Switch>
          <Route exact path="/" render={(routeProps) => <Home />} />
          <Route exact path="/search" render={(routeProps) => <Search />} />
          <Route exact path="/profile" render={(routeProps) => <Profile />} />
          <Route
            exact
            path="/manageorders"
            render={(routeProps) => <Manageorders />}
          />
          <Route
            exact
            path="/searchactivity"
            render={(routeProps) => <Searchactivity />}
          />
          <Route
            exact
            path="/favourites"
            render={(routeProps) => <Favourites />}
          />
          <Route exact path="/placead" render={(routeProps) => <Placead />} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export const UnAuthenticatedRoutes = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" render={(routeProps) => <Home />} />
          <Route exact path="/signup" render={(routeProps) => <Signup />} />
          <Route exact path="/login" render={(routeProps) => <Login />} />
          <Route exact path="/search" render={(routeProps) => <Search />} />
          <Route exact path="/profile" render={(routeProps) => <Profile />} />
          <Route
            exact
            path="/manageorders"
            render={(routeProps) => <Manageorders />}
          />
          <Route
            exact
            path="/searchactivity"
            render={(routeProps) => <Searchactivity />}
          />
          <Route
            exact
            path="/favourites"
            render={(routeProps) => <Favourites />}
          />
          <Route exact path="/placead" render={(routeProps) => <Placead />} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
};
