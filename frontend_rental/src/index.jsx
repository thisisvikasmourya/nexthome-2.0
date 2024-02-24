import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import {
  About,
  Home,
  Contact,
  SignIn,
  SignUp,
  Dashboard,
  CreateProperty,
  Profile,
  Help,
  FavouriteList,
} from "./components/index";

import { store } from "./app/store";
import { Provider } from "react-redux";

// import PrivateRoute from "./Routes/PrivateRoutes";
// import { AppProvider } from "./context/AppContext";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="dashboard/profile" element={<Dashboard />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<SignIn />} />
      <Route path="register" element={<SignUp />} />
      <Route path="dashboard/add-property" element={<CreateProperty />} />
      <Route path="dashboard/profile" element={<Profile />} />
      <Route path="dashboard/favourite" element={<Help />} />
      <Route path="dashboard/help" element={<FavouriteList />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Provider store={store}>

      <RouterProvider router={ router } />
      </Provider>
  </React.StrictMode>
);
