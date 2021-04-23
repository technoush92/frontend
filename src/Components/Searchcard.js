import React from "react";

const Searchcard = ({ image, title, description }) => {
  return (
    <div className="border rounded-lg m-2">
      <div className="row ">
        <div className="col-5">
          <img
            src={image}
            className="  img-fluid "
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div className="col-7 p-3 ">
          <div className="  w-100 d-flex justify-content-start">
            <h5>{title}</h5>
          </div>
          <div className=" text-muted ">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchcard;
