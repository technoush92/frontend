import React, { useState, useEffect, useRef } from "react";
import Avatarimage from "../Components/Avatarimage";
import { Link } from "react-router-dom";
import {
  getConversations,
  getChat,
  disableNotify,
} from "../Connection/Messages";
import { sendChatMessage } from "../Connection/Messages";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../Components/Loader";
import Alert from "../Components/Alert";
import { useAuth } from "../Context/Auth-Context";
import { io } from "socket.io-client";
import "../Styles/Messages.css";

const Messages = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showMobile, setShowMobile] = useState(true);
  const [messages, setMessages] = useState();
  const [showMessageData, setShowMessageData] = useState();
  const [chat, setChat] = useState([]);
  const [chatTitle, setChatTitle] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const { login, loggedIn, notify, setNotify, handleNotify } = useAuth();
  const scrollRef = useRef();
  // const [socket, setSocket] = useState(null);
  const socket = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      console.log(data);
      setArrivalMessage(data.message);
    });
  }, []);

  useEffect(() => {
    setChat((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    socket.current?.emit("addUser", window.localStorage.getItem("email"));
    socket.current?.on("getUsers", (users) => {
      console.log(users);
    });
  }, []);

  // useEffect(() => {
  //   socket?.on("Welcome", (message) => {
  //     console.log(message);
  //   });
  // }, [socket]);

  const handleOpen = (type) => {
    setOpen(type);
  };

  const handleClickLarge = async (data) => {
    console.log(data);
    // setSelected(data.senderEmail);
    setShowMessageData(data);
    setChatTitle(data.title);
    setShowMessage(true);
    let chat = await getChat({ conversationId: data._id });
    console.log(chat);
    if (chat.data.success === true) {
      // setShowMessageData(chat.data.foundMessages);
      setChat(chat.data.foundMessages.messages);
    }
  };
  const handleClickMobile = async (data) => {
    // setSelected(data.email);
    // setShowMessage(true);
    setShowMobile(false);
    setShowMessageData(data);
    setChatTitle(data.title);
    // setChat(data.messages);
    setShowMessage(true);
    let chat = await getChat({ conversationId: data._id });
    console.log(chat);
    if (chat.data.success === true) {
      // setShowMessageData(chat.data.foundMessages);
      setChat(chat.data.foundMessages.messages);
    }
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
    console.log(showMessageData.membersEmails);

    socket.current.emit("sendMessage", {
      senderEmail: window.localStorage.getItem("email"),
      receiverEmail:
        showMessageData.membersEmails[0] ===
        window.localStorage.getItem("email")
          ? showMessageData.membersEmails[1]
          : showMessageData.membersEmails[0],
      message: newMessage,
    });

    let res = await sendChatMessage({
      conversationId: showMessageData._id,
      message: newMessage,
      receiver:
        showMessageData.membersEmails[0] ===
        window.localStorage.getItem("email")
          ? showMessageData.membersEmails[1]
          : showMessageData.membersEmails[0],
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
      let foundMessages = await getConversations({
        email: window.localStorage.getItem("email"),
      });

      console.log(foundMessages);
      setMessages(foundMessages.data.conversations);
      setLoading(false);
    };
    fetchMessages();

    const notifyFunction = async () => {
      handleNotify(true);
      await disableNotify({ email: window.localStorage.getItem("email") });
    };
    notifyFunction();
    setUpdate(false);
  }, [update]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

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
                                <div className="row py-2">
                                  <div className="col-5">
                                    <img
                                      className="imgstylemessages"
                                      src={msg.image}
                                    />
                                  </div>
                                  <div className="col-7">
                                    <h5>
                                      {msg.title.length > 10
                                        ? (msg.title = `${msg.title.slice(
                                            0,
                                            12
                                          )}...`)
                                        : msg.title}
                                    </h5>
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
                                height: "100px",
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
                              <div className="row py-2">
                                <div className="col-5 imgcontainermessages">
                                  <img
                                    className="imgstylemessages "
                                    src={msg.image}
                                  />
                                </div>
                                <div className="col-7">
                                  <h5>
                                    {msg.title.length > 10
                                      ? (msg.title = `${msg.title.slice(
                                          0,
                                          12
                                        )}...`)
                                      : msg.title}
                                  </h5>
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
                          username={chatTitle}
                        />
                      </div>
                      {/* {console.log(showMessageData.)} */}
                      <div className="my-3 px-3">
                        {/* <Link to={`/showad/${showMessageData.adData.id}`}>
                          <h5 className="mt-5">Visit Ad</h5>
                        </Link> */}
                      </div>
                    </div>
                    {chat && (
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
                              ref={scrollRef}
                            >
                              <p> {msg}</p>
                            </div>
                          );
                        })}
                      </div>
                    )}

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
