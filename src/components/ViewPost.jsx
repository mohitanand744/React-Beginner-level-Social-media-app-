import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as faRegularHeart,
  faPaperPlane,
  faComment,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import useContextData from "../Custom/Hooks/useContextData";

const ViewPost = () => {
  const { viewPost, setViewPost, users } = useContextData();
  const [isLiked, setIsLiked] = useState(null);

  let likes = viewPost?.likes;

  if (isLiked) {
    likes++;
  } else if (isLiked === false) {
    likes - 1;
  }

  const user = users?.find((user) => user.username === viewPost?.username);

  return (
    <div
      className={`flex justify-center items-center bg-[#0000004d] fixed rounded-2xl z-30 ${
        viewPost ? "top-[4.5rem] opacity-100" : "top-[-100%] opacity-50"
      } w-[100%] h-[100vh] transition-all duration-[300ms] ease-in-out overflow-hidden`}
    >
      <div
        onClick={() => setViewPost(null)}
        className="absolute top-28 right-10 cursor-pointer bg-[#A9DEF9] p-1 rounded-full  border-white border-2"
      >
        <img
          className="w-[2.3rem] "
          src="https://img.icons8.com/ios-glyphs/30/delete-sign.png"
          alt="close-window"
        />
      </div>
      <div
        className={`viewPost flex justify-between bg-white w-[90%] md:w-[65%] lg:w-[85%] xl:w-[73%]  h-[75.7vh] md:h-[82.7vh] rounded-2xl`}
      >
        <div className="hidden lg:block w-[60%] border-r">
          <div className="postImage h-[100%]">
            <img
              className=" w-[100%] h-[100%] object-contain "
              src={viewPost?.imageUrl}
              alt=""
            />
          </div>
        </div>
        <div className="comments flex justify-between flex-col   w-[100%] lg:w-[40%]">
          <div className="top flex justify-between  items-center px-4 py-3">
            <div className="postDetails flex gap-4 items-center">
              <img
                className="rounded-full object-cover w-[5.7rem] h-[5.7rem] "
                src={user?.profileImage}
                alt=""
              />
              <div className="txt ">
                <p className="font-bold text-2xl">{viewPost?.username}</p>
                <p className="text-xl text-gray-500 font-semibold">
                  {viewPost?.caption}
                </p>
              </div>
            </div>
            <div className="text-4xl font-bold pr-7">...</div>
          </div>
          <div className="postImage block lg:hidden w-[100%] h-[73%]">
            <img
              className=" w-[100%] h-[100%] object-contain "
              src={viewPost?.imageUrl}
              alt=""
            />
          </div>
          <div className="bottom px-4 py-4">
            <div className="flex justify-between ">
              <div className="iconsLeft flex gap-3">
                {isLiked ? (
                  <i
                    onClick={() => setIsLiked(!isLiked)}
                    className={`fa-solid fa-heart text-5xl text-red-600 transition-all duration-600 ease-linear active:scale-[0.66]`}
                  ></i>
                ) : (
                  <FontAwesomeIcon
                    icon={faRegularHeart}
                    className={`text-5xl cursor-pointer active:scale-[0.78] transition-all duration-600 ease-linear`}
                    onClick={() => setIsLiked(!isLiked)}
                  />
                )}
                <FontAwesomeIcon
                  icon={faComment}
                  className="text-4xl cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="text-4xl cursor-pointer"
                />
              </div>

              <div className="">
                <FontAwesomeIcon
                  icon={faBookmark}
                  className="text-4xl cursor-pointer"
                />
              </div>
            </div>
            <p className="text-2xl font-semibold">{likes}</p>
            <div className="mt-2 mb-5">
              <p className="caption font-medium text-2xl">
                {viewPost?.caption}...more
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPost;
