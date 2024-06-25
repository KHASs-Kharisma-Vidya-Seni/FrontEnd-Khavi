import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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

// import Error from "./pages/Error.tsx";
import Root from "./Root.tsx";
import Forum from "./pages/Forum.tsx";
import FaceScanner from "./pages/FaceScanner.tsx";
import VerifyEmailStatus from "./pages/VerifyEmail.tsx";
import ProtectedRoute from "./layout/RouteGuards.tsx";
import EditForum from "./pages/EditForum.tsx";
import DetailArticle from "./pages/ArticleDetail.tsx";
import ProtectedExistUser from "./layout/RouteExistUser.tsx";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/profile" element={<ProfileRoot />}>
            <Route
              index
              element={
                <ProtectedRoute>
                  <ProfileUserInfo />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile/bookmark"
              element={
                <ProtectedRoute>
                  <ProfileBookmark />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile/settings"
              element={
                <ProtectedRoute>
                  <ProfileSetting />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="/artikel" element={<Article />} />
          <Route path="/artikel/:slug" element={<DetailArticle />} />

          <Route
            path="/face-scanner"
            element={
              <ProtectedRoute>
                <FaceScanner />
              </ProtectedRoute>
            }
          />
          <Route
            path="/forum"
            element={
              <ProtectedRoute>
                <Forum />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="/forum/:id/edit" element={<EditForum />} />
        <Route path="/verify-email/:id" element={<VerifyEmailStatus />} />
        <Route
          path="/register"
          element={
            <ProtectedExistUser>
              <Register />
            </ProtectedExistUser>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedExistUser>
              <Login />
            </ProtectedExistUser>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

// Check the documentation for more information: https://reactrouter.com/en/main/start/overview

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);
