import React from "react";
import { useHistory, Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import "../Styles/Searchprocard.css";

const Searchprocard = ({
  title,
  image,
  description,
  price,
  date,
  id,
  contactDetails,
  images,
  location,
}) => {
  const history = useHistory();
  // const [newDescription , setNewDescription] = useState()
  let newDescription;

  return (
    <div
      class="card my-2 rounded-lg pb-3"
      style={{
        width: "14rem",
        border: "1px solid #FF6E14",
        height: "360px",
      }}
    >
      {console.log(date, id, contactDetails, images, price)}
      <div style={{ minHeight: "45%" }} className="imgcontainersearchprocard">
        <Link
          to={{
            pathname: `/showad/${id}`,
            state: {
              title,
              images,
              description,
              price,
              date,
              id,
              contactDetails,
              location,
            },
          }}
        >
          <img
            src={image[0]}
            class=" imgstylessearchoprocard  "
            alt="..."
            // style={{ height: "100%" }}
          />
        </Link>
      </div>

      <div class="card-body text-start  mb-4 pb-4">
        <Link
          to={{
            pathname: `/showad/${id}`,
            state: {
              title,
              images,
              description,
              price,
              date,
              id,
              contactDetails,
              location,
            },
          }}
        >
          {title && (
            <h5 className="mt-2">
              {" "}
              {title.length > 10 ? (title = `${title.slice(0, 12)}...`) : title}
            </h5>
          )}
        </Link>
        {/* <h4>{title}</h4> */}
        <p class="card-text text-muted ">
          Price :{" "}
          <CurrencyFormat
            value={price}
            thousandSeparator={"."}
            decimalSeparator={","}
            displayType={"text"}
            // thousandSeparator={true}
            // prefix={"CFA "}
            // decimalSeparator={","}
            // onValueChange={(values) => {
            //   const { formattedValue, value } = values;
            //   console.log(formattedValue);
            //   setValues({ ...values, price: formattedValue });
            // }}
          />{" "}
          CFA
        </p>
        <p className="m-0 p-0 d-block d-lg-none">
          {" "}
          {description.length > 75
            ? (newDescription = `${description.slice(0, 18)}...`)
            : description}
        </p>
        <p className="m-0 p-0 d-none d-lg-block">
          {" "}
          {description.length > 75
            ? (newDescription = `${description.slice(0, 50)}...`)
            : description}
        </p>
        <p class=" d-none d-sm-block card-text text-muted">{date}</p>{" "}
      </div>
    </div>
  );
};

export default Searchprocard;
