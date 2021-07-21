import React, { useState, useEffect } from "react";
import { sendMessage } from "../Connection/Messages";
import { ToastContainer, toast } from "react-toastify";
import { Link, NavLink, useHistory } from "react-router-dom";
import Loader from "../Components/Loader";
import Showadmap from "../Components/Showadmap";
import CurrencyFormat from "react-currency-format";

const Sendmessage = ({ location }) => {
  const [data, setData] = useState(location.state.data);
  const history = useHistory();
  const [loader, setLoader] = useState(false);

  const [message, setMessage] = useState({
    phone: "",
    message: "",
    adData: location.state.data,
    userId: window.localStorage.getItem("id"),
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setLoader(true);
    let res = await sendMessage({
      ...message,
      email: data.contactDetails.email,
      membersEmails: [
        window.localStorage.getItem("email"),
        data.contactDetails.email,
      ],
    });
    if (res.data.success === true) {
      // history.push("/");
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setLoader(false);
      setMessage({
        phone: "",
        message: "",
        adData: location.state.data,
        userId: window.localStorage.getItem("id"),
      });
      history.push("/messages");
    } else {
      toast.error(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleChange = (evt) => {
    setMessage({
      ...message,
      [evt.target.name]: evt.target.value,
    });
  };
  return (
    <div>
      {data && (
        <div style={{ backgroundColor: "#ffffff", height: "100vh" }}>
          <br />
          <br />

          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-6 mt-3">
                <div
                  style={{
                    //   height: "300px",
                    border: "3px solid #F4F6F7",
                    borderRadius: "12px",
                    position: "relative",
                  }}
                  className="text-left p-4 shadow-sm"
                >
                  <h2>Send a message to {data.contactDetails.firstName}</h2>
                  <br />
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Your Phone</label>
                    <input
                      type="number"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder=""
                      value={message.phone}
                      onChange={handleChange}
                      name="phone"
                    />
                  </div>
                  <br />
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">
                      Your Message
                    </label>
                    <textarea
                      class="form-control"
                      id="Hello, Is this Property still Availible?"
                      rows="5"
                      value={message.message}
                      onChange={handleChange}
                      name="message"
                    ></textarea>
                  </div>
                  {loader ? (
                    <Loader />
                  ) : (
                    <button
                      className="btn btn-primary w-100"
                      onClick={handleSubmit}
                    >
                      <i class="far fa-paper-plane"></i> Send
                    </button>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-6 my-3">
                <div
                  style={{
                    //   height: "300px",
                    border: "3px solid #F4F6F7",
                    borderRadius: "12px",
                    position: "relative",
                  }}
                  className="text-left p-4 shadow-sm"
                >
                  <h2>Summary of the Ad</h2>
                  <br />
                  <h2>{data.title}</h2>
                  <br />
                  <h3>
                    {" "}
                    <CurrencyFormat
                      value={data.price}
                      thousandSeparator={"."}
                      decimalSeparator={","}
                      displayType={"text"}
                      // thousandSeparator={true}
                      // prefix={"CFA "}
                      // decimalSeparator={","}
                      // onValueChange={(values) => {
                      //   const { formattedValue, value } = values;
                      //   console.log(formattedValue);
                      //   setValues({ ...values, price: formattedValue });
                      // }}
                    />{" "}
                    CFA
                  </h3>
                  <p className="mute">{data.date}</p>
                  <br />
                  <p>
                    by <strong>{data.contactDetails.firstName}</strong>
                  </p>
                  <br />
                  <hr />
                  <br />
                  <h2>Description</h2>
                  <br />
                  <p>{data.description}</p>
                  <br />
                  <hr />
                  <br />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sendmessage;
