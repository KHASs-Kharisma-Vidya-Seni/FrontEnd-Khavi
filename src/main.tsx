import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Login.tsx";
import NotFound from "./pages/NotFound.tsx";
import Register from "./pages/Register.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";

import ProfileRoot from "./pages/ProfileRoot.tsx";
import ProfileBookmark from "./pages/Profile-bookmark.tsx";
import ProfileUserInfo from "./pages/Profile-userInfo.tsx";
import ProfileSetting from "./pages/Profile-setting.tsx";
import Article from "./pages/Article.tsx";

import Error from "./pages/Error.tsx";
import Root from "./Root.tsx";
import Forum from "./pages/Forum.tsx";
import FaceScanner from "./pages/FaceScanner.tsx";
import VerifyEmailStatus from "./pages/VerifyEmail.tsx";
import ProtectedRoute from "./layout/RouteGuards.tsx";
import EditForum from "./pages/EditForum.tsx";

// Check the documentation for more information: https://reactrouter.com/en/main/start/overview
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/tentang",
        element: <About />,
      },
      { path: "/register", element: <Register /> },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <ProfileRoot />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <ProfileUserInfo />,
          },
          {
            path: "/profile/bookmark",
            element: <ProfileBookmark />,
          },
          {
            path: "/profile/settings",
            element: <ProfileSetting />,
          },
        ],
      },
      // { path: '/profile/user-info', element: <ProfileUserInfo /> }
      { path: "/artikel", element: <Article /> },
      { path: "/forum", element: <Forum />},
      { path: "/forum/:id/edit", element: <EditForum />},
      { path: "/face-scanner", element: <FaceScanner /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/verify-email/:id",
    element: <VerifyEmailStatus />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
