export const ReducerFun = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      const { password, gmail } = action.payload;

      const createdUsers =
        JSON.parse(localStorage.getItem("createdUsers")) || [];

      const userData = createdUsers.find(
        (user) => user.email === gmail && user.password === password
      );

      if (userData) {
        localStorage.setItem("loginAccount", JSON.stringify(true));

        localStorage.setItem(
          "userCredentials",
          JSON.stringify({ password, gmail })
        );

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
          loginError: "",
        };
      } else {
        localStorage.setItem("loginAccount", JSON.stringify(false));
        return {
          ...state,
          loginAccount: false,
          loginError: "Invalid credentials.",
        };
      }
    }

    case "CREATE_ACCOUNT": {
      const updatedUser = action.payload;

      // Log the user being created for debugging
      console.log("Creating user:", updatedUser);

      // Get createdUsers from localStorage or initialize as an empty array
      const createdUsers =
        JSON.parse(localStorage.getItem("createdUsers")) || [];

      // Log the existing users for debugging
      console.log("Existing users:", createdUsers);

      // Check if the email already exists
      const emailExists = createdUsers.some(
        (user) => user.email === updatedUser.email
      );

      // Log if the email exists
      console.log("Email exists:", emailExists);

      if (emailExists) {
        // If email exists, prevent account creation and set signup error

        console.log("Error");

        return {
          ...state,
          signupError: true, // Email already exists, set signup error
          signupSuccess: false, // Clear signup success flag
        };
      } else {
        // If email doesn't exist, create a new user and store in localStorage
        const newUsers = [...createdUsers, updatedUser];

        // Log the updated users array for debugging
        console.log("New users list:", newUsers);

        localStorage.setItem("createdUsers", JSON.stringify(newUsers)); // Save updated users to localStorage

        return {
          ...state,
          signupError: false, // Clear any signup error
          signupSuccess: true, // Set signup success flag
        };
      }
    }

    case "LOG_OUT":
      localStorage.removeItem("loginAccount");

      return {
        ...state,
        loginAccount: false,
        loginUser: {},
      };

    case "UPLOAD_PROFILE":
      const profile = action.payload;

      localStorage.setItem("profile", JSON.stringify(profile));

      return {
        ...state,
        loginAccount: true,
        loginUser: {
          ...state.loginUser,
          profileImage: action.payload || "/noProfile.png",
        },
        loginError: "",
      };

    case "UPLOAD_PROFILE_COVER":
      const profileCover = action.payload;

      localStorage.setItem("profileCover", JSON.stringify(profileCover));

      return {
        ...state,
        loginAccount: true,
        loginUser: {
          ...state.loginUser,
          profileCover: action.payload || "/defaultCover.png",
        },
        loginError: "",
      };

    default:
      return state;
  }
};
