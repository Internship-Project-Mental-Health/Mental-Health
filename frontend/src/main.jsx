import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HealthproductPage from './pages/HealthproductPage.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Products",
    element: <HealthproductPage />,
  },
]);
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
  // <StrictMode>
  //   <App />
  // </StrictMode>,
)
