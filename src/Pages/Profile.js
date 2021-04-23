import React from "react";
import Avatarimage from "../Components/Avatarimage";
import { Link, NavLink, useHistory } from "react-router-dom";
import Profiledetails from "../Components/Profiledetails";
import Settings from "../Components/Settings";

const Profile = () => {
  const [openProfileDetails, setOpenProfileDetails] = React.useState(false);
  const [openSettings, setOpenSettings] = React.useState(false);

  const handleClickOpenProfileDetails = () => {
    setOpenProfileDetails(!openProfileDetails);
  };

  const handleClickOpenSettings = () => {
    setOpenSettings(!openSettings);
  };

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <div>
        <br />
        <div className="container">
          <div
            className="row "
            style={{
              height: "150px",
              padding: "25px",
              border: "3px solid #F4F6F7",
              borderRadius: "12px",
            }}
          >
            <div className="col-12 px-0 px-md-3 d-flex justify-content-between  ">
              <div>
                <Avatarimage />
              </div>
              <div>
                <button
                  className="btn ml-3 mt-4 d-none d-md-block"
                  style={{ color: "white", backgroundColor: "#FF6E14" }}
                >
                  <i class="far fa-plus-square mr-2"></i>
                  Place an ad
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container ">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 my-4">
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/manageorders"
              >
                <div
                  style={{
                    height: "175px",
                    border: "3px solid #F4F6F7",
                    borderRadius: "12px",
                  }}
                  className="text-left p-4 shadow-sm"
                >
                  <i
                    style={{ fontSize: "28px" }}
                    className="far fa-credit-card"
                  ></i>
                  <br />
                  <br />
                  <h4>Manage Orders</h4>
                  <p>Manage Your Orders Here</p>
                </div>
              </NavLink>
            </div>
            <div className="col-12 col-md-6 col-lg-4 my-4">
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/searchactivity"
              >
                <div
                  style={{
                    height: "175px",
                    border: "3px solid #F4F6F7",
                    borderRadius: "12px",
                  }}
                  className="text-left p-4 shadow-sm"
                >
                  <i style={{ fontSize: "28px" }} className="fas fa-search"></i>
                  <br />
                  <br />
                  <h4>Search Activity</h4>
                  <p>Recent Search Activity</p>
                </div>
              </NavLink>
            </div>
            <div className="col-12 col-md-6 col-lg-4 my-4">
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/favourites"
              >
                {" "}
                <div
                  style={{
                    height: "175px",
                    border: "3px solid #F4F6F7",
                    borderRadius: "12px",
                  }}
                  className="text-left p-4 shadow-sm"
                >
                  <i style={{ fontSize: "28px" }} class="far fa-heart"></i>
                  <br />
                  <br />
                  <h4>Manage Favourites</h4>
                  <p>Manage Your Favourit Items Here</p>
                </div>
              </NavLink>
            </div>
            <div className="col-12 col-md-6 col-lg-4 my-4">
              {" "}
              <div
                style={{
                  height: "175px",
                  border: "3px solid #F4F6F7",
                  borderRadius: "12px",
                  color: "black",
                }}
                className="text-left p-4 shadow-sm"
                onClick={handleClickOpenProfileDetails}
              >
                <i style={{ fontSize: "28px" }} class="far fa-user"></i>
                <br />
                <br />
                <h4>Profile</h4>
                <p>Manage Your Details Here</p>
                <Profiledetails open={openProfileDetails} />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 my-4">
              <div
                style={{
                  height: "175px",
                  border: "3px solid #F4F6F7",
                  borderRadius: "12px",
                }}
                onClick={handleClickOpenSettings}
                className="text-left p-4 shadow-sm"
              >
                <i style={{ fontSize: "28px" }} class="fas fa-user-cog"></i>
                <br />
                <br />
                <h4>Settings</h4>
                <p>Change your Password or Location</p>
                <Settings open={openSettings} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
