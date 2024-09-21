export const ReducerFun = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      const { password, gmail } = action.payload;
      console.log(password);

      const userAc = JSON.parse(localStorage.getItem("newUser"));

      // Find the user with matching email and password

      if (userAc.password === password && userAc.email === gmail) {
        // Save the login state to localStorage
        localStorage.setItem("loginAccount", JSON.stringify(true));

        const { name, userId } = userAc;

        return {
          ...state,
          loginAccount: true,
          loginUser: {
            userId: userId,
            username: name,
            profileImage: null,
            posts: [],
          },
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

      const { name, userId } = updatedUsers;

      return {
        ...state,
        loginUser: {
          userId: userId,
          username: name,
          profileImage: null,
          posts: [],
        },
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
