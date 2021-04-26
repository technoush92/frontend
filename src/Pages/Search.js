import React from "react";
import Homecard from "../Components/Homecard";
import Searchcard from "../Components/Searchcard";
import Searchprocard from "../Components/Searchprocard";
import Ad from "../Assets/ad.PNG";

import "../Styles/Home.css";

import "../Styles/filters.css";

var products = [
  {
    image:
      "https://images.unsplash.com/photo-1507089872327-8fdb6ebba93c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYWlyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    title: "chair",
    description: "Good chair ",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGNhcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    description: "Very fast car",
    title: "Buggati",
  },
  {
    image:
      "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Balck Mate Car",
    description: "Very Hot black car",
  },
  {
    image:
      "https://images.unsplash.com/photo-1606170033648-5d55a3edf314?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHRzJTIwbGFtcHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    title: "Minimal Lamps",
    description: "Minimal style light lamps for home use",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523437275713-4dbf723f62c1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMHNoZWxmfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    title: "Books Shelf",
    description: "Old Book shelf for sale",
  },
];

const featureAds = [
  {
    image:
      "https://images.unsplash.com/photo-1507089872327-8fdb6ebba93c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYWlyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    title: "chair",
    description: "Good chair ",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGNhcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    description: "Very fast car",
    title: "Buggati",
  },
  {
    image:
      "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Balck Mate Car",
    description: "Very Hot black car",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507089872327-8fdb6ebba93c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYWlyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    title: "chair",
    description: "Good chair ",
  },
];

const Search = () => {
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
      <div style={{ marginTop: "-175px" }} className="container">
        <Homecard />
      </div>

      <div style={{ marginTop: "-20px" }}>
        <button className="btn btn-primary  ">
          Search(42,929,888 results)
        </button>
      </div>
      <br />
      <br />
      <br />
      <section className="">
        <div className="container">
          <h2>Feature Ads</h2>
          <div className="row">
            {featureAds.map((prod) => {
              return (
                <div className="col-6 col-md-3 d-flex justify-content-center">
                  <Searchprocard
                    image={prod.image}
                    title={prod.title}
                    description={prod.description}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section>
        <div className=" container">
          <div className="row">
            <div className="col-6 col-md-2 mb-3 ">
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
            </div>
            <div className="col-6 col-md-2 mb-3">
              <div class="dropdown " style={{ marginTop: "-8px" }}>
                <button
                  class="btn border dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sort : Most Recent
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <a class="dropdown-item" href="#">
                    Something else here
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
              {products.map((prod) => (
                <Searchcard
                  image={prod.image}
                  title={prod.title}
                  description={prod.description}
                />
              ))}
            </div>
            <div className="col-12 col-md-6 col-xl-4 d-none d-lg-block">
              <div className="row">
                <div className="col-6">
                  {products.map((prod) => {
                    return (
                      <Searchprocard
                        title={prod.title}
                        image={prod.image}
                        description={prod.description}
                      />
                    );
                  })}
                </div>
                <div className="col-6">
                  {products.map((prod) => {
                    return (
                      <Searchprocard
                        title={prod.title}
                        image={prod.image}
                        description={prod.description}
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
