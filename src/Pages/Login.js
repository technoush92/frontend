import React, { useState } from "react";
import Loginback1 from "../Assets/loginback.jpg";
import Loginback2 from "../Assets/loginback2.jpg";
import { Link, NavLink, useHistory } from "react-router-dom";

const Login = () => {
  const [phone, setPhone] = useState(false);

  const handlePhone = () => {
    setPhone(!phone);
  };
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <div className="row">
        <div className="col-12 d-none d-lg-block col-md-3 col-lg-4">
          <img className="img-fluid" src={Loginback1} />
        </div>
        <div className="col-12 d-flex justify-content-center col-md-6 col-lg-4 ">
          <div
            className="shadow mt-5"
            style={{ height: "550px", width: "100%" }}
          >
            <h2 className="mt-4">Login</h2>

            <div className="mt-4 px-4">
              <form>
                {phone ? (
                  <div class="form-group">
                    <label for="exampleInputEmail1">Phone</label>
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                ) : (
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                )}
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="">
                  <p>
                    <NavLink to="/login">
                      <span onClick={handlePhone}>
                        {phone ? "Email?" : "Phone Number?"}
                      </span>
                    </NavLink>
                  </p>
                  <NavLink to="/forgot">Forgot Password?</NavLink>
                </div>
                <button type="submit" class="btn btn-primary w-100 mt-1">
                  Submit
                </button>
              </form>
              <br />
              <p>
                Dont have an account ?{" "}
                <NavLink to="/signup">Create Account</NavLink>
              </p>
              <p className="d-inline mb-2">OR</p>
              <div className="d-flex justify-content-center">
                <div
                  className="fb-login-button"
                  data-width=""
                  data-size="medium"
                  data-button-type="continue_with"
                  data-layout="default"
                  data-auto-logout-link="false"
                  data-use-continue-as="false"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 d-none d-lg-block col-md-3 col-lg-4">
          <img className="img-fluid mt-5" src={Loginback2} />
        </div>
      </div>
    </div>
  );
};

export default Login;
