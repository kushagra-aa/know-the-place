import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Rating } from "@material-ui/lab";

import useStyles from "./styles";
import { mapStyles } from "./mapStyles";

const Map = ({ setCoordinates, setBounds, coordinates, weatherData }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");
  return (
    <>
      <div className={classes.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAk_j4GiF2KeDaRWtO_2L1LYBY4NGXmqjM" }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={{
            disableDefaultUI: true,
            zoomControl: true,
            styles: mapStyles,
          }}
          onChange={(e) => {
            setCoordinates({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }}
          onChildClick={""}
        >
          {weatherData?.list?.map((data, i) => (
            <div key={i} lat={data.coord.lat} lng={data.coord.lng}>
              <img
                height="100"
                src={`https://openweathermap.org/w/${data.weather[0].icon}.png`}
                alt={data.weather[0].icon}
              />
            </div>
          ))}
        </GoogleMapReact>
      </div>
    </>
  );
};

export default Map;
