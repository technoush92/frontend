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

export default function Settings({ open, data, handleClose }) {
  const [username, setUserName] = useState();
  const [passwordUpdate, setPasswordUpdate] = useState({
    oldPassword: "",
    newPassword: "",
  });

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

  useEffect(() => {
    setUserName(data.username);
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
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Location"
            type="Text"
            fullWidth
          />
          <br />
          <button className="btn btn-primary mt-3">Update Location</button>
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
