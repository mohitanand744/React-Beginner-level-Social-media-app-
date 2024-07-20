import React, { useState } from "react";
import { createContext } from "react";

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
      }}
    >
      {children}
    </ManageState.Provider>
  );
}

export default WarpingComponent;
