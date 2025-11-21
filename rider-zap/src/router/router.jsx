import { createBrowserRouter } from "react-router";
import layout from "../layout/layout";
import Home from "../pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: layout,
    children: [
        {
            index : true,
            Component: Home,
        }
    ]
  },
]);