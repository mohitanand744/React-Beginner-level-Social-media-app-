import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import RightSidebar from "./RightSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faCamera } from "@fortawesome/free-solid-svg-icons";
import useContextData from "../Custom/Hooks/useContextData";
import SideBar from "./SideBar";
import ViewPost from "./ViewPost";

const Profile = () => {
  const { usersname } = useParams(); // typo here: it's `username`, fix to match your logic
  const [activeTab, setActiveTab] = useState("posts");
  const selectProfileImage = useRef(null);
  const [profile, setProfile] = useState(null);
  const { loginUser, users, setViewPost, dispatch } = useContextData();

  const usersProfile = users.find((user) => user.username === usersname);

  // Destructure if usersProfile exists, otherwise set default values for guest profile
  const { userId, username, profileImage, posts } = usersProfile || loginUser;

  // selectProfileImage

  const selectProfileImageFun = () => {
    selectProfileImage.current.click();
  };

  const selectProfileImageOnChange = (e) => {
    let file = e.target.files[0]; // it's returning a Blob data

    setProfile(file);

    // URL.createObjectURL(file)  this will convert the blob data into a Blob URL.

    dispatch({ type: "UPLOAD_PROFILE", payload: URL.createObjectURL(file) });
  };

  return (
    <section className="flex">
      {/* Profile content column */}
      <div className="profile relative w-full bg-white">
        <div className="profileCoverImg h-[20rem] md:h-[27rem] relative flex justify-center w-full">
          <img
            className="w-full h-full mt-32 object-cover"
            src="/loginBg.jpg"
            alt="Profile Cover"
          />

          {username === loginUser.username && (
            <FontAwesomeIcon
              icon={faPencil}
              className="absolute text-white -bottom-20 right-16 text-2xl cursor-pointer active:scale-[0.80] transition-all duration-500"
            />
          )}

          {/* Centering the profile image */}
          <div className="profileImg bg-[#3cbeff] rounded-full absolute p-2 inset-x-0 mx-auto  -bottom-[14rem] sm:-bottom-[16rem] w-[10rem] h-[10rem]">
            <img
              className="w-full h-full object-cover rounded-full border-[4px] border-white"
              src={profileImage}
              alt="Profile"
            />

            {username === loginUser.username && (
              <>
                <FontAwesomeIcon
                  onClick={selectProfileImageFun}
                  icon={faCamera}
                  className=" cursor-pointer text-2xl cameraIcon border-white border-2 text-white absolute top-48 right-7 w-[1.3rem] h-[1.3rem] bg-[#052130] p-3 rounded-full active:scale-[0.88] transition-all duration-500 "
                />
                <input
                  type="file"
                  ref={selectProfileImage}
                  onChange={selectProfileImageOnChange}
                  className="hidden"
                />
              </>
            )}
          </div>
        </div>

        <div className="bio mt-60 sm:mt-72">
          <p className="text-center mt-5 mb-2 text-4xl font-bold">{username}</p>
          <p className="text-center text-3xl mx-auto w-[40rem]">
            {usersProfile
              ? "Welcome to Your Profile | Working on custom captions."
              : "Welcome to Your Profile | Working on custom captions"}
          </p>
        </div>

        <div className="flex flex-col items-center mt-10 overflow-hidden">
          <div className="followers_following flex gap-10 md:gap-16 text-[1.8rem] sm:text-3xl font-bold text-gray-700 mx-4 border-[2.5px] border-[#3cbeff]  w-fit py-4 px-6 md:px-9 rounded-full bg-white">
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
                {posts.length > 0 ? (
                  posts.map((post, i) => (
                    <div key={i}>
                      <img
                        className="w-60 h-60 md:w-80 md:h-80 object-cover cursor-pointer"
                        src={post.imageUrl}
                        alt=""
                        onClick={() => setViewPost(post)}
                      />
                    </div>
                  ))
                ) : (
                  <p className="text-red-600 text-2xl md:text-4xl font-bold">
                    No posts available!?
                  </p>
                )}
              </div>
            </>
          ) : null}

          {activeTab === "reels" ? (
            <center>
              <h1 className="text-red-500 text-3xl mt-5 font-semibold">
                Still Working on {activeTab}...
              </h1>
            </center>
          ) : null}

          {activeTab === "about" ? (
            <center>
              <h1 className="text-red-500 text-3xl mt-5 font-semibold">
                Still Working on {activeTab}...
              </h1>
            </center>
          ) : null}
        </div>
      </div>

      <ViewPost />

      {/* Sidebar column */}
      <div className="xl:hidden">
        <SideBar />
      </div>
      <div className="hidden lg:block lg:w-[42rem] xl:w-[42.4rem]">
        <RightSidebar hight="bottom-0" borderRadius="rounded-none" />
      </div>
    </section>
  );
};

export default Profile;
