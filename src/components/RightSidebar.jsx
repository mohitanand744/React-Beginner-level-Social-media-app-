import React from "react";
import useContextData from "../Custom/Hooks/useContextData";
import { Link } from "react-router-dom";

const RightSidebar = ({ hight, margin, borderRadius }) => {
  const { users, loginUser } = useContextData();

  return (
    <div
      className={`rightSidebar_container border-4 border-[#84d6ff] border-r-0 ${hight} ${borderRadius} ${margin} overflow-x-hidden overflow-y-scroll fixed right-0 top-36`}
    >
      <div className="userProfile cursor-pointer mt-5 flex justify-between items-center">
        <Link to={`/profile/mohitanand123`}>
          <div className="flex items-center gap-3">
            <img
              className="w-20 h-20 object-cover rounded-full border"
              src={loginUser?.profileImage}
              alt=""
            />

            <div className="txt">
              <div className="userName text-2xl font-bold">
                {loginUser?.username}
              </div>
              <p className="font-normal text-gray-600  text-lg capitalize">
                Walking on custom captions
              </p>
            </div>
          </div>
        </Link>

        <div className="font-bold text-blue-700 text-xl cursor-pointer follow">
          Switch
        </div>
      </div>

      <div className="mb-5 mt-16 flex justify-between font-bold text-2xl text-gray-600">
        <p>Suggested for you</p>
        <a href="/">see all</a>
      </div>

      <div className="flex flex-col gap-10">
        {users.map((user, i) => (
          <div key={i}>
            <div className="userProfile cursor-pointer flex justify-between items-center">
              <Link to={`/profile/${user.username}`}>
                <div className="flex items-center gap-3">
                  <img
                    className="w-20 h-20 object-cover rounded-full "
                    src={user.profileImage}
                    alt=""
                  />
                  <div className="txt">
                    <div className="userName text-2xl font-bold">
                      {user.username}
                    </div>
                    <p className="font-bold text-xl text-gray-600">
                      Suggested for you
                    </p>
                  </div>
                </div>
              </Link>

              <div className="font-bold text-blue-700 text-xl cursor-pointer follow">
                Follow
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;
