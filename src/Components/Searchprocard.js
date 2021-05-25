import React from "react";

const Searchprocard = ({ title, image, description, price }) => {
  return (
    <div
      class="card my-2 rounded-lg"
      style={{ width: "14rem", border: "1px solid #FF6E14" }}
    >
      {/* {console.log(image)} */}
      <img src={image} class="card-img-top" alt="..." />
      <div class="card-body text-start ">
        <h4>{title}</h4>
        <p class="card-text text-muted ">Price : 2200</p>
        <p class="card-text text-muted">{description}</p>
        <p class="card-text text-muted">15 Apr , 10:10</p>{" "}
      </div>
    </div>
  );
};

export default Searchprocard;
