import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import About from './pages/About.jsx';
import Plans from './pages/Plans.jsx';
import Contact from './pages/Contact.jsx';
import { Edit } from './pages/Edit.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Plans",
    element: <Plans />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/test",
    element: <Edit />,
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);