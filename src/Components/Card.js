import React from "react";

const Card = ({ img, text }) => {
  return (
    <div class="card mx-2" style={{ width: "20rem", marginTop: "35px" }}>
      {/* {console.log(img)} */}
      <img src={img} class="card-img-top img-fluid rounded-lg" alt="..." />
      <div style={{ marginTop: "-65px", padding: "15px" }} class="shadow">
        <h3 class="card-text text-white">{text}</h3>
      </div>
    </div>
  );
};

export default Card;
