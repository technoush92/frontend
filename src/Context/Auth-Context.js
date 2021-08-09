import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
// import { API_BASE_URL } from 'src/utils/API_URLS';
// import { withRouter } from 'react-router';
// import { toast } from "react-toastify";
import { setPopupView } from "../Connection/Auth";

const AuthContext = createContext({});

const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [ads, setAds] = useState([]);
  const [featureAds, setFeatureAds] = useState([]);
  const [categories, setCategories] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [popupViewedStatus, setPopupViewedStatus] = useState();
  const [notify, setNotify] = useState(true);
  console.log(notify);

  const handleOpenPopup = () => {
    console.log("opening");
    // let status = window.localStorage.getItem("popupView");
    // console.log(status);
    setOpenPopup(true);
  };

  const handleClosePopup = async () => {
    setOpenPopup(false);
    window.localStorage.setItem("popupView", true);
    setPopupView({ id: window.localStorage.getItem("id") });
    setPopupViewedStatus(true);
  };

  const handlePopupViewedStatus = () => {
    let status = window.localStorage.getItem("popupView");
    console.log("status is new", status);
    setPopupViewedStatus(status === "false" ? false : true);
    // window.location.reload();
  };

  const handleNotify = (status) => {
    console.log("I am called");
    setNotify(status);
  };

  useEffect(() => {
    if (window.localStorage.getItem("accessToken")) {
      setLoggedIn(true);
    }
  }, []);

  const login = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    console.log("cliked");
    window.localStorage.clear();
    setLoggedIn(false);

    // toast.success("You are logged out", {
    //   position: toast.POSITION.TOP_RIGHT,
    // });
  };

  const authContextValue = {
    loggedIn,
    login,
    logout,
    ads,
    setAds,
    categories,
    setCategories,
    featureAds,
    setFeatureAds,
    openPopup,
    setOpenPopup,
    handleOpenPopup,
    notify,
    setNotify,
    handleNotify,
    handleClosePopup,
    popupViewedStatus,
    setPopupViewedStatus,
    handlePopupViewedStatus,
  };

  return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
