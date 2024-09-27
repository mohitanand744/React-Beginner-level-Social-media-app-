import { IoIosNotifications } from "react-icons/io";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import useContextData from "../Custom/Hooks/useContextData";

export default function Header() {
  const { userSearchInput, setUserSearchInput, toggleFun, togglesetting } =
    useContextData();

  const onInputChange = (e) => {
    setUserSearchInput(e.target.value);
  };

  return (
    <>
      <div className="header_Container fixed top-0 w-full z-50">
        <div className="logo_Container">
          <Link to={"/"}>
            <img src="/socialmediaLogo.png" alt="" />
          </Link>
        </div>
        <div className="search_container">
          <input
            type="text"
            value={userSearchInput}
            onChange={onInputChange}
            placeholder="Search for friends..."
          />
        </div>
        <div className="notification">
          <IoIosNotifications className="notification" />
        </div>

        <div className="profile_Details 2xl:hidden">
          <img
            onClick={toggleFun}
            className="w-[7rem] active:rotate-[360deg] transition-all duration-700 ease-linear"
            src="/setting.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
