import React, { Component, useState, useEffect } from "react";
import { getCategories } from "../Connection/Categories";
import { getAdsByCategories } from "../Connection/Placead";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import p1 from "../Assets/p1.jpg";
import p2 from "../Assets/p2.jpg";
import p3 from "../Assets/p3.jpg";
import p4 from "../Assets/p4.jpg";
import p5 from "../Assets/p5.jpg";
import p6 from "../Assets/p6.jpg";
import p7 from "../Assets/p7.jpg";
import p8 from "../Assets/p8.jpg";
import p9 from "../Assets/p9.jpg";
import p10 from "../Assets/p10.jpg";

import Card from "./Card";

const Slider = ({ handleCategoryAds }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const [categories, setCategories] = useState();

  const handleClick = async (id) => {
    console.log(id);
    let res = await getAdsByCategories({ id });
    console.log(res);
    handleCategoryAds(res.data);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      let foundCategories = await getCategories();
      console.log(foundCategories);
      setCategories(foundCategories.data.categories);
    };

    fetchCategories();
  }, []);
  return (
    <>
      {categories && (
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all 500"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          customTransition="transform 500ms ease-in-out"
        >
          {categories.map((obj) => {
            return (
              <div
                onClick={() => handleClick(obj._id)}
                className="d-flex justify-content-center"
              >
                {/* {console.log(obj)} */}
                <Card img={obj.image} text={obj.title} />
              </div>
            );
          })}
        </Carousel>
      )}
    </>
  );
};

export default Slider;
