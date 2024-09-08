import React, { useContext } from "react";
import { ManageState } from "../context/Contexts";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { setting } = useContext(ManageState);

  return (
    <>
      <div className={`fadedEffect ${setting ? "container" : ""}`}>
        <div
          className={`sidebar_container fixed left-0 top-36 ${
            setting ? "toggleSideBar" : ""
          }`}
        >
          <Link to={"/profile"}>
            <div className="profile_container">
              <div className="profile_image_container">
                <img
                  src="https://media.licdn.com/dms/image/D4E03AQF_RrI-r8V9MA/profile-displayphoto-shrink_800_800/0/1705977291292?e=1726704000&v=beta&t=yik1OIfIn47We1ThM-g3cPE4VmMwLHsJ4ebA2MvjsJY"
                  alt=""
                />
              </div>
              <p className="userName">mohit-anand123</p>
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
            <div className="options cursor-pointer">
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
