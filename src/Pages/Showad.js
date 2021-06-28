import React, { useState, useEffect } from "react";
import Carousal from "../Components/Carousal";
import Avatarimage from "../Components/Avatarimage";
import { getAd, getFeatureAd } from "../Connection/Placead";
import { Link } from "react-router-dom";
import Showadmap from "../Components/Showadmap";
import { ToastContainer, toast } from "react-toastify";
import CurrencyFormat from "react-currency-format";

const Showad = ({ location, match }) => {
  const [seeNumber, setSeeNumber] = useState(false);
  const [data, setData] = useState();

  const handleSeeNumber = () => {
    setSeeNumber(true);
  };

  const handleMessage = () => {};

  useEffect(() => {
    const fetchAd = async (id) => {
      let res = await getAd({ id });
      console.log(res);
      if (res.data.success === true) {
        if (res.data.ad.length <= 0) {
          let newRes = await getFeatureAd({ id });
          console.log("response of featureAd", newRes);
          if (newRes.data.success === true) {
            if (newRes.data.ad.length <= 0) {
              toast.error("Ad is deleted", {
                position: toast.POSITION.TOP_RIGHT,
              });
            } else {
              setData(newRes.data.ad[0]);
            }
          }
        } else {
          setData(res.data.ad[0]);
        }
      }
    };
    if (location.state === undefined) {
      fetchAd(match.params.id);
    } else {
      setData(location.state);
    }
  }, [location.state]);
  return (
    <div style={{ backgroundColor: "#ffffff", height: "100vh" }}>
      {console.log(location)}
      <br />
      <br />
      <br />
      <div>
        <div className="container-fluid">
          {data && (
            <div className="row mx-2">
              <div className="col-12 col-md-8 col-lg-7 text-left">
                <Carousal image={data.images} />
                <br />
                <h1>{data.title}</h1>
                <h3 className="mt-3">
                  {" "}
                  <CurrencyFormat
                    value={data.price}
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
                </h3>
                <h5>{data.date}</h5>
                <br />
                <br />
                <br />
                <hr />
                <div>
                  <h2>Description</h2>
                  <br />
                  <p>{data.description}</p>
                </div>
                <br />
                <br />
                <hr />
                {data.location && (
                  <div>
                    <h2>Location</h2>
                    <br />
                    <h5>{data.location.address}</h5>
                    <br />
                    {/* <p>MAP WOULD BE THERE</p> */}
                    <Showadmap data={data.location} />
                  </div>
                )}

                <br />
                <br />
                <hr />
                <div className="d-flex justify-content-between">
                  <Avatarimage username={data.contactDetails.firstName} />
                  <div>
                    <Link
                      to={{
                        pathname: `/sendmessage`,
                        state: {
                          data: data,
                        },
                      }}
                    >
                      {" "}
                      <button className="btn btn-outline-primary btn-lg  m-2  ">
                        Contact
                      </button>
                    </Link>
                  </div>
                </div>
                <br />
                <br />
                <br />
              </div>
              <div className="col-12 col-md-4 col-lg-5">
                <div
                  style={{
                    height: "300px",
                    border: "3px solid #F4F6F7",
                    borderRadius: "12px",
                    position: "relative",
                  }}
                  className="text-center p-4 shadow-sm"
                >
                  <br />

                  <Avatarimage username={data.contactDetails.firstName} />
                  <br />
                  <br />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 35,
                      left: "0",
                      right: "0",
                    }}
                    className=""
                  >
                    <button
                      className="btn btn-outline-primary mr-1  btn-lg mb-2"
                      style={{ width: "200px" }}
                      onClick={handleSeeNumber}
                    >
                      {seeNumber ? data.contactDetails.phone : "See Number"}
                    </button>
                    <Link
                      to={{
                        pathname: `/sendmessage`,
                        state: {
                          data: data,
                        },
                      }}
                    >
                      <button
                        className="btn btn-primary ml-1 btn-lg mb-2"
                        style={{ width: "200px" }}
                        onClick={handleMessage}
                      >
                        Message
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Showad;
