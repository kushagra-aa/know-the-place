import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";

import useStyles from "./styles";

const PlaceDetails = ({ place }) => {
  const classes = useStyles();
  return (
    <>
      <Card elevation={6} className={classes.card}>
        <CardMedia
          styles={{ height: 200 }}
          image={
            place.photo
              ? place.photo.images.large.url
              : "https://images.unsplash.com/photo-1624735793547-3b38a04fa422?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdHJhdW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          }
          title={place.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" className={classes.name}>
            {place.name}
          </Typography>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1" className={classes.price}>
              Distance
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {place.distance_string}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1" className={classes.price}>
              Price
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {place.price_level ? place.price_level : "--"}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1" className={classes.price}>
              Ranking
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {place.ranking}
            </Typography>
          </Box>
          {place?.cuisine?.map(({ name }) => (
            <Chip
              key={name}
              size="small"
              label={name}
              className={classes.chip}
            />
          ))}
          {place?.address && (
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.subtitle}
              gutterBottom
            >
              <LocationOnIcon />
              {place.address}
            </Typography>
          )}
          {place?.phone && (
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.spacing}
              gutterBottom
            >
              <PhoneIcon />
              {place.phone}
            </Typography>
          )}

          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => window.open(place.web_url, "_blank")}
            >
              Trip Advisor
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => window.open(place.website, "_blank")}
            >
              Website
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};

export default PlaceDetails;
