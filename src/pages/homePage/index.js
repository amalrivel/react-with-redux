import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

const HomePage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
