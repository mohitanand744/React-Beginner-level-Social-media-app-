import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import WarpingComponent from "./context/Contexts";
import BottomNav from "./components/BottomNav";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Loading from "./components/Loading";
import useContextData from "./Custom/Hooks/useContextData";
import SearchUsers from "./components/SearchUsers";

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const { loginAccount } = useContextData();
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the loading time as needed

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, []);

  if (loading) {
    return <Loading />; // Show loading spinner
  }

  // Don't show Header or BottomNav on login or signUp pages
  const hideNav = pathname === "/login" || pathname === "/signUp";

  return (
    <WarpingComponent>
      {/* Conditionally show header and bottom navigation */}
      {!hideNav && <Header />}
      <SearchUsers />
      <Outlet />
      {!hideNav && <BottomNav />}
    </WarpingComponent>
  );
};

export default Layout;
