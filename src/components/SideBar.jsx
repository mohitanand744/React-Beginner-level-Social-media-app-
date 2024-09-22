import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useContextData from "../Custom/Hooks/useContextData";
import loginAccount from "../Data/LoginAccount.json";

const SideBar = () => {
  const { togglesetting, toggleFun, dispatch, loginUser } = useContextData();
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={toggleFun}
        className={`fadedEffect  ${togglesetting ? "container" : ""}`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`sidebar_container md:border-4 md:border-[#84d6ff] border-l-0 fixed left-0 top-36 z-50 ${
            togglesetting ? "toggleSideBar" : ""
          }`}
        >
          <Link to={"/profile/mohitanand123"}>
            <div className="profile_container">
              <div className="profile_image_container border">
                <img src={loginUser?.profileImage} alt="" />
              </div>
              <p className="userName">{loginUser?.username}</p>
            </div>
          </Link>
          <div className="Explore_container">
            <h2 className="font-medium">Explore Panel</h2>
            <div className="options cursor-pointer">
              <i className="fa-solid fa-gear"></i>
              <p>Profile</p>
            </div>
            <div className="options cursor-pointer">
              <i className="fa-solid fa-users"></i>
              <p>Find Friends</p>
            </div>
            <div className="options cursor-pointer">
              <i className="fa-solid fa-chart-simple"></i>
              <p>User analytics</p>
            </div>
          </div>
          <div className="Explore_container">
            <h2 className="font-medium">Setings</h2>
            <div className="options cursor-pointer">
              <i className="fa-solid fa-gear"></i>
              <p>Setting</p>
            </div>
            <div className="options cursor-pointer">
              <i className="fa-solid fa-gear"></i>
              <p>Account Setting</p>
            </div>
            <div
              onClick={() => {
                dispatch({ type: "LOG_OUT" });
                navigate("/login");
                return;
              }}
              className="options cursor-pointer"
            >
              <i className="fa-solid fa-right-from-bracket logouticon"></i>
              <p className="logout">Log Out</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
