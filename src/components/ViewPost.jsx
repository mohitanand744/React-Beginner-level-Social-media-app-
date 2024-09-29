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
  const [isCommentLiked, setIsCommentLiked] = useState(null);

  let likes = viewPost?.likes;

  if (isLiked) {
    likes++;
  } else if (isLiked === false) {
    likes - 1;
  }

  const formatTimestamp = (timestamp) => {
    const commentTime = new Date(timestamp);
    const currentTime = new Date();

    const timeDifference = Math.abs(currentTime - commentTime); // Difference in milliseconds

    const minutes = Math.floor(timeDifference / (1000 * 60));
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (days > 0) {
      return `${days} day${days !== 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    } else {
      return `${minutes} min${minutes !== 1 ? "s" : ""} ago`;
    }
  };

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
                className="rounded-full object-cover w-[5rem] h-[5rem] "
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
          <div className="h-[73%] hidden lg:flex flex-col gap-4 overflow-x-hidden overflow-y-scroll scrollBar  px-4 py-10 text-dark">
            {viewPost?.comments.map((comment) => (
              <div
                key={comment.commentId}
                className="comment flex items-center justify-between"
              >
                <div className="flex gap-3">
                  <div className="proImg">
                    <img
                      className=" w-[4rem] h-[4rem] object-cover rounded-full"
                      src={comment.profileImage}
                      alt=""
                    />
                  </div>
                  <div className="txt flex flex-col gap-2">
                    <div className="flex gap-3">
                      <h3 className="text-2xl fw-semibold ">
                        {comment.username}
                      </h3>
                      <p className="text-2xl">{comment.commentText}</p>
                    </div>
                    <div className="flex gap-3 text-xl fw-medium text-gray-700">
                      <p>{formatTimestamp(comment.timestamp)}</p>{" "}
                      <p className="cursor-pointer">1 like</p>{" "}
                      <p className="cursor-pointer">Reply</p>
                    </div>
                    <p className="text-xl cursor-pointer">
                      ____View replies (3)
                    </p>
                  </div>
                </div>

                <div className="">
                  {isCommentLiked ? (
                    <i
                      onClick={() => setIsCommentLiked(!isCommentLiked)}
                      className={`fa-solid fa-heart text-2xl text-red-600 transition-all duration-600 ease-linear active:scale-[0.66]`}
                    ></i>
                  ) : (
                    <FontAwesomeIcon
                      icon={faRegularHeart}
                      className={`text-2xl cursor-pointer active:scale-[0.78] transition-all duration-600 ease-linear`}
                      onClick={() => setIsCommentLiked(!isCommentLiked)}
                    />
                  )}
                </div>
              </div>
            ))}
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
                    className={`fa-solid fa-heart text-4xl text-red-600 transition-all duration-600 ease-linear active:scale-[0.66]`}
                  ></i>
                ) : (
                  <FontAwesomeIcon
                    icon={faRegularHeart}
                    className={`text-4xl cursor-pointer active:scale-[0.78] transition-all duration-600 ease-linear`}
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
