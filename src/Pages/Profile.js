import React, { useEffect, useState } from "react";
import Avatarimage from "../Components/Avatarimage";
import { Link, NavLink, useHistory } from "react-router-dom";
import Profiledetails from "../Components/Profiledetails";
import Settings from "../Components/Settings";
import { useAuth } from "../Context/Auth-Context";
import { ToastContainer, toast } from "react-toastify";
import Imagepicker from "../Components/Imagepicker";
import { updateImage } from "../Connection/Users";

const Profile = () => {
  const [openProfileDetails, setOpenProfileDetails] = React.useState(false);
  const [openSettings, setOpenSettings] = React.useState(false);
  const { logout } = useAuth();
  const history = useHistory();
  const handleClickOpenProfileDetails = () => {
    setOpenProfileDetails(!openProfileDetails);
  };

  const [userData, setUserData] = useState();

  const handleClickOpenSettings = () => {
    setOpenSettings(!openSettings);
  };

  const handleLogout = () => {
    logout();
    history.push("/");
    toast.success("logged out successfully", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleSelectedImage = async (image) => {
    console.log(image);

    setUserData({ ...userData, image: image });
    // window.localStorage.setItem("image", image);

    let res = await updateImage({
      image,
      userId: window.localStorage.getItem("id"),
    });

    if (res.data.success === true) {
      console.log("hello i am working");
      // console.log(userData.image);
      window.localStorage.setItem("image", image);
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  useEffect(() => {
    let data = {
      username: window.localStorage.getItem("username"),
      email: window.localStorage.getItem("email"),
      id: window.localStorage.getItem("id"),
      phone: window.localStorage.getItem("phone"),
      image: window.localStorage.getItem("image"),
    };
    console.log(data);
    setUserData(data);
  }, []);

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      {console.log("user data", userData)}
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
              {userData ? (
                <div>
                  <Avatarimage
                    username={userData.username}
                    image={userData.image}
                  />
                  {/* <button className="btn btn-primary btn-sm  mr-5">
                    {" "}
                    Update <i class="fas fa-arrow-up"></i>
                  </button> */}
                  <Imagepicker selectedImages={handleSelectedImage} />
                </div>
              ) : null}

              <div>
                <NavLink
                  style={{ textDecoration: "none", color: "black" }}
                  class="nav-link"
                  to="/placead"
                >
                  <button
                    className="btn ml-3"
                    style={{ color: "white", backgroundColor: "#FF6E14" }}
                  >
                    <i class="far fa-plus-square mr-2"></i>
                    Place an ad
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

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
                  <h4>Manage Ads</h4>
                  <p>Manage Your Ads Here</p>
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
              </div>
              {userData ? (
                <Profiledetails
                  open={openProfileDetails}
                  data={userData}
                  handleClose={handleClickOpenProfileDetails}
                />
              ) : null}
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
              </div>
              {userData ? (
                <Settings
                  open={openSettings}
                  data={userData}
                  handleClose={handleClickOpenSettings}
                />
              ) : null}
            </div>
            <div className="col-12 col-md-6 col-lg-4 my-4">
              <div
                style={{
                  height: "175px",
                  border: "3px solid #F4F6F7",
                  borderRadius: "12px",
                }}
                onClick={handleLogout}
                className="text-left p-4 shadow-sm"
              >
                <i style={{ fontSize: "28px" }} class="fas fa-sign-out-alt"></i>
                <br />
                <br />
                <h4>Logout</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
