import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./components/screen/Navbar";
import Home from "./components/screen/Home";
import AboutUs from "./components/screen/AboutUs";
import Contact from "./components/screen/Contact";
import Signup from "./components/SignUp";
import LoginUser from "./components/LoginUser";
import Task from "./components/screen/Task";
import Edit from "./components/Edit";
import PendingTask from "./components/screen/PendingTask";
import CompletedTask from "./components/screen/CompletedTask";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/task",
      element: (
        <>
          <Navbar />
          <Task />
        </>
      ),
    },

    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact />
        </>
      ),
    },
    {
      path: "/edittask/:id",
      element: (
        <>
          <Navbar />
          <Edit></Edit>
        </>
      ),
    },

    {
      path: "/aboutus",
      element: (
        <>
          <Navbar />
          <AboutUs />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <Navbar />
          <Signup />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar />
          <LoginUser />
        </>
      ),
    },
    {
      path: "/pending",
      element: (
        <>
          <Navbar />
          <PendingTask></PendingTask>
        </>
      ),
    },
    {
      path: "/completed",
      element: (
        <>
          <Navbar />
          <CompletedTask></CompletedTask>
        </>
      ),
    },
   
   
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
