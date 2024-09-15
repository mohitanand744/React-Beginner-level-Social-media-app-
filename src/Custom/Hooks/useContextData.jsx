import { useContext } from "react";
import { ManageState } from "../../context/Contexts";

const useContextData = () => {
  const { dispatch, togglesetting, users, usersPosts, loginAccount } =
    useContext(ManageState);
  return {
    togglesetting,
    users,
    usersPosts,
    loginAccount,
    dispatch,
  };
};

export default useContextData;
