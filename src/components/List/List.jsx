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

const List = ({ places, isLoading, type, setType, rating, setRating }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <Typography variant="h4">
          Restaurants,Hotels And Places Arround You
        </Typography>
        {isLoading ? (
          <div className={classes.loading}>
            <CircularProgress size={"5rem"} />
          </div>
        ) : (
          <>
            <FormControl className={classes.formControl}>
              <InputLabel>Type</InputLabel>
              <Select vlaue={type} onChange={(e) => setType(e.target.value)}>
                <MenuItem vlaue="restaurants">Restaurants</MenuItem>
                <MenuItem vlaue="hotels">Hotels</MenuItem>
                <MenuItem vlaue="attractions">Attractions</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel>Rating</InputLabel>
              <Select
                vlaue={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <MenuItem vlaue={0}>All</MenuItem>
                <MenuItem vlaue={3}>Above 3.0</MenuItem>
                <MenuItem vlaue={4}>Above 4.0</MenuItem>
                <MenuItem vlaue={4.5}>Above 4.5</MenuItem>
              </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
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
