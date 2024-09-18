import React, { useEffect, useReducer, useState } from "react";
import { createContext } from "react";
import users from "../Data/UsersData.json";
import usersPosts from "../Data/UsersPosts.json";
import { useLocation, useNavigate } from "react-router-dom";
import { ReducerFun } from "./Reducer";

const INITIAL_STATE = {
  users,
  usersPosts,
  loginAccount: JSON.parse(localStorage.getItem("loginAccount")) || false, // Get from localStorage
  loginUser: JSON.parse(localStorage.getItem("newUser")) || [],
  error: false,
};

export const ManageState = createContext(INITIAL_STATE);

function WarpingComponent({ children }) {
  const [state, dispatch] = useReducer(ReducerFun, INITIAL_STATE);
  const [togglesetting, setToggleSetting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.loginAccount === false) {
      navigate("/login");
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
        togglesetting,
        users: state.users,
        usersPosts: state.usersPosts,
        loginAccount: state.loginAccount,
        loginUser: state.loginUser,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ManageState.Provider>
  );
}

export default WarpingComponent;
