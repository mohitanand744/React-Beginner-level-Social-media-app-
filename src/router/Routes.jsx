import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Profile from "../components/Profile";
import Layout from "../Layout";
import App from "../App";
import LoginPage from "../components/LoginPage";
import SignUpPage from "../components/SignUpPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<App />} />
      <Route path="profile/:username" element={<Profile />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signUp" element={<SignUpPage />} />
      <Route
        path="*"
        element={
          <center>
            <h1 className="mt-80 text-6xl font-bold text-red-600">Error 404</h1>
          </center>
        }
      />
    </Route>
  )
);
