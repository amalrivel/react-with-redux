import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./pages/homePage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Landing from "./pages/homePage/landing";
import DashboardPage from "./pages/dasboardPage";
import Search from "./pages/homePage/search";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={<HomePage />}
        // loader={rootLoader}
        // action={rootAction}
        // errorElement={<ErrorPage />}
      >
        <Route path="/" element={<Landing />} />
        <Route path="/search-car" element={<Search />} />
      </Route>
      <Route path="/dashboard" element={<DashboardPage />}></Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
