import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AddVolunteerPost from "../pages/AddVolunteerPost/AddVolunteerPost";
import VolunteerPostDetails from "../pages/VolunteerPostDetails/VolunteerPostDetails";
import BeVolunteer from "../pages/BeVolunteer/BeVolunteer";
import AllVolunteerNeedPosts from "../pages/AllVolunteerNeedPosts/AllVolunteerNeedPosts";
import ManageMyPosts from "../pages/ManageMyPosts/ManageMyPosts";
import UpdateNeedPost from "../pages/ManageMyPosts/UpdateNeedPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "all-volunteer-need-posts",
        element: <AllVolunteerNeedPosts></AllVolunteerNeedPosts>,
        loader: () =>
          fetch(
            "https://volunteer-management-server-gilt.vercel.app/volunteers"
          ),
      },
      {
        path: "add-volunteer-post",
        element: (
          <PrivateRoute>
            <AddVolunteerPost></AddVolunteerPost>
          </PrivateRoute>
        ),
      },
      {
        path: "volunteers/:id",
        element: (
          <PrivateRoute>
            <VolunteerPostDetails></VolunteerPostDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://volunteer-management-server-gilt.vercel.app/volunteers/${params.id}`
          ),
      },
      {
        path: "beVolunteer/:id",
        element: (
          <PrivateRoute>
            <BeVolunteer></BeVolunteer>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://volunteer-management-server-gilt.vercel.app/volunteers/${params.id}`
          ),
      },
      {
        path: "manage-my-posts",
        element: (
          <PrivateRoute>
            <ManageMyPosts></ManageMyPosts>
          </PrivateRoute>
        ),
      },
      {
        path: "volunteers-need/:id",
        element: (
          <PrivateRoute>
            <UpdateNeedPost></UpdateNeedPost>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://volunteer-management-server-gilt.vercel.app/volunteers/${params.id}`
          ),
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "*",
    element: (
      <h1 className="text-center text-red-600 text-4xl font-bold mt-20">
        Oops! Page not found.
      </h1>
    ),
  },
]);

export default router;
