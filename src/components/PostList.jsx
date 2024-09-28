import React, { useEffect, useState } from "react";
import useContextData from "../Custom/Hooks/useContextData";
import Post from "./Post";

const PostList = () => {
  const { users } = useContextData();
  const [randomPosts, setRandomPosts] = useState([]);

  // ! Fisher-Yates Algorithm  to shuffle an array.

  const shuffleUsers = (users) => {
    for (let i = users.length - 1; i > 0; i--) {
      //* Here we are creating a random index
      const rIndex = Math.floor(Math.random() * (i + 1));
      //* Swap Users
      [users[i], users[rIndex]] = [users[rIndex], users[i]];
    }

    return users;
  };

  useEffect(() => {
    //* Function to select a random post from each user in random order

    const getRandomPosts = () => {
      const shuffleUser = shuffleUsers([...users]);

      return shuffleUser.map((user) => {
        const randomIndex = Math.floor(Math.random() * user.posts.length);

        const post = user.posts[randomIndex];

        return {
          username: user.username,
          profileImage: user.profileImage,
          post: {
            imageUrl: post.imageUrl,
            caption: post.caption,
            likes: post.likes,
            timestamp: post.timestamp,
          },
        };
      });
    };

    setRandomPosts(getRandomPosts());
  }, []);

  return (
    <>
      <div className="flex flex-col justify-content-center w-full mb-[12rem] sm:mb-0">
        {randomPosts.map((post, i) => (
          <Post
            key={i}
            username={post.username}
            profile={post.profileImage}
            userPost={post.post.imageUrl}
            caption={post.post.caption}
            likes={post.post.likes}
            comments={post.post.comments}
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
