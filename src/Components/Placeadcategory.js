import React, { useState } from "react";

const Placeadcategory = ({ categories, selectCategory }) => {
  const [values, setValues] = useState("");

  const handleChange = (evt) => {
    // console.log(categ, sub);
    let found;
    console.log(evt.target.value);
    categories.map((cat) => {
      cat.subcategories.map((sub) => {
        if (sub.id === evt.target.value) {
          found = { category: cat, subcategory: sub };
        }
      });
    });

    console.log(found);
    selectCategory(found);
  };

  return (
    <div>
      <div>
        <div className="row">
          <div className="col-12 col-md-6">
            {categories.map((categ, i) => {
              if (i <= categories.length / 2) {
                return (
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">
                      <i
                        style={{ color: "#FF6E14", marginRight: "4px" }}
                        class={categ.icon}
                      ></i>
                      {categ.title}
                    </label>
                    <select
                      class="form-control form-control-lg"
                      id="exampleFormControlSelect1"
                      value={values}
                      onChange={handleChange}
                    >
                      {console.log(categ)}
                      <option>Choose Subcategory</option>
                      {categ.subcategories.map((sub) => (
                        <option
                          value={sub.id}
                          // onClick={() => handleChange(categ, sub)}
                        >
                          {sub.subTitle}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              }
            })}
          </div>
          <div className="col-12 col-md-6">
            {categories.map((categ, i) => {
              if (i > categories.length / 2) {
                return (
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">
                      <i
                        style={{ color: "#FF6E14", marginRight: "4px" }}
                        class={categ.icon}
                      ></i>
                      {categ.title}
                    </label>
                    <select
                      class="form-control form-control-lg"
                      id="exampleFormControlSelect1"
                      value={values}
                      onChange={handleChange}
                    >
                      {console.log(categ)}
                      <option>Choose Subcategory</option>
                      {categ.subcategories.map((sub) => (
                        <option
                          value={sub.id}
                          // onClick={() => handleChange(categ, sub)}
                        >
                          {sub.subTitle}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placeadcategory;
