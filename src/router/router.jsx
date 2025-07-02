import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/home/Home";
import Error from "../eroor/Error";
import AllVolunteer from "../pages/allVlounteer/AllVolunteer";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddVolunteer from "../pages/addVolunteer/AddVolunteer";
import PrivateRoute from "../privateRoute/PrivateRoute";
import VolunteerNeedDetails from "../pages/details/VolunteerNeedDetails";
import BeVolunteer from "../pages/beAVolunteer/BeVolunteer";
import ManagePost from "../pages/managePost/ManagePost";
import UpdatePost from "../pages/managePost/UpdatePost";
import GetInvolved from "../pages/involve/GetInvolved";
import Dashboard from "../dashboard/Dashboard";
import UserProfile from "../dashboard/userDahboard/UserProfile";
import AdminProfile from "../dashboard/adminDashboard/AdminProfile";
import NeedPost from "../pages/managePost/NeedPost";
import RequestPost from "../pages/managePost/RequestPost";
import ManageAllPosts from "../dashboard/adminDashboard/ManageAllPosts";
import ManageUsers from "../dashboard/adminDashboard/ManageUsers";
import ManageVolunteers from "../dashboard/adminDashboard/ManageVolunteers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/involve",
        element: <GetInvolved></GetInvolved>,
      },
      {
        path: "allVolunteerNeed",
        element: <AllVolunteer></AllVolunteer>,
        loader: () => fetch('https://volunteer-management-server.onrender.com/volunteer')
      },
      {
        path: "volunteerNeedDetails/:id",
        element: <PrivateRoute> <VolunteerNeedDetails></VolunteerNeedDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://volunteer-management-server.onrender.com/volunteer/${params.id}`)
      },
      {
        path: "beVolunteer/:id",
        element: <PrivateRoute> <BeVolunteer></BeVolunteer></PrivateRoute>,
        loader: ({ params }) => fetch(`https://volunteer-management-server.onrender.com/volunteer/${params.id}`)
      },
      {
        path: "/manage",
        element: <PrivateRoute><ManagePost></ManagePost></PrivateRoute>,
        loader: () => fetch('https://volunteer-management-server.onrender.com/volunteer-application')
      },
      {
        path: "/manage/update/:id",
        element: <PrivateRoute><UpdatePost></UpdatePost></PrivateRoute>,
        loader: ({ params }) => fetch(`https://volunteer-management-server.onrender.com/volunteer/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "userProfile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "addVolunteerNeed",
        element: <PrivateRoute><AddVolunteer></AddVolunteer></PrivateRoute>,
      },
      {
        path: "myVolunteerNeed",
        element: <PrivateRoute><NeedPost></NeedPost></PrivateRoute>,
      },
      {
        path: "myVolunteerRequest",
        element: <PrivateRoute><RequestPost></RequestPost></PrivateRoute>,
      },
      // admin routes
      {
        path: "adminProfile",
        element: <AdminProfile></AdminProfile>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "manageAllPosts",
        element: <ManageAllPosts></ManageAllPosts>,
      },
      {
        path: "manageVolunteers",
        element: <ManageVolunteers></ManageVolunteers>,
      },
    ]
  }
]);


export default router;