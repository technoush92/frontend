import React, { useState, useEffect } from "react";
import "../Styles/Manageorders.css";
import { getUserAds, deleteAd, activeAd } from "../Connection/Placead";
import Tableads from "../Components/Tableads";
import { ToastContainer, toast } from "react-toastify";
import { Redirect, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader";
// import { set } from "mongoose";

const Manageorders = () => {
  const [userData, setUserData] = useState();
  const [ads, setAds] = useState();
  const [update, setUpdate] = useState(false);
  const [search, setSearch] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();
  const [loading, setLoading] = useState(true);

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

  const handleDelete = async (id) => {
    console.log(id);
    let res = await deleteAd({ id });
    if (res.data.success === true) {
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleActive = async (checked, id) => {
    console.log(checked);
    let res = await activeAd({ checked: checked, id });
    console.log(res);
    if (res.data.success === true) {
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    setUpdate(true);
  };

  const handleChange = (evt) => {
    let yoo;
    setSearchValue(evt.target.value);
    yoo = ads.filter((ad) => {
      return ad.title.toLowerCase().includes(evt.target.value.toLowerCase());
    });
    // console.log(yoo);
    setSearch(yoo);
  };

  const handleEdit = (data) => {
    console.log(data);
    history.push({
      pathname: "/editad",
      state: data,
    });
  };

  useEffect(() => {
    let data = {
      username: window.localStorage.getItem("username"),
      email: window.localStorage.getItem("email"),
      id: window.localStorage.getItem("id"),
      phone: window.localStorage.getItem("phone"),
    };
    setUserData(data);

    const fetchAds = async () => {
      let userAds = await getUserAds({ id: window.localStorage.getItem("id") });

      console.log(userAds);
      setAds(userAds.data.ads);
      setLoading(false);
    };

    fetchAds();
    setUpdate(false);
  }, [update]);
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <div>
        {console.log(search)}
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
                    value={searchValue}
                    onChange={handleChange}
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
            <div className="container">
              <div
                className="p-5 row "
                style={{
                  border: "1px solid #F4F6F7",
                }}
              >
                <div className="col-12">
                  {!ads && (
                    <div>
                      <i
                        style={{ fontSize: "35px" }}
                        class="fas fa-box-open"
                      ></i>
                      <br />
                      You Have no Ads Online
                      <br />
                      <Link to="/placead">
                        <button
                          className="btn mt-3 "
                          style={{ color: "white", backgroundColor: "#FF6E14" }}
                        >
                          <i class="far fa-plus-square mr-2"></i>
                          Place an ad
                        </button>
                      </Link>
                    </div>
                  )}

                  {ads && (
                    <Tableads
                      data={searchValue.length > 0 ? search : ads}
                      handleDelete={handleDelete}
                      handleActive={handleActive}
                      handleEdit={handleEdit}
                    />
                  )}
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
