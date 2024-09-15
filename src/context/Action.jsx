export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: {
    user,
  },
});

export const LoginFails = (err) => ({
  type: "LOGIN_FAILS",
  payload: {
    err,
  },
});
