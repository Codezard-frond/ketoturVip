// App.jsx
import React, { useEffect } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import TravelDetail from "./pages/TravelDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { useGlobalContext } from "./hooks/useGlobalContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import Sayohat from "./pages/Sayohat";
import SotibOlish from "./pages/SotibOlish";

function App() {
  const { user, dispatch, isAuthReady } = useGlobalContext();

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        { index: true, element: <Home /> },
        {
          path: "travel/:id",
          element: <TravelDetail />,
        },
        {
          path: "/sayohat/:id",
          element: <Sayohat />,
        },
        {
          path: "/admin",
          element: <Admin />,
        },
        {
          path: "/sotibolish",
          element: <SotibOlish />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.displayName && user?.photoURL) {
        dispatch({ type: "LOGIN", payload: user });
      }
      dispatch({ type: "AUTH_READY", payload: user });
    });
  }, []);

  return <>{isAuthReady ? <RouterProvider router={routes} /> : "loading"}</>;
}

export default App;
