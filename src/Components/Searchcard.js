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
    <div
      className="border  m-2"
      style={{ borderRadius: "12px", height: "200px" }}
    >
      <div className="row ">
        <div className="col-5 col-md-5 d-flex align-items-center px-0">
          <div className="imgcontainersearchcard" style={{}}>
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
              {/* {console.log(image)} */}
              <img
                src={image}
                className=" 
                imgstylesearchcard  my-2 ml-4"
                // style={{
                //   height: "90%",
                //   width: "90%",
                //   borderRadius: "12px",
                //   // maxHeight: "170px",
                // }}
              />
            </Link>
          </div>
        </div>
        <div className="col-7 col-md-7 py-1  px-2 text-left d-flex justify-content-between ">
          <div>
            <div
              // style={{
              //   display: "flex",
              //   flexDirection: "column",
              //   justifyContent: "space-between",
              //   height: "90%",
              // }}
              // style={{ position: "relative", height: "100%" }}
              className="ml-3"
            >
              <div>
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
                          ? (title = `${title.slice(0, 10)}...`)
                          : title}
                      </h5>
                    )}
                    <h5 className="m-0 p-0">
                      <CurrencyFormat
                        value={price}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                        displayType={"text"}
                      />{" "}
                      CFA
                    </h5>
                  </div>
                </Link>
              </div>

              <div
                className="text-muted mt-3  mt-lg-4 mt-xl-5"
                // style={{
                //   height: "100%",
                //   position: "absolute",
                //   bottom: "-100%",
                // }}
              >
                <p className="m-0 p-0 d-block d-lg-none">
                  {" "}
                  {description.length > 75
                    ? (newDescription = `${description.slice(0, 20)}...`)
                    : description}
                </p>
                <p className="m-0 p-0 d-none d-lg-block">
                  {" "}
                  {description.length > 75
                    ? (newDescription = `${description.slice(0, 60)}...`)
                    : description}
                </p>

                <p className="m-0 p-0 d-none d-md-block">{date}</p>
              </div>
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
