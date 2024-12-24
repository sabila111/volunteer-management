import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/home/Home";
import Error from "../eroor/Error";
import AllVolunteer from "../pages/allVlounteer/AllVolunteer";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

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
            {
              path: "allVolunteer",
              element:<AllVolunteer></AllVolunteer> ,
            },
            {
              path: "/login",
              element:<Login></Login> ,
            },
            {
              path: "/register",
              element:<Register></Register> ,
            },
          ],
        },
      ]);


export default router;