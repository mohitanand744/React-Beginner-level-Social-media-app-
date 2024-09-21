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
  loginUser: [
    {
      name: "Guest Account",
      Email: "No Need",
      password: "...",
    },
  ],
  error: false,
};

export const ManageState = createContext(INITIAL_STATE);

function WarpingComponent({ children }) {
  const [state, dispatch] = useReducer(ReducerFun, INITIAL_STATE);
  const [togglesetting, setToggleSetting] = useState(false);

  const [viewPost, setViewPost] = useState(null);
  const [toggleViewPost, setToggleViewPost] = useState(false);
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

  const toggleSetting = (e) => {
    e.stopPropagation();
    setToggleSetting(!togglesetting);
  };

  return (
    <ManageState.Provider
      value={{
        togglesetting,
        toggleFun: toggleSetting,
        users: state.users,
        usersPosts: state.usersPosts,
        loginAccount: state.loginAccount,
        loginUser: state.loginUser,
        error: state.error,
        dispatch,
        viewPost,
        setViewPost,
        toggleViewPost,
        setToggleViewPost,
      }}
    >
      {children}
    </ManageState.Provider>
  );
}

export default WarpingComponent;
