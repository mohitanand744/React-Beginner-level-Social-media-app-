import React from "react";
import { Outlet } from "react-router-dom";
import WarpingComponent from "./context/Contexts";
import BottomNav from "./components/BottomNav";
import Header from "./components/Header";

const Layout = () => {
  return (
    <>
      <WarpingComponent>
        <Header />
        <Outlet />
        <BottomNav />
      </WarpingComponent>
    </>
  );
};

export default Layout;
