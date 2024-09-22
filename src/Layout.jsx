import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import WarpingComponent from "./context/Contexts";
import BottomNav from "./components/BottomNav";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import Loading from "./components/Loading";

const Layout = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 2 seconds

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, []);

  if (loading) {
    return <Loading />; // Loading text or spinner
  }

  return (
    <WarpingComponent>
      {pathname === "/login" ? (
        <LoginPage />
      ) : pathname === "/signUp" ? (
        <SignUpPage />
      ) : (
        <>
          <Header />
          <Outlet />
          <BottomNav />
        </>
      )}
    </WarpingComponent>
  );
};

export default Layout;
