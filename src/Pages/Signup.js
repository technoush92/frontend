import React, { useState } from "react";
import Signupback from "../Assets/signupback.png";
import { Link, NavLink, useHistory } from "react-router-dom";
import Phone from "../Components/Phone";

const Signup = () => {
  const [phone, setPhone] = useState(false);

  const handlePhone = () => {
    setPhone(!phone);
  };
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
              <h2>Signup</h2>
              <form className="mt-5 px-4">
                <div class="form-group">
                  <label for="exampleInputEmail1">Username</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Phone</label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
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
                <button type="submit" class="btn btn-primary w-75">
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
