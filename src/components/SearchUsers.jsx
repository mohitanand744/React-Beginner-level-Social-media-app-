import React from "react";
import useContextData from "../Custom/Hooks/useContextData";
import { useNavigate } from "react-router-dom";

const SearchUsers = () => {
  const { users, userSearchInput, setUserSearchInput } = useContextData();
  const navigate = useNavigate();

  let user;

  if (userSearchInput) {
    user = users.filter((user) =>
      user.username.toLowerCase().includes(userSearchInput.toLowerCase())
    );
  }

  const userProfileVisit = (user) => {
    navigate(`/profile/${user}`);
    setUserSearchInput("");
  };

  return (
    <div
      className={`searchResult flex flex-col ${
        userSearchInput ? "top-36" : "-top-36"
      } gap-4 right-0 w-full sm:w-[55rem] rounded-b-3xl bg-white py-10 px-40 z-[1] text-4xl fixed transition-all duration-300 ease-in-out`}
    >
      {user?.map((user, i) => (
        <div
          key={i}
          className="flex gap-3 cursor-pointer user"
          onClick={() => userProfileVisit(user?.username)}
        >
          <div className="profileImage">
            <img
              className=" w-[5rem] h-[5rem] rounded-full object-cover "
              src={user.profileImage}
              alt=""
            />
          </div>
          <div className="txt ">
            <p className="text-3xl font-bold">{user.username}</p>
            <p className="text-xl font-medium text-gray-500">
              Bio | 1.4K followers
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchUsers;
