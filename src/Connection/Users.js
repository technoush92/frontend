import axios from "axios";
let url = "http://localhost:3001";

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

export { editUser, saveFavourite, deleteFavourite };
