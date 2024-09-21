import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-[100%] h-[100vh] bg-[#fff]">
      <img className="w-[32rem] md:w-[40rem]" src="/progress-bar.gif" alt="" />
    </div>
  );
};

export default Loading;
