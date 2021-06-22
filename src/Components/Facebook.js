import React from "react";
import FacebookLogin from "react-facebook-login";
// import TiSocialFacebook Circular from "react-icons/lib/ti/social-facebook-circular";

const Facebook = ({ handleFbLogin }) => {
  const responseFacebook = (response) => {
    console.log(response);
    handleFbLogin(response);
  };

  const componentClicked = () => {
    console.log("click");
  };

  let fbContent = (
    <FacebookLogin
      appId="498468578057807"
      // autoLoad={true}
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook}
      cssClass="btn-sm btn-primary"
      icon="fa-facebook"
    />
  );
  return <div>{fbContent}</div>;
};

export default Facebook;
