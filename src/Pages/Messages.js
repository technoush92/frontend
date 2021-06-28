import React, { useState, useEffect } from "react";
import Avatarimage from "../Components/Avatarimage";
import { Link } from "react-router-dom";
import { getMessages } from "../Connection/Users";
import { sendMessage } from "../Connection/Placead";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../Components/Loader";
import Alert from "../Components/Alert";

const Messages = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showMobile, setShowMobile] = useState(true);
  const [messages, setMessages] = useState();
  const [showMessageData, setShowMessageData] = useState();
  const [chat, setChat] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = (type) => {
    setOpen(type);
  };

  const handleClickLarge = (data) => {
    console.log(data);
    setSelected(data.email);
    setShowMessage(true);
    setShowMessageData(data);
    setChat(data.messages);
  };
  const handleClickMobile = (data) => {
    setSelected(data.email);
    setShowMessage(true);
    setShowMobile(false);
    setShowMessageData(data);
  };

  const handleBack = () => {
    setShowMessage(false);
    setShowMobile(true);
  };

  const handleNewMessage = (evt) => {
    setNewMessage(evt.target.value);
  };

  const handleSendMessage = async () => {
    setNewMessage("");
    setChat([...chat, newMessage]);
    console.log(showMessageData);
    let res = await sendMessage({
      email: showMessageData.email,
      message: newMessage,
      userId: window.localStorage.getItem("id"),
      adData: showMessageData.adData,
    });
    console.log(res);
    if (res.data.success === true) {
      // toast.success(res.data.message, {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
      console.log("helo");
      setOpen(true);
      setUpdate(true);
    }
  };

  useEffect(() => {
    const fetchMessages = async () => {
      let foundMessages = await getMessages({
        id: window.localStorage.getItem("id"),
      });

      console.log(foundMessages);
      setMessages(foundMessages.data.messages);
      setLoading(false);
    };
    fetchMessages();
    setUpdate(false);
  }, [update]);
  return (
    <div style={{ backgroundColor: "#ffffff", height: "100vh" }}>
      <br />
      <br />
      <div>
        {open && <Alert handleOpen={handleOpen} openAlert={open} />}

        <div className="container">
          <div className="row">
            {showMobile && (
              <div className="col-12 col-lg-5 d-lg-none">
                <div
                  className="h-100 py-4"
                  style={{
                    // border: "1px solid #FF6E14",
                    // borderRadius: "12px",
                    height: "80vh",
                  }}
                >
                  <br />
                  <h2>Messages</h2>
                  <br />
                  {loading ? (
                    <Loader />
                  ) : (
                    <div>
                      {messages && (
                        <div>
                          {messages.map((msg) => {
                            return (
                              <div
                                style={{
                                  width: "92%",
                                  // height: "175px",
                                  backgroundColor: "#F4F6F7",
                                  border: "1px solid #F4F6F7",
                                  borderRadius: "12px",
                                  borderLeft: `1px solid ${
                                    msg.email === selected ? "#FF6E14" : ""
                                  }`,
                                }}
                                className="p-4 m-3"
                                onClick={() => handleClickMobile(msg)}
                              >
                                <div className="row">
                                  <div className="col-5">
                                    <img
                                      className="img-fluid"
                                      src={msg.adData.images[0]}
                                    />
                                  </div>
                                  <div className="col-7">
                                    <h3>{msg.adData.title}</h3>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="col-12 col-lg-5 d-none d-lg-block">
              <div
                className=" py-4 "
                style={{
                  borderRight: "1px solid #FF6E14",
                  // borderRadius: "12px",
                  height: "80vh",
                }}
              >
                <br />
                <h2>Messages</h2>
                <br />
                {loading ? (
                  <Loader />
                ) : (
                  <div>
                    {messages && (
                      <div>
                        {messages.map((msg) => {
                          return (
                            <div
                              style={{
                                width: "92%",
                                // height: "150px",
                                backgroundColor: "#F4F6F7",
                                border: "1px solid #F4F6F7",
                                borderRadius: "25px",
                                borderLeft: `1px solid ${
                                  msg.email === selected ? "#FF6E14" : ""
                                }`,
                              }}
                              className="p-4 m-3 rounded-lg shadow-sm"
                              onClick={() => handleClickLarge(msg)}
                            >
                              <div className="row">
                                <div className="col-5">
                                  <img
                                    className="img-fluid rounded"
                                    src={msg.adData.images[0]}
                                  />
                                </div>
                                <div className="col-7">
                                  <h3>{msg.adData.title}</h3>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            {showMessage && (
              <div className="col-12 col-lg-7  ">
                <div
                  className=" "
                  style={{
                    // border: "1px solid #FF6E14",
                    borderRadius: "12px",
                  }}
                >
                  <div
                    className=""
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "80vh",
                    }}
                  >
                    <div
                      className="d-flex justify-content-between"
                      style={{
                        width: "100%",
                        height: "120px",
                        // backgroundColor: "#F4F6F7",
                      }}
                    >
                      <div className="p-2 text-left">
                        <i
                          class="far fa-arrow-alt-circle-left ml-2 d-lg-none"
                          style={{ fontSize: "28px" }}
                          onClick={handleBack}
                        ></i>
                        <Avatarimage
                          style={{ width: "10px" }}
                          username={
                            showMessageData.adData.contactDetails.firstName
                          }
                        />
                      </div>
                      {/* {console.log(showMessageData.)} */}
                      <div className="my-3 px-3">
                        <Link to={`/showad/${showMessageData.adData.id}`}>
                          <h5 className="mt-5">Visit Ad</h5>
                        </Link>
                      </div>
                    </div>
                    <div style={{ overflowX: "hidden", overflowY: "auto" }}>
                      {chat.map((msg) => {
                        return (
                          <div
                            style={{
                              width: "auto",
                              height: "100px",
                              backgroundColor: "#F4F6F7",
                              // textOverFlow: "ellipsis",
                              // whiteSpace: "nowrap",
                              wordWrap: "break-word",
                            }}
                            className="mx-4 my-4 p-4"
                          >
                            <p> {msg}</p>
                          </div>
                        );
                      })}
                    </div>
                    <div>
                      <div
                        style={{
                          width: "100%",
                          height: "120px",
                          borderTop: "1px solid grey",
                        }}
                        className=" text-left p-4  d-flex"
                      >
                        <input
                          type="text"
                          style={{
                            border: "none",
                            width: "100%",
                            height: "100%",
                          }}
                          placeholder="Write a new Message"
                          className="p-2"
                          value={newMessage}
                          onChange={handleNewMessage}
                        />
                        <div>
                          <button
                            className="btn btn-primary mt-3 mx-2 "
                            onClick={handleSendMessage}
                          >
                            {" "}
                            <i class="far fa-paper-plane "></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
