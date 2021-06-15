import React from "react";
import {
  ButtonGroup,
  Badge,
  Button,
  Box,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export default function AddRemove(props) {
  const matches = useMediaQuery("(max-width:500px)");
  const [itemCount, setItemCount] = React.useState(props.quantity);
  const remove = () => {
    setItemCount(Math.max(itemCount - 1, 0));
    if (itemCount > 0) props.remove(props.id);
  };
  const add = () => {
    setItemCount(Math.max(itemCount + 1, 0));
    props.add(props.id);
  };

  const getPrice = (count) => {
    return count * props.price;
  };

  return (
    <div
      style={
        !matches
          ? { display: "flex", justifyContent: "space-evenly", padding: 30 }
          : { display: "block", textAlign: "center" }
      }
    >
      <Badge color="secondary" badgeContent={itemCount}>
        <ShoppingCartIcon />{" "}
      </Badge>
      <ButtonGroup>
        <Button onClick={remove}>
          {" "}
          <RemoveIcon fontSize="small" />
        </Button>
        <Button onClick={add}>
          {" "}
          <AddIcon fontSize="small" />
        </Button>
      </ButtonGroup>
      <Box style={!matches ? { marginLeft: "30px" } : { marginTop: "30px" }}>
        <Typography>₹ {getPrice(itemCount)}</Typography>
      </Box>
    </div>
  );
}
