import axios from "axios";
let url = "http://localhost:3001";
// let url = "https://adsbackendapi.herokuapp.com";

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

const getSingleUserAds = async (data) => {
  console.log(data);
  let res = await axios.post(`${url}/api/placead/getuserads`, data);
  console.log(res);
  return res;
}

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

const featureAdRequest = async (data) => {
  console.log(data);
  let res = await axios.post(`${url}/api/placead/featureadrequest`, data);
  console.log(res);
  return res;
};

const soldAd = async (data) => {
  console.log(data);
  let res = await axios.post(`${url}/api/placead/soldad`, data);
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

const getActiveAds = async () => {
  let res = await axios.get(`${url}/api/placead/getactiveads`);
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

const getFeatureAds = async (data) => {
  let res = await axios.get(`${url}/api/placead/getfeatureads`);
  console.log(res);
  return res;
};

const getActiveFeatureAds = async (data) => {
  console.log("han g");
  let res = await axios.get(`${url}/api/placead/getactivefeatureads`);
  console.log(res);
  return res;
};

const getFeatureAd = async (data) => {
  console.log(data);
  let res = await axios.post(`${url}/api/placead/getfeaturead`, data);
  console.log(res);
  return res;
};

const getAdsByLocation = async (data) => {
  console.log(data);
  let res = await axios.post(`${url}/api/placead/getadsbylocation`, data);
  console.log(res);
  return res;
};

const getAdsByCategories = async (data) => {
  console.log(data);
  let res = await axios.post(`${url}/api/placead/getadsbycategories`, data);
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
  featureAdRequest,
  soldAd,
  getFeatureAds,
  getActiveFeatureAds,
  getActiveAds,
  getFeatureAd,
  getAdsByLocation,
  getAdsByCategories,
  getSingleUserAds
};
