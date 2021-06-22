import React from "react";
import { useHistory, Link } from "react-router-dom";

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

  return (
    <div
      class="card my-2 rounded-lg"
      style={{ width: "14rem", border: "1px solid #FF6E14" }}
    >
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
        {console.log(date, id, contactDetails, images, price)}
        <img src={image[0]} class="card-img-top" alt="..." />
        <div class="card-body text-start ">
          {title && (
            <h5 className="mt-2">
              {" "}
              {title.length > 10 ? (title = `${title.slice(0, 18)}...`) : title}
            </h5>
          )}
          {/* <h4>{title}</h4> */}
          <p class="card-text text-muted ">Price : {price}</p>
          <p className="m-0 p-0">
            {" "}
            Description :
            {description.length > 75
              ? (description = `${description.slice(0, 75)}...`)
              : description}
          </p>
          <p class="card-text text-muted">{date}</p>{" "}
        </div>
      </Link>
    </div>
  );
};

export default Searchprocard;
