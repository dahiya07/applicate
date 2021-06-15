import React, { useContext, useState } from "react";
import {
  Dialog,
  Typography,
  Box,
  makeStyles,
  Button,
  useMediaQuery,
} from "@material-ui/core";
import cartContext from "../../context/cartContext";

const CheckoutDialog = (props) => {
  const matches = useMediaQuery("(max-width:500px)");
  const ctx = useContext(cartContext);
  const classes = useStyles();
  const [paid, setPaid] = useState(false);

  const getTotal = () => {
    let total = 0;
    ctx.cart.map((elem) => (total += elem.quantity * parseInt(elem.price)));
    return total;
  };

  const handlePay = () => {
    if (paid) props.close();
    else setPaid(true);
  };

  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.close}
        classes={
          !matches ? { paper: classes.paper } : { paper: classes.mobilePaper }
        }
      >
        <Box>
          <Typography component="h5" className={classes.heading}>
            Order Summary
          </Typography>
          <Box style={{ width: "60%", margin: "auto" }}>
            {!paid ? (
              <>
                {ctx.cart.map((elem, i) => (
                  <Box key={i} display="flex" justifyContent="space-between">
                    <Typography
                      className={!matches ? classes.text : classes.smalltext}
                    >
                      {elem.quantity} x {elem.name} ({elem.brand})
                    </Typography>
                    <Typography
                      className={!matches ? classes.text : classes.smalltext}
                    >
                      ₹ {elem.quantity * elem.price}/-
                    </Typography>
                  </Box>
                ))}
              </>
            ) : (
              <Box style={{ textAlign: "center" }}>
                <img
                  style={{ width: "200px" }}
                  src="/success.jpg"
                  alt="success"
                ></img>
                <Typography
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  Thanks, you can close the tab now ;)
                </Typography>
              </Box>
            )}
            {!paid ? (
              <Box display="flex" justifyContent="space-between">
                <Typography
                  className={!matches ? classes.total : classes.mobileTotal}
                >
                  Total
                </Typography>
                <Typography
                  className={!matches ? classes.total : classes.mobileTotal}
                >
                  ₹ {getTotal()}/-
                </Typography>
              </Box>
            ) : null}
            <Box className={classes.buttonsBox} onClick={handlePay}>
              <Button className={classes.button}>
                {paid ? "Close" : "Pay"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

const useStyles = makeStyles({
  paper: {
    borderRadius: "30px",
    maxWidth: "500px",
    width: "50%",
    minHeight: "350px",
  },
  mobilePaper: {
    borderRadius: "30px",
    //maxWidth: "500px",
    width: "90%",
    minHeight: "350px",
  },
  heading: {
    fontSize: "31px",
    textAlign: "center",
    margin: "20px auto",
  },
  text: {
    marginTop: "30px",
    fontSize: "16px",
    fontWeight: "normal",
  },
  smalltext: {
    marginTop: "30px",
    fontSize: "12px",
    fontWeight: "normal",
  },
  total: {
    marginTop: "30px",
    fontSize: "18px",
    fontWeight: "bold",
  },
  mobileTotal: {
    marginTop: "20px",
    fontSize: "14px",
    fontWeight: "bold",
  },
  buttonsBox: {
    display: "flex",
    paddingTop: "30px",
  },
  button: {
    borderRadius: "12px",
    height: "48px",
    margin: "0.5rem 8%",
    textTransform: "capitalize",
    minWidth: "100px",
    width: "-webkit-fill-available",
    boxShadow:
      "0px 2px 10px rgba(18, 14, 114, 0.18), 2px 1000px 1px #fff inset",
    border: "2px solid transparent",
    backgroundImage:
      "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(90.93deg, #F8A936 1.14%, #D52773 99.26%)",
    backgroundOrigin: "border-box",
    backgroundClip: "content-box, border-box",
    "& span": {
      background: "Black",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    "&:hover": {
      boxShadow: "none",
      color: "white",
      "& span": {
        background: "none",
        WebkitTextFillColor: "white",
      },
    },
  },
});

export default CheckoutDialog;
