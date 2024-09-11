import { useContext } from "react";
import { ManageState } from "../../context/Contexts";

const useContextData = () => {
  const { togglesetting, users, usersPosts, loginAccount } =
    useContext(ManageState);
  return {
    togglesetting,
    users,
    usersPosts,
    loginAccount,
  };
};

export default useContextData;
