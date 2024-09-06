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
import Services from './pages/Services/Services';
import Skills from './pages/Skills/Skills';

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
        path: "/services",
        element: <Services></Services>
      },
      {
        path: "/projects",
        element: <Projects></Projects>
      },
      {
        path: "/skills",
        element: <Skills></Skills>
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
