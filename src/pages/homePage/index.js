import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";

const HomePage = () => {
  return (
    <React.Fragment>
        <Navbar />
      <Outlet />
    </React.Fragment>
  );
};

export default HomePage;
