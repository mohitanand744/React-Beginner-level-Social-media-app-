import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Profile from "../components/Profile";
import Layout from "../Layout";
import App from "../App";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<App />} />
      <Route path="profile/:id" element={<Profile />} />
      <Route
        path="*"
        element={
          <center>
            <h1 className="mt-16 text-6xl font-bold text-red-600">Error 404</h1>
          </center>
        }
      />
    </Route>
  )
);
