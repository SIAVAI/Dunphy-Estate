import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import Error from "./Components/Error";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import FAQ from "./Components/FAQ";
import Details from "./Components/Details";
import Login from "./Components/Auth/Login";
import Reg from "./Components/Auth/Reg";
import FirebaseProvider from "./Components/Auth/FirebaseProvider";
import PrivateRoute from "./Components/Auth/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/property/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: () => fetch("../properties.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Reg></Reg>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>
);
