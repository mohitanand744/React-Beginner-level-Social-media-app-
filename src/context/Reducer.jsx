export const ReducerFun = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      const { password, gmail } = action.payload.credentials;

      const userAc = JSON.parse(localStorage.getItem("newUser")) || [
        state.loginUser,
      ];

      console.log(userAc);

      // Find the user with matching email and password
      const loginAccData = userAc.find(
        (user) => user.password === password && user.email === gmail
      );

      // Check if user exists
      if (loginAccData) {
        // Save the login state to localStorage
        localStorage.setItem("loginAccount", JSON.stringify(true));

        return {
          ...state,
          loginAccount: true,
          loginUser: loginAccData,
          error: false,
        };
      } else {
        // If no matching user, return error state
        return {
          ...state,
          loginAccount: false,
          error: true,
        };
      }

      break;

    case "CREATE_ACCOUNT":
      const updatedUsers = action.payload;

      localStorage.setItem("newUser", JSON.stringify(updatedUsers));
      console.log(state.loginUser);
      return {
        ...state,
        loginUser: JSON.parse(localStorage.getItem("newUser")),
        loginAccount: true,
        error: false,
      };

      break;

    case "LOGIN_FAILS":
      return {
        ...state,
        loginAccount: false,
        error: true,
      };
      break;
    case "LOG_OUT":
      localStorage.removeItem("loginAccount");
      localStorage.removeItem("newUser");

      return {
        ...state,
        loginAccount: false,
        loginUser: {},
      };

    default:
      return state;
  }
};
