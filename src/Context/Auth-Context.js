import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
// import { API_BASE_URL } from 'src/utils/API_URLS';
// import { withRouter } from 'react-router';
// import { toast } from "react-toastify";

const AuthContext = createContext({});

const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [ads, setAds] = useState([]);
  const [featureAds, setFeatureAds] = useState([]);
  const [categories, setCategories] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [popupViewed, setPopupViewed] = useState(false);
  const [notify, setNotify] = useState(true);
  console.log(notify);

  const handleOpenPopup = () => {
    setOpenPopup(!openPopup);
  };

  const handleNotify = (status) => {
    console.log("I am called");
    setNotify(status);
  };

  useEffect(() => {
    if (window.localStorage.getItem("accessToken")) {
      setLoggedIn(true);
    }

    handleOpenPopup();
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
  };

  return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
