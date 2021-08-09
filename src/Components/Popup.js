import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { useAuth } from "../Context/Auth-Context";
import { getPopupData } from "../Connection/Auth";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;

  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Popup() {
  const { openPopup, handleOpenPopup, handleClosePopup } = useAuth();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchPopupData = async () => {
      console.log("fetching popup");
      let foundPopupData = await getPopupData();

      console.log(foundPopupData);
      setData(foundPopupData.data.popup[0]);
      // setLoading(false);
    };
    fetchPopupData();
  }, []);

  return (
    <div>
      {data && (
        <Dialog
          onClose={handleClosePopup}
          aria-labelledby="customized-dialog-title"
          open={openPopup}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClosePopup}>
            {data.title}
          </DialogTitle>
          <DialogContent dividers>
            <div>
              <div className="row">
                <div className="col-6">
                  <img className="img-fluid" src={data.image} />
                </div>
                <div className="col-6">
                  <h2> {data.title}</h2>

                  <Typography gutterBottom>{data.description}</Typography>
                  {/* <Typography gutterBottom>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                  fringilla.
                </Typography> */}
                </div>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            {/* <Button autoFocus onClick={handleOpen} color="primary">
            Save changes
          </Button> */}
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}
