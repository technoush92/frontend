import React from "react";

const Searchcard = ({ image, title, description }) => {
  return (
    <div className="border rounded-lg m-2">
      <div className="row ">
        <div className="col-5 px-0">
          <img
            src={image}
            className="  img-fluid "
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div className="col-7 py-1 px-2 text-left ">
          <div className="  w-100 ">
            <h5>{title}</h5>
          </div>
          <div className="text-muted">
            <p className="m-0 p-0">{description}</p>
            <p className="m-0 p-0">Price : 2200</p>
            <p className="m-0 p-0">15 Apr , 10:10</p>
          </div>
          {/* <div className=" text-muted ">
            <div className="d-flex justify-content-start">
              <p className="">{description}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Price : 2200</p>
              <i class="far fa-heart m-2"></i>
            </div>
            <div className="d-flex justify-content-start">
              <p class="card-text text-muted">15 Apr , 10:10</p>{" "}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Searchcard;
