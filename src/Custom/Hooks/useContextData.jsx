import { useContext } from "react";
import { ManageState } from "../../context/Contexts";

const useContextData = () => {
  const { setting, users, usersPosts, loginAccount } = useContext(ManageState);
  return {
    setting,
    users,
    usersPosts,
    loginAccount,
  };
};

export default useContextData;
