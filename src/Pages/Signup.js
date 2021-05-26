import React, { useState } from "react";
import Signupback from "../Assets/signupback.png";
import { Link, NavLink, useHistory } from "react-router-dom";
import Phone from "../Components/Phone";
import {
  signupUser,
  emailVerification,
  phoneVerification,
} from "../Connection/Auth";
import { useAuth } from "../Context/Auth-Context";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  // const [phone, setPhone] = useState(false);
  const { login } = useAuth();
  const history = useHistory();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const [emailVerify, setEmailVerify] = useState(false);
  const [phoneVerify, setPhoneVerify] = useState(false);
  const [emailOtp, setEmailOtp] = useState("");
  const [phoneOtp, setPhoneOtp] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleEmailOtp = (evt) => {
    setEmailOtp(evt.target.value);
  };

  const handlePhoneOtp = (evt) => {
    setPhoneOtp(evt.target.value);
  };

  const handleEmailVerify = async () => {
    let res = await emailVerification(emailOtp, email);
    if (res.data.success === true) {
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setEmailVerify(false);
      setPhoneVerify(true);
    } else {
      toast.error(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handlePhoneVerify = async () => {
    let res = await phoneVerification(phoneOtp, phone);
    console.log(res);
    if (res.data.success === true) {
      // login();
      // window.localStorage.setItem("username", res.data.user.username);
      // window.localStorage.setItem("accessToken", res.data.user.access_token);
      // window.localStorage.setItem("email", res.data.user.email);
      // window.localStorage.setItem("id", res.data.user.id);
      // window.localStorage.setItem("phone", res.data.user.phone);
      // window.localStorage.setItem("favourites", res.data.user.favourites);
      history.push("/login");
      toast.success("Welcome to VINTED.CI", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    let validEmail = validateEmail(values.email);

    if (validEmail) {
      let res = await signupUser(values);
      console.log(res);
      if (res.data.success === true) {
        setEmailVerify(true);
        setEmail(res.data.email);
        setPhone(res.data.phone);
      } else if (res.data.success === false) {
        toast.error(res.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } else {
      toast.error("Enter a valid Email Address", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  // const handlePhone = () => {
  //   setPhone(!phone);
  // };
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div
              className="shadow py-4"
              style={{ height: "600px", width: "100%" }}
            >
              {emailVerify === false && phoneVerify === false && (
                <div>
                  <h2>Signup</h2>
                  <form className="mt-5 px-4" onSubmit={handleSubmit}>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Username</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Phone</label>
                      <input
                        type="number"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                      />
                    </div>
                    {/* <p>
                  Create Account Using{" "}
                  <NavLink to="/signup">
                    <span onClick={handlePhone}>
                      {phone ? "Email" : "Phone Number"}
                    </span>
                  </NavLink>
                </p> */}
                    <button
                      type="submit"
                      class="btn btn-primary w-75"
                      onClick={handleSubmit}
                    >
                      Create my account
                    </button>
                  </form>
                  <br />
                  <p className="d-inline mb-2">OR</p>
                  <div>
                    {/* <div
                  className="fb-login-button"
                  data-width=""
                  data-size="medium"
                  data-button-type="continue_with"
                  data-layout="default"
                  data-auto-logout-link="false"
                  data-use-continue-as="false"
                ></div> */}
                    <button className="btn-sm btn-primary">
                      <i class="fab fa-facebook"></i> continue with Facebook
                    </button>
                  </div>
                </div>
              )}
              {emailVerify === true && (
                <div className="mt-5 px-4">
                  <h2>Email Verification</h2>
                  <br />
                  <div class="form-group">
                    <label for="exampleInputPassword1">Enter OTP</label>
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputPassword1"
                      name="emailOtp"
                      value={emailOtp}
                      onChange={handleEmailOtp}
                    />
                    <br />
                    <button
                      type="submit"
                      class="btn btn-primary w-75"
                      onClick={handleEmailVerify}
                    >
                      Verify Email
                    </button>
                  </div>
                </div>
              )}

              {phoneVerify === true && (
                <div className="mt-5 px-4">
                  <h2>Phone Verification</h2>
                  <br />
                  <div class="form-group">
                    <label for="exampleInputPassword1">Enter OTP</label>
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputPassword1"
                      name="emailOtp"
                      value={phoneOtp}
                      onChange={handlePhoneOtp}
                    />
                    <br />
                    <button
                      type="submit"
                      class="btn btn-primary w-75"
                      onClick={handlePhoneVerify}
                    >
                      Verify Phone
                    </button>
                    {/* <p>
                      {" "}
                      <i
                        style={{ color: "#0275d8" }}
                        class="fas fa-arrow-left mt-2"
                      ></i>{" "}
                      back
                    </p> */}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className=" d-none d-md-block col-12 col-md-6">
            <img className="img-fluid" src={Signupback} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
