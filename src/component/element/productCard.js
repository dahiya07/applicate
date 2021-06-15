import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const ProductCard = (props) => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.imgBox}>
        <img className={classes.img} src={props.imgSrc} alt="products"></img>
      </Box>
      <Box>
        <Typography component="h6" className={classes.name}>
          {props.brand} {props.name}
        </Typography>
        <Typography component="p" className={classes.price}>
          ₹ {props.price}/-
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductCard;

const useStyles = makeStyles(() => ({
  imgBox: {
    width: "200px",
    margin: "auto",
  },
  name: {
    fontSize: "17px",
    fontWeight: "bold",
  },
  price: {
    fontSize: "15px",
    color: "rgba(0,0,0,0.7)",
  },
  img: {
    width: "8rem",
    height: "9rem",
    borderRadius: "20%",
  },
}));
