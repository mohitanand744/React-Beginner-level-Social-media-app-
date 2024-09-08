import React, { useContext } from "react";
import { IoIosNotifications } from "react-icons/io";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ManageState } from "../context/Contexts";
import { Link } from "react-router-dom";

export default function Header() {
  const { toggleFun, setting } = useContext(ManageState);

  return (
    <>
      <div className="header_Container fixed top-0 w-full z-50">
        <div className="logo_Container">
          <Link to={"/"}>
            <img src="/socialmediaLogo.png" alt="" />
          </Link>
        </div>
        <div className="search_container">
          <input type="text" placeholder="Search for friends..." />
        </div>
        <div className="notification">
          <IoIosNotifications className="notification" />
        </div>

        <div className="profile_Details">
          <img className="w-[7rem]" src="/setting.png" alt="" />
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
