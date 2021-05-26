import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import "../Styles/Searchcard.css";

const Searchcard = ({
  image,
  title,
  description,
  price,
  date,
  id,
  handleFavourite,
  contactDetails,
  images,
}) => {
  const history = useHistory();
  const [color, setColor] = useState(false);

  const handleFavouriteAd = (data) => {
    handleFavourite(data);
    setColor(!color);
  };
  return (
    <div className="border  m-2" style={{ borderRadius: "12px" }}>
      <div className="row ">
        <div className="col-5 px-0">
          <div>
            <img
              src={image}
              className="  img-fluid my-2 ml-3"
              style={{ height: "90%", width: "90%" }}
            />
          </div>
        </div>
        <div className="col-7 py-1 px-2 text-left d-flex justify-content-between ">
          <Link
            to={{
              pathname: `/showad/${id}`,
              state: {
                title,
                images,
                description,
                price,
                date,
                id,
                contactDetails,
              },
            }}
          >
            <div>
              <div className="  w-100 ">
                {title && (
                  <h5>
                    {" "}
                    {title.length > 10
                      ? (title = `${title.slice(0, 18)}...`)
                      : title}
                  </h5>
                )}
              </div>
              <div className="text-muted">
                <p className="m-0 p-0">
                  {" "}
                  Description :
                  {description.length > 75
                    ? (description = `${description.slice(0, 75)}...`)
                    : description}
                </p>
                <p className="m-0 p-0">Price : {price}</p>
                {/* <p className="m-0 p-0">Date : {date}</p> */}
              </div>
            </div>
          </Link>
          <div className="mx-4 my-1">
            <i
              class={`far fa-heart ${color ? "applycolor" : ""}`}
              onClick={() => handleFavouriteAd(id)}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchcard;
