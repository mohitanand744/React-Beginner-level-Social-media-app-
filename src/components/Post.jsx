import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as faRegularHeart,
  faPaperPlane,
  faComment,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Post = ({ userPost, username, caption, likes, profile, comments }) => {
  /*   const [isLiked, setIsLiked] = useState(null);

  if (isLiked) {
    likes++;
  } else if (isLiked === false) {
    likes - 1;
  }
 */
  return (
    <div className="post overflow-hidden bg-white w-full md:w-full lg:w-[48rem] xl:w-[60rem] mx-auto">
      <div className="top p-4 w-full flex justify-between ">
        <div className="flex items-center gap-3">
          <Link to={`/profile/${username}`}>
            <img
              className="w-20 h-20 object-cover rounded-full"
              src={profile}
              alt="profileImg"
            />
          </Link>
          <div className="txt">
            <p className="font-bold text-2xl">{username}</p>
            <p className="text-xl font-normal text-gray-700">{caption}</p>
          </div>
        </div>
        <div className="text-4xl font-bold pr-7">...</div>
      </div>

      <div className="img-container w-full h-[55rem] flex justify-center">
        <img className="w-full object-contain" src={userPost} alt="" />
      </div>
      <div className="bottom p-6">
        <div className="flex justify-between ">
          <div className="iconsLeft flex gap-3">
            {/*   <i
              className={`fa-solid fa-heart text-5xl text-red-600 transition-all duration-600 ease-linear active:scale-[0.66]`}
            ></i> */}

            <FontAwesomeIcon
              icon={faRegularHeart}
              className={`text-5xl cursor-pointer active:scale-[0.78] transition-all duration-600 ease-linear`}
            />

            <FontAwesomeIcon
              icon={faComment}
              className="text-5xl cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="text-5xl cursor-pointer"
            />

            <p className="mt-2 text-2xl font-semibold likes">{likes}</p>
          </div>

          <div className="">
            <FontAwesomeIcon
              icon={faBookmark}
              className="text-5xl cursor-pointer"
            />
          </div>
        </div>

        <div className="mt-10">
          <p className="caption font-medium text-2xl">Love with Nature...</p>
          <a href="/" className="text-xl">
            ...more
          </a>
          <a
            className="block mt-2 text-2xl font-semibold text-gray-600"
            href="/"
          >
            View all 41 comments
          </a>

          <div className="w-full flex justify-between items-center">
            <input
              type="text"
              placeholder="Add a comment..."
              className="text-2xl mt-3 outline-none w-full"
            />

            <button className="py-3 px-7 ml-8 rounded-3xl text-2xl  text-gray-700 font-semibold bg-[#A9DEF9]">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
