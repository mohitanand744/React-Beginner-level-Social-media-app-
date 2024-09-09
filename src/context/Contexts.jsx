import React, { useEffect, useState } from "react";
import { createContext } from "react";
import users from "../Data/UsersData.json";
import usersPosts from "../Data/UsersPosts.json";
import { useLocation } from "react-router-dom";

export const ManageState = createContext();

function WarpingComponent({ children }) {
  const [setting, setSetting] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleSetting = () => {
    setSetting(!setting);
  };
  return (
    <ManageState.Provider
      value={{
        toggleFun: toggleSetting,
        setting,
        users,
        usersPosts,
      }}
    >
      {children}
    </ManageState.Provider>
  );
}

export default WarpingComponent;
