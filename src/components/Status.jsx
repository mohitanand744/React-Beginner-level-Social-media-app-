import useContextData from "../Custom/Hooks/useContextData";

const Status = () => {
  const { users } = useContextData();

  return (
    <div className="status_container md:border-4 md:border-[#84d6ff] lg:rounded-3xl w-full xl:w-[80rem]">
      <div className="story my-story  cursor-pointer">
        <div className="story_img">
          <img
            src="https://media.licdn.com/dms/image/D4E03AQF_RrI-r8V9MA/profile-displayphoto-shrink_800_800/0/1705977291292?e=1726704000&v=beta&t=yik1OIfIn47We1ThM-g3cPE4VmMwLHsJ4ebA2MvjsJY"
            alt=""
          />
        </div>
        <p className="StatusUserName">mohitanand123</p>
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
