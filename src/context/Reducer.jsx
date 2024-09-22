export const ReducerFun = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      const { password, gmail } = action.payload;
      const userAc = JSON.parse(localStorage.getItem("newUser"));

      if (userAc && userAc.password === password && userAc.email === gmail) {
        // Save the login state to localStorage
        localStorage.setItem("loginAccount", JSON.stringify(true));

        const { name, userId } = userAc;

        return {
          ...state,
          loginAccount: true,
          loginUser: {
            userId: userId,
            username: name,
            profileImage: "/noProfile.png",
            posts: [],
          },
          error: false,
        };
      } else {
        const createdUsers =
          JSON.parse(localStorage.getItem("createdUsers")) || [];

        const userData = createdUsers.find(
          (user) => user.email === gmail && user.password === password
        );

        if (userData) {
          localStorage.setItem("loginAccount", JSON.stringify(true));
          const { name, userId } = userData;

          return {
            ...state,
            loginAccount: true,
            loginUser: {
              userId: userId,
              username: name,
              profileImage: "/noProfile.png",
              posts: [],
            },
            error: false,
          };
        } else {
          localStorage.setItem("loginAccount", JSON.stringify(false));
          return {
            ...state,
            loginAccount: false,
            error: true,
          };
        }
      }
    }

    case "CREATE_ACCOUNT": {
      const updatedUsers = action.payload;

      localStorage.setItem("newUser", JSON.stringify(updatedUsers));

      // Fetch created users, append the new one, and store it
      const existingUsers =
        JSON.parse(localStorage.getItem("createdUsers")) || [];
      const newUsersList = [...existingUsers, updatedUsers];
      localStorage.setItem("createdUsers", JSON.stringify(newUsersList));

      const { name, userId } = updatedUsers;

      return {
        ...state,
        loginUser: {
          userId: userId,
          username: name,
          profileImage: "/noProfile.png",
          posts: [],
        },
        loginAccount: true,
        error: false,
      };
    }

    case "LOGIN_FAILS":
      return {
        ...state,
        loginAccount: false,
        error: true,
      };

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
