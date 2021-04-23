import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { UnAuthenticatedRoutes, AuthenticatedRoutes } from "./Routes/routes";

function App() {
  // const { loggedIn, login, logout } = useAuth();
  // console.log(loggedIn);

  if (window.localStorage.getItem("accessToken")) {
    // login();
    return <AuthenticatedRoutes />;
  } else {
    return <UnAuthenticatedRoutes />;
  }
}

export default App;
