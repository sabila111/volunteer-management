import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/home/Home";
import Error from "../eroor/Error";

    const router = createBrowserRouter([
        {
          path: "/",
          element:<MainLayout></MainLayout>,
          errorElement:<Error></Error>,
          children: [
            {
              path: "/",
              element:<Home></Home> ,
            },
          ],
        },
      ]);


export default router;