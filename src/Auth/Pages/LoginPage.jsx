import React, { useEffect, useState } from "react";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import useContextData from "../../Custom/Hooks/useContextData";

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

  const handlePasswordShow = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login w-full h-[100vh] grid place-content-center z-50">
      <form
        className="w-[45rem] md:w-[50rem] text-xl md:text-3xl font-semibold backdrop-blur-xl shadow-[#7b9aff]  shadow-inner relative rounded-3xl p-5 h-[68rem] flex items-center flex-col justify-center"
        onSubmit={handleData} // Correctly handling form submission here
      >
        <div className="absolute flex flex-col items-center gap-6 logo top-16">
          <img width={70} src="/socialmediaLogo.png" alt="" />

          <h2 className="mt-4 text-3xl text-center text-white font-sofadi md:text-4xl">
            Welcome back 🙂 <br />
            Please log in to continue...
          </h2>
          {loginError && (
            <p className="text-2xl text-center text-red-600 capitalize">
              {loginError} <br />
              Try again or sign up for a new account.
            </p>
          )}
        </div>
        <div className="w-full mb-4 form-group mt-96">
          <label htmlFor="gmail" className="mb-2 text-white">
            Email address
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 text-xl form-control rounded-xl md:text-2xl"
            id="gmail"
            name="gmail"
            value={credentials.gmail}
            placeholder="Enter email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full form-group position-relative">
          <label htmlFor="password" className="mb-2 text-white">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            className="w-full px-4 py-3 text-xl form-control rounded-xl md:text-2xl"
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
        <div className="w-full my-2">
          <p className="text-2xl font-normal text-blue-600">
            Forgotten password?
          </p>
        </div>
        <button
          type="submit" // Correctly handle form submit on the button
          className="btn btn-primary bg-[#1e47ff] rounded-xl border-none outline-none shadow-lg mt-4 w-full text-xl md:text-2xl font-bold py-3"
        >
          Login
        </button>
        <p className="w-full mt-3 text-xl font-medium text-left text-white md:text-2xl">
          Don't have an account?{" "}
          <span className="text-blue-600">
            <Link to={"/signUp"}>Create account</Link>
          </span>
        </p>

        <div className="flex gap-3 mt-16 loginSocial">
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
