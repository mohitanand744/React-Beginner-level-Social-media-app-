import React, { useContext } from "react";
import { ManageState } from "../../context/Contexts";

const useContextData = () => {
  const { users, usersPosts } = useContext(ManageState);
  return {
    users,
    usersPosts,
  };
};

export default useContextData;
