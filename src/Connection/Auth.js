import axios from "axios";
let url = "http://localhost:3001";
let liveUrl = "https://adsbackendapp.herokuapp.com";

const signupUser = async (data) => {
  console.log(data);
  let res;
  res = await axios.post(`${liveUrl}/api/users/register`, data);
  console.log(res);
  return res;
};

const emailVerification = async (otp, email) => {
  console.log(otp, email);

  let res = await axios.post(`${liveUrl}/api/users/register/emailverify`, {
    otp,
    email,
  });
  console.log(res);
  return res;
};

const phoneVerification = async (otp, phone) => {
  console.log(otp, phone);
  let res = await axios.post(`${liveUrl}/api/users/register/phoneverify`, {
    otp,
    phone,
  });
  console.log(res);
  return res;
};

const loginUser = async (data) => {
  console.log(data);
  let res = await axios.post(`${liveUrl}/api/users/login`, data);
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

export { signupUser, emailVerification, phoneVerification, loginUser };
