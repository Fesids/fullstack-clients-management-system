import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FilterPage from "../Filter";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <FilterPage />,
  },
]);

export const Router = <RouterProvider router={routes} />;
