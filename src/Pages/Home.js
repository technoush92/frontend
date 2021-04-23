import React from "react";
import Slider from "../Components/Slider";
import Homecard from "../Components/Homecard";
import Banner from "../Assets/banner.jpg";
import Map from "../Assets/map.png";
import Cityselect from "../Components/Cityselect";
import { Link, NavLink, useHistory } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#FF6E14",
          width: "100%",
          height: "214px",
          color: "white",
        }}
      >
        <h4 className=" pt-3">
          With delivery at your house pickup point everything is at your
          fingertips!
        </h4>
        <p className="pt-2 d-none d-sm-block">
          Find the right deal among the millions of leboncoin classifieds
        </p>
      </div>
      <div style={{ marginTop: "-100px" }} className="container">
        <Homecard />
      </div>

      <div style={{ marginTop: "-20px" }}>
        <button className="btn btn-primary  ">
          Search(42,929,888 results)
        </button>
      </div>
      <br />
      <div>
        <NavLink
          style={{ textDecoration: "none", color: "black" }}
          class="nav-link"
          to="/placead"
          href="#"
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
      <br />
      <div className="container" style={{ marginTop: "", color: "black" }}>
        <div className="d-flex">
          <h3>Feature Ads</h3>
        </div>
        <Slider />
      </div>
      <br />
      <br />
      <div>
        <div>
          <img className="img-fluid" src={Map} style={{ width: "350px" }} />
        </div>

        <div className="d-flex justify-content-center">
          <Cityselect />
        </div>
      </div>

      <br />
      <br />
      <div>
        <div className="d-flex container">
          <h3>Community</h3>
        </div>

        <br />
        <div className="container">
          <div className="row  " style={{ backgroundColor: "#FEF2E6" }}>
            <div className="col-12 col-md-6 mt-5">
              <h4>Having a Passion is good</h4>
              <h4>Sharing it with others is even better</h4>
              <br />
              <p>Gardening , Fashion , Cycling... Many are talking about it</p>
              <br />
              <button
                className="btn ml-3"
                style={{ color: "white", backgroundColor: "#FF6E14" }}
              >
                Discover The Community
              </button>
            </div>
            <div className="col-12 col-md-6">
              <img className="img-fluid" src={Banner} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
