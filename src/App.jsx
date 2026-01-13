

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./Appwrite/auth";
import { login, logout } from "./Store/authSlice";
import { Footer, Header } from "./Components";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const location = useLocation();

  // Pages where footer will not show
  const hideFooterRoutes = [
    "/profile",
    "/add-post",
    "/profile/edit",
    "/edit-post",
    "/accountsetting",
    "/post"

  ];

  const shouldHideFooter = hideFooterRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-col bg-gray-400">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      {/* ✅ Footer conditionally visible */}
      {!shouldHideFooter && <Footer />}
    </div>
  ) : null;
}

export default App;
