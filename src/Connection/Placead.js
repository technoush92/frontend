import axios from "axios";
let url = "http://localhost:3001";
// let url = "https://adsbackendapp.herokuapp.com";

const placeAd = async (data) => {
  console.log(data);

  let res = await axios.post(`${url}/api/placead`, data);
  console.log(res);
  return res;
};

const getUserAds = async (data) => {
  console.log(data);
  let res = await axios.post(`${url}/api/placead/getuserads`, data);
  console.log(res);
  return res;
};

const deleteAd = async (data) => {
  console.log(data);
  let res = await axios.post(`${url}/api/placead/deletead`, data);
  console.log(res);
  return res;
};

const activeAd = async (data) => {
  console.log(data);
  let res = await axios.post(`${url}/api/placead/activead`, data);
  console.log(res);
  return res;
};

const editAd = async (data) => {
  console.log(data);
  let res = await axios.post(`${url}/api/placead/editad`, data);
  console.log(res);
  return res;
};

const getAds = async () => {
  console.log("hello");
  let res = await axios.get(`${url}/api/placead/getads`);
  console.log(res);
  return res;
};

const getFavourites = async (data) => {
  console.log(data);
  let res = await axios.post(`${url}/api/placead/getfavourites`, data);
  console.log(res);
  return res;
};

const searchQuery = async (data) => {
  console.log(data);
  let res = await axios.post(`${url}/api/placead/search`, data);
  console.log(res);
  return res;
};

const getAd = async (data) => {
  console.log(data);
  let res = await axios.post(`${url}/api/placead/getad`, data);
  console.log(res);
  return res;
};

const sendMessage = async (data) => {
  console.log(data);
  let res = await axios.post(`${url}/api/placead/sendmessage`, data);
  console.log(res);
  return res;
};

export {
  placeAd,
  getUserAds,
  deleteAd,
  activeAd,
  editAd,
  getAds,
  getFavourites,
  searchQuery,
  getAd,
  sendMessage,
};
