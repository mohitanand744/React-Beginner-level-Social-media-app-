import { Navigate } from "react-router-dom";
import useContextData from "../Custom/Hooks/useContextData";

// This component wraps public routes (e.g., login, sign-up)
// and checks if the user is already logged in.
const PublicRoute = ({ children }) => {
  const { loginAccount } = useContextData();

  // If the user is logged in, redirect to the home page
  if (loginAccount) {
    return <Navigate to="/" replace />;
  }

  // If the user is not logged in, render the requested public page (login, sign-up)
  return children;
};

export default PublicRoute;
