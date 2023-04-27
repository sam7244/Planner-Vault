import React from "react";
import { Fragment } from "react";
import MainHeader from "./MainHeader";

const MainLayout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default MainLayout;
