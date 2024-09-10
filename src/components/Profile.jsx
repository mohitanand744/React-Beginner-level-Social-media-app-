import React from "react";
import { useParams } from "react-router-dom";
import RightSidebar from "./RightSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const { username } = useParams();

  return (
    <section className="flex">
      {/* Profile content column */}

      <div className="profile w-full">
        <div className="profileCoverImg relative flex justify-center w-full">
          <img
            className="w-full h-full mt-32 lg:object-cover object-contain"
            src="/loginUserCoverImg.jpeg"
            alt="Profile Cover"
          />

          <FontAwesomeIcon
            icon={faPencil}
            className="absolute text-white bottom-10 right-10 text-2xl cursor-pointer active:scale-[0.80] transition-all duration-75"
          />

          {/* Centering the profile image */}
          <div className="profileImg bg-[#3cbeff] rounded-full absolute p-2 inset-x-0 mx-auto -bottom-24 md:-bottom-32 w-[150px] h-[150px]">
            <img
              className="w-full h-full object-cover rounded-full border-[4px] border-white"
              src="/loginUserProfile.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Sidebar column */}
      <div className="w-[0rem] xl:w-[42.4rem]">
        <RightSidebar hight="h-full" borderRadius="rounded-none" />
      </div>
    </section>
  );
};

export default Profile;
