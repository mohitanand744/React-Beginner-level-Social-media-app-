import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../Layout";
import App from "../App";
import LoginPage from "../components/LoginPage";
import SignUpPage from "../components/SignUpPage";
import React, { Suspense } from "react";
import ProtectedRoute from "./../Auth/ProtectedRoute";
const Profile = React.lazy(() => import("../components/Profile"));
import PublicRoute from "./../Auth/PublicRoute";
import Loading from "../components/Loading";

const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        {/* If user is authenticated, show App (Home page) else redirect to /login */}
        <Route
          index
          element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          }
        />

        {/* If user is authenticated, show Profile page else redirect to /login */}
        <Route
          path="profile/:usersname"
          element={
            <ProtectedRoute>
              <Suspense fallback={<Loading />}>
                <Profile />
              </Suspense>
            </ProtectedRoute>
          }
        />

        {/* Public routes */}
        <Route
          path="login"
          element={
            <PublicRoute>
              {" "}
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="signUp"
          element={
            <PublicRoute>
              <SignUpPage />
            </PublicRoute>
          }
        />

        {/* Handle unknown routes */}
        <Route
          path="*"
          element={
            <center>
              <h1 className="mt-80 text-6xl font-bold text-red-600">
                Error 404
              </h1>
            </center>
          }
        />
      </Route>
    )
  );

  return router;
};

export default Routes;
