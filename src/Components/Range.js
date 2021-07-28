import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import "../Styles/range.css";
import CurrencyFormat from "react-currency-format";
// import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import NumberFormat from "react-number-format";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));

const useStyles = makeStyles({
  root: {
    width: 20,
  },
});

const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: "#FF6E14",
      },
      track: {
        color: "#FF6E14",
      },
      rail: {
        color: "black",
      },
    },
  },
});

function valuetext(value) {
  return `${value}°C`;
}

const marks = [
  {
    value: 0,
    label: "0",
  },

  {
    value: 10000000,
    label: "10.000.000",
  },
];

export default function Range({ handlePrice }) {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 10000000]);
  const [show, setShow] = useState(false);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const handleChange = (evt, price) => {
    console.log(price);
  };

  const handleMin = (price) => {
    console.log(price);
    setMin(price.floatValue);
  };

  const handleMax = (price) => {
    console.log(price);
    setMax(price.floatValue);
  };

  const handleShow = () => {
    handlePrice([min < max ? min : max, max > min ? max : min]);
    setShow(!show);
  };

  // const handlePriceChange = (price) => {
  //   console.log(price);
  //   // setValues({
  //   //   ...values,
  //   //   price: price.value,
  //   // });
  // };

  return (
    <div>
      <div className={classes.root}>
        {/* {console.log(value)} */}
        <button
          className="btn range"
          style={{
            border: "1px solid black",
            borderRadius: "25px",
          }}
          onClick={handleShow}
        >
          Price{" "}
        </button>
        {show && (
          <div
            className="border shadow-sm mt-2 dropdown-btn"
            style={{
              width: "300px",
              padding: "35px",
              backgroundColor: "white",
            }}
          >
            <Typography id="range-slider" gutterBottom>
              Price range in CFA Min{" "}
              <CurrencyFormat
                value={min}
                thousandSeparator={"."}
                decimalSeparator={","}
                displayType={"text"}
              />{" "}
              , Max
              <CurrencyFormat
                value={max}
                thousandSeparator={"."}
                decimalSeparator={","}
                displayType={"text"}
              />{" "}
            </Typography>
            {/* <ThemeProvider theme={muiTheme}>
              <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                marks={marks}
                min={0}
                max={10000000}
              />
            </ThemeProvider> */}
            MIN :{" "}
            {/* <TextField
              value={min}
              onChange={handleMin}
              id="outlined-basic"
              label="MIN"
              variant="outlined"
            /> */}
            <NumberFormat
              className="form-control  form-control-lg  "
              thousandSeparator={"."}
              decimalSeparator={","}
              onValueChange={(values) => handleMin(values)}
            />
            <p>to</p>
            MAX :{" "}
            {/* <TextField
              value={max}
              onChange={handleMax}
              id="outlined-basic"
              label="MAX"
              variant="outlined"
            /> */}
            <NumberFormat
              className="form-control  form-control-lg  "
              thousandSeparator={"."}
              decimalSeparator={","}
              onValueChange={(values) => handleMax(values)}
            />
            <div>
              <button
                onClick={handleShow}
                className="btn btn-primary btn-sm mt-3 "
              >
                Set Price
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
