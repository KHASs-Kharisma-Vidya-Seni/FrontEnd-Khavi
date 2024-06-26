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
import EditForum from "./pages/EditForum.tsx";
import DetailArticle from "./pages/ArticleDetail.tsx";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/profile" element={<ProfileRoot />}>
            <Route index element={<ProfileUserInfo />} />
            <Route path="/profile/bookmark" element={<ProfileBookmark />} />
            <Route path="/profile/settings" element={<ProfileSetting />} />
          </Route>
          <Route path="/artikel" element={<Article />} />
          <Route path="/artikel/:slug" element={<DetailArticle />} />

          <Route path="/face-scanner" element={<FaceScanner />} />
          <Route path="/forum" element={<Forum />} />
        </Route>
        <Route path="/forum/:id/edit" element={<EditForum />} />
        <Route path="/verify-email/:id" element={<VerifyEmailStatus />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
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
