import React, { useEffect, useState } from "react";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import useContextData from "../Custom/Hooks/useContextData";

const LoginPage = () => {
  const { dispatch, loginError, loginAccount } = useContextData();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    gmail: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleData = (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_SUCCESS", payload: credentials });
  };

  useEffect(() => {
    if (loginError === "") {
      navigate("/"); // Redirect to home if no login error
    }
  }, [loginError]);

  const handlePasswordShow = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login w-full h-[100vh] grid place-content-center z-50">
      <form
        className="w-[45rem] md:w-[50rem] text-xl md:text-3xl font-semibold backdrop-blur-xl shadow-[#7b9aff]  shadow-inner relative rounded-3xl p-5 h-[68rem] flex items-center flex-col justify-center"
        onSubmit={handleData} // Correctly handling form submission here
      >
        <div className="logo top-16 flex flex-col items-center gap-6 absolute">
          <img width={70} src="/socialmediaLogo.png" alt="" />

          <h2 className="font-sofadi text-center text-3xl md:text-4xl text-white mt-4">
            Welcome back 🙂 <br />
            Please log in to continue...
          </h2>
          {loginError && (
            <p className="text-red-600 text-center text-2xl capitalize">
              {loginError} <br />
              Try again or sign up for a new account.
            </p>
          )}
        </div>
        <div className="form-group w-full mb-4 mt-96">
          <label htmlFor="gmail" className="mb-2 text-white">
            Email address
          </label>
          <input
            type="email"
            className="form-control  rounded-xl  w-full text-xl md:text-2xl py-3 px-4"
            id="gmail"
            name="gmail"
            value={credentials.gmail}
            placeholder="Enter email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group w-full position-relative">
          <label htmlFor="password" className="mb-2 text-white">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            className="form-control  rounded-xl  w-full text-xl md:text-2xl py-3 px-4"
            id="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
          />

          {showPassword ? (
            <BsEyeSlash
              className="text-dark position-absolute right-6 top-[3.3rem] md:top-16 active:scale-[0.80] transition-all duration-300 ease-in-out text-3xl"
              onClick={handlePasswordShow}
            />
          ) : (
            <BsEye
              className="text-dark position-absolute right-6 top-[3.3rem] md:top-16 active:scale-[0.80] transition-all duration-300 ease-in-out text-3xl"
              onClick={handlePasswordShow}
            />
          )}
        </div>
        <div className="my-2 w-full">
          <p className="text-blue-600 font-normal text-2xl">
            Forgotten password?
          </p>
        </div>
        <button
          type="submit" // Correctly handle form submit on the button
          className="btn btn-primary bg-[#1e47ff] rounded-xl border-none outline-none shadow-lg mt-4 w-full text-xl md:text-2xl font-bold py-3"
        >
          Login
        </button>
        <p className="text-left w-full mt-3 text-xl md:text-2xl font-medium text-white">
          Don't have an account?{" "}
          <span className="text-blue-600">
            <Link to={"/signUp"}>Create account</Link>
          </span>
        </p>

        <div className="loginSocial mt-16 flex gap-3">
          <img
            width="35"
            height="35"
            className="cursor-pointer"
            src="https://img.icons8.com/color/48/google-logo.png"
            alt="google-logo"
          />
          <img
            width="35"
            height="35"
            className="cursor-pointer"
            src="https://img.icons8.com/color/48/facebook-new.png"
            alt="facebook-new"
          />
          <img
            width="35"
            height="35"
            className="cursor-pointer"
            src="https://img.icons8.com/fluency/50/instagram-new.png"
            alt="instagram-new"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
