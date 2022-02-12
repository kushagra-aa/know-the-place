import React from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import useStyles from "./styles";

const List = ({
  places,
  isLoading,
  type,
  setType,
  rating,
  setRating,
  hideMap,
}) => {
  const classes = useStyles();
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };
  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };
  return (
    <>
      <div className={classes.container}>
        <Typography className={classes.title} variant="h4">
          {type} Arround You
        </Typography>
        {isLoading ? (
          <div className={classes.loading}>
            <CircularProgress size={"5rem"} />
          </div>
        ) : (
          <>
            <FormControl className={classes.formControl}>
              <InputLabel id="type">Type</InputLabel>
              <Select id="type" value={type} onChange={handleTypeChange}>
                <MenuItem value="restaurants">Restaurants</MenuItem>
                <MenuItem value="hotels">Hotels</MenuItem>
                <MenuItem value="attractions">Attractions</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="rating">Rating</InputLabel>
              <Select id="rating" value={rating} onChange={handleRatingChange}>
                <MenuItem value="">All</MenuItem>
                <MenuItem value="3">Above 3.0</MenuItem>
                <MenuItem value="4">Above 4.0</MenuItem>
                <MenuItem value="4.5">Above 4.5</MenuItem>
              </Select>
            </FormControl>
            <Grid
              container
              spacing={3}
              className={`${classes.list} ${!hideMap ? "" : classes.grid}`}
            >
              {places?.map((place, i) => (
                <Grid item key={i} xs={12}>
                  <PlaceDetails place={place} />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </div>
    </>
  );
};

export default List;
