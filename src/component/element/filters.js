import React, { useState } from "react";
import {
  Box,
  Typography,
  ClickAwayListener,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  makeStyles,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { capitalizeFirstLetter } from "../../utils/generic";

const Filters = (props) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("select from DropDown");
  const classes = useStyles();

  const OnClick = (element) => {
    setShow(false);
    setValue(element);
    props.onClick(element, props.type);
  };

  return (
    <Box className={classes.container}>
      <Typography component="h6" className={classes.text}>
        {capitalizeFirstLetter(props.type)}
      </Typography>
      <ClickAwayListener onClickAway={() => setShow(false)}>
        <Accordion
          className={classes.accordion}
          expanded={show}
          classes={{
            root: classes.rootAccordion,
            expanded: classes.expandedAccordion,
            rounded: classes.rounded,
          }}
          onClick={() => setShow(true)}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            classes={{ root: classes.summary }}
            aria-controls="panela-content"
            id="panela-header"
          >
            <Typography style={{ width: "250px", color: "rgba(0,0,0,0.5)" }}>
              {value}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            {props.data.map((elem, i) => (
              <Box
                key={i}
                onClick={() => OnClick(elem)}
                className={classes.suggestionData}
              >
                <Typography>{elem}</Typography>
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      </ClickAwayListener>
    </Box>
  );
};

export default Filters;

const useStyles = makeStyles({
  container: {
    width: "max-content",
    margin: "30px 10px",
    position: "relative",
    minWidth: "20%",
  },
  text: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  accordion: {
    border: "1px solid black",
    "&::before": {
      display: "none",
    },
  },
  summary: {
    margin: 2,
    backgroundColor: "white !important",
  },
  accordionDetails: {
    display: "flex",
    flexDirection: "column",
    padding: "0",
  },
  rootAccordion: {
    boxShadow: "0px 2px 10px rgba(255, 255, 255, 0)",
  },
  expandedAccordion: {
    minWidth: "22%",
    zIndex: 1000,
    width: "inherit",
    position: "absolute",
    boxShadow: "0px 2px 10px rgba(18, 14, 114, 0.18)",
    margin: "0 !important",
    borderRadius: "20px",
    marginBottom: "20px",
    border: "1px solid black",
    height: "300px",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "6px",
      backgroundColor: "#tranparent",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "10px",
      backgroundColor: "#A9B0E1",
    },
    "&::-webkit-scrollbar-track": {
      borderRadius: "10px",
      margin: "15px 0",
      backgroundColor: "transparent",
    },
  },
  rounded: {
    borderRadius: "10px !important",
    border: "1px solid #A9B0E1 !important",
  },
  suggestionData: {
    borderTop: "1px solid rgba(0,0,0,0.2)",
    padding: "10px 20px",
    fontSize: "18px",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.1)",
      cursor: "pointer",
    },
  },
});
