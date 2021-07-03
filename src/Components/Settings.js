import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Maps from "../Components/Maps";
import { editUser } from "../Connection/Users";
import { ToastContainer, toast } from "react-toastify";
import Mapsautocompletesettings from "../Components/Mapsautocompletesettings";
import { updateUserLocation } from "../Connection/Users";

export default function Settings({ open, data, handleClose, handleUpdate }) {
  const [username, setUserName] = useState();
  const [passwordUpdate, setPasswordUpdate] = useState({
    oldPassword: "",
    newPassword: "",
  });
  const [location, setLocation] = useState();

  const handleChangeUsername = (evt) => {
    setUserName(evt.target.value);
  };

  const handleUpdateUsername = async () => {
    let res = await editUser({ username, type: "username", id: data.id });
    console.log(res);
    if (res.data.success === true) {
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      window.localStorage.setItem("username", username);
      handleUpdate();
    } else {
      toast.error("Something went wrong", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    handleClose();
  };

  const handleChangePassword = (evt) => {
    const { name, value } = evt.target;
    setPasswordUpdate({
      ...passwordUpdate,
      [name]: value,
    });
  };

  const handleUpdatePassword = async () => {
    let res = await editUser({
      passwordUpdate,
      type: "passwordUpdate",
      id: data.id,
    });

    if (res.data.success === true) {
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      handleClose();
    } else {
      toast.error(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handlePlaceSelected = (res) => {
    console.log(res);

    setLocation((location) => {
      console.log(location);
      return {
        address: res.address,
        markerPosition: {
          lat: res.lat,
          lng: res.lng,
        },
        mapPosition: {
          lat: res.lat,
          lng: res.lng,
        },
      };
    });
  };

  const handleUpdateLocation = async () => {
    console.log("clicked");
    const res = await updateUserLocation({
      location: { ...location },
      id: data.id,
    });
    console.log(res);
    if (res.data.success === true) {
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      handleClose();
      console.log(location);
      window.localStorage.setItem("location", location.address);
      handleUpdate();
    } else {
      toast.error(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  useEffect(() => {
    setUserName(window.localStorage.getItem("username"));
  }, []);
  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Setting</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          {console.log(passwordUpdate)}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Username"
            type="text"
            value={username}
            name="username"
            fullWidth
            onChange={handleChangeUsername}
          />
          <br />
          <button
            className="btn btn-primary mt-3"
            onClick={handleUpdateUsername}
          >
            Update Username
          </button>
          <br />
          <hr />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter your old Password"
            type="password"
            fullWidth
            value={passwordUpdate.oldPassword}
            name="oldPassword"
            onChange={handleChangePassword}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter your New Password"
            type="password"
            fullWidth
            value={passwordUpdate.newPassword}
            name="newPassword"
            onChange={handleChangePassword}
          />
          <br />
          <button
            className="btn btn-primary mt-3"
            onClick={handleUpdatePassword}
          >
            Update Password
          </button>
          <br />
          <hr />
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Location"
            type="Text"
            fullWidth
          /> */}

          <Mapsautocompletesettings
            handlePlaceSelected={handlePlaceSelected}
            // style={{ zIndex: "100000" }}
          />
          <br />
          <button
            className="btn btn-primary mt-3"
            onClick={handleUpdateLocation}
          >
            Update Location
          </button>
          <br />
          <hr />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button color="primary">Update</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
