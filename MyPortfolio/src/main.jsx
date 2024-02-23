import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/body/Body.jsx";
import About from "./components/about/About.jsx";
import Project from "./components/projects/Project.jsx";
import Achievement from "./components/achievement/Achievement.jsx";
import Contact from "./components/contact/Contact.jsx";

const show = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/achievements",
        element: <Achievement />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

show.render(<RouterProvider router={appRouter} />);
