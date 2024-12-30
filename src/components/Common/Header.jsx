import { IoIosNotifications } from "react-icons/io";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import useContextData from "../../Custom/Hooks/useContextData";

export default function Header() {
  const {
    userSearchInput,
    setUserSearchInput,
    toggleFun,
    togglesetting,
    setViewPost,
  } = useContextData();

  const onInputChange = (e) => {
    setUserSearchInput(e.target.value);
  };

  const removeViewPost = () => {
    setViewPost(null);
  };

  return (
    <>
      <div className="fixed top-0 z-50 w-full header_Container">
        <div className="logo_Container">
          <Link to={"/"} onClick={removeViewPost}>
            <img className="w-64" src="/socialmediaLogo.png" alt="" />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden search_container sm:block">
            <input
              type="text"
              value={userSearchInput}
              onChange={onInputChange}
              placeholder="Search for friends..."
            />
          </div>
          <div className="notification w-[5rem] active:scale-50 transition-all duration-700 ease-linear h-[5rem] flex justify-center items-center rounded-2xl bg-white cursor-pointer">
            <IoIosNotifications className="text-[3rem] notification" />
          </div>
          <div className="w-[5rem] sm:hidden active:scale-50 transition-all duration-700 ease-linear h-[5rem] flex justify-center items-center rounded-2xl bg-white cursor-pointer">
            <img
              className="w-[3rem] "
              src="https://img.icons8.com/sf-black/50/search.png"
              alt="search"
            />
          </div>

          <div className=" profile_Details 2xl:hidden">
            <img
              onClick={toggleFun}
              className="w-[6.3rem] md:w-[7rem] active:scale-50 transition-all duration-700 ease-linear"
              src="/setting.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
