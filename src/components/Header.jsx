import React, { useContext } from "react";
import { IoIosNotifications } from "react-icons/io";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ManageState } from "../context/Contexts";
import { Link } from "react-router-dom";

export default function Header() {
  const { toggleFun, setting } = useContext(ManageState);

  return (
    <>
      <div className="header_Container">
        <div className="logo_Container">
          <Link to={"/"}>
            <img src="/socialmediaLogo.png" alt="" />
          </Link>
        </div>
        <div className="search_container">
          <input type="text" placeholder="Search for friends..." />
        </div>
        <div className="flex gap-[2.7rem] items-center">
          <div className="notification">
            <IoIosNotifications className="notification" />
          </div>
          <div className="w-[7rem] cursor-pointer">
            <Link to={"/profile/"}>
              <img
                className="w-full  object-contain rounded-full"
                src="https://media.licdn.com/dms/image/D4E03AQF_RrI-r8V9MA/profile-displayphoto-shrink_800_800/0/1705977291292?e=1726704000&v=beta&t=yik1OIfIn47We1ThM-g3cPE4VmMwLHsJ4ebA2MvjsJY"
                alt=""
              />
            </Link>
          </div>
          <div className="profile_Details">
            <img className="w-[7rem]" src="/setting.png" alt="" />
          </div>
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
