import React from "react";
import useContextData from "../../Custom/Hooks/useContextData";
import { Link } from "react-router-dom";

const RightSidebar = ({ hight, margin, borderRadius }) => {
  const { users, loginUser } = useContextData();

  return (
    <div
      className={`rightSidebar_container border-4 border-[#84d6ff] border-r-0 ${hight} ${borderRadius} ${margin} overflow-x-hidden overflow-y-scroll fixed right-0 top-36`}
    >
      <div className="flex items-center justify-between mt-5 cursor-pointer userProfile">
        <Link to={`/profile/${loginUser.username}`}>
          <div className="flex items-center gap-3">
            <img
              className="object-cover w-20 h-20 border rounded-full"
              src={loginUser?.profileImage}
              alt=""
            />

            <div className="txt">
              <div className="text-2xl font-bold userName">
                {loginUser?.username}
              </div>
              <p className="text-lg font-normal text-gray-600 capitalize">
                Walking on custom captions
              </p>
            </div>
          </div>
        </Link>

        <div className="text-xl font-bold text-blue-700 cursor-pointer follow">
          Switch
        </div>
      </div>

      <div className="flex justify-between mt-16 mb-5 text-2xl font-bold text-gray-600">
        <p>Suggested for you</p>
        <a href="/">see all</a>
      </div>

      <div className="flex flex-col gap-10">
        {users.map((user, i) => (
          <div key={i}>
            <div className="flex items-center justify-between cursor-pointer userProfile">
              <Link to={`/profile/${user.username}`}>
                <div className="flex items-center gap-3">
                  <img
                    className="object-cover w-20 h-20 rounded-full "
                    src={user.profileImage}
                    alt=""
                  />
                  <div className="txt">
                    <div className="text-2xl font-bold userName">
                      {user.username}
                    </div>
                    <p className="text-xl font-bold text-gray-600">
                      Suggested for you
                    </p>
                  </div>
                </div>
              </Link>

              <div className="text-xl font-bold text-blue-700 cursor-pointer follow">
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
