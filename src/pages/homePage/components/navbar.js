import * as React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { SwipeableDrawer } from "@mui/material";
import { useSelector } from "react-redux";
import { ContentCutRounded } from "@mui/icons-material";

const Navbar = () => {
    const counter = useSelector(state => state)
    console.log(counter);
  return (
    <div className="bg-blue-50">
      <div className="container mx-auto px-4 py-6">
        <div className=" flex flex-wrap justify-between items-center">
          <Link to={`/`}>
            <img src={counter.imageReducer.Logo} alt="logo" />
          </Link>
          <div className="sm:block hidden">
            <ul className="flex flex-row">
            {counter.homePageReducer.navbar.navList.map((item) => (
              <li className="px-4">
                <a href={"#" + item}>{item}</a>
              </li>
            ))}
            <li><button className="btn-primary">Register</button></li>
          </ul>
          </div>
          <div className="sm:hidden block">
            <button>
            <MenuIcon />
          </button>
            {/* <SwipeableDrawer
            anchor={"right"}
            open={props.toggleDrawer}
            onClose={props.toggleDrawerHandler}
            onOpen={props.toggleDrawerHandler}
          >
            <div className="w-48">
              <div className="px-4 py-2.5">
                <div className="flex flex-wrap justify-between items-center pb-4">
                  <p className="font-bold">BCR</p>
                  <button onClick={props.toggleDrawerHandler}>
                    <CloseIcon />
                  </button>
                </div>
                <ul>
                  {props.navList.map((item) => (
                    <li className="py-4">
                      <a href={"#" + item}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SwipeableDrawer> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
