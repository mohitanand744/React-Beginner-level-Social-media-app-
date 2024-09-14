import React, { useContext } from "react";
import { IoIosNotifications } from "react-icons/io";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ManageState } from "../context/Contexts";
import { Link } from "react-router-dom";

export default function Header() {
  const { toggleFun, togglesetting } = useContext(ManageState);

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

        <div className="profile_Details 2xl:hidden">
          <img
            onClick={toggleFun}
            className="w-[7rem] active:scale-[0.89] transition-all duration-300 ease-in-out"
            src="/setting.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
