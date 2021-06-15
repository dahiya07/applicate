import React from "react";
import Header from "../element/header";

const Layout = (props) => {
  return (
    <div style={{ maxWidth: "1700px", margin: "auto" }}>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
