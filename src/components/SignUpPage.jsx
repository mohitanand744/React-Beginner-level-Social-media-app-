import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import useContextData from "../Custom/Hooks/useContextData";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [createdCredentials, setCreatedCredentials] = useState({
    name: "",
    email: "",
    password: "",
    userId: Date.now() + Math.floor(Math.random() * 10000),
  });
  const [passwordStrength, setPasswordStrength] = useState("");
  const [usernameError, setUsernameError] = useState(""); // Add state for username validation
  const { dispatch } = useContextData();
  const navigate = useNavigate();

  const handlePasswordShow = () => {
    setShowPassword(!showPassword);
  };

  // Function to handle input changes and check password strength
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // If the input is for the username
    if (name === "name") {
      // Check if the username contains spaces
      if (/\s/.test(value)) {
        setUsernameError("Username must not contain spaces.");
      } else {
        setUsernameError(""); // Clear error if no spaces are found
      }
    }

    // Set the credentials only if no spaces in the username
    setCreatedCredentials({
      ...createdCredentials,
      [name]: name === "name" ? value.replace(/\s/g, "") : value, // Remove spaces if any
    });

    if (name === "password") {
      // Password strength criteria
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumbers = /\d/.test(value);
      const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(value);
      const isLongEnough = value.length >= 8;

      // Update password strength
      if (
        isLongEnough &&
        hasUpperCase &&
        hasLowerCase &&
        hasNumbers &&
        hasSpecialChars
      ) {
        setPasswordStrength("strong");
      } else if (hasUpperCase && hasLowerCase && hasNumbers) {
        setPasswordStrength("medium");
      } else {
        setPasswordStrength("weak");
      }
    }
  };

  // Function to handle form submission
  const handleOnSubmit = (e) => {
    e.preventDefault();

    // Check if username contains spaces before submitting
    if (/\s/.test(createdCredentials.name)) {
      setUsernameError("Username must not contain spaces.");
      return;
    }

    dispatch({ type: "CREATE_ACCOUNT", payload: createdCredentials });

    // Clear the form
    setCreatedCredentials({
      name: "",
      email: "",
      password: "",
    });
    setPasswordStrength("");
    setUsernameError(""); // Clear username error

    navigate("/login");

    return;
  };

  return (
    <div className="login w-full h-[100vh] bg-[#84d6ff] grid place-content-center">
      <form
        onSubmit={handleOnSubmit}
        className="w-[45rem] md:w-[50rem] text-xl md:text-3xl font-semibold backdrop-blur-xl shadow-[#7b9aff] shadow-inner relative rounded-3xl p-5 h-[70rem] flex items-center flex-col justify-center"
      >
        <div className="logo top-16 flex flex-col items-center gap-6 absolute">
          <img width={70} src="/socialmediaLogo.png" alt="" />

          <h2 className="mb-4 font-sofadi text-center text-3xl md:text-4xl text-white mt-6">
            Welcome <br /> Create Your MIMO Account 🙂
          </h2>
        </div>
        <div className="form-group w-full mb-4 mt-72">
          <label htmlFor="name" className="mb-2 text-white">
            UserName
          </label>
          <input
            type="text"
            className="form-control rounded-xl w-full text-xl md:text-2xl py-3 px-4"
            id="name"
            name="name"
            value={createdCredentials.name}
            onChange={handleInputChange}
            placeholder="Enter Username (e.g., mohitanand123)"
            required
            spellCheck={false}
          />
          {usernameError && (
            <p className="text-red-500 text-xl md:text-2xl mt-1">
              {usernameError}
            </p>
          )}
        </div>
        <div className="form-group w-full mb-4">
          <label htmlFor="email" className="mb-2 text-white">
            Email
          </label>
          <input
            type="email"
            className="form-control rounded-xl w-full text-xl md:text-2xl py-3 px-4"
            id="email"
            name="email"
            value={createdCredentials.email}
            onChange={handleInputChange}
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group w-full position-relative mb-4">
          <label htmlFor="password" className="mb-2 text-white">
            Create Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            className="form-control rounded-xl w-full text-xl md:text-2xl py-3 px-4"
            id="password"
            name="password"
            value={createdCredentials.password}
            onChange={handleInputChange}
            placeholder="Password"
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

        {/* Password strength indicator */}
        <div className="w-full mb-4 text-white text-2xl">
          {createdCredentials.password && (
            <p>
              Password strength:{" "}
              <span
                className={`font-bold ${
                  passwordStrength === "strong"
                    ? "text-green-500"
                    : passwordStrength === "medium"
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                {passwordStrength}
              </span>
            </p>
          )}
        </div>

        <button
          type="submit"
          className={`btn btn-primary bg-[#1e47ff] rounded-xl border-none outline-none shadow-lg w-full text-xl md:text-2xl font-bold py-3 ${
            passwordStrength !== "strong" ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={passwordStrength !== "strong"}
        >
          Create Account
        </button>
        <p className="text-left w-full mt-3 text-xl font-medium md:text-2xl text-white">
          If you already have an account?{" "}
          <span className="text-blue-600">
            <Link to="/login">Login</Link>
          </span>
        </p>

        <div className="loginSocial mt-4 flex gap-3">
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

export default SignUpPage;
