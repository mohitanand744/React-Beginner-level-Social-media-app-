import React from "react";
import { Link } from "react-router-dom";

function BottomNav() {
  return (
    <div className="bottomNav">
      <div className="option">
        <i className="fa-brands fa-facebook-messenger"></i>
      </div>
      <div className="option">
        <i className="fa-solid fa-circle-plus"></i>
      </div>
      <div className="option">
        <i className="fa-solid fa-heart"></i>
      </div>{" "}
      <div className="option">
        <i className="fa-solid fa-circle-play text-6xl text-[#84d6ff]"></i>
      </div>
      <Link to={"/profile/mohitanand123"}>
        <div className="option border rounded-full">
          {" "}
          <img src="/noProfile.png" alt="" />
        </div>
      </Link>
    </div>
  );
}

export default BottomNav;
