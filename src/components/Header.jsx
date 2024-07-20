import React, { useContext } from "react";
import { IoIosNotifications } from "react-icons/io";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ManageState } from "../context/Contexts";

export default function Header() {
  const { toggleFun, setting } = useContext(ManageState);

  return (
    <>
      <div className="header_Container">
        <div className="logo_Container">
          <img src="./src/assets/socialmediaLogo.png" alt="" />
        </div>
        <div className="search_container">
          <input type="text" placeholder="Search for friends..." />
        </div>
        <div className="notification">
          <IoIosNotifications className="notification" />
        </div>
        <div className="profile_Details">
          <img src="./src/assets/Group 32.png" alt="" />
        </div>
        <div className={`Menu`} onClick={toggleFun}>
          <i
            className={` ${
              setting ? "fa-solid fa-delete-left" : "fa-solid fa-bars"
            }`}
          ></i>
        </div>
      </div>
    </>
  );
}
