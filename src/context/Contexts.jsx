import React, { useEffect, useReducer, useState } from "react";
import { createContext } from "react";
import users from "../Data/UsersData.json";
import usersPosts from "../Data/UsersPosts.json";
import { useLocation, useNavigate } from "react-router-dom";

const INITIAL_STATE = {
  users,
  usersPosts,
  loginAccount: false,
  error: false,
};

export const ManageState = createContext(INITIAL_STATE);

function WarpingComponent({ children }) {
  const [togglesetting, setToggleSetting] = useState(false);
  const [state, dispatch] = useReducer(ManageState, INITIAL_STATE);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.loginAccount === false) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [state.loginAccount]);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleSetting = () => {
    setToggleSetting(!togglesetting);
  };

  return (
    <ManageState.Provider
      value={{
        toggleFun: toggleSetting,
        togglesetting,
        users: state.users,
        usersPosts: state.usersPosts,
        loginAccount: state.loginAccount,
        dispatch,
      }}
    >
      {children}
    </ManageState.Provider>
  );
}

export default WarpingComponent;
