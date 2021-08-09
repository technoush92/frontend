import axios from "axios";
// let url = "http://localhost:3001";
let url = "https://adsbackendapi.herokuapp.com";

const sendMessage = async (data) => {
  console.log(data);
  let res = await axios.post(`${url}/api/conversation/add`, data);
  console.log(res);
  return res;
};

const getConversations = async (data) => {
  console.log(data);
  let res;
  res = await axios.post(`${url}/api/conversation`, data);
  console.log(res);
  return res;
};

const getChat = async (data) => {
  console.log(data);
  let res;
  res = await axios.post(`${url}/api/messages`, data);
  console.log(res);
  return res;
};

const sendChatMessage = async (data) => {
  console.log(data);
  let res;
  res = await axios.post(`${url}/api/messages/add`, data);
  console.log(res);
  return res;
};

const disableNotify = async (data) => {
  console.log(data);
  let res;
  res = await axios.post(`${url}/api/messages/disablenotify`, data);
  console.log(res);
  return res;
};

export {
  sendMessage,
  getConversations,
  getChat,
  sendChatMessage,
  disableNotify,
};
