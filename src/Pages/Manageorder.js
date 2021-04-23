import React from "react";
import "../Styles/Manageorders.css";

const Manageorders = () => {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <div>
        <br />
        <div className="container">
          <div className="jumbotron jumbotron-orders ">
            <h1 style={{ color: "#FF6E14" }}>Manage Orders</h1>
          </div>
        </div>
        <div
          className="container d-flex align-items-center "
          style={{ height: "75px", backgroundColor: "#E6EBEF" }}
        >
          <div className="container mt-3">
            <div className="row">
              <div className="col-9 col-md-10">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    Placeholder="Search your listings"
                  />
                </div>
              </div>
              <div className="col-3 col-md-2 text-left">
                <button
                  className="btn "
                  style={{ color: "white", backgroundColor: "#FF6E14" }}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7 text-left mb-3">
              <button
                style={{
                  color: "#FF6E14",
                  backgroundColor: "#FEF0E9",
                  width: "150px",
                }}
                className="btn mx-2 px-4"
              >
                Active Ads
              </button>
              <button
                style={{
                  color: "grey",
                  backgroundColor: "#E6EBEF",
                  width: "150px",
                }}
                className="btn mx-2 px-3"
              >
                Expired Listings
              </button>
            </div>
            <div className="col-12 col-md-5">
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
            <div className="container">
              <div
                className="p-5 row "
                style={{
                  border: "1px solid #F4F6F7",
                }}
              >
                <div className="col-12">
                  <div>
                    <i style={{ fontSize: "35px" }} class="fas fa-box-open"></i>
                    <br />
                    You Have no Ads Online
                    <br />
                    <button
                      className="btn mt-3 "
                      style={{ color: "white", backgroundColor: "#FF6E14" }}
                    >
                      <i class="far fa-plus-square mr-2"></i>
                      Place an ad
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manageorders;
