import React, { useState, useContext } from "react";
import { productdata } from "../../constant/productData";
import { Box, makeStyles, Button, useMediaQuery } from "@material-ui/core";
import ProductCard from "../element/productCard";
import Filters from "../element/filters";
import { brandData, categoryData } from "../../constant/filterData";
import { comparingString } from "../../utils/generic";
import cartContext from "../../context/cartContext";

const IndexPage = () => {
  const matches = useMediaQuery("(max-width:500px)");
  const classes = useStyles();
  const cartCtx = useContext(cartContext);
  const [data, setData] = useState(productdata);

  const filterClick = (element, type) => {
    let filterdata = productdata.filter((elem) =>
      comparingString(elem[`${type}`], element)
    );
    setData(filterdata);
  };

  const handleProductClick = (element) => {
    cartCtx.setCart(cartCtx.cart, { type: "add", value: element });
  };

  return (
    <>
      <Box style={matches ? { display: "none" } : { display: "flex" }}>
        <Filters type="brand" data={brandData} onClick={filterClick} />
        <Filters type="category" data={categoryData} onClick={filterClick} />
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        style={
          matches ? { justifyContent: "center" } : { justifyContent: "start" }
        }
      >
        {data.map((elem, i) => (
          <Box className={classes.root} key={i}>
            <ProductCard
              imgSrc={elem.imgSrc}
              name={elem.name}
              brand={elem.brand}
              price={elem.price}
            ></ProductCard>
            <Box style={{ width: "100%", margin: "auto" }}>
              <Button
                onClick={() => handleProductClick(elem)}
                className={classes.button}
              >
                ADD to cart
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default IndexPage;

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    border: "1px solid rgba(10, 107, 255, 0.4)",
    padding: "10px",
    margin: "10px 15px",
    borderRadius: "12px",
    "&:hover": {
      boxShadow: "0px 1px 7px 2px rgba(0,0,0,0.1)",
    },
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
    border: "1px solid transparent",
    backgroundColor: "rgba(10, 107, 255, 0.8)",
    "&:hover": {
      boxShadow: "none",
      color: "white",
      backgroundColor: "rgba(10, 107, 255, 0.8)",
      "& span": {
        WebkitTextFillColor: "white",
      },
    },
  },
}));
