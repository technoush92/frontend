import React, { useState, useEffect } from "react";
import { getFavourites } from "../Connection/Placead";
import Searchcard from "../Components/Searchcard";
import { deleteFavourite } from "../Connection/Users";
import "../Styles/Favourites.css";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const Favourites = () => {
  const [favourites, setFavourites] = useState();

  const handleFavourite = async (id) => {
    console.log(id);
    let res = await deleteFavourite({
      id,
      userId: window.localStorage.getItem("id"),
    });
    if (res.data.success === true) {
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      window.localStorage.setItem("favourites", res.data.favs);
      // setFavourites(res.data.favs);
      let yoo = [];
      res.data.favs.map((fav) => {
        favourites.map((f) => {
          if (f._id === fav) {
            yoo.push(f);
          }
        });
      });
      console.log(yoo);
      setFavourites(yoo);
    } else {
      toast.error(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  useEffect(() => {
    const fetchAds = async () => {
      let res = await getFavourites({
        fav: window.localStorage.getItem("favourites").split(","),
      });

      console.log(res);
      setFavourites(res.data.favs);
    };

    fetchAds();
  }, []);
  return (
    <div style={{ backgroundColor: "#ffffff", height: "100vh" }}>
      <br />
      {console.log(favourites)}
      <div className="container">
        <div className="jumbotron jumbotron-favourites">
          <h1 className="" style={{ color: "#FF6E14" }}>
            {/* Your Favourites{" "} */}
          </h1>
        </div>
      </div>
      <br />
      <br />
      <div>
        <div className="">
          <div
            className="p-0 p-md-5 row "
            style={{
              border: "1px solid #F4F6F7",
            }}
          >
            <div className="col-12">
              {!favourites && (
                <div>
                  <i style={{ fontSize: "35px" }} class="far fa-heart"></i>
                  <br />
                  <br />
                  You Have no Favoutites Right Now
                  <br />
                  <Link to="/search">
                    <button
                      className="btn mt-3 "
                      style={{ color: "white", backgroundColor: "#FF6E14" }}
                    >
                      <i class="far fa-heart mr-2"></i>
                      Start Searching to Find Favourites
                    </button>
                  </Link>
                </div>
              )}

              {favourites && (
                <div>
                  {favourites.map((ad) => (
                    <Searchcard
                      image={ad.images ? ad.images[0] : ""}
                      title={ad.title}
                      description={ad.description}
                      price={ad.price}
                      date={ad.date}
                      id={ad._id}
                      handleFavourite={handleFavourite}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourites;
