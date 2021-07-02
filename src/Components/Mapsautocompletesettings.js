import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import "../Styles/Mapautocompletehomecard.css";

class Mapautocompletesettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: window.localStorage.getItem("location") };
  }

  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = async (address) => {
    let res;
    console.log(address);

    await geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);
        res = { address, lat: latLng.lat, lng: latLng.lng };
      })
      .catch((error) => console.error("Error", error));

    console.log(res);
    this.props.handlePlaceSelected(res);
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        style={{ background: "#ffffff", color: "red", zIndex: "999999" }}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "Select Location ...",
                className: "location-search-input form-control  form-control",
                // style: {
                //   marginTop: "20px",
                // },
              })}
            />
            <div
              className=" autocomplete "
              // styles={{
              //   width : "100"
              // }}
            >
              {/* {loading && <div>Loading...</div>} */}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active text-left"
                  : "suggestion-item text-left";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? {
                      backgroundColor: "#0275d8",
                      color: "white",
                      cursor: "pointer",
                      borderBottom: "1px solid grey",
                      width: "100%",
                      shadow: "none",
                    }
                  : {
                      backgroundColor: "#ffffff",
                      cursor: "pointer",
                      borderBottom: "1px solid grey",
                      width: "100%",
                      shadow: "none",
                    };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span className="mt-3 p-3" style={{}}>
                      <i class="fas fa-map-marker-alt"></i>{" "}
                      {suggestion.description}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default Mapautocompletesettings;
