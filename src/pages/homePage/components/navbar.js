import * as React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { SwipeableDrawer } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawerHandler } from "../../../redux/actions/homePageAction";

const Navbar = () => {
  const counter = useSelector((state) => state.homePageReducer.navbar);
  const dispatch = useDispatch();
  return (
    <div className="bg-blue-50">
      <div className="container mx-auto px-4 py-6">
        <div className=" flex flex-wrap justify-between items-center">
          <Link to={`/`}>
            <img src={counter.logo} alt="logo" />
          </Link>
          <div className="sm:block hidden">
            <ul className="flex flex-row items-center">
              {counter.navList.map((item) =>
                item !== "Register" ? (
                  <li className="mx-4">
                    <Link to={"#" + item}>{item}</Link>
                  </li>
                ) : (
                  <li>
                    <button className="btn-primary mx-4">{item}</button>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="sm:hidden block">
            <button
              onClick={() => {
                dispatch(toggleDrawerHandler(counter.toggleDrawer));
              }}
            >
              <MenuIcon />
            </button>
            <SwipeableDrawer
              anchor={"right"}
              open={counter.toggleDrawer}
              onClose={() => {
                dispatch(toggleDrawerHandler(counter.toggleDrawer));
              }}
              onOpen={() => {
                dispatch(toggleDrawerHandler(counter.toggleDrawer));
              }}
            >
              <div className="w-48">
                <div className="px-4 py-2.5">
                  <div className="flex flex-wxzxzxrap justify-between items-center pb-4">
                    <p className="font-bold">BCR</p>
                    <button
                      onClick={() => {
                        dispatch(toggleDrawerHandler(counter.toggleDrawer));
                      }}
                    >
                      <CloseIcon />
                    </button>
                  </div>
                  <ul>
                    {counter.navList.map((item) =>
                      item !== "Register" ? (
                        <li className="my-3">
                          <Link to={"#" + item}>{item}</Link>
                        </li>
                      ) : (
                        <li>
                          <button className="btn-primary my-3">{item}</button>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </SwipeableDrawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
