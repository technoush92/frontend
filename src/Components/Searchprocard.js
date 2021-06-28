import React from "react";
import { useHistory, Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

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
      class="card my-2 rounded-lg"
      style={{
        width: "14rem",
        border: "1px solid #FF6E14",
        // minHeight: "448px",
      }}
    >
      {console.log(date, id, contactDetails, images, price)}
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
        <img src={image[0]} class="card-img-top" alt="..." />
      </Link>
      <div class="card-body text-start ">
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
              {title.length > 10 ? (title = `${title.slice(0, 18)}...`) : title}
            </h5>
          )}
        </Link>
        {/* <h4>{title}</h4> */}
        <p class="card-text text-muted ">
          Price :{" "}
          <CurrencyFormat
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"CFA "}
            // decimalSeparator={","}
            // onValueChange={(values) => {
            //   const { formattedValue, value } = values;
            //   console.log(formattedValue);
            //   setValues({ ...values, price: formattedValue });
            // }}
          />
        </p>
        <p className="m-0 p-0 d-block d-lg-none">
          {" "}
          Description :
          {description.length > 75
            ? (newDescription = `${description.slice(0, 10)}...`)
            : description}
        </p>
        <p className="m-0 p-0 d-none d-lg-block">
          {" "}
          Description :
          {description.length > 75
            ? (newDescription = `${description.slice(0, 75)}...`)
            : description}
        </p>
        <p class="card-text text-muted">{date}</p>{" "}
      </div>
    </div>
  );
};

export default Searchprocard;
