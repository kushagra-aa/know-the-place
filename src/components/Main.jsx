import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./Header/Header";
import List from "./List/List";
import { getPlacesData, getWeatherData } from "./../api";
import Map from "./Map/Map";

function Main() {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [hideMap, setHideMap] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const fill = places.filter((place) => place.rating > rating);
    setFilteredPlaces(fill);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);
      getWeatherData(coordinates.lat, coordinates.lng).then((data) =>
        setWeatherData(data)
      );
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data?.filter((place) => place.name));
        setFilteredPlaces([]);
        setIsLoading(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bounds, type]);

  return (
    <div className="Main">
      <CssBaseline />
      <Header
        setCoordinates={setCoordinates}
        setHideMap={setHideMap}
        hideMap={hideMap}
      />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={!hideMap ? 4 : 12}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
            hideMap={hideMap}
          />
        </Grid>
        <Grid
          style={{ display: `${hideMap ? "none" : "grid"}` }}
          item
          xs={12}
          md={8}
        >
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            weatherData={weatherData}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
