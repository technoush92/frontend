import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Categorymobile({
  open,
  handleOpen,
  data,
  handleSelected,
}) {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [category, setCategory] = React.useState();
  const [sub, setSub] = React.useState();
  const [selectedSub, setSelectedSub] = React.useState();

  const handleSelectCategory = (event) => {
    console.log(event.target.value);
    setCategory(event.target.value);
    setSub(event.target.value.subcategories);
  };

  const handleSelectSubCategory = (evt) => {
    console.log(evt.target.value);
    setSelectedSub(evt.target.value);
  };

  const handleSubmit = () => {
    handleSelected(category, selectedSub);
    handleOpen();
  };
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleOpen}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Select Category</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Choose Category and Sub Category
          </DialogContentText>
          {/* {data && (
            <select
              value={category}
              onChange={handleSelectCategory}
              class="custom-select"
            >
              <option selected>Open this select menu</option>
              {data.map((cat) => {
                return <option value={cat}>{cat.title}</option>;
              })}
            </select>
          )} */}
          {data && (
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={category}
                onChange={handleSelectCategory}
                label="Category"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {data.map((cat) => {
                  return <MenuItem value={cat}>{cat.title}</MenuItem>;
                })}

                {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </FormControl>
          )}

          {console.log(sub)}

          {sub && (
            <FormControl
              style={{ width: "100%" }}
              variant="outlined"
              className={classes.formControl}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Choose Sub Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={selectedSub}
                onChange={handleSelectSubCategory}
                label="Sub Category"
                fullWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {sub.map((cat) => {
                  return <MenuItem value={cat}>{cat.subTitle}</MenuItem>;
                })}
              </Select>
            </FormControl>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOpen} color="primary">
            Close
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Select
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
