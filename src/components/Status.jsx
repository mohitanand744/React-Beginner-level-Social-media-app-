import useContextData from "../Custom/Hooks/useContextData";

const Status = () => {
  const { users, loginUser } = useContextData();

  return (
    <div className="status_container md:border-4 md:border-[#84d6ff] lg:rounded-3xl w-full xl:w-[80rem]">
      <div className="story my-story  cursor-pointer">
        <div className="story_img">
          <img src={loginUser?.profileImage} alt="" />
        </div>
        <p className="StatusUserName">{loginUser?.username}</p>
      </div>

      {users.map((user, i) => {
        return (
          <div key={i} className="story  cursor-pointer">
            <div className="story_img">
              <img src={user.profileImage} alt="" />
            </div>
            <p className="StatusUserName font-semibold">{user.username}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Status;
