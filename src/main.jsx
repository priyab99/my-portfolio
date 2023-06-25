import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './pages/Home/Home/Home';
import Resume from './pages/Resume/Resume';
import Projects from './pages/Projects/Projects';
import AboutMe from './pages/About Me/AboutMe';
import ContactMe from './pages/Contact Me/ContactMe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/resume",
        element: <Resume></Resume>
      },
      {
        path: "/projects",
        element: <Projects></Projects>
      },
      {
        path: "/aboutme",
        element: <AboutMe></AboutMe>
      },
      {
        path: "/contactme",
        element: <ContactMe></ContactMe>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
