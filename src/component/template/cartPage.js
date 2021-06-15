import React, { useContext, useEffect, useState } from "react";
import cartContext from "../../context/cartContext";
import {
  Box,
  makeStyles,
  Typography,
  Button,
  useMediaQuery,
} from "@material-ui/core";
import CartCard from "../element/cartCard";
import AddRemove from "../element/addRemove";
import CheckoutDialog from "../element/checkoutDialog";

const CartPage = () => {
  const matches = useMediaQuery("(max-width:500px)");
  const classes = useStyles();
  const ctxCart = useContext(cartContext);
  const [data, setdata] = useState();
  const [dialog, setDialoge] = useState(false);

  useEffect(() => setdata(ctxCart.cart), [ctxCart]);

  const add = (id) => {
    ctxCart.setCart(ctxCart.cart, { type: "addQuanity", id: id });
  };
  const remove = (id) => {
    ctxCart.setCart(ctxCart.cart, { type: "removeQuanity", id: id });
  };

  return (
    <Box style={{ width: "80%", margin: "20px auto" }}>
      <Box
        className={classes.card}
        display="flex"
        style={matches ? { display: "none" } : { display: "flex" }}
      >
        <Box display="flex" style={{ flex: 0.8 }} justifyContent="space-evenly">
          <Box className={classes.box}>
            <Typography>Product</Typography>
          </Box>
          <Box className={classes.box}>
            <Typography>Name</Typography>
          </Box>
          <Box className={classes.box}>
            <Typography>Brand</Typography>
          </Box>
          <Box className={classes.box}>
            <Typography>Category</Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box className={classes.Quabox}>
            <Typography>quantity</Typography>
          </Box>
          <Box style={{ margin: "0 20px" }}>
            <Typography>Price</Typography>
          </Box>
        </Box>
      </Box>
      {data && data.length > 0 ? (
        data.map((elem, i) => (
          <Box key={i} className={classes.card}>
            <Box style={{ flex: 0.8 }}>
              <CartCard
                imgSrc={elem.imgSrc}
                name={elem.name}
                brand={elem.brand}
                category={elem.category}
              ></CartCard>
            </Box>
            <Box>
              <AddRemove
                id={elem.id}
                quantity={elem.quantity}
                add={add}
                remove={remove}
                price={elem.price}
              />
            </Box>
          </Box>
        ))
      ) : (
        <Box style={{ textAlign: "center" }}>
          <Typography>Nothing to show here rn ;)</Typography>
        </Box>
      )}
      <Box style={{ width: "80%", margin: "auto" }}>
        <Button
          onClick={() => setDialoge(true)}
          disabled={data?.length > 0 ? false : true}
          classes={{ disabled: classes.disabled }}
          className={classes.button}
        >
          Checkout
        </Button>
      </Box>
      <CheckoutDialog open={dialog} close={() => setDialoge(false)} />
    </Box>
  );
};

export default CartPage;

const useStyles = makeStyles(() => ({
  card: {
    border: "1px solid rgba(10, 107, 255, 0.5)",
    margin: "10px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "12px",
    padding: "10px 20px",
  },
  box: { width: "200px" },
  Quabox: { width: "120px" },
  button: {
    borderRadius: "12px",
    height: "48px",
    margin: "0.5rem 8%",
    textTransform: "capitalize",
    padding: "10px 15px",
    minWidth: "100px",
    width: "-webkit-fill-available",
    boxShadow:
      "0px 2px 10px rgba(18, 14, 114, 0.18), 2px 1000px 1px #fff inset",
    border: "1px solid rgba(10, 107, 255, 0.95)",
    "& span": {
      background: "Black",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    "&:hover": {
      boxShadow: "none",
      color: "white",
      backgroundColor: "rgba(10, 107, 255, 0.95)",
      "& span": {
        WebkitTextFillColor: "white",
      },
    },
  },
  disabled: {
    borderRadius: "12px",
    height: "48px",
    margin: "0.5rem 8%",
    textTransform: "capitalize",
    padding: "10px 15px",
    minWidth: "100px",
    width: "-webkit-fill-available",
    backgroundColor: "rgba(0,0,0,.3)",
    boxShadow:
      "0px 2px 10px rgba(18, 14, 114, 0.18), 2px 1000px 1px #fff inset",
    border: "1px solid red",
    "& span": {
      background: "Black",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  },
}));
