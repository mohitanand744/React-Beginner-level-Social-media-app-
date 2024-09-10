import React from "react";
import { useParams } from "react-router-dom";
import RightSidebar from "./RightSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faCamera } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const { username } = useParams();

  return (
    <section className="flex">
      {/* Profile content column */}

      <div className="profile w-full bg-white">
        <div className="profileCoverImg relative flex justify-center w-full">
          <img
            className="w-full h-full mt-32 lg:object-cover object-contain"
            src="/loginUserCoverImg.jpeg"
            alt="Profile Cover"
          />

          <FontAwesomeIcon
            icon={faPencil}
            className="absolute text-white bottom-10 right-10 text-2xl cursor-pointer active:scale-[0.80] transition-all duration-500"
          />

          {/* Centering the profile image */}
          <div className="profileImg bg-[#3cbeff] rounded-full absolute p-2 inset-x-0 mx-auto -bottom-24 md:-bottom-32 w-[150px] h-[150px]">
            <img
              className="w-full h-full object-cover rounded-full border-[4px] border-white"
              src="/loginUserProfile.jpeg"
              alt=""
            />

            <FontAwesomeIcon
              icon={faCamera}
              className="text-2xl text-white absolute top-48 right-7 bg-[#052130] p-3 rounded-full active:scale-[0.88] transition-all duration-500 "
            />
          </div>
        </div>

        <div className="bio mt-36">
          <p className="text-center my-5 text-4xl font-bold">mohitanand123</p>
          <p className="text-center text-3xl mx-auto w-[40rem]">
            Frontend Developer @WeboConnect | Team Work Makes The Dream Work .
          </p>
        </div>

        <div className="flex flex-col items-center mt-10 overflow-hidden">
          <div className="followers_following flex gap-10 md:gap-16 text-3xl font-bold mx-4 border-[2.5px] border-[#3cbeff]  w-fit p-5 px-6 md:px-9 rounded-full bg-white">
            <p> 12 Posts</p>
            <p>1,433 Followers</p>
            <p>326 Following</p>
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
