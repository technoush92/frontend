import React, { useState } from "react";
import Placeadcategory from "../Components/Placeadcategory";
import Imageupload from "../Components/Imageupload";
import Switchbutton from "../Components/Switchbutton";

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
  const [section, setSection] = useState(1);

  const handleForward = () => {
    setSection((section) => section + 1);
  };

  const handleBackward = () => {
    setSection((section) => section - 1);
  };
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
                      />
                      <small id="emailHelp" class="form-text text-muted">
                        Max 100 Characters
                      </small>
                    </div>
                    <div className="col-12 col-md-6"></div>
                  </div>
                  <br />
                  <div className="d-flex justify-content-end">
                    <button className="btn btn-primary" onClick={handleForward}>
                      Carry On
                    </button>
                  </div>
                  <br />
                </div>
                <div
                  className={`Section2 ${section === 2 ? "d-block" : "d-none"}`}
                >
                  <h4>Choose The Category</h4>
                  <br />
                  <div className="">
                    <div>
                      <Placeadcategory categories={categories} />
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
                    <button className="btn btn-primary" onClick={handleForward}>
                      Carry On
                    </button>
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
                    <button onClick={handleForward} className="btn btn-primary">
                      Carry On
                    </button>
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
                      />
                    </div>
                    <div className="col-12 col-md-6"></div>
                  </div>
                  <br />
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-outline-primary"
                      onClick={handleBackward}
                    >
                      Return
                    </button>
                    <button onClick={handleForward} className="btn btn-primary">
                      Carry On
                    </button>
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
                      <Imageupload />
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
                    <button onClick={handleForward} className="btn btn-primary">
                      Carry On
                    </button>
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
                    <button onClick={handleForward} className="btn btn-primary">
                      Carry On
                    </button>
                  </div>
                  <br />
                </div>
                <div
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
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label>Last Name</label>
                      <input
                        class="form-control  form-control-lg"
                        type="text"
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
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label>Phone</label>
                      <input
                        class="form-control  form-control-lg"
                        type="number"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <Switchbutton label="Hide Number" />
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
                    <button onClick={handleForward} className="btn btn-primary">
                      Send Ad For Review
                    </button>
                  </div>
                  <br />
                </div>
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
