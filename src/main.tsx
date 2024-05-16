import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Root from "./Root.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import ProfileRoot from "./pages/ProfileRoot.tsx";
import ProfileBookmark from "./pages/Profile-bookmark.tsx";
import ProfileUserInfo from "./pages/Profile-userInfo.tsx";
import ProfileSetting from "./pages/Profile-setting.tsx";
import Article from "./pages/Article.tsx";

// Check the documentation for more information: https://reactrouter.com/en/main/start/overview
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<NotFoundPage />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route
        path="profile"
        element={<Navigate to="/profile/user-info" replace />}
  /> */}
      <Route path="/profile" element={<ProfileRoot />}>
        <Route path="/profile" element={<ProfileUserInfo />} />
        <Route path="/profile/user-info" element={<ProfileUserInfo />} />
        <Route path="/profile/bookmark" element={<ProfileBookmark />} />
        <Route path="/profile/settings" element={<ProfileSetting />} />
      </Route>

      <Route path="/article" element={<Article />} />

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
