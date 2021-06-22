import React, { useState, useEffect } from "react";
import Homecard from "../Components/Homecard";
import Searchcard from "../Components/Searchcard";
import Searchprocard from "../Components/Searchprocard";
import Ad from "../Assets/ad.PNG";
import { getAds } from "../Connection/Placead";
import { saveFavourite } from "../Connection/Users";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../Context/Auth-Context";

import "../Styles/Home.css";

import "../Styles/filters.css";

// var products = [
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
//       "https://images.unsplash.com/photo-1606170033648-5d55a3edf314?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHRzJTIwbGFtcHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
//     title: "Minimal Lamps",
//     description: "Minimal style light lamps for home use",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1523437275713-4dbf723f62c1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMHNoZWxmfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
//     title: "Books Shelf",
//     description: "Old Book shelf for sale",
//   },
// ];

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

const Search = ({ location }) => {
  const [adsYoo, setAdsYoo] = useState();
  const [searchResults, setSearchResults] = useState();
  const { ads, setAds, featureAds, setFeatureAds } = useAuth();

  const handleFavourite = async (id) => {
    console.log(id);
    let res = await saveFavourite({
      id,
      userId: window.localStorage.getItem("id"),
    });
    if (res.data.success === true) {
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      window.localStorage.setItem("favourites", res.data.favs);
    } else {
      toast.error(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleSearch = (search) => {
    // setAdsYoo(search);
    setAds(search);
  };

  const handleSort = (type) => {
    if (type === "new") {
      let yoo = ads.sort(function (a, b) {
        var c = new Date(a.created);
        var d = new Date(b.created);
        console.log(c, d);
        return d - c;
      });

      console.log(yoo);
    } else if (type === "old") {
      let yoo = ads.sort(function (a, b) {
        var c = new Date(a.created);
        var d = new Date(b.created);
        console.log(c, d);
        return c - d;
      });
    }
  };

  useEffect(() => {
    // const fetchAds = async () => {
    //   let foundAds = await getAds();
    //   console.log(foundAds);
    //   setAds(foundAds.data.ads);
    // };
    // fetchAds();

    setAdsYoo(ads);
  }, [ads]);
  return (
    <div>
      <div
        className="homecarddiv"
        style={{
          // backgroundColor: "#FF6E14",
          width: "100%",
          height: "214px",
          color: "white",
        }}
      ></div>
      {/* {console.log(props)} */}
      <div style={{ marginTop: "-175px" }} className="container">
        <Homecard handleSearch={handleSearch} />
      </div>

      <div style={{ marginTop: "-20px" }}>
        {ads && (
          <button className="btn btn-primary  ">
            {`Search ( ${ads.length} results )`}
          </button>
        )}
      </div>
      <br />
      <br />
      <br />
      <section className="">
        <div className="container">
          <h2>Feature Ads</h2>
          {featureAds && (
            <div className="row">
              {featureAds.map((prod, i) => {
                if (i < 4) {
                  return (
                    <div className="col-6 col-md-3 d-flex justify-content-center">
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
      </section>
      <br />
      <br />
      <br />
      <section>
        <div className=" container">
          <div className="row">
            {/* <div className="col-6 col-md-2 mb-3 ">
              Advertisement : <span style={{ color: "#FF6E14" }}>5</span>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <label class="checkbox">
                <input type="checkbox" />
                <span style={{ marginTop: "-8px" }}>
                  Individuals{" "}
                  <p className="d-inline" style={{ color: "#FF6E14" }}>
                    5
                  </p>{" "}
                </span>
              </label>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <label class="checkbox">
                <input type="checkbox" />
                <span style={{ marginTop: "-8px" }}>
                  Professionals{" "}
                  <p className="d-inline" style={{ color: "#FF6E14" }}>
                    5
                  </p>{" "}
                </span>
              </label>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <label class="checkbox">
                <input type="checkbox" />
                <span style={{ marginTop: "-8px" }}>
                  Urgnet{" "}
                  <p className="d-inline" style={{ color: "#FF6E14" }}>
                    5
                  </p>{" "}
                </span>
              </label>
            </div> */}
            <div className="col-6 col-md-12 mb-3 d-flex justify-content-end">
              <div class="dropdown ">
                <button
                  class="btn border dropdown-toggle w-100 text-left"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sort By : Date
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a
                    class="dropdown-item"
                    href="#"
                    onClick={() => handleSort("new")}
                  >
                    New to Old
                  </a>
                  <a
                    class="dropdown-item"
                    href="#"
                    onClick={() => handleSort("old")}
                  >
                    Old to New
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <section className="mx-0 mx-md-5">
        <div className=" ">
          <div className="row">
            <div className="col-12 col-md-9 col-lg-6 col-xl-8">
              {adsYoo && (
                <div>
                  {adsYoo.map((ad) => (
                    <Searchcard
                      image={ad.images[0]}
                      title={ad.title}
                      description={ad.description}
                      price={ad.price}
                      date={new Date(ad.created).toDateString()}
                      id={ad._id}
                      handleFavourite={handleFavourite}
                      contactDetails={ad.contactDetails}
                      images={ad.images}
                      location={ad.location}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="col-12 col-md-6 col-xl-4 d-none d-lg-block">
              <div className="row">
                <div className="col-6">
                  {featureAds.map((prod) => {
                    return (
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
                    );
                  })}
                </div>
                <div className="col-6">
                  {featureAds.map((prod) => {
                    return (
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
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
