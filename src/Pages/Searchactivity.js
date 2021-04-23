import React from "react";
import "../Styles/Searchactivity.css";

const Searchactivity = () => {
  return (
    <div style={{ backgroundColor: "#ffffff", height: "100vh" }}>
      <br />
      <div className="container">
        <div className="jumbotron jumbotron-search">
          <h1 style={{ color: "#FF6E14" }}>Search Activity</h1>
        </div>
      </div>
      <br />
      <br />
      <div>
        <div className="container">
          <div
            className="p-5 row "
            style={{
              border: "1px solid #F4F6F7",
            }}
          >
            <div className="col-12">
              <div>
                <i style={{ fontSize: "35px" }} class="fas fa-search"></i>
                <br />
                <br />
                You Have no Search Activity Right Now
                <br />
                <button
                  className="btn mt-3 "
                  style={{ color: "white", backgroundColor: "#FF6E14" }}
                >
                  <i class="fas fa-search mr-2"></i>
                  Start Searching
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchactivity;
