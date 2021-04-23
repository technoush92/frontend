import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Maps from "../Components/Maps";

export default function Settings({ open }) {
  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Setting</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter your old Password"
            type="password"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter your New Password"
            type="password"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Location"
            type="Text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary">Cancel</Button>
          <Button color="primary">Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
