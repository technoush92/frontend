import React, { FC, RefObject, useRef, useState } from "react";
import "../Styles/Homecard.css";
import Locationdropdown from "./Locationdropdown";
import Range from "./Range";
import Switchbutton from "./Switchbutton";
import { searchQuery } from "../Connection/Placead";
import { Link, NavLink, useHistory } from "react-router-dom";
import Loader from "../Components/Loader";
import Choosecategory from "./Choosecategory";
import { useAuth } from "../Context/Auth-Context";
import AutoComplete from "react-google-autocomplete";
import { Input, TextField } from "@material-ui/core";

const Homecard = ({ handleSearch, Home }) => {
  const [search, setSearch] = useState({
    searchValue: "",
    location: "",
    category: "",
    price: [],
    negotiable: false,
  });
  const history = useHistory();
  const [loader, setLoader] = useState(false);
  const { categories, setCategories } = useAuth();

  const handlePrice = (price) => {
    console.log(price);
    setSearch({
      ...search,
      price: price,
    });
  };

  const handleNegotiable = (checked) => {
    console.log(checked);
    setSearch({ ...search, negotiable: checked });
  };

  const handleChange = (evt) => {
    setSearch({ ...search, searchValue: evt.target.value });
    setLoader(false);
  };

  const handleCategory = (category, subCategory) => {
    setSearch({ ...search, category: { category, subCategory } });
  };

  const handlePlaceSelected = (res) => {
    console.log(res);
    setSearch({
      ...search,
      location: {
        address: res.formatted_address,
        markerPosition: {
          lat: res.geometry.location.lat(),
          lng: res.geometry.location.lng(),
        },
        mapPosition: {
          lat: res.geometry.location.lat(),
          lng: res.geometry.location.lng(),
        },
      },
    });
  };

  const handlePlaceChange = (evt) => {
    console.log(evt.target.value);
    if (evt.target.value.length === 0) {
      console.log("empty");
      setSearch({ ...search, location: "" });
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setLoader(true);
    // if (Home) {
    //   history.push("/search");
    // }

    console.log(search);
    let res = await searchQuery({
      search: search,
      userId: window.localStorage.getItem("id"),
    });
    if (res.data.success === true) {
      setLoader(false);
      handleSearch(res.data.ads);
      history.push("/search");
    }
  };
  return (
    <div
      className="border shadow-sm rounded-lg p-4"
      style={{ height: "240px", backgroundColor: "white" }}
    >
      {console.log(search)}

      <br />
      <div>
        <div className="row  ">
          <div className="col-12 col-md-3 p-0">
            {categories && (
              <Choosecategory
                data={categories}
                handleCategory={handleCategory}
              />
            )}
          </div>
          <div className="col-12 col-md-5 px-1 d-flex ">
            <div class="input-group mb-3 ">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <i class="fas fa-search"></i>
                </span>
              </div>

              <input
                type="text"
                className="form-control "
                placeholder="What are you looking for?"
                aria-describedby="basic-addon1"
                style={{
                  height: "40px",
                  backgroundColor: "#F4F6F7",
                  color: "black",
                }}
                value={search.searchValue}
                onChange={handleChange}
              />
              {loader ? (
                <Loader />
              ) : (
                <button
                  className="btn "
                  style={{
                    backgroundColor: "#FF6E14",
                    color: "white",
                    border: "1px solid grey",
                  }}
                  onClick={handleSubmit}
                  type="submit"
                >
                  Search
                </button>
              )}
            </div>
          </div>
          <div className="col-12 col-md-4 px-1 wrapper">
            {/* <Locationdropdown /> */}
            {/* <i class="fa fa-icon"></i> */}
            <AutoComplete
              apiKey="AIzaSyAQLhbqMNW1j54RhL_uDM5yvCXJTFSObE8"
              style={{
                height: "40px",
                backgroundColor: "#F4F6F7",
                color: "black",
              }}
              type={["(regions)"]}
              onPlaceSelected={handlePlaceSelected}
              componentRestrictions={{ country: ["us"] }}
              className=" form-control"
              onChange={handlePlaceChange}
            />
          </div>
        </div>
      </div>
      <div className="d-none d-md-block">
        <div style={{ zIndex: "99" }}>
          <Range handlePrice={handlePrice} />
        </div>
      </div>
      <div className="mt-2 d-none d-md-block">
        <div className="d-flex">
          <Switchbutton
            label="Nigotiable Ads"
            func={handleNegotiable}
            checked={search.negotiable}
          />
        </div>
      </div>
    </div>
  );
};

export default Homecard;
