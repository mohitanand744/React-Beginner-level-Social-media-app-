import React, { useState } from "react";
import { createContext } from "react";
import users from "../Data/UsersData.json";
import usersPosts from "../Data/UsersPosts.json";

export const ManageState = createContext();

function WarpingComponent({ children }) {
  const [setting, setSetting] = useState(false);

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
