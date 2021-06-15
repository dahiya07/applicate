import React from "react";
import { Box, Typography, makeStyles, useMediaQuery } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

const links = [
  { name: "Order Catalogue", route: "/" },
  { name: "My Cart", route: "/cart" },
];

const Header = () => {
  let query = useLocation();
  const matches = useMediaQuery("(max-width:500px)");
  const classes = useStyles();

  const name = () => {
    let x = links.filter((ele) => ele.route === query.pathname);
    return x[0].name;
  };

  return (
    <Box display="flex" justifyContent="space-between" className={classes.root}>
      <Typography component="h5" className={classes.text}>
        Applicate AI
      </Typography>
      <Typography
        component="h5"
        className={`${!matches ? classes.display : classes.noDisplay}`}
      >
        {name()}
      </Typography>
      <Box className={`${!matches ? classes.display : classes.noDisplay}`}>
        {links.map((elem, i) => (
          <Link
            to={elem.route}
            key={i}
            className={
              query.pathname === elem.route
                ? classes.selected
                : classes.notSelected
            }
          >
            {elem.name}
          </Link>
        ))}
      </Box>
      <Box className={`${matches ? classes.display : classes.noDisplay}`}>
        {links.map((elem, i) => (
          <Link
            to={elem.route}
            key={i}
            className={`${
              query.pathname !== elem.route
                ? classes.display
                : classes.noDisplay
            } ${classes.mobileButton}`}
          >
            {elem.name}
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Header;

const useStyles = makeStyles(() => ({
  root: {
    color: "black",
    padding: "20px 30px",
    borderBottom: "1px solid rgba(0,0,0,0.4)",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  text: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  noDisplay: {
    display: "none",
  },
  display: { display: "block" },
  selected: {
    color: "white",
    backgroundColor: "rgba(10, 107, 255, 0.95)",
    padding: "10px 20px",
    borderRadius: "15px",
    textDecoration: "none",
    margin: "0 15px",
  },
  notSelected: {
    color: "black",
    backgroundColor: "white",
    border: "1px solid blue",
    padding: "10px 20px",
    borderRadius: "15px",
    textDecoration: "none",
    margin: "0 15px",
  },
  mobileButton: {
    color: "black",
    backgroundColor: "white",
    border: "1px solid blue",
    padding: "8px 15px",
    borderRadius: "15px",
    textDecoration: "none",
  },
}));
