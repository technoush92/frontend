import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import "../Styles/Searchcard.css";
import CurrencyFormat from "react-currency-format";

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
  location,
}) => {
  const history = useHistory();
  const [color, setColor] = useState(false);
  let newDescription;

  const handleFavouriteAd = (data) => {
    handleFavourite(data);
    setColor(!color);
  };
  return (
    <div className="border  m-2" style={{ borderRadius: "12px" }}>
      <div className="row ">
        <div className="col-5 d-flex align-items-center px-0">
          <div className="" style={{}}>
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
                  location,
                },
              }}
            >
              <img
                src={image}
                className="  img-fluid my-2 ml-3"
                style={{
                  height: "90%",
                  width: "90%",
                  borderRadius: "12px",
                  // maxHeight: "250px",
                }}
              />
            </Link>
          </div>
        </div>
        <div className="col-7 py-1 px-2 text-left d-flex justify-content-between ">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "90%",
            }}
          >
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
                  location,
                },
              }}
            >
              <div className="  w-100 ">
                {title && (
                  <h5 className="mt-2">
                    {" "}
                    {title.length > 10
                      ? (title = `${title.slice(0, 18)}...`)
                      : title}
                  </h5>
                )}
                <h5 className="m-0 p-0">
                  Price :{" "}
                  <CurrencyFormat
                    value={price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"CFA "}
                    // decimalSeparator={","}
                    // onValueChange={(values) => {
                    //   const { formattedValue, value } = values;
                    //   console.log(formattedValue);
                    //   setValues({ ...values, price: formattedValue });
                    // }}
                  />
                </h5>
              </div>
            </Link>
            <div className="text-muted">
              <p className="m-0 p-0 d-block d-lg-none">
                {" "}
                Description :
                {description.length > 75
                  ? (newDescription = `${description.slice(0, 20)}...`)
                  : description}
              </p>
              <p className="m-0 p-0 d-none d-lg-block">
                {" "}
                Description :
                {description.length > 75
                  ? (newDescription = `${description.slice(0, 60)}...`)
                  : description}
              </p>

              <p className="m-0 p-0">Date : {date}</p>
            </div>
          </div>

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
