import { useContext } from "react";
import { ManageState } from "../../context/Contexts";

const useContextData = () => {
  const {
    dispatch,
    togglesetting,
    users,
    usersPosts,
    loginAccount,
    error,
    loginUser,
    toggleFun,
  } = useContext(ManageState);
  return {
    togglesetting,
    users,
    usersPosts,
    loginAccount,
    dispatch,
    error,
    loginUser,
    toggleFun,
  };
};

export default useContextData;
