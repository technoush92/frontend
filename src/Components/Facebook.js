import React from "react";
import FacebookLogin from "react-facebook-login";

const Facebook = ({ handleFbLogin }) => {
  const responseFacebook = (response) => {
    // console.log(response);
    handleFbLogin(response);
  };

  const componentClicked = () => {
    console.log("click");
  };
  return (
    <FacebookLogin
      appId="498468578057807"
      autoLoad={true}
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook}
    />
  );
};

export default Facebook;
