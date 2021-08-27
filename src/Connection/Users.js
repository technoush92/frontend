import axios from "axios";
// let url = "http://localhost:3001";
let url = "https://adsbackend2.herokuapp.com/";

const editUser = async (data) => {
  console.log(data);
  if (data.type === "username") {
    let res;
    res = await axios.post(`${url}/api/users/updateusername`, data);
    return res;
  } else if (data.type === "passwordUpdate") {
    let res;
    res = await axios.post(`${url}/api/users/updatepassword`, data);
    console.log(res);
    return res;
  }
};

const saveFavourite = async (data) => {
  console.log(data);
  let res;
  res = await axios.post(`${url}/api/users/savefavourite`, data);
  console.log(res);
  return res;
};

const deleteFavourite = async (data) => {
  console.log(data);
  let res;
  res = await axios.post(`${url}/api/users/deletefavourite`, data);
  console.log(res);
  return res;
};

const getMessages = async (data) => {
  console.log(data);
  let res;
  res = await axios.post(`${url}/api/users/getmessages`, data);
  console.log(res);
  return res;
};

const updateImage = async (data) => {
  console.log(data);
  let res;
  res = await axios.post(`${url}/api/users/updateimage`, data);
  console.log(res);
  return res;
};

const getSearchActivity = async (data) => {
  console.log(data);
  let res;
  res = await axios.post(`${url}/api/users/searchactivity`, data);
  console.log(res);
  return res;
};

const deleteSearchActivity = async (data) => {
  console.log(data);
  let res;
  res = await axios.post(`${url}/api/users/deletesearchactivity`, data);
  console.log(res);
  return res;
};

const getUserImage = async (data) => {
  console.log(data);
  let res;
  res = await axios.post(`${url}/api/users/getuserimage`, data);
  console.log(res);
  return res;
};

const updateUserLocation = async (data) => {
  console.log(data);
  let res;
  res = await axios.post(`${url}/api/users/updateuserlocation`, data);
  console.log(res);
  return res;
};

export {
  editUser,
  saveFavourite,
  deleteFavourite,
  getMessages,
  updateImage,
  getSearchActivity,
  deleteSearchActivity,
  getUserImage,
  updateUserLocation,
};
