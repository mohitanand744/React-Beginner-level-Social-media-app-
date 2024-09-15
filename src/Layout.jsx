import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import WarpingComponent from "./context/Contexts";
import BottomNav from "./components/BottomNav";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <>
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
    </>
  );
};

export default Layout;
