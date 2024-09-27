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
    viewPost,
    setViewPost,
    loginError,
    signupError,
    signupSuccess,
    userSearchInput,
    setUserSearchInput,
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
    viewPost,
    setViewPost,
    loginError,
    signupError,
    signupSuccess,
    setUserSearchInput,
    userSearchInput,
  };
};

export default useContextData;
