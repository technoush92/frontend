import React, { useState, useEffect } from "react";
import "../Styles/Searchactivity.css";
import { Link } from "react-router-dom";
import { getSearchActivity } from "../Connection/Users";

const Searchactivity = () => {
  const [searchActivity, setSearchActivity] = useState();
  useEffect(() => {
    const fetchSearchActivity = async () => {
      let searchActivity = await getSearchActivity({
        id: window.localStorage.getItem("id"),
      });

      console.log(searchActivity);
      setSearchActivity(searchActivity.data.searchActivity);
      // setLoading(false);
    };
    fetchSearchActivity();
  }, []);
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
              {searchActivity ? null : (
                <div>
                  <i style={{ fontSize: "35px" }} class="fas fa-search"></i>
                  <br />
                  <br />
                  You Have no Search Activity Right Now
                  <br />
                  <Link to="/placead">
                    <button
                      className="btn mt-3 "
                      style={{ color: "white", backgroundColor: "#FF6E14" }}
                    >
                      <i class="fas fa-search mr-2"></i>
                      Start Searching
                    </button>
                  </Link>
                </div>
              )}
            </div>

            <div className="col-12">
              {searchActivity.map((search) => {
                return (
                  <div
                    className="my-2 py-3 px-5  text-left d-flex justify-content-between"
                    style={{
                      height: "90px",
                      width: "100%",
                      border: "1px solid gray",
                      borderRadius: "12px",
                    }}
                  >
                    <h3>{search}</h3>
                    {/* <p>
                      Visit <i class="fas fa-location-arrow"></i>
                    </p> */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchactivity;
