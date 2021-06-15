import React from "react";
import { Box, Typography, makeStyles, useMediaQuery } from "@material-ui/core";

const CartCard = (props) => {
  const matches = useMediaQuery("(max-width:500px)");
  const classes = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      style={
        matches
          ? { display: "block", textAlign: "center" }
          : { display: "flex" }
      }
    >
      <Box className={`${classes.imgBox} ${!matches ? classes.box : null}`}>
        <img
          className={classes.img}
          src={props.imgSrc}
          alt="product cart"
        ></img>
      </Box>
      <Box className={!matches ? classes.box : null}>
        <Typography className={classes.text}>{props.name}</Typography>
      </Box>
      <Box className={!matches ? classes.box : null}>
        <Typography className={!matches ? classes.black : classes.blackSmall}>
          {props.brand}
        </Typography>
      </Box>
      <Box
        className={!matches ? classes.box : null}
        style={matches ? { display: "none" } : { display: "block" }}
      >
        <Typography className={classes.light}>{props.category}</Typography>
      </Box>
    </Box>
  );
};

export default CartCard;

const useStyles = makeStyles(() => ({
  imgBox: {
    width: "max-content",
    margin: "auto",
  },
  text: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "rgba(10, 107, 255, 0.95)",
  },
  black: { fontSize: "18px", fontWeight: "bold", color: "black" },
  blackSmall: { fontSize: "14px", fontWeight: "bold", color: "black" },
  light: {
    color: "rgba(0,0,0,0.75)",
    fontSize: "18px",
    fontWeight: "bold",
  },
  img: {
    width: "75px",
    borderRadius: "20%",
  },
  box: {
    width: "200px",
  },
}));
