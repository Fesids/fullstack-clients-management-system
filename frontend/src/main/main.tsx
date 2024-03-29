import "flowbite";
import "flowbite-react";
import React from "react";
import ReactDOM from "react-dom/client";

import "../styles/index.scss";

import { routes } from "../routes/routes";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routes} />;
  </React.StrictMode>
);
