export const ReducerFun = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        users,
        usersPosts,
        loginAccount: action.payload.user,
        error: false,
      };
      break;
    case "LOGIN_FAILS":
      return {
        users,
        usersPosts,
        loginAccount: false,
        error: true,
      };
      break;

    default:
      return state;
  }
};
