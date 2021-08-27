import axios from "axios";
// let url = "http://localhost:3001";
let url = "https://adsbackend2.herokuapp.com/";

const signupUser = async (data) => {
  console.log(data);
  let res;
  res = await axios.post(`${url}/api/users/register`, data);
  console.log(res);
  return res;
};

const emailVerification = async (otp, email) => {
  console.log(otp, email);

  let res = await axios.post(`${url}/api/users/register/emailverify`, {
    otp,
    email,
  });
  console.log(res);
  return res;
};

const phoneVerification = async (otp, phone) => {
  console.log(otp, phone);
  let res = await axios.post(`${url}/api/users/register/phoneverify`, {
    otp,
    phone,
  });
  console.log(res);
  return res;
};

const loginUser = async (data) => {
  console.log(data);
  let res = await axios.post(`${url}/api/users/login`, data);
  console.log(res);
  return res;
};

// const getUsers = () => {
//   console.log("here i am");
//   let res;
//   res = axios.get(`${url}/api/users/`);
//   console.log(res);
// };

// const deleteUser = data => {
// 	console.log(data);
// 	// let res;
// 	// res = axios.post(`${url}/api/users/register`, data);

// 	// return res;
// };

// const editUser = data => {
// 	console.log(data);
// };

const fbLogin = async (data) => {
  console.log(data);
  let res = await axios.post(`${url}/api/users/fblogin`, data);
  console.log(res);
  return res;
};

const getPopupData = async () => {
  // console.log(data);
  let res = await axios.get(`${url}/api/popup`);
  console.log(res);
  return res;
};

const setPopupView = async (data) => {
  let res = await axios.post(`${url}/api/popup/close`, data);
  console.log(res);
  return res;
};

export {
  signupUser,
  emailVerification,
  phoneVerification,
  loginUser,
  fbLogin,
  getPopupData,
  setPopupView,
};
