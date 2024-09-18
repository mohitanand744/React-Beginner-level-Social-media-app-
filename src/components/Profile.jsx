import React, { useState } from "react";
import { useParams } from "react-router-dom";
import RightSidebar from "./RightSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faCamera } from "@fortawesome/free-solid-svg-icons";
import useContextData from "../Custom/Hooks/useContextData";
import SideBar from "./SideBar";
import loginAccount from "../Data/LoginAccount.json";

const Profile = () => {
  const { username } = useParams();
  const [activeTab, setActiveTab] = useState("posts");

  const { users } = useContextData();

  const userProfile = users.filter(
    (profileImg) => profileImg.username === username
  );

  return (
    <section className="flex">
      {/* Profile content column */}

      <div className="profile w-full bg-white">
        <div className="profileCoverImg relative flex justify-center w-full">
          <img
            className="w-full h-full mt-32 lg:object-cover object-contain"
            src="/loginUserCoverImg.webp"
            alt="Profile Cover"
          />

          {username === "mohitanand123" ? (
            <FontAwesomeIcon
              icon={faPencil}
              className="absolute text-white bottom-10 right-10 text-2xl cursor-pointer active:scale-[0.80] transition-all duration-500"
            />
          ) : (
            ""
          )}

          {/* Centering the profile image */}
          <div className="profileImg bg-[#3cbeff] rounded-full absolute p-2 inset-x-0 mx-auto -bottom-24 md:-bottom-32 w-[150px] h-[150px]">
            <img
              className="w-full h-full object-cover rounded-full border-[4px] border-white"
              src={
                username === "mohitanand123"
                  ? "/loginUserProfile.jpeg"
                  : userProfile[0].profileImage
              }
              alt=""
            />

            {username === "mohitanand123" ? (
              <FontAwesomeIcon
                icon={faCamera}
                className="text-2xl cameraIcon border-white border-2 text-white absolute top-48 right-7 bg-[#052130] p-3 rounded-full active:scale-[0.88] transition-all duration-500 "
              />
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="bio mt-28 md:mt-36">
          <p className="text-center mt-5 mb-2 text-4xl font-bold">{username}</p>
          <p className="text-center text-3xl mx-auto w-[40rem]">
            Frontend Developer @WeboConnect | Team Work Makes The Dream Work .
          </p>
        </div>

        <div className="flex flex-col items-center mt-10 overflow-hidden">
          <div className="followers_following flex gap-10 md:gap-16 text-[1.4rem] sm:text-3xl font-bold text-gray-700 mx-4 border-[2.5px] border-[#3cbeff]  w-fit py-4 px-6 md:px-9 rounded-full bg-white">
            <p> 12 Posts</p>
            <p>1,433 Followers</p>
            <p>326 Following</p>
          </div>
        </div>
        <div className="postContainer mt-10 mb-52 w-full">
          <div className="flex justify-center text-3xl font-semibold">
            <ul className="nav nav-underline flex gap-5">
              <li
                className={`nav-item ${activeTab === "posts" ? "active" : ""}`}
                onClick={() => setActiveTab("posts")}
              >
                <a
                  className="nav-link text-gray-700"
                  aria-current="page"
                  href="#"
                >
                  Posts
                </a>
              </li>
              <li
                className={`nav-item ${activeTab === "reels" ? "active" : ""}`}
                onClick={() => setActiveTab("reels")}
              >
                <a className="nav-link text-gray-700" href="#">
                  Reels
                </a>
              </li>
              <li
                className={`nav-item ${activeTab === "about" ? "active" : ""}`}
                onClick={() => setActiveTab("about")}
              >
                <a className="nav-link text-gray-700" href="#">
                  About
                </a>
              </li>
              <li
                className={`nav-item ${
                  activeTab === "members" ? "active" : ""
                }`}
                onClick={() => {
                  alert("Only Members Can see.");
                  setActiveTab("posts");
                }}
              >
                <a className="nav-link text-gray-700" href="#">
                  <i className="fa-solid fa-lock text-[#84d6ff] "></i> Only For
                  Members
                </a>
              </li>
            </ul>
          </div>

          {activeTab === "posts" ? (
            <>
              <div className="posts w-full justify-center flex gap-2 flex-wrap mt-5">
                {loginAccount[0].posts.map((post, i) => (
                  <img
                    className="w-60 h-60 md:w-80 md:h-80 object-cover"
                    key={i}
                    src={post.imageUrl}
                    alt=""
                  />
                ))}
              </div>
            </>
          ) : (
            ""
          )}

          {activeTab === "reels" ? (
            <>
              <center>
                <h1 className="text-red-500 text-3xl mt-5 font-semibold">
                  Still Working on {activeTab}...
                </h1>
              </center>
            </>
          ) : (
            ""
          )}

          {activeTab === "about" ? (
            <>
              <center>
                <h1 className="text-red-500 text-3xl mt-5 font-semibold">
                  Still Working on {activeTab}...
                </h1>
              </center>
            </>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* Sidebar column */}

      <div className="xl:hidden">
        <SideBar />
      </div>
      <div className="w-[0rem] xl:w-[42.4rem]">
        <RightSidebar hight="h-full" borderRadius="rounded-none" />
      </div>
    </section>
  );
};

export default Profile;
