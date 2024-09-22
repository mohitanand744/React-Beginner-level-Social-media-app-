import React from "react";
import useContextData from "../Custom/Hooks/useContextData";
import Post from "./Post";

const PostList = () => {
  const { usersPosts } = useContextData();

  return (
    <>
      <div className="flex flex-col justify-content-center w-full mb-[12rem] sm:mb-0">
        {usersPosts.map((post, i) => (
          <Post
            key={i}
            username={post.username}
            userPost={post.imageUrl}
            caption={post.caption}
            likes={post.likes}
            comments={post.comments}
          />
        ))}

        <center>
          <h2 className="mt-5 text-2xl font-bold text-gray-600">
            Loading More...
          </h2>
        </center>
      </div>
    </>
  );
};

export default PostList;
