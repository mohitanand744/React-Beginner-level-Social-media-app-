import React from "react";
import useContextData from "../Custom/Hooks/useContextData";
import Post from "./Post";

const PostList = () => {
  const { usersPosts } = useContextData();

  return (
    <>
      <div className="flex flex-col justify-content-center w-full">
        {usersPosts.map((post) => (
          <Post
            key={post.postId}
            username={post.username}
            userPost={post.imageUrl}
            caption={post.caption}
          />
        ))}
      </div>
    </>
  );
};

export default PostList;
