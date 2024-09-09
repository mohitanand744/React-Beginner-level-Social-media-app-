import React from "react";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const path = location.pathname.substring(1).replace("/", " ");

  return (
    <center>
      <p className="text-5xl mt-80 fw-bold text-indigo-600 font-bold">{path}</p>
    </center>
  );
};

export default Profile;
