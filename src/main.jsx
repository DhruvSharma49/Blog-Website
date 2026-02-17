import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Store/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthLayout, AuthPage } from "./Components/index.js";
import AddPost from "./Pages/AddPost.jsx";
import EditPost from "./Pages/EditPost.jsx";
import Post from "./Pages/Posts.jsx";
import Home from "./Pages/Home.jsx";
import ProfilePage from "./Pages/Profile.jsx";
import EditProfilePage from "./Pages/EditProfile.jsx";
import AccountSettings from "./Pages/AccountSettings.jsx";
import HelpPage from "./Pages/FooterPages/Help.jsx";
import Licensing from "./Pages/FooterPages/Licensing.jsx";
import Features from "./Pages/FooterPages/Features.jsx";
import Pricing from "./Pages/FooterPages/Pricing.jsx";
import PressKit from "./Pages/FooterPages/PressKit.jsx";
import ContactUs from "./Pages/FooterPages/ContactUs.jsx";
import Terms from "./Pages/FooterPages/Terms.jsx";
import AffiliateProgram from "./Pages/FooterPages/AffiliateProgram.jsx";
import CustomerSupport from "./Pages/FooterPages/CustomerSupport.jsx";
import Privacy from "./Pages/FooterPages/Privacy.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthLayout authentication={false}>
        <AuthPage /> {/* Ye default landing page hoga */}
      </AuthLayout>
    ),
  },
  {
    path: "/",
    element: <App />, // Ye tumhara main layout hai
    children: [
      {
        path: "/home",
        element: (
          <AuthLayout authentication>
            <Home />
          </AuthLayout>
        ),
      },

      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "/profile",
        element: (
          <AuthLayout authentication>
            <ProfilePage />
          </AuthLayout>
        ),
      },
      {
        path: "/profile/:userId",
        element: (
          <AuthLayout authentication>
            <ProfilePage />
          </AuthLayout>
        ),
      },
      {
        path: "/profile/edit",
        element: (
          <AuthLayout authentication>
            <EditProfilePage />
          </AuthLayout>
        ),
      },
      {
        path: "/accountsetting",
        element: (
          <AuthLayout authentication>
            <AccountSettings />
          </AuthLayout>
        ),
      },
      {
        path: "/help",
        element: (
          <AuthLayout authentication>
            <HelpPage />
          </AuthLayout>
        ),
      },
      {
        path: "/license",
        element: (
          <AuthLayout authentication>
            <Licensing />
          </AuthLayout>
        ),
      },
      {
        path: "/features",
        element: (
          <AuthLayout authentication>
            <Features />
          </AuthLayout>
        ),
      },
      {
        path: "/press",
        element: (
          <AuthLayout authentication>
            <PressKit />
          </AuthLayout>
        ),
      },
      {
        path: "/pricing",
        element: (
          <AuthLayout authentication>
            <Pricing />
          </AuthLayout>
        ),
      },
      {
        path: "/terms",
        element: (
          <AuthLayout authentication>
            <Terms />
          </AuthLayout>
        ),
      },
      {
        path: "/contact",
        element: (
          <AuthLayout authentication>
            <ContactUs />
          </AuthLayout>
        ),
      },
      {
        path: "/affiliate",
        element: (
          <AuthLayout authentication>
            <AffiliateProgram />
          </AuthLayout>
        ),
      },
      {
        path: "/support",
        element: (
          <AuthLayout authentication>
            <CustomerSupport />
          </AuthLayout>
        ),
      },
      {
        path: "/privacy",
        element: (
          <AuthLayout authentication>
            <Privacy />
          </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
