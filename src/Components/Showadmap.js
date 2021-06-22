import React, { useState } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import Geocode from "react-geocode";
import AutoComplete from "react-google-autocomplete";

Geocode.setApiKey("AIzaSyAKGQRdEsRkOqWwwuk1e2N_5ypkrZEYmD0");

const Showadmap = ({ data }) => {
  const [state, setState] = useState({
    address: "",
    zoom: 15,
    height: 500,
    mapPosition: {
      lat: data.mapPosition.lat,
      lng: data.mapPosition.lng,
    },
    markerPosition: {
      lat: data.mapPosition.lat,
      lng: data.mapPosition.lng,
    },
  });

  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap defaultZoom={8} defaultCenter={state.mapPosition}>
        {console.log(data)}
        <Marker
          //   draggable={true}
          //   onDragEnd={onMarkerDragEnd}
          position={state.markerPosition}
        />
        {/* <AutoComplete
          style={{
            width: "100%",
            heoght: "40px",
            paddingLeft: 16,
            marginTop: "1rem",
            marginBottom: "2rem",
          }}
          type={["(regions)"]}
          onPlaceSelected={handlePlaceSelected}
        /> */}
      </GoogleMap>
    ))
  );
  return (
    <MapWithAMarker
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAKGQRdEsRkOqWwwuk1e2N_5ypkrZEYmD0&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
};

export default Showadmap;
