import React from "react";

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
        {" "}
        <img
          width={120}
          src="https://media.licdn.com/dms/image/D4E03AQF_RrI-r8V9MA/profile-displayphoto-shrink_800_800/0/1705977291292?e=1726704000&v=beta&t=yik1OIfIn47We1ThM-g3cPE4VmMwLHsJ4ebA2MvjsJY"
          alt=""
        />
      </div>
    </div>
  );
}

export default BottomNav;
