import React from "react";
import { Link } from "react-router-dom";
import useContextData from "../Custom/Hooks/useContextData";

function BottomNav() {
  const { loginUser } = useContextData();

  return (
    <div className="bottomNav">
      <Link to={"/"}>
        <div className="option">
          <i className="fa-solid fa-house"></i>
        </div>
      </Link>
      <div className="option">
        <i className="fa-brands fa-facebook-messenger"></i>
      </div>
      <div className="option">
        <i className="fa-solid fa-circle-plus"></i>
      </div>
      <div className="option">
        <i className="fa-solid fa-circle-play text-6xl text-[#84d6ff]"></i>
      </div>
      <Link to={`/profile/${loginUser?.username}`}>
        <div className="option border w-[6rem] h-[6rem] rounded-full">
          {" "}
          <img
            className="h-full w-full object-cover"
            src={loginUser?.profileImage}
            alt=""
          />
        </div>
      </Link>
    </div>
  );
}

export default BottomNav;
