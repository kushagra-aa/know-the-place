import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import "./App.css";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import { getPlacesData, getWeatherData } from "./api";
import Map from "./components/Map/Map";

function App() {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

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
  }, [bounds, type]);

  return (
    <div className="App">
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid iterm xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid iterm xs={12} md={8}>
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

export default App;
