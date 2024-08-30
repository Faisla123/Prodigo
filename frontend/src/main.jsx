import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { Route, RouterProvider, createRoutesFromElements } from "react-router";
// import { createBrowserRouter, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
//auth
import Login from "./components/Login.jsx";
import Signin from "./components/signup.jsx";
import User from "./components/user.jsx";
import Service from "./components/service.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Switch>
//       <Route path="/" element={<App />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/sign-up" element={<Signin />} />
//     </Switch>
//   )
// );
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Signin />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/service",
    element: <Service />,
  },
]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Provider store={store}>
//       {" "}
//       {/* Make sure you have a store */}
//       <RouterProvider router={router} />
//     </Provider>
//   </StrictMode>
// );
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
