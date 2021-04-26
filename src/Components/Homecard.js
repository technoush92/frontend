import React, { useState } from "react";
import "../Styles/Homecard.css";
import Locationdropdown from "./Locationdropdown";
import Range from "./Range";
import Switchbutton from "./Switchbutton";

const Homecard = () => {
  return (
    <div
      className="border shadow-sm rounded-lg p-4"
      style={{ height: "240px", backgroundColor: "white" }}
    >
      {/* <div className="d-none d-md-block">
        <div className="  d-flex mb-4">
          <div class="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              id="customRadioInline1"
              name="customRadioInline1"
              class="custom-control-input"
            />
            <label class="custom-control-label" for="customRadioInline1">
              Offers
            </label>
          </div>
          <div class="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              id="customRadioInline2"
              name="customRadioInline1"
              class="custom-control-input"
            />
            <label class="custom-control-label" for="customRadioInline2">
              Requests
            </label>
          </div>
        </div>
      </div> */}

      <div>
        <div className="row  ">
          <div className="col-12 col-md-3 p-0">
            <div class="dropdown d-flex">
              <button
                class="btn mb-3  dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{
                  fontSize: "17px",
                  width: "100%",
                  backgroundColor: "#F4F6F7",
                }}
              >
                <i class="fas fa-list-ul mr-2"></i>
                Categories
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
          <div className="col-12 col-md-5 px-1 d-flex ">
            {/* <input
              className="form-control mb-2"
              type="text"
              placeholder="&#61442; What are you looking for"
              style={{
                height: "40px",
                backgroundColor: "#F4F6F7",
                color: "black",
              }}
            /> */}
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <i class="fas fa-search"></i>
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="What are you looking for?"
                aria-describedby="basic-addon1"
                style={{
                  height: "40px",
                  backgroundColor: "#F4F6F7",
                  color: "black",
                }}
              />
            </div>
          </div>
          <div className="col-12 col-md-4 px-1 ">
            <Locationdropdown />
          </div>
        </div>
      </div>
      <div className="d-none d-md-block">
        <div>
          <Range />
        </div>
      </div>
      <div className="mt-2 d-none d-md-block">
        <div className="d-flex">
          <Switchbutton label="Nigotiable Ads" />
        </div>
      </div>
    </div>
  );
};

export default Homecard;
