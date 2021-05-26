import React, { useState, useEffect } from "react";
import Placeadcategory from "../Components/Placeadcategory";
import Imageupload from "../Components/Imageupload";
import Switchbutton from "../Components/Switchbutton";
import { placeAd } from "../Connection/Placead";
import { Link, NavLink, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../Components/Loader";

const categories = [
  {
    icon: <i class="far fa-sun px-2"></i>,
    name: "Vacation",
    sub: ["rentals", "Guest Rooms", "Campasites", "Unusual Acommodation"],
  },
  {
    icon: <i class="fas fa-toolbox px-2"></i>,
    name: "Employment",
    sub: ["rentals", "Guest Rooms", "Campasites", "Unusual Acommodation"],
  },
  {
    icon: <i class="fas fa-car px-2"></i>,
    name: "Vehicle",
    sub: ["rentals", "Guest Rooms", "Campasites"],
  },
  {
    icon: <i class="fas fa-tshirt px-2"></i>,
    name: "Fashion",
    sub: ["rentals", "Guest Rooms", "Campasites", "Unusual Acommodation"],
  },
  {
    icon: <i class="fas fa-home px-2"></i>,
    name: "Home",
    sub: ["rentals", "Guest Rooms", "Campasites", "Unusual Acommodation"],
  },
  {
    icon: <i class="fas fa-mobile px-2"></i>,
    name: "Multimedia",
    sub: ["rentals", "Guest Rooms", "Campasites", "Unusual Acommodation"],
  },
  {
    icon: <i class="fas fa-basketball-ball px-2"></i>,
    name: "Hobbies",
    sub: ["rentals", "Guest Rooms", "Camp"],
  },
  {
    icon: <i class="fas fa-paw px-2"></i>,
    name: "Animals",
    sub: ["rentals", "Guest Rooms", "Campasites", "Unusual Acommodation"],
  },
  {
    icon: <i class="fas fa-video px-2"></i>,
    name: "Professional equipment",
    sub: ["rentals", "Guest Rooms", "Campasites"],
  },
  {
    icon: <i class="far fa-handshake px-2"></i>,
    name: "Services",
    sub: ["rentals", "Guest Rooms", "Campasites", "Unusual Acommodation"],
  },
  {
    icon: <i class="fas fa-ellipsis-h px-2"></i>,
    name: "Various",
    sub: ["rentals", "Guest Rooms", "Campasites", "Unusual Acommodation"],
  },
];

const Placead = () => {
  const history = useHistory();
  const [user, setUser] = useState();
  const [section, setSection] = useState(1);
  const [carryOnDisabled, setCarryOnDisabled] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [loader, setLoader] = useState(false);
  const [values, setValues] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
    images: [],
    location: "",

    negotiable: false,
    hideNumber: false,
    reviewed: false,
    user: user,
  });

  const [categoryOn, setCategoryOn] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    setCarryOnDisabled(false);
  };

  const handleSelectCategory = (cate) => {
    setSelectedCategory(cate);
    setCategoryOn(true);
    // const { name, value } = e.target;
    setValues({ ...values, category: cate });
    setCarryOnDisabled(false);
  };

  const handleSelectedImages = (imgs) => {
    setValues({ ...values, images: imgs });
    setCarryOnDisabled(false);
  };

  const handleContactDetails = (evt) => {
    let temp = values.contactDetails;

    temp = { ...values.contactDetails, [evt.target.name]: evt.target.value };
    setValues({ ...values, contactDetails: temp });
    setCarryOnDisabled(false);
  };

  const handleSwitch = (state, name) => {
    console.log(state);
    setValues({ ...values, [name]: state });
  };

  const handleResetSelectCategory = () => {
    setCategoryOn(false);
  };

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleSubmit = async () => {
    setDisabled(true);
    setCarryOnDisabled(true);
    setLoader(true);

    console.log(values);

    let data = {
      ...values,
      contactDetails: {
        firstName: window.localStorage.getItem("username"),
        email: window.localStorage.getItem("email"),
        phone: window.localStorage.getItem("phone"),
      },
    };

    console.log(data);

    let res = await placeAd(data);
    if (res.data.success === true) {
      history.push("/");
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    // let validEmail = validateEmail(values.contactDetails.email);

    // if (validEmail) {
    // } else {
    //   toast.error("Enter a valid Email Address", {
    //     position: toast.POSITION.TOP_RIGHT,
    //   });
    // }
  };

  const handleMaps = () => {
    setValues({
      ...values,
      contactDetails: {
        firstName: window.localStorage.getItem("username"),
        email: window.localStorage.getItem("email"),
        phone: window.localStorage.getItem("phone"),
      },
    });

    handleSubmit();
  };

  const handleForward = () => {
    setSection((section) => section + 1);
    setCarryOnDisabled(true);
  };

  const handleBackward = () => {
    setSection((section) => section - 1);
  };

  useEffect(() => {
    setValues({ ...values, user: window.localStorage.getItem("id") });
  }, []);
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        height: `${
          section === 1 ||
          section === 4 ||
          section === 5 ||
          section === 6 ||
          section === 7
            ? "100vh"
            : "100%"
        }`,
      }}
    >
      {console.log(user)}
      {console.log(values)}
      <div>
        <br />
        <br />
        <div className="text-left container">
          <h2>Place an Ad</h2>
        </div>
        <br />
        <br />

        <div className="container text-left " style={{}}>
          <div className="row">
            <div className="col-12 col-lg-9">
              <div className="p-4" style={{ backgroundColor: "#FFFFFF" }}>
                <div
                  className={`Section1 ${section === 1 ? "d-block" : "d-none"}`}
                >
                  <h4>Lets Start With Basics</h4>
                  <br />
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <label>What is the title of the Ad</label>
                      <input
                        class="form-control  form-control-lg"
                        type="text"
                        placeholder="Enter Your Ad title"
                        maxlength="100"
                        value={values.title}
                        onChange={handleChange}
                        name="title"
                      />
                      <small id="emailHelp" class="form-text text-muted">
                        Max 100 Characters
                      </small>
                    </div>
                    <div className="col-12 col-md-6"></div>
                  </div>
                  <br />
                  <div className="d-flex justify-content-end">
                    {carryOnDisabled ? null : (
                      <button
                        className="btn btn-primary"
                        onClick={handleForward}
                      >
                        Carry On
                      </button>
                    )}
                  </div>
                  <br />
                </div>
                <div
                  className={`Section2 ${section === 2 ? "d-block" : "d-none"}`}
                >
                  <h4>Choose The Category</h4>
                  <br />
                  <div className="">
                    {categoryOn === false ? (
                      <div>
                        <Placeadcategory
                          selectCategory={handleSelectCategory}
                          categories={categories}
                        />
                      </div>
                    ) : (
                      <div class="form-group">
                        <select
                          class="form-control form-control-lg"
                          id="exampleFormControlSelect1"
                          onClick={handleResetSelectCategory}
                        >
                          <option>{selectedCategory}</option>
                        </select>
                      </div>
                    )}
                  </div>
                  <br />
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-outline-primary"
                      onClick={handleBackward}
                    >
                      Return
                    </button>
                    {carryOnDisabled ? null : (
                      <button
                        className="btn btn-primary"
                        onClick={handleForward}
                      >
                        Carry On
                      </button>
                    )}
                  </div>
                  <br />
                </div>
                <div
                  className={`Section3 ${section === 3 ? "d-block" : "d-none"}`}
                >
                  <h4>Describe Your Property</h4>
                  <br />
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <label>Ad title</label>
                      <input
                        class="form-control  form-control-lg"
                        type="text"
                        placeholder="Enter Your Ad title"
                        maxlength="100"
                        value={values.title}
                        name="title"
                        onChange={handleChange}
                      />
                      <small id="emailHelp" class="form-text text-muted">
                        Max 100 Words
                      </small>
                      <br />
                      <p style={{ color: "#5B94DC" }}>
                        You don't need to say "Buy" or "Sell" here. A good title
                        is a few words to precisely describe your property.
                      </p>
                    </div>
                    <div className="col-12 col-md-6"></div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <label>Ad Description</label>
                      <div class="form-group">
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="5"
                          value={values.description}
                          name="description"
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <small id="emailHelp" class="form-text text-muted">
                        Max 4000 Characters
                      </small>
                      <br />
                      <p style={{ color: "#5B94DC" }}>
                        Indicate in the text of the advertisement if you offer a
                        right of withdrawal to the buyer. In the absence of any
                        mention, the buyer will not benefit from it and will not
                        be able to request a refund or exchange of the good or
                        service offered. Indicate in the text of the
                        advertisement if you offer a right of withdrawal to the
                        buyer. In the absence of any mention, the buyer will not
                        benefit from it and will not be able to request a refund
                        or exchange of the good or service offered.
                      </p>
                    </div>
                  </div>
                  <br />
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-outline-primary"
                      onClick={handleBackward}
                    >
                      Return
                    </button>
                    {carryOnDisabled ? null : (
                      <button
                        className="btn btn-primary"
                        onClick={handleForward}
                      >
                        Carry On
                      </button>
                    )}
                  </div>
                  <br />
                </div>
                <div
                  className={`Section4 ${section === 4 ? "d-block" : "d-none"}`}
                >
                  <h4>What is your Price</h4>
                  <br />
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <label>Indicate your Price</label>
                      <input
                        class="form-control  form-control-lg"
                        type="number"
                        value={values.price}
                        name="price"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12 col-md-6"></div>
                    <div className="col-12">
                      <Switchbutton
                        label="Nigotiable"
                        name="negotiable"
                        func={handleSwitch}
                        checked={values.negotiable}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-outline-primary"
                      onClick={handleBackward}
                    >
                      Return
                    </button>
                    {carryOnDisabled ? null : (
                      <button
                        className="btn btn-primary"
                        onClick={handleForward}
                      >
                        Carry On
                      </button>
                    )}
                  </div>
                  <br />
                </div>
                <div
                  className={`Section5 ${section === 5 ? "d-block" : "d-none"}`}
                >
                  <h4>Add Photos</h4>
                  <br />
                  <div className="row">
                    <div>
                      <Imageupload selectedImages={handleSelectedImages} />
                    </div>
                  </div>
                  <br />
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-outline-primary"
                      onClick={handleBackward}
                    >
                      Return
                    </button>
                    {carryOnDisabled ? null : (
                      <button
                        className="btn btn-primary"
                        onClick={handleForward}
                      >
                        Carry On
                      </button>
                    )}
                  </div>
                  <br />
                </div>
                <div
                  className={`Section6 ${section === 6 ? "d-block" : "d-none"}`}
                >
                  <h4>Where is your Property Located</h4>
                  <br />
                  <br />
                  <div>
                    <h2 style={{ color: "orange" }}>
                      Map would be there once We would Have Google Map Api Key
                      and Backend Ready
                    </h2>
                  </div>
                  <br />
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-outline-primary"
                      onClick={handleBackward}
                    >
                      Return
                    </button>
                    {disabled ? null : (
                      <button
                        className="btn btn-primary"
                        onClick={handleSubmit}
                      >
                        Send ad For Review
                      </button>
                    )}
                    {loader && (
                      <button className="btn btn-primary">
                        <Loader />
                      </button>
                    )}
                  </div>
                  <br />
                </div>
                {/* <div
                  className={`Section7 ${section === 7 ? "d-block" : "d-none"}`}
                >
                  <h4>Your Contact Details</h4>
                  <br />
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <label>First Name</label>
                      <input
                        class="form-control  form-control-lg"
                        type="text"
                        value={values.contactDetails.firstName}
                        name="firstName"
                        onChange={handleContactDetails}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label>Last Name</label>
                      <input
                        class="form-control  form-control-lg"
                        type="text"
                        value={values.contactDetails.lastName}
                        name="lastName"
                        onChange={handleContactDetails}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <label>Email</label>
                      <input
                        class="form-control  form-control-lg"
                        type="email"
                        value={values.contactDetails.email}
                        name="email"
                        onChange={handleContactDetails}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label>Phone</label>
                      <input
                        class="form-control  form-control-lg"
                        type="number"
                        value={values.contactDetails.phone}
                        name="phone"
                        onChange={handleContactDetails}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <Switchbutton
                        label="Hide Number"
                        name="hideNumber"
                        func={handleSwitch}
                        checked={values.hideNumber}
                      />
                    </div>
                    <div className="col-12">
                      <Switchbutton label="Refuse Any Commercial" />
                    </div>
                  </div>
                  <br />
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-outline-primary"
                      onClick={handleBackward}
                    >
                      Return
                    </button>
                    {carryOnDisabled ? null : (
                      <button
                        className="btn btn-primary"
                        onClick={handleSubmit}
                      >
                        Send ad For Review
                      </button>
                    )}
                  </div>
                  <br />
                </div> */}
              </div>
            </div>
            <div className="col-12 col-lg-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placead;
