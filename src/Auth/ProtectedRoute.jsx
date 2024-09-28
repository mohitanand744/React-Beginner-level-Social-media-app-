import { Navigate } from "react-router-dom";
import useContextData from "../Custom/Hooks/useContextData";

// This component wraps protected routes and checks if the user is logged in
const ProtectedRoute = ({ children }) => {
  const { loginAccount } = useContextData();

  // If the user is not logged in, redirect to login page
  if (!loginAccount) {
    return <Navigate to="/login" replace />;
  }

  // If the user is logged in, allow access to the requested route
  return children;
};

export default ProtectedRoute;
