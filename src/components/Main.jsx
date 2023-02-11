import React from "react";
import { Opening } from "./";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const Main = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Opening />}>
        {" "}
      </Route>
    )
  );

  return (
    <div id="main">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Main;
