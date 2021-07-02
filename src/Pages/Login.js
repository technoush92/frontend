import React, { useState, useEffect } from "react";
import Loginback1 from "../Assets/loginback.jpg";
import Loginback2 from "../Assets/loginback2.jpg";
import { Link, NavLink, useHistory } from "react-router-dom";
import { loginUser, fbLogin } from "../Connection/Auth";
import { useAuth } from "../Context/Auth-Context";
import Toast from "../Components/Toast";
import ReactDOM from "react-dom";
import { ToastContainer, toast } from "react-toastify";
import Facebook from "../Components/Facebook";
import Phone from "../Components/Phone";
import CurrencyFormat from "react-currency-format";

const Login = () => {
  const [phone, setPhone] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const { login, loggedIn } = useAuth();
  const history = useHistory();
  const [state, setState] = useState({
    emailorphone: "",
    password: "",
  });

  const handleState = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handlePhoneValue = (phoneValues) => {
    console.log(phoneValues);
    const { value } = phoneValues;
    setState({
      ...state,
      emailorphone: `225${value}`,
    });
  };

  const handleFbLogin = async (data) => {
    console.log(data);
    let res = await fbLogin(data);
    console.log(res);

    if (res.data.success === true) {
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      login();
      window.localStorage.setItem("username", res.data.username);
      window.localStorage.setItem("accessToken", res.data.access_token);
      window.localStorage.setItem("email", res.data.email);
      window.localStorage.setItem("id", res.data.id);
      window.localStorage.setItem("phone", res.data.phone);
      window.localStorage.setItem("favourites", res.data.favourites);
      window.localStorage.setItem("image", res.data.profileImage);
      history.push("/");
    } else {
      toast.error(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleSubmit = async (type) => {
    console.log(state);
    console.log(type);
    let res = await loginUser({
      ...state,
      type,
    });
    console.log();

    if (res.data.success === true) {
      if (res.data.emailVerified === true) {
        if (res.data.phoneVerified) {
          toast.success(res.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          login();
          window.localStorage.setItem("username", res.data.username);
          window.localStorage.setItem("accessToken", res.data.access_token);
          window.localStorage.setItem("email", res.data.email);
          window.localStorage.setItem("id", res.data.id);
          window.localStorage.setItem("phone", res.data.phone);
          window.localStorage.setItem("favourites", res.data.favourites);
          window.localStorage.setItem("image", res.data.profileImage);
          window.localStorage.setItem("location", res.data.location.address);
          history.push("/");
        } else {
          toast.error("Your Phone is not verified", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      } else {
        toast.error("Your Email is not verified", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } else {
      toast.error(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handlePhone = () => {
    setPhone(!phone);
    setState({ emailorphone: "", password: "" });
  };

  useEffect(() => {
    setLoaded(true);
  }, []);
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
              {phone ? (
                <div class="form-group">
                  <label for="exampleInputEmail1">Phone</label>
                  {/* <input
                    type="number"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="emailorphone"
                    value={state.emailorphone}
                    onChange={handleState}
                  /> */}
                  <CurrencyFormat
                    className="form-control  form-control-lg"
                    format="+225 (###) ###-####"
                    mask="_"
                    onValueChange={(values) => handlePhoneValue(values)}
                    placeholder="+225 _ _ _ _ _ _ _ _"
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
                    name="emailorphone"
                    value={state.emailorphone}
                    onChange={handleState}
                  />
                </div>
              )}
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={state.password}
                  onChange={handleState}
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
              {phone ? (
                <button
                  class="btn btn-primary w-100 mt-1"
                  onClick={() => handleSubmit("phone")}
                >
                  Login
                </button>
              ) : (
                <button
                  class="btn btn-primary w-100 mt-1"
                  onClick={() => handleSubmit("email")}
                >
                  Login
                </button>
              )}
              <br />
              <p>
                Dont have an account ?{" "}
                <NavLink to="/signup">Create Account</NavLink>
              </p>
              <p className="d-inline mb-2">OR</p>
              <br />
              {loaded && (
                <div className="d-flex justify-content-center">
                  <Facebook handleFbLogin={handleFbLogin} />
                </div>
              )}
              {/* <Facebook handleFbLogin={handleFbLogin} /> */}
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
