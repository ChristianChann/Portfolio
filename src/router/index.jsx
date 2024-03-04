import {createBrowserRouter} from "react-router-dom";
import Layout from "../pages/layout/layout";
import Home from "../pages/Home";
import About from "../pages/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "",
          element: <Home/>,
      },
     ]}
  ]);

  export default router;
  