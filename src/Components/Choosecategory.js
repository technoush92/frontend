import React, { useState, useEffect } from "react";
import { getCategories } from "../Connection/Categories";
import Categorymobile from "./Categorymobile";

const Choosecategory = ({ data, handleCategory }) => {
  const [categories, setCategories] = useState();
  const [selctedCategory, setSelectedCategory] = useState();
  const [subCategories, setSubCategories] = useState();
  const [move, setMove] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [title, setTitle] = useState("Categories");

  const handleCategories = (data) => {
    console.log(data);
    setSelectedCategory(data);
    setSubCategories(data.subcategories);
  };

  const handleCategoryOpen = () => {
    console.log("open");
    setCategoryOpen(!categoryOpen);
  };
  const handleSub = (val) => {
    console.log(val);
    setTitle(val.subTitle);
    handleSelected(selctedCategory, val);
  };
  const handleSelected = (cat, sub) => {
    console.log(cat, sub);
    setTitle(sub.subTitle);
    handleCategory(cat, sub);
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
    <div>
      {console.log(subCategories)}
      <div class="dropdown  d-none d-md-block">
        <button
          class="btn mb-3  dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{
            fontSize: "17px",
            width: "100%",
            backgroundColor: "#F4F6F7",
          }}
          // onClick={Home ? history.push("/search") : ""}
        >
          <i class="fas fa-list-ul mr-2"></i>
          {title}
        </button>
        <div class="dropdown-menu p-4 mt-2" style={{ borderRadius: "12px" }}>
          {categories && (
            <div style={{ width: "500px" }} className="row">
              <div className="col-6">
                <h5>Categories</h5>
                {categories.map((cat) => {
                  return (
                    <>
                      <a
                        class="dropdown-item ml-3 d-flex justify-content-between"
                        onMouseEnter={() => handleCategories(cat)}
                        onClick={() => handleSub(cat)}
                        //   onMouseLeave={handleMove}
                      >
                        <i
                          style={{ color: "orange" }}
                          className={`${cat.icon} mt-1 `}
                        ></i>
                        {cat.title}{" "}
                        <i
                          style={{ color: "orange" }}
                          className={`fas fa-chevron-right mt-1 mx-2`}
                        ></i>
                      </a>
                    </>
                  );
                })}
              </div>
              <div className="col-6 border-left">
                <h5>Sub Categories</h5>
                {subCategories &&
                  subCategories.map((sub) => {
                    return (
                      <a class="dropdown-item" onClick={() => handleSub(sub)}>
                        {sub.subTitle}
                      </a>
                    );
                  })}
              </div>
            </div>
          )}
        </div>

        {/* <div class="dropdown-menu p-4 mt-2" style={{ borderRadius: "12px" }}>
          {categories && (
            <div style={{ width: "310px" }} className="row">
              <div className="col-12">
                {categories.map((cat) => {
                  return (
                    <a
                      class="dropdown-item ml-3"
                      onClick={() => handleSubCategories(cat.subcategories)}
                    >
                      {cat.title}{" "}
                      <i
                        style={{ color: "orange" }}
                        class={`fas fa-chevron-right mx-5`}
                      ></i>
                    </a>
                  );
                })}
              </div>
              {subCategories && (
                <div className="col-12 border-left">
                  {subCategories &&
                    subCategories.map((sub) => {
                      return (
                        <a class="dropdown-item" href="#">
                          {sub.subTitle}
                        </a>
                      );
                    })}
                </div>
              )}
            </div>
          )}
        </div> */}
      </div>
      <div class="dropdown  d-block d-md-none">
        <button
          onClick={handleCategoryOpen}
          style={{
            fontSize: "17px",
            width: "100%",
            backgroundColor: "#F4F6F7",
          }}
          class="btn mb-3  "
        >
          <i class="fas fa-list-ul mr-2"></i>
          {title}
        </button>
        <Categorymobile
          open={categoryOpen}
          handleOpen={handleCategoryOpen}
          data={categories}
          handleSelected={handleSelected}
        />
      </div>
    </div>
  );
};

export default Choosecategory;
