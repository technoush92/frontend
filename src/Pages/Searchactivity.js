import React, { useState, useEffect } from "react";
import "../Styles/Searchactivity.css";
import { Link } from "react-router-dom";
import { getSearchActivity, deleteSearchActivity } from "../Connection/Users";
import { ToastContainer, toast } from "react-toastify";

const Searchactivity = () => {
  const [searchActivity, setSearchActivity] = useState();
  const [update, setUpdate] = useState(false);

  const handleDelete = async (title) => {
    console.log(title);
    const res = await deleteSearchActivity({
      title: title,
      userId: window.localStorage.getItem("id"),
    });
    console.log(res);
    if (res.data.success === true) {
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setUpdate(true);
    } else {
      toast.error(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  useEffect(() => {
    const fetchSearchActivity = async () => {
      let searchActivity = await getSearchActivity({
        id: window.localStorage.getItem("id"),
      });

      console.log(searchActivity);
      setSearchActivity(searchActivity.data.searchActivity);
      // setLoading(false);
    };
    setUpdate(false);
    fetchSearchActivity();
  }, [update === true]);
  return (
    <div style={{ backgroundColor: "#ffffff", height: "100vh" }}>
      <br />
      <div className="container">
        <div className="jumbotron jumbotron-search">
          {/* <h1 style={{ color: "#FF6E14" }}>Search Activity</h1> */}
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

            {searchActivity && (
              <div className="col-12">
                {searchActivity
                  .map((search) => {
                    return (
                      <div
                        className="my-2 py-3 px-5  text-left d-flex justify-content-between"
                        style={{
                          height: "175px",
                          width: "100%",
                          border: "1px solid gray",
                          borderRadius: "12px",
                        }}
                      >
                        <div>
                          {/* <h3>Search Title</h3> */}
                          <h5>Query : {search.searchValue}</h5>
                          <p>Category : {search.categoryName}</p>
                          <p>Sub Category : {search.subTitle}</p>
                          <p>Date : {new Date(search.date).toDateString()}</p>
                        </div>
                        <div className="mt-2">
                          {" "}
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(search.searchValue)}
                          >
                            Delete <i class="far fa-trash-alt"></i>
                          </button>
                        </div>
                      </div>
                    );
                  })
                  .reverse()}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchactivity;
