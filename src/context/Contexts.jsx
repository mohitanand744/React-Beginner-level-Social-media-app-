import React, { useEffect, useReducer, useState } from "react";
import { createContext } from "react";
import users from "../Data/UsersData.json";
import usersPosts from "../Data/UsersPosts.json";
import { json, useLocation, useNavigate } from "react-router-dom";
import { ReducerFun } from "./Reducer";

const userData = JSON.parse(localStorage.getItem("createdUsers")) || [
  {
    userId: null,
    username: "Guest",
    profileImage: "/noProfile.png",
    posts: [],
  },
];
const userCredentials =
  JSON.parse(localStorage.getItem("userCredentials")) || {};

const user = userData.find((user) => user.email === userCredentials.gmail);

const { name = "guest", userId = null } = user;

const INITIAL_STATE = {
  users,
  usersPosts,
  loginAccount: JSON.parse(localStorage.getItem("loginAccount")) || false, // Get from localStorage
  loginUser: {
    userId: userId || null,
    username: name || "Guest",
    profileImage:
      JSON.parse(localStorage.getItem("profile")) || "/noProfile.png",
    posts: [],
  },
  loginError: "",
  signupError: false,
  signupSuccess: false,
};

export const ManageState = createContext(INITIAL_STATE);

function WarpingComponent({ children }) {
  const [state, dispatch] = useReducer(ReducerFun, INITIAL_STATE);
  const [togglesetting, setToggleSetting] = useState(false);

  const [viewPost, setViewPost] = useState(null);
  const [toggleViewPost, setToggleViewPost] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.loginAccount) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [state.loginAccount, navigate]);

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
        loginError: state.loginError,
        signupError: state.signupError,
        signupSuccess: state.signupSuccess,
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
