import React, { useState, useEffect } from "react";
import Slider from "../Components/Slider";
import Homecard from "../Components/Homecard";
import Banner from "../Assets/new.png";
import Map from "../Assets/map2.png";
import Maphover from "../Assets/map3.png";
import Cityselect from "../Components/Cityselect";
import Searchprocard from "../Components/Searchprocard";
import "../Styles/Home.css";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useAuth } from "../Context/Auth-Context";
import AutoComplete from "react-google-autocomplete";
import Mapsautocompletehome from "../Components/Mapsautocompletehome";

// const featureAds = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1507089872327-8fdb6ebba93c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYWlyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
//     title: "chair",
//     description: "Good chair ",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGNhcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
//     description: "Very fast car",
//     title: "Buggati",
//   },
//   {
//     image:
//       "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//     title: "Balck Mate Car",
//     description: "Very Hot black car",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1507089872327-8fdb6ebba93c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYWlyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
//     title: "chair",
//     description: "Good chair ",
//   },
// ];

const Home = () => {
  const [originalMap, setOriginalMap] = useState(Map);
  const history = useHistory();
  const { ads, setAds, featureAds, setFeatureAds } = useAuth();

  const handleMap = () => {
    setOriginalMap(Maphover);
  };

  const handleMapLeave = () => {
    setOriginalMap(Map);
  };

  const handleSearch = (search) => {
    setAds(search);

    // history.push("./search");
  };

  const handlePlaceSelected = (res) => {
    console.log(res);
    // setState({
    //   ...state,
    //   address: res.address,
    //   markerPosition: {
    //     lat: res.lat,
    //     lng: res.lng,
    //   },
    //   mapPosition: {
    //     lat: res.lat,
    //     lng: res.lng,
    //   },
    // });
    // handleAddress({
    //   address: res.address,
    //   markerPosition: {
    //     lat: res.lat,
    //     lng: res.lng,
    //   },
    //   mapPosition: {
    //     lat: res.lat,
    //     lng: res.lng,
    //   },
    // });
  };

  return (
    <div>
      {console.log(featureAds)}
      <div
        className="homecarddiv"
        style={{
          // backgroundColor: "#FF6E14",
          width: "100%",
          height: "214px",
          color: "white",
        }}
      >
        {console.log(ads)}
        <h4 className=" pt-3">
          With delivery at your house pickup point everything is at your
          fingertips!
        </h4>
        <p className="pt-2 d-none d-sm-block">
          Find the right deal among the millions of leboncoin classifieds
        </p>
      </div>
      <div style={{ marginTop: "-100px" }} className="container">
        <Homecard Home={true} handleSearch={handleSearch} />
      </div>

      <div style={{ marginTop: "-20px" }}>
        <button className="btn btn-primary  ">
          Search from {`${ads.length} ad results`}
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

      <div className="container">
        <h2>Feature Ads</h2>
        <br />
        {featureAds && (
          <div className="row">
            {featureAds.map((prod, i) => {
              if (i < 4) {
                return (
                  <div className="col-6 col-md-6 col-lg-3 d-flex justify-content-center">
                    <Searchprocard
                      image={prod.images}
                      title={prod.title}
                      description={prod.description}
                      date={new Date(prod.created).toDateString()}
                      id={prod._id}
                      contactDetails={prod.contactDetails}
                      images={prod.images}
                      price={prod.price}
                      location={prod.location}
                    />
                  </div>
                );
              }
            })}
          </div>
        )}
      </div>
      <br />
      <br />
      <div className="container" style={{ marginTop: "", color: "black" }}>
        <div className="d-flex">
          <h3>Top Categories</h3>
        </div>
        <Slider />
      </div>
      <br />
      <br />
      <div>
        <div>
          <img
            className="img-fluid shadow-xs map"
            src={Map}
            style={{ width: "350px" }}
            // onMouseEnter={handleMap}
            // onMouseLeave={handleMapLeave}
          />
        </div>
        <br />
        <div className="d-flex justify-content-center">
          {/* <Cityselect /> */}
          {/* <AutoComplete
            apiKey="AIzaSyAQLhbqMNW1j54RhL_uDM5yvCXJTFSObE8"
            style={{
              height: "40px",
              backgroundColor: "#F4F6F7",
              color: "black",
              width: "350px",
            }}
            type={["(regions)"]}
            // onPlaceSelected={handlePlaceSelected}
            componentRestrictions={{ country: ["us"] }}
            className=" form-control mx-3"
            // onChange={handlePlaceChange}
          /> */}
          <Mapsautocompletehome
            handlePlaceSelected={handlePlaceSelected}
            // style={{ zIndex: "100000" }}
          />
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
              <br />
              <br />
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
